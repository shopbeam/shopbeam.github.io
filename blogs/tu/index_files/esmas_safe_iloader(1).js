// esmas_safe_iloader v. 2013.05.07.11.54

function loadjsfile(filename, filetype){
	if (filetype == "js"){ //if filename is a external JavaScript file
		var fileref = document.createElement('script')
		fileref.setAttribute("type", "text/javascript")
		fileref.setAttribute("src", filename)
	}
	if (typeof fileref != "undefined")
	document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjsfile("http://i2.esmas.com/encuestas/public/js/esmas_safe_iloader.js", "js")