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
        name: 'Facebook_Exit',
        reportingId: '12087463',
        url: 'https://www.facebook.com/UsWeekly',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Privacy_Exit',
        reportingId: '12087583',
        url: 'http://www.usmagazine.com/services/privacypolicy',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Twitter_Exit',
        reportingId: '12087343',
        url: 'https://twitter.com/usweekly',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
      {
        name: 'How_Use_Email_Close_Click',
        reportingId: '12087223',
        videoData: null
      },
      {
        name: 'How_Use_Email_Open_Click',
        reportingId: '12087823',
        videoData: null
      },
      {
        name: 'Submit_Succed',
        reportingId: '12087703',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: 'US_Weekly_Newsletter_Pop_Up.swf',
        url: '/ads/richmedia/studio/24242153/24241470_20130710134054382_US_Weekly_Newsletter_Pop_Up.swf',
        isVideo: false
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '24334161',
        artworkType: 'FLASH',
        displayType: 'FLOAT',
        width: '622',
        height: '322',
        servingPath: '/ads/richmedia/studio/24242153/24241470_20130710134056894_US_Weekly_Newsletter_Pop_Up_parent.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'transparent',
          sdkVersion: '2.3.1'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: {
          position: {
            top: 50,
            left: 50,
            topUnit: '%',
            leftUnit: '%',
            lockVerticalScroll: false,
            lockHorizontalScroll: false
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

  var creativeId = '35902791463';
  var adId = '0';
  var templateVersion = '200_24';
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
