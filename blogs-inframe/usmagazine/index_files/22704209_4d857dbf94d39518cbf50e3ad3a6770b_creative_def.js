(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: true,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'Main Exit',
        reportingId: '9539503',
        url: 'http://www.facebook.com/UsWeekly',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'likeus.swf',
        url: '/ads/richmedia/studio/22684821/22685435_1352210485106_likeus.swf',
        isVideo: false
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '22696101',
        artworkType: 'FLASH',
        displayType: 'FLOAT',
        width: '300',
        height: '250',
        servingPath: '/ads/richmedia/studio/22684821/22685435_1352133685643_Main.swf',
        zIndex: '1000000',
        customCss: 'top:350px',
        flashArtworkTypeData: {
          actionscriptVersion: '2',
          wmode: 'transparent',
          sdkVersion: '2.3.0'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: {
          position: {
            top: 50,
            left: 50,
            topUnit: '%',
            leftUnit: '%',
            lockVerticalScroll: true,
            lockHorizontalScroll: true
          },
          hasStartTime: true,
          startTime: 0,
          hasEndTime: false,
          hasAutoEnd: false,
          endTime: -1,
          closeOnMouseout: false,
          alignment: ''
        },
        expandingDisplayTypeData: null,
        pageSettings:{
          hideDropdowns: false,
          hideIframes: false,
          hideObjects: false,
          updateZIndex: true
        },
        layoutsConfig: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'floating';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '29282977543';
  var adId = '0';
  var templateVersion = '200_22';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
