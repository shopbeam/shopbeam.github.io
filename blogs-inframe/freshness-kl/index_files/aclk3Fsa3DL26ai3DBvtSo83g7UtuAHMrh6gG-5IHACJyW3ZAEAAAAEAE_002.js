document.write('');

(function() {
  var csiStart = (+new Date);
  var DEBUG = ''.toLowerCase() == 'true';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var publisherSideFilePath = '';
  if(publisherSideFilePath == '') {
    publisherSideFilePath = '/doubleclick/DARTIframe.html';
  } else if (publisherSideFilePath.charAt(publisherSideFilePath.length - 1) == '/') {
    publisherSideFilePath += 'DARTIframe.html';
  }
  var bookingTimeMetaData = {
  };

  var runtimeMetaData = {
  };

  var exitUrlPatternMacroValues = {
  };
  var macroParser = function (macroName, value) {
    return (value.indexOf(macroName) < 0) ? value : '';
  };
  var adServerData = {
    eventReportingUrl: 'http://ad.doubleclick.net/activity;src=3368141;met=1;v=1;pid=99975742;aid=274979692;ko=0;cid=55411697;rid=55295939;rv=2;',
    clickUrl: 'http://ad.doubleclick.net/click%3Bh%3Dv8/3e62/17/1ee/%2a/s%3B274979692%3B0-0%3B0%3B99975742%3B4307-300/250%3B55411697/55295939/2%3B%3B%7Esscs%3D%3fhttp://adclick.g.doubleclick.net/aclk%253Fsa%253DL%2526ai%253DBvtSo83g7UtuAHMrh6gG-5IHACJyW3ZAEAAAAEAEgADgAWNTplZdiYMnGqYvApNgPggEXY2EtcHViLTM2MTcxNDM1NTUzMDc4NDSyARR3d3cuZnJlc2huZXNzbWFnLmNvbboBCzAwZ2ZwX2ltYWdlyAEJ2gE3aHR0cDovL3d3dy5mcmVzaG5lc3NtYWcuY29tLzIwMTMvMDkvMTYvc3VwcmEtc2t5dG9wLWl2L5gCoB_AAgLgAgDqAh41MjAyL2Ntbl9mcmVzaG5lc3NtYWcvc25lYWtlcnP4AoHSHpAD4AOYA-ADqAMB4AQBoAYg%2526num%253D0%2526sig%253DAOD64_1xA6uZJFFUPBThwuM9bxZGnrFWBQ%2526client%253Dca-pub-3617143555307844%2526adurl%253D',
    clickUrlTimesToEscape: '0',
    impressionUrl: 'http://ad.doubleclick.net/imp;v7;j;274979692;0-0;0;99975742;300/250;55411697/55295939/2;;~cs=j%3f',
    geoData: 'ct=US&st=NY&ac=212&zp=10021&bw=3&dma=3&city=13275',
    siteName: 'N5295.278940.COMPLEXMEDIA',
    siteId: '1205572',
    adId: '274979692',
    buyId: '7724900',
    creativeId: '55411697',
    placementId: '99975742',
    advertiserId: '3368141',
    keyValueOrdinal: '0',
    renderingVersion: '2',
    renderingId: '55295939',
    randomNumber: '839903',
    dynamicData: '',
    stringReportingUrl: 'http://ad.doubleclick.net/activity;src=3368141;stragg=1;v=1;pid=99975742;aid=274979692;ko=0;cid=55411697;rid=55295939;rv=2;rn=839903;',
    urlToGetKeywordsFor: '%LivePreviewSiteUrl',
    bookingTimeMetaData: bookingTimeMetaData,
    exitSuffix: macroParser('exit_suffix', '%exit_suffix!'), // XFA GA Beacon.
    generatedAdSlot: false,
    exitUrlPatternMacroValues: exitUrlPatternMacroValues,
    activeViewClkStr: macroParser('eav', '%eav!'),
    tag: {
      adContainerElementId: macroParser('ad_container_id', ''),
      hideObjects: '',
      top: '',
      left: '',
      zIndex: '',
      duration: '',
      wmode: '',
      preferHtml5Artwork: '' == 'true',
      adSenseKeywords: '',
      adSenseLatitude: '',
      adSenseLongitude: '',
      publisherSideFilePath: publisherSideFilePath,
      runtimeMetaData: runtimeMetaData,
      lidarEnabled: false,
      expansionMode: '',
      renderFloatInplace: ''.toLowerCase() == 'true'
    }
  };

  var mediaServer = location.protocol == 'https:' ?
       'https://s0.2mdn.net' :
       'http://s0.2mdn.net';

  var backupImageUrl = '/ads/richmedia/studio/22907883/24488185_20130801144951290_motion_300x250.jpg';
  if (!/^https?:/.test(backupImageUrl)) {
    backupImageUrl = mediaServer + backupImageUrl;
  }
  var backupImage = {
    exitUrl: 'http://ad.doubleclick.net/activity;src%3D3368141%3Bmet%3D1%3Bv%3D1%3Bpid%3D99975742%3Baid%3D274979692%3Bko%3D0%3Bcid%3D55411697%3Brid%3D55295939%3Brv%3D2%3Bcs%3Ds%3Beid1%3D1235801%3Becn1%3D1%3Betm1%3D0%3B_dc_redir%3Durl%3fhttp://ad.doubleclick.net/click%3Bh%3Dv8/3e62/17/1ee/%2a/s%3B274979692%3B0-0%3B0%3B99975742%3B4307-300/250%3B55411697/55295939/2%3B%3B%7Esscs%3D%3fhttp://adclick.g.doubleclick.net/aclk%253Fsa%253DL%2526ai%253DBvtSo83g7UtuAHMrh6gG-5IHACJyW3ZAEAAAAEAEgADgAWNTplZdiYMnGqYvApNgPggEXY2EtcHViLTM2MTcxNDM1NTUzMDc4NDSyARR3d3cuZnJlc2huZXNzbWFnLmNvbboBCzAwZ2ZwX2ltYWdlyAEJ2gE3aHR0cDovL3d3dy5mcmVzaG5lc3NtYWcuY29tLzIwMTMvMDkvMTYvc3VwcmEtc2t5dG9wLWl2L5gCoB_AAgLgAgDqAh41MjAyL2Ntbl9mcmVzaG5lc3NtYWcvc25lYWtlcnP4AoHSHpAD4AOYA-ADqAMB4AQBoAYg%2526num%253D0%2526sig%253DAOD64_1xA6uZJFFUPBThwuM9bxZGnrFWBQ%2526client%253Dca-pub-3617143555307844%2526adurl%253Dhttps://plus.google.com/u/0/photos/whatsnew',
    target: '_blank',
    imageUrl: backupImageUrl,
    width: '300',
    height: '250',
    backupDisplayActivityUrl: [
      adServerData.eventReportingUrl,
      '&timestamp=', (+new Date), ';',
      'eid1=9;ecn1=1;etm1=0;'].join(''),
    thirdPartyBackupImpressionUrl: ''
  };

  var versionPrefix = DEBUG ? 'db_' : '';
  var templateVersion = '200_28';
  var renderingScriptPath = '/879366';
  var rendererDisplayType = '';
  rendererDisplayType += 'flash_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;
  var renderingLibrary = renderingScriptPath + '/' + rendererName + '_rendering_lib_' +
      versionPrefix + templateVersion + '.js';
  // Adserver has a logic to detect media files and prepend host name.
  if (!/^https?:/.test(renderingLibrary)) {
    renderingLibrary = mediaServer + renderingLibrary;
  }

  var adCreativeDefinitions = {};

  var creativeId = '1379017515813';
  var adId = adCreativeDefinitions[adServerData.adId] ? adServerData.adId : 0;
  // The unique creative is identified by combination of creative id and ad id.
  // When the same creative(same creative id and same ad id) is served on the page more
  // than once then they will share the creative definition yet there will be
  // multiple instances of 'adResponses'.s
  var creativeKey = [creativeId, adId].join('_');
  var creativeDef = adCreativeDefinitions[adServerData.adId] ?
      adCreativeDefinitions[adServerData.adId] :
      'http://s0.2mdn.net/3368141/plcr_2670806_0_1379017515753.js';
  if(!/^https?:/.test(creativeDef)) {
    creativeDef = mediaServer + creativeDef;
  }
  studioObjects['creativeCount'] = studioObjects['creativeCount'] || 0;
  var creativeDto = {
    id: creativeId,
    uniqueId: creativeId + '_' + studioObjects['creativeCount']++,
    templateVersion: templateVersion,
    adServerData: adServerData,
    isPreviewEnvironment: '%PreviewMode' == 'true',
    hasFlashAsset: true,
    hasHtmlAsset: false,
    flashVersion: '10.3',
    httpsMediaServer: 'https://s0.2mdn.net',
    httpMediaServer: 'http://s0.2mdn.net',
    renderingScriptPath: renderingScriptPath,
    renderingLibrary: renderingLibrary,
    rendererName: rendererName,
    creativeDefinitionUrl: creativeDef,
    creativeKey: creativeKey,
    thirdPartyImpressionUrls: [''],
    thirdPartyArtworkImpressionUrl: '',
    breakoutToTop: false,
    dimensions: {
      width: '300px',
      height: '250px'
    },
    csiStart: csiStart,
    csiAdRespTime: csiStart - (parseFloat('') || 0),
    csiEvents: {}
  };

  var inGdnIframe = window['IN_ADSENSE_IFRAME'] || false;
  var inYahooSecureIframe = window.Y && Y.SandBox && Y.SandBox.vendor;
  var inWinLiveIframe = false;
  try {
    inWinLiveIframe = !!window.$WLXRmAd;
  } catch(e) {}
  var inSafeFrame = window.$sf && window.$sf.ext;
  var isMsnAjaxIframe = (typeof(inDapMgrIf) != 'undefined' && inDapMgrIf);
  var inStudioPreviewIframe = creativeDto.isPreviewEnvironment && !window.iframeRequest;
  var breakoutInpage = ''.toLowerCase() == 'true';
  var allowBreakout = ''.toLowerCase() != 'false';
  var shouldBreakout = (((false ||
                          false) &&
                         !inGdnIframe &&
                         !inYahooSecureIframe &&
                         !inSafeFrame &&
                         !inWinLiveIframe &&
                         allowBreakout) ||
                        (true && breakoutInpage)) &&
                       self != top &&
                       !inStudioPreviewIframe;

  if (adServerData.tag.adContainerElementId == '' &&
      (true || false ||
         adServerData.tag.renderFloatInplace)) {
    var containerId = ['creative', creativeDto.uniqueId].join('_');
    var divHtml = ['<div id="', containerId, '"></div>'].join('');
    document.write(divHtml);
    adServerData.tag.adContainerElementId = containerId;
    adServerData.generatedAdSlot = true;
  }
  var creatives = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creative = creatives[creativeKey] = creatives[creativeKey] || {};
  var adResponses = creative['adResponses'] = creative['adResponses'] || [];
  creative['shouldBreakout'] = creative['shouldBreakout'] || shouldBreakout;
  var iframeBusterLibrary = renderingScriptPath + '/iframe_buster_' +
      versionPrefix + templateVersion + '.js';
  if(!/^https?:/.test(iframeBusterLibrary)) {
    iframeBusterLibrary = mediaServer + iframeBusterLibrary;
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  adResponses.push({
    creativeDto: creativeDto,
    backupImage: backupImage
  });
  document.write('<scr' + 'ipt type="text/javascript" src="https://www.gstatic.com/doubleclick/studio/innovation/multisurvey/multisurvey.js?(IT1@https://ad.doubleclick.net/activity;src\x3d2542116;type\x3dgoogl837;cat\x3dgb2cd589;ord\x3d1?)(ST1@http://c.betrad.com/surly.js?;ad_wxh\x3d300x250;coid\x3d1783;nid\x3d16433;)"></scr' + 'ipt>');
  if (shouldBreakout) {
    if (versionedLibrary['breakout']) {
      versionedLibrary['breakout']();
    } else if (!versionedLibrary['breakoutLoading']) {
      versionedLibrary['breakoutLoading'] = true;
      document.write('<scr' + 'ipt type="text/javascript" src="' + iframeBusterLibrary + '" async="async"></scr' + 'ipt>');
    }
  } else if (typedLibrary['bootstrap'] && creative['creativeDefinition']) {
    typedLibrary['bootstrap']();
  } else {
    if (!creative['definitionLoading']) {
      creative['definitionLoading'] = true;
      creativeDto.csiEvents['pb'] = (+new Date);
      document.write('<scr' + 'ipt type="text/javascript" src="' + creativeDto.creativeDefinitionUrl + '" async="async"></scr' + 'ipt>');
    }
    if (!typedLibrary['loading']) {
      typedLibrary['loading'] = true;
      creativeDto.csiEvents['gb'] = (+new Date);
      document.write('<scr' + 'ipt type="text/javascript" src="' + renderingLibrary + '" async="async"></scr' + 'ipt>');
    }
  }
  if (isMsnAjaxIframe) {
    window.setTimeout("document.close();", 1000);
  }
})();

document.write('\n<noscript>\n  <a target=\"_blank\" href=\"http://ad.doubleclick.net/activity;src%3D3368141%3Bmet%3D1%3Bv%3D1%3Bpid%3D99975742%3Baid%3D274979692%3Bko%3D0%3Bcid%3D55411697%3Brid%3D55295939%3Brv%3D2%3Bcs%3Ds%3Beid1%3D1235801%3Becn1%3D1%3Betm1%3D0%3B_dc_redir%3Durl%3fhttp://ad.doubleclick.net/click%3Bh%3Dv8/3e62/17/1ee/%2a/s%3B274979692%3B0-0%3B0%3B99975742%3B4307-300/250%3B55411697/55295939/2%3B%3B%7Esscs%3D%3fhttp://adclick.g.doubleclick.net/aclk%253Fsa%253DL%2526ai%253DBvtSo83g7UtuAHMrh6gG-5IHACJyW3ZAEAAAAEAEgADgAWNTplZdiYMnGqYvApNgPggEXY2EtcHViLTM2MTcxNDM1NTUzMDc4NDSyARR3d3cuZnJlc2huZXNzbWFnLmNvbboBCzAwZ2ZwX2ltYWdlyAEJ2gE3aHR0cDovL3d3dy5mcmVzaG5lc3NtYWcuY29tLzIwMTMvMDkvMTYvc3VwcmEtc2t5dG9wLWl2L5gCoB_AAgLgAgDqAh41MjAyL2Ntbl9mcmVzaG5lc3NtYWcvc25lYWtlcnP4AoHSHpAD4AOYA-ADqAMB4AQBoAYg%2526num%253D0%2526sig%253DAOD64_1xA6uZJFFUPBThwuM9bxZGnrFWBQ%2526client%253Dca-pub-3617143555307844%2526adurl%253Dhttps://plus.google.com/u/0/photos/whatsnew\">\n    <img border=\"0\" alt=\"\" src=\"//s0.2mdn.net/ads/richmedia/studio/22907883/24488185_20130801144951290_motion_300x250.jpg\"\n        width=\"300\" height=\"250\" />\n  </a>\n  <img width=\"0px\" height=\"0px\" style=\"visibility:hidden\" border=\"0\" alt=\"\"\n       src=\"http://ad.doubleclick.net/activity;src=3368141;met=1;v=1;pid=99975742;aid=274979692;ko=0;cid=55411697;rid=55295939;rv=2;&timestamp=839903;eid1=9;ecn1=1;etm1=0;\" />\n  <img width=\"0px\" height=\"0px\" style=\"visibility:hidden\" border=\"0\" alt=\"\"\n      src=\"\" />\n  <img width=\"0px\" height=\"0px\" style=\"visibility:hidden\" border=\"0\" alt=\"\"\n      src=\"\" />\n</noscript>\n');
