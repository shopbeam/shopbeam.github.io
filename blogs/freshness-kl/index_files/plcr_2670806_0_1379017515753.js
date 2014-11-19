(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '2',
      INTERACTION_TIMER: '3',
      INTERACTIVE_IMPRESSION: '4',
      FULL_SCREEN_VIDEO_PLAYS: '5',
      FULL_SCREEN_VIDEO_COMPLETES: '6',
      FULL_SCREEN_AVERAGE_VIEW_TIME: '7',
      MANUAL_CLOSE: '8',
      BACKUP_IMAGE_IMPRESSION: '9',
      EXPAND_TIMER: '10',
      VIDEO_PLAY: '11',
      VIDEO_VIEW_TIMER: '12',
      VIDEO_COMPLETE: '13',
      VIDEO_INTERACTION: '14',
      VIDEO_PAUSE: '15',
      VIDEO_MUTE: '16',
      VIDEO_REPLAY: '17',
      VIDEO_MIDPOINT: '18',
      FULL_SCREEN_VIDEO: '19',
      VIDEO_STOP: '20',
      VIDEO_UNMUTE: '21',
      FULL_SCREEN: '22',
      DYNAMIC_CREATIVE_IMPRESSION: '23',
      HTML5_CREATIVE_IMPRESSION: '25'
    },
    exitEvents: [
      {
        name: 'background exit',
        reportingId: '1235801',
        url: 'https://plus.google.com/u/0/photos/whatsnew',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'cta exit',
        reportingId: '1202939',
        url: 'https://plus.google.com/u/0/photos/whatsnew',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
      {
        name: 'clicked replay',
        reportingId: '1150471',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: 'main.swf',
        url: '/ads/richmedia/studio/22907883/24488185_20130801144656685_main.swf',
        isVideo: false
      },
      {
        name: 'motion_300x250.jpg',
        url: '/ads/richmedia/studio/22907883/24488185_20130801144951290_motion_300x250.jpg',
        isVideo: false
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '24516666',
        artworkType: 'FLASH',
        displayType: 'BANNER',
        width: '300',
        height: '250',
        servingPath: '/ads/richmedia/studio/22907883/24488185_20130801144942724_Google_300x250_shell.swf',
        zIndex: '0',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'opaque',
          sdkVersion: '2.3.1'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        pageSettings:null,
        layoutsConfig: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '1379017515813';
  var adId = '0';
  var templateVersion = '200_28';
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
