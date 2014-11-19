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
        name: 'exit: cooktops',
        reportingId: '1171253',
        url: 'http://www.kitchenaid.com/shop/major-appliances-1/cooktops-3/102020008/?WT.mc_id\x3dOLA|KAMajors13_HouseBeautiful|HouseBeautiful\x26WT.vr.rac_dc\x3dOLA\x26WT.vr.rac_pa\x3dDTAS|HouseBeautiful\x26WT.vr.rac_mp\x3dKAMajors13_HouseBeautiful\x26WT.vr.rac_ma\x3dHouseBeautiful\x26utm_campaign\x3dKAMajors13_HouseBeautiful\x26utm_source\x3dDTAS|HouseBeautiful\x26utm_medium\x3dbanner\x26utm_content\x3dHouseBeautiful',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'exit: default',
        reportingId: '1185188',
        url: 'http://www.kitchenaid.com/?WT.mc_id\x3dOLA|KAMajors13_HouseBeautiful|HouseBeautiful\x26WT.vr.rac_dc\x3dOLA\x26WT.vr.rac_pa\x3dDTAS|HouseBeautiful\x26WT.vr.rac_mp\x3dKAMajors13_HouseBeautiful\x26WT.vr.rac_ma\x3dHouseBeautiful\x26utm_campaign\x3dKAMajors13_HouseBeautiful\x26utm_source\x3dDTAS|HouseBeautiful\x26utm_medium\x3dbanner\x26utm_content\x3dHouseBeautiful',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'exit: dishwashers',
        reportingId: '1171255',
        url: 'http://www.kitchenaid.com/shop/major-appliances-1/dishwashers-3/102020014/?WT.mc_id\x3dOLA|KAMajors13_HouseBeautiful|HouseBeautiful\x26WT.vr.rac_dc\x3dOLA\x26WT.vr.rac_pa\x3dDTAS|HouseBeautiful\x26WT.vr.rac_mp\x3dKAMajors13_HouseBeautiful\x26WT.vr.rac_ma\x3dHouseBeautiful\x26utm_campaign\x3dKAMajors13_HouseBeautiful\x26utm_source\x3dDTAS|HouseBeautiful\x26utm_medium\x3dbanner\x26utm_content\x3dHouseBeautiful',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'exit: refrigerators',
        reportingId: '1171252',
        url: 'http://www.kitchenaid.com/shop/major-appliances-1/refrigerators-3/102020048/?WT.mc_id\x3dOLA|KAMajors13_HouseBeautiful|HouseBeautiful\x26WT.vr.rac_dc\x3dOLA\x26WT.vr.rac_pa\x3dDTAS|HouseBeautiful\x26WT.vr.rac_mp\x3dKAMajors13_HouseBeautiful\x26WT.vr.rac_ma\x3dHouseBeautiful\x26utm_campaign\x3dKAMajors13_HouseBeautiful\x26utm_source\x3dDTAS|HouseBeautiful\x26utm_medium\x3dbanner\x26utm_content\x3dHouseBeautiful',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'exit: wall_ovens',
        reportingId: '1171254',
        url: 'http://www.kitchenaid.com/shop/major-appliances-1/wall-ovens-3/102020003/?WT.mc_id\x3dOLA|KAMajors13_HouseBeautiful|HouseBeautiful\x26WT.vr.rac_dc\x3dOLA\x26WT.vr.rac_pa\x3dDTAS|HouseBeautiful\x26WT.vr.rac_mp\x3dKAMajors13_HouseBeautiful\x26WT.vr.rac_ma\x3dHouseBeautiful\x26utm_campaign\x3dKAMajors13_HouseBeautiful\x26utm_source\x3dDTAS|HouseBeautiful\x26utm_medium\x3dbanner\x26utm_content\x3dHouseBeautiful',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
      {
        name: 'panel_top Expansion',
        reportingId: '1194851',
        videoData: null
      }
    ],
    counterEvents: [
      {
        name: 'default exit',
        reportingId: '1161411',
        videoData: null
      },
      {
        name: 'nav: view appliances',
        reportingId: '1231507',
        videoData: null
      },
      {
        name: 'nav: watch video',
        reportingId: '1231498',
        videoData: null
      },
      {
        name: 'shop: cooktops',
        reportingId: '1160418',
        videoData: null
      },
      {
        name: 'shop: dishwashers',
        reportingId: '1160415',
        videoData: null
      },
      {
        name: 'shop: refrigerators',
        reportingId: '1160417',
        videoData: null
      },
      {
        name: 'shop: wall_ovens',
        reportingId: '1160414',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: 'WKB3MA27_KA_Majors_Suite w video_728x90_ROLLOVER.swf',
        url: '/ads/richmedia/studio/22565349/23676563_20130717121013713_WKB3MA27_KA_Majors_Suite w video_728x90_ROLLOVER.swf',
        isVideo: false
      },
      {
        name: 'WKB3MA27_KA_Majors_Suite w video_728x270_ROLLOVER.swf',
        url: '/ads/richmedia/studio/22565349/23676563_20130820171315538_WKB3MA27_KA_Majors_Suite w video_728x270_ROLLOVER.swf',
        isVideo: false
      },
      {
        name: 'WKB3MA27_KA_Majors_Suite w video_728x90_ROLLOVER.jpg',
        url: '/ads/richmedia/studio/22565349/23676563_20130717121005833_WKB3MA27_KA_Majors_Suite w video_728x90_ROLLOVER.jpg',
        isVideo: false
      }
    ],
    videoFiles: [
      {
        name: 'WHKA0007000H_338x190.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/82140ce381af4f53/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3526334229/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/433D5EA065DFD1C938628BD8D1416FA48642FFCA.9BC5BD1B1FF057E39C34711D0FD04614F281054E/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/82140ce381af4f53/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3526334229/sparams/id,itag,source,ratebypass,ip,ipbits,expire/key/ck2?auth\x3ddaEdHayaKcKcZbCc1bwdfaQczcocqbba3an-bsxEKv-x14qa-3rpq1pstk2KFpszRzjDs\x26aifp\x3dv001\x26slist\x3did/82140ce381af4f53/itag/15'
      }
    ],
    videoEntries: [
      {
        reportingIdentifier: 'video1',
        startMuted: false,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: 'WHKA0007000H_338x190.flv',
        mediumBandwidthVideo: 'WHKA0007000H_338x190.flv',
        highBandwidthVideo: 'WHKA0007000H_338x190.flv',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      }
    ],
    primaryAssets: [
      {
        id: '24388759',
        artworkType: 'FLASH',
        displayType: 'EXPANDING_BANNER',
        width: '728',
        height: '270',
        servingPath: '/ads/richmedia/studio/22565349/23676563_20130717121010203_WKB3MA27_KA_Majors_Suite w video_728x90_ROLLOVER_pol.swf',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: {
          actionscriptVersion: '3',
          wmode: 'transparent',
          sdkVersion: '2.3.1'
        },
        htmlArtworkTypeData: null,
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: {
          collapsedRect: {
            left: 0,
            top: 0,
            width: 728,
            height: 90
          },
          isPushdown: false,
          pushdownAnimationTime: 0,
          expansionMode: 'NORMAL'
        },
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
  var rendererFormat = 'expanding';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '1381886229517';
  var adId = '0';
  var templateVersion = '200_30';
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
