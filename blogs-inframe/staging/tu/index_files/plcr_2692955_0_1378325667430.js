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
        name: 'button_generic',
        reportingId: '1274045',
        url: 'http://es.tide.com/en-US/product/tide-laundry-detergent-pacs.jspx',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'colapsado_compra_ahora',
        reportingId: '1274042',
        url: 'http://es.tide.com/en-US/product/tide-laundry-detergent-pacs.jspx',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'expandido_compra_ahora',
        reportingId: '1274044',
        url: 'http://es.tide.com/en-US/product/tide-laundry-detergent-pacs.jspx',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
      {
        name: 'Panel1 Expansion',
        reportingId: '1076478',
        videoData: null
      },
      {
        name: 'video1:ViewTime',
        reportingId: '984352',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_VIEW_TIMER'
        }
      },
      {
        name: 'video2:ViewTime',
        reportingId: '984348',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_VIEW_TIMER'
        }
      }
    ],
    counterEvents: [
      {
        name: 'EXPAND_CLOSE',
        reportingId: '1274043',
        videoData: null
      },
      {
        name: 'EXPAND_OPEN',
        reportingId: '1274041',
        videoData: null
      },
      {
        name: 'colapsado_repetir',
        reportingId: '1274046',
        videoData: null
      },
      {
        name: 'expandido_repetir',
        reportingId: '1274047',
        videoData: null
      },
      {
        name: 'ver_legal',
        reportingId: '1274049',
        videoData: null
      },
      {
        name: 'ver_video_sonido',
        reportingId: '1274048',
        videoData: null
      },
      {
        name: 'video1:Complete',
        reportingId: '984347',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_COMPLETE'
        }
      },
      {
        name: 'video1:Interaction',
        reportingId: '984349',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_INTERACTION'
        }
      },
      {
        name: 'video1:MidPoint',
        reportingId: '984329',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_MIDPOINT'
        }
      },
      {
        name: 'video1:Mute',
        reportingId: '984350',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_MUTE'
        }
      },
      {
        name: 'video1:Pause',
        reportingId: '984342',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_PAUSE'
        }
      },
      {
        name: 'video1:Play',
        reportingId: '984344',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_PLAY'
        }
      },
      {
        name: 'video1:Replay',
        reportingId: '984331',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_REPLAY'
        }
      },
      {
        name: 'video1:Stop',
        reportingId: '984326',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_STOP'
        }
      },
      {
        name: 'video1:Unmute',
        reportingId: '984345',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video1',
          associatedStandardVideoEvent: 'VIDEO_UNMUTE'
        }
      },
      {
        name: 'video2:Complete',
        reportingId: '984330',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_COMPLETE'
        }
      },
      {
        name: 'video2:Interaction',
        reportingId: '984334',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_INTERACTION'
        }
      },
      {
        name: 'video2:MidPoint',
        reportingId: '984333',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_MIDPOINT'
        }
      },
      {
        name: 'video2:Mute',
        reportingId: '984336',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_MUTE'
        }
      },
      {
        name: 'video2:Pause',
        reportingId: '984332',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_PAUSE'
        }
      },
      {
        name: 'video2:Play',
        reportingId: '984323',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_PLAY'
        }
      },
      {
        name: 'video2:Replay',
        reportingId: '984324',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_REPLAY'
        }
      },
      {
        name: 'video2:Stop',
        reportingId: '984340',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_STOP'
        }
      },
      {
        name: 'video2:Unmute',
        reportingId: '984337',
        videoData: {
          associatedVideoEntryReportingIdentifier: 'video2',
          associatedStandardVideoEvent: 'VIDEO_UNMUTE'
        }
      }
    ],
    childFiles: [
      {
        name: '300x250_subchild.swf',
        url: '/ads/richmedia/studio/20792400/24744817_20130823230313452_300x250_subchild.swf',
        isVideo: false
      },
      {
        name: '500x250.swf',
        url: '/ads/richmedia/studio/20792400/24744817_20130823230318848_500x250.swf',
        isVideo: false
      },
      {
        name: 'OBAN_UHIMETideAmbosiaLVG_Pods_XXXX_300x250_13_1_RM.jpg',
        url: '/ads/richmedia/studio/20792400/24744817_20130823230255387_OBAN_UHIMETideAmbosiaLVG_Pods_XXXX_300x250_13_1_RM.jpg',
        isVideo: false
      }
    ],
    videoFiles: [
      {
        name: '300x250.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/bbc93f92b4647540/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3522773667/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/49D49431DD8DDE9062758D62974AD1BE125BCFBE.1E4A574EE8E318D10CBC3BA47221DB74D67A5F5C/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/bbc93f92b4647540/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3522773667/sparams/id,itag,source,ratebypass,ip,ipbits,expire/key/ck2?auth\x3ddaEclddcjataedVcec2agaAaLaHdZbNdzdl-bsj5sJ-x14qa-1uos4nvrn4JFqtBOAjHq\x26aifp\x3dv001\x26slist\x3did/bbc93f92b4647540/itag/15'
      },
      {
        name: '500x250.flv',
        url: 'http://gcdn.2mdn.net/videoplayback/id/d6d5114ada08e97a/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3522773667/sparams/id,itag,source,ratebypass,ip,ipbits,expire/signature/1E761F9D6F60A810AE1FC0120A60D14E64A84793.A3D971024C5FC2E1750BA3BD7B916E85B059343D/key/ck2/file/file.flv',
        isVideo: true,
        streamingUrl: 'rtmp://rmcdn.fg.2mdn.net/videoplayback/id/d6d5114ada08e97a/itag/15/source/doubleclick/ratebypass/yes/ip/0.0.0.0/ipbits/0/expire/3522773667/sparams/id,itag,source,ratebypass,ip,ipbits,expire/key/ck2?auth\x3ddaEaTa.dCciaSdRaoa3bDcra8bZcEagajaX-bsj5sJ-x14qa-5rnt3purn4FDqrCPDlIq\x26aifp\x3dv001\x26slist\x3did/d6d5114ada08e97a/itag/15'
      }
    ],
    videoEntries: [
      {
        reportingIdentifier: 'video1',
        startMuted: true,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: '300x250.flv',
        mediumBandwidthVideo: '300x250.flv',
        highBandwidthVideo: '300x250.flv',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      },
      {
        reportingIdentifier: 'video2',
        startMuted: false,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: '500x250.flv',
        mediumBandwidthVideo: '500x250.flv',
        highBandwidthVideo: '500x250.flv',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      }
    ],
    primaryAssets: [
      {
        id: '24745822',
        artworkType: 'FLASH',
        displayType: 'EXPANDING_BANNER',
        width: '500',
        height: '250',
        servingPath: '/ads/richmedia/studio/20792400/24744817_20130823230259895_OBAN_UHIMETideAmbosiaLVG_Pods_XXXX_300x250_13_1_RM.swf',
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
            left: 200,
            top: 0,
            width: 300,
            height: 250
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

  var creativeId = '1378325667218';
  var adId = '0';
  var templateVersion = '200_27';
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
