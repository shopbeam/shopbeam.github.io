Drupal.locale = { 'strings': {"":{"Wednesday":"Mi\u00e9rcoles","Monday":"Lunes","Thursday":"Jueves","Saturday":"S\u00e1bado","Tuesday":"Martes","Friday":"Viernes","Sunday":"Domingo","Prev":"Anterior","Next":"Siguiente","May":"Mayo","January":"Enero","February":"Febrero","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre","Please wait...":"Por favor espere..."}} };;
(function ($) {
  Drupal.behaviors.openCalais = {
    attach: function (context, settings) {

      $('.suggest-button').click(function(){
        ntitle = $('#edit-title').val();
        nbody = '';
        // collect up the fields for OpenCalais indexing
        $('#edit-field-image-alt-text-und-0-value, #edit-field-caption-und-0-value, #edit-field-description-und-0-value, #edit-field-image-alt-text-und-0-value, #edit-body-und-0-value').each(function(){
          if ($(this).val().length) nbody += ' ' + $(this).val();		
        });
        if (nbody.length >= 5) {
          $('.spinner').show();
          $.ajax({
            type: "POST",
            data: 'title='+ ntitle +'&body='+ nbody +'',
            url: "/ajax/peoplecalais", // hook_menu 
            success: function(html){
              if (html.length <= 5) $('#apiResults').html('No matches found. '); 
              // Store all results in temporary OpenCalais suggestion textarea
              $("#edit-opencalais-suggestions").val(html);
              setTags();
              $('.spinner').hide();
            }
          });
        } else {
          alert('Not enough text to index.');
        }
        return false;
      });	

      // Gets OpenCalais suggestions from textarea, line-by-line storing the tags into appropriate term-ref ActiveTags
      function setTags() {

        var lines = $('#edit-opencalais-suggestions').val().split('\n');
        var i = 0;
        // reset suggestions and results for each API return
        $('#apiSuggestions').html('All Suggestions: ').hide();
        $('#apiResults').html('Added: ').hide();
        $.each(lines, function(){ 
          i = i + 1;
          if (this.length) {
            var splTag = this.split('|'); 
            var tag = splTag[0]; 
            var tid = splTag[1]; 
            var vid = splTag[2];

            // if the tag isn't new, empty the user input and set the tag to null
            var foundin = $('.at-term-text:contains('+tag+')').text(); //console.log(foundin.length);
            if (foundin.length > 0) {
                // don't re-add existing ActiveTags
                $('#apiResults').html('<span class="newtag ' + i + '">' + tag+'</span> already listed. '); 
            } else if (foundin.length == 0) {
              if (tid == 'suggestion') { 
                $('#apiSuggestions').show();
                // Display all suggestions returned from OpenCalais
                $('#apiSuggestions').append('<span class="sugtag ' + i + '">' + tag+'</span> ');
              } else {
                $('#apiResults').show();
                // Only add images that exist in taxonomy to term-ref ActiveTags
                $('#edit-field-taxonomy-'+vid+'-und-term-entry').val(tag);
                $('#edit-field-taxonomy-'+vid+'-und-add-button').trigger('click');
                $('#apiResults').append('<span class="newtag ' + i + '">' + tag+'</span> ');
              }
            }
            // show added term, then dissolve
            $('#apiResults').delay(3000).fadeOut(500);
          }
        });
      };	
    }
  };
}(jQuery));;
