function dv_rolloutManager(handlersDefsArray, baseHandler) {
    this.handle = function () {
        var errorsArr = [];

        var handler = chooseEvaluationHandler(handlersDefsArray);
        if (handler) {
            var errorObj = handleSpecificHandler(handler);
            if (errorObj === null)
                return errorsArr;
            else {
                handler.onFailure();
                errorsArr.push(errorObj);
            }
        }

        var errorObjHandler = handleSpecificHandler(baseHandler);
        if (errorObjHandler) {
            errorObjHandler['dvp_isLostImp'] = 1;
            errorsArr.push(errorObjHandler);
        }
        return errorsArr;
    }

    function handleSpecificHandler(handler) {
        var url;
        var errorObj = null;

        try {
            url = handler.createRequest();
            if (url) {
                if (!handler.sendRequest(url))
                    errorObj = createAndGetError('sendRequest failed.', url, handler.getVersion(), handler.getVersionParamName(), handler.dv_script);
            }
            else
                errorObj = createAndGetError('createRequest failed.', url, handler.getVersion(), handler.getVersionParamName(), handler.dv_script);
        }
        catch (e) {
            errorObj = createAndGetError(e.name + ': ' + e.message, url, handler.getVersion(), handler.getVersionParamName(), (handler ? handler.dv_script : null));
        }

        return errorObj;
    }

    function createAndGetError(error, url, ver, versionParamName, dv_script) {
        var errorObj = {};
        errorObj[versionParamName] = ver;
        errorObj['dvp_jsErrMsg'] = encodeURIComponent(error);
        if (dv_script && dv_script.parentElement && dv_script.parentElement.tagName && dv_script.parentElement.tagName == 'HEAD')
            errorObj['dvp_isOnHead'] = '1';
        if (url)
            errorObj['dvp_jsErrUrl'] = url;
        return errorObj;
    }

    function chooseEvaluationHandler(handlersArray) {
        var rand = Math.random() * 100;
        for (var i = 0; i < handlersArray.length; i++) {
            if (rand >= handlersArray[i].minRate && rand < handlersArray[i].maxRate) {
                if (handlersArray[i].handler.isApplicable())
                    return handlersArray[i].handler;
                else
                    break;
            }
        }
        return null;
    }    
}

function dv_GetParam(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_Contains(array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function dv_GetDynamicParams(url) {
    try {
        var regex = new RegExp("[\\?&](dvp_[^&]*=[^&#]*)", "gi");
        var dvParams = regex.exec(url);

        var results = new Array();
        while (dvParams != null) {
            results.push(dvParams[1]);
            dvParams = regex.exec(url);
        }
        return results;
    }
    catch (e) {
        return [];
    }
}

function dv_createIframe() {
    var iframe;
    if (document.createElement && (iframe = document.createElement('iframe'))) {
        iframe.name = iframe.id = 'iframe_' + Math.floor((Math.random() + "") * 1000000000000);
        iframe.width = 0;
        iframe.height = 0;
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
    }

    return iframe;
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function dv_SendErrorImp(serverUrl, errorsArr) {

    for (var j = 0; j < errorsArr.length; j++) {
        var errorObj = errorsArr[j];
        var errorImp = dv_CreateAndGetErrorImp(serverUrl, errorObj);
        dv_sendImgImp(errorImp);
    }
}

function dv_CreateAndGetErrorImp(serverUrl, errorObj) {
    var errorQueryString = '';
    for (key in errorObj) {
        if (errorObj.hasOwnProperty(key)) {
            if (key.indexOf('dvp_jsErrUrl') == -1) {
                errorQueryString += '&' + key + '=' + errorObj[key];
            }
            else {
                var params = ['ctx', 'cmp', 'plc', 'sid'];
                for (var i = 0; i < params.length; i++) {
                    var pvalue = dv_GetParam(errorObj[key], params[i]);
                    if (pvalue) {
                        errorQueryString += '&dvp_js' + params[i] + '=' + pvalue;
                    }
                }
            }
        }
    }

    var errorImp = window._dv_win.location.protocol + '//' + serverUrl + errorQueryString;
    return errorImp;
}

function dv_sendImgImp(url) {
    (new Image()).src = url;
}

function dv_sendScriptRequest(url) {
    document.write('<scr' + 'ipt type="text/javascript" src="' + url + '"></scr' + 'ipt>');
}

function dv_getPropSafe(obj, propName) {
    try {
        if (obj)
            return obj[propName];
    } catch (e) { }
}

function dvBsType() {
    var that = this;
    this.t2tEventDataZombie = {};

    this.processT2TEvent = function (data, tag) {
        try {
            if (tag.ServerPublicDns) {
                data.timeStampCollection.push({"beginProcessT2TEvent" : getCurrentTime()});
                data.timeStampCollection.push({'beginVisitCallback' : tag.beginVisitCallbackTS});
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;

                if (!tag.uniquePageViewId) {
                    tag.uniquePageViewId = data.uniquePageViewId;
                }

                tpsServerUrl += '&dvp_upvid=' + tag.uniquePageViewId;
                tpsServerUrl += '&dvp_numFrames=' + data.totalIframeCount;
                tpsServerUrl += '&dvp_numt2t=' + data.totalT2TiframeCount;
                tpsServerUrl += '&dvp_frameScanDuration=' + data.scanAllFramesDuration;
                tpsServerUrl += '&dvp_scene=' + tag.adServingScenario;
                tpsServerUrl += '&dvp_ist2twin=' + (data.isWinner ? '1' : '0');
                tpsServerUrl += '&dvp_numTags=' + Object.keys($dvbs.tags).length;
                tpsServerUrl += '&dvp_isInSample=' + data.isInSample;
                tpsServerUrl += (data.wasZombie)?'&dvp_wasZombie=1':'&dvp_wasZombie=0';
                tpsServerUrl += '&dvp_ts_t2tCreatedOn=' + data.creationTime;
                if(data.timeStampCollection)
                {
                    if(window._dv_win.t2tTimestampData)
                    {
                        for(var tsI = 0; tsI < window._dv_win.t2tTimestampData.length; tsI++)
                        {
                            data.timeStampCollection.push(window._dv_win.t2tTimestampData[tsI]);
                        }
                    }

                    for(var i = 0; i< data.timeStampCollection.length;i++)
                    {
                        var item = data.timeStampCollection[i];
                        for(var propName in item)
                        {
                            if(item.hasOwnProperty(propName))
                            {
                                tpsServerUrl += '&dvp_ts_' + propName + '=' + item[propName];
                            }
                        }
                    }
                }
                $dvbs.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
            }
        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tProcess=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch (ex) { }
        }
    };

    this.processTagToTagCollision = function (collision, tag) {
        var i;
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        var additions = [
            '&dvp_collisionReasons=' + collision.reasonBitFlag,
            '&dvp_ts_reporterDvTagCreated=' + collision.thisTag.dvTagCreatedTS,
            '&dvp_ts_reporterVisitJSMessagePosted=' + collision.thisTag.visitJSPostMessageTS,
            '&dvp_ts_reporterReceivedByT2T=' + collision.thisTag.receivedByT2TTS,
            '&dvp_ts_collisionPostedFromT2T=' + collision.postedFromT2TTS,
            '&dvp_ts_collisionReceivedByCommon=' + collision.commonRecievedTS,
            '&dvp_collisionTypeId=' + collision.allReasonsForTagBitFlag
        ];
        tpsServerUrl += additions.join("");

        for (i = 0; i < collision.reasons.length; i++){
            var reason = collision.reasons[i];
            tpsServerUrl += '&dvp_' + reason + "MS=" + collision[reason+"MS"];
        }

        if(tag.uniquePageViewId){
            tpsServerUrl +=  '&dvp_upvid='+tag.uniquePageViewId;
        }
        $dvbs.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    var messageEventListener = function (event) {
        try {
            var timeCalled = getCurrentTime();
            var data = window.JSON.parse(event.data);
            if(!data.action){
                data = window.JSON.parse(data);
            }
            if(data.timeStampCollection)
            {
                data.timeStampCollection.push({messageEventListenerCalled:timeCalled});
            }
            var myUID;
            var visitJSHasBeenCalledForThisTag = false;
            if ($dvbs.tags) {
                for (var uid in $dvbs.tags) {
                    if ($dvbs.tags.hasOwnProperty(uid) && $dvbs.tags[uid] && $dvbs.tags[uid].t2tIframeId === data.iFrameId) {
                        myUID = uid;
                        visitJSHasBeenCalledForThisTag = true;
                        break;
                    }
                }
            }

            switch(data.action){
            case 'uniquePageViewIdDetermination' :
                if(visitJSHasBeenCalledForThisTag){
                    $dvbs.processT2TEvent(data, $dvbs.tags[myUID]);
                    $dvbs.t2tEventDataZombie[data.iFrameId] = undefined;
                }
                else
                {
                    data.wasZombie = 1;
                    $dvbs.t2tEventDataZombie[data.iFrameId] = data;
                }
            break;
            case 'maColl':
                var tag = $dvbs.tags[myUID];
                //mark we got a message, so we'll stop sending them in the future
                tag.AdCollisionMessageRecieved = true;
                if (!tag.uniquePageViewId) { tag.uniquePageViewId = data.uniquePageViewId; }
                data.collision.commonRecievedTS = timeCalled;
                $dvbs.processTagToTagCollision(data.collision, tag);
            break;
            }

        } catch (e) {
            try{
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tListener=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch (ex) { }
        }
    };

    if (window.addEventListener)
        addEventListener("message", messageEventListener, false);
    else
        attachEvent("onmessage", messageEventListener);

    this.pubSub = new function () {

        var subscribers = [];

        this.subscribe = function (eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({ Func: func, ActionName: actionName });
        }

        this.publish = function (eventName, uid) {
            var actionsResults = [];
            if (eventName && uid && subscribers[eventName + uid] instanceof Array)
                for (var i = 0; i < subscribers[eventName + uid].length; i++) {
                    var funcObject = subscribers[eventName + uid][i];
                    if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                        var isSucceeded = runSafely(function () {
                            return funcObject.Func(uid);
                        });
                        actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                    }
                }
            return actionsResults.join('&');
        }
    };

    this.domUtilities = new function () {

        this.addImage = function (url, parentElement) {
            var image = parentElement.ownerDocument.createElement("img");
            image.width = 0;
            image.height = 0;
            image.style.display = 'none';
            image.src = appendCacheBuster(url);
            parentElement.insertBefore(image, parentElement.firstChild);
        };

        this.addScriptResource = function (url, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.src = appendCacheBuster(url);
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addScriptCode = function (srcCode, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function (srcHtml, parentElement) {
            var divElem = parentElement.ownerDocument.createElement("div");
            divElem.style = "display: inline";
            divElem.innerHTML = srcHtml;
            parentElement.insertBefore(divElem, parentElement.firstChild);
        }
    };

    this.resolveMacros = function(str, tag) {
        var viewabilityData = tag.getViewabilityData();
        var viewabilityBuckets = viewabilityData && viewabilityData.buckets ? viewabilityData.buckets : { };
        var upperCaseObj = objectsToUpperCase(tag, viewabilityData, viewabilityBuckets);
        var newStr = str.replace('[DV_PROTOCOL]', upperCaseObj.DV_PROTOCOL);
        newStr = newStr.replace('[PROTOCOL]', upperCaseObj.PROTOCOL);
        newStr = newStr.replace( /\[(.*?)\]/g , function(match, p1) {
            var value = upperCaseObj[p1];
            if (value === undefined || value === null)
                value = '[' + p1 + ']';
            return encodeURIComponent(value);
        });
        return newStr;
    };

    this.settings = new function () {
    };

    this.tagsType = function () { };

    this.tagsPrototype = function () {
        this.add = function (tagKey, obj) {
            if (!that.tags[tagKey])
                that.tags[tagKey] = new that.tag();
            for (var key in obj)
                that.tags[tagKey][key] = obj[key];
        }
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () { }
    this.tagPrototype = function () {
        this.set = function (obj) {
            for (var key in obj)
                this[key] = obj[key];
        }

        this.getViewabilityData = function () {
        }
    };

    this.tag.prototype = new this.tagPrototype();
    this.tag.prototype.constructor = this.tag;

    this.Enums = {
        BrowserId: { Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4, Safari: 5 },
        TrafficScenario: { OnPage: 1, SameDomain: 2, CrossDomain: 128 }
    };

    this.CommonData = { };
    
    var runSafely = function (action) {
        try {
            var ret = action();
            return ret !== undefined ? ret : true;
        } catch (e) { return false; }
    };

    var objectsToUpperCase = function () {
        var upperCaseObj = {};
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    upperCaseObj[key.toUpperCase()] = obj[key];
                }
            }
        }
        return upperCaseObj;
    };

    var appendCacheBuster = function (url) {
        if (url !== undefined && url !== null && url.match("^http") == "http") {
            if (url.indexOf('?') !== -1) {
                if (url.slice(-1) == '&')
                    url += 'cbust=' + dv_GetRnd();
                else
                    url += '&cbust=' + dv_GetRnd();
            }
            else
                url += '?cbust=' + dv_GetRnd();
        }
        return url;
    };
}

function dv_baseHandler(){function t(d,a){var h=null,c=null,j;var e=a.src,f=dv_GetParam(e,"cmp"),e=dv_GetParam(e,"ctx");j="919838"==e&&"7951767"==f||"919839"==e&&"7939985"==f||"971108"==e&&"7900229"==f||"971108"==e&&"7951940"==f?"</scr'+'ipt>":/<\/scr\+ipt>/g;var i=window._dv_win.dv_config.bs_renderingMethod||function(b){document.write(b)};"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});window[d]=function(b){switch(b.ResultID){case 1:c?
i(c):b.Passback?i(decodeURIComponent(b.Passback)):b.AdWidth&&b.AdHeight&&i(decodeURIComponent("%3Cstyle%3E%0A.container%20%7B%0A%09border%3A%201px%20solid%20%233b599e%3B%0A%09overflow%3A%20hidden%3B%0A%09filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(startColorstr%3D%27%23315d8c%27%2C%20endColorstr%3D%27%2384aace%27)%3B%0A%09%2F*%20for%20IE%20*%2F%0A%09background%3A%20-webkit-gradient(linear%2C%20left%20top%2C%20left%20bottom%2C%20from(%23315d8c)%2C%20to(%2384aace))%3B%0A%09%2F*%20for%20webkit%20browsers%20*%2F%0A%09background%3A%20-moz-linear-gradient(top%2C%20%23315d8c%2C%20%2384aace)%3B%0A%09%2F*%20for%20firefox%203.6%2B%20*%2F%0A%7D%0A.cloud%20%7B%0A%09color%3A%20%23fff%3B%0A%09position%3A%20relative%3B%0A%09font%3A%20100%25%22Times%20New%20Roman%22%2C%20Times%2C%20serif%3B%0A%09text-shadow%3A%200px%200px%2010px%20%23fff%3B%0A%09line-height%3A%200%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0A%09function%0A%20%20%20%20cloud()%7B%0A%09%09var%20b1%20%3D%20%22%3Cdiv%20class%3D%5C%22cloud%5C%22%20style%3D%5C%22font-size%3A%22%3B%0A%09%09var%20b2%3D%22px%3B%20position%3A%20absolute%3B%20top%3A%20%22%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2234px%3B%20left%3A%2028px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2246px%3B%20left%3A%2010px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%09%09document.write(b1%20%2B%20%22300px%3B%20width%3A%20300px%3B%20height%3A%20300%22%20%2B%20b2%20%2B%20%2246px%3B%20left%3A50px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%09%09document.write(b1%20%2B%20%22400px%3B%20width%3A%20400px%3B%20height%3A%20400%22%20%2B%20b2%20%2B%20%2224px%3B%20left%3A20px%3B%5C%22%3E.%3C%5C%2Fdiv%3E%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%09function%20clouds()%7B%0A%20%20%20%20%20%20%20%20var%20top%20%3D%20%5B%27-80%27%2C%2780%27%2C%27240%27%2C%27400%27%5D%3B%0A%09%09var%20left%20%3D%20-10%3B%0A%20%20%20%20%20%20%20%20var%20a1%20%3D%20%22%3Cdiv%20style%3D%5C%22position%3A%20relative%3B%20top%3A%20%22%3B%0A%09%09var%20a2%20%3D%20%22px%3B%20left%3A%20%22%3B%0A%20%20%20%20%20%20%20%20var%20a3%3D%20%22px%3B%5C%22%3E%3Cscr%22%2B%22ipt%20type%3D%5C%22text%5C%2Fjavascr%22%2B%22ipt%5C%22%3Ecloud()%3B%3C%5C%2Fscr%22%2B%22ipt%3E%3C%5C%2Fdiv%3E%22%3B%0A%20%20%20%20%20%20%20%20for(i%3D0%3B%20i%20%3C%208%3B%20i%2B%2B)%20%7B%0A%09%09%09document.write(a1%2Btop%5B0%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B1%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B2%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09document.write(a1%2Btop%5B3%5D%2Ba2%2Bleft%2Ba3)%3B%0A%09%09%09if(i%3D%3D4)%0A%09%09%09%7B%0A%09%09%09%09left%20%3D-%2090%3B%0A%09%09%09%09top%20%3D%20%5B%270%27%2C%27160%27%2C%27320%27%2C%27480%27%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20%0A%09%09%09%09left%20%2B%3D%20160%3B%0A%09%09%7D%0A%09%7D%0A%0A%3C%2Fscript%3E%0A%3Cdiv%20class%3D%22container%22%20style%3D%22width%3A%20"+
b.AdWidth+"px%3B%20height%3A%20"+b.AdHeight+"px%3B%22%3E%0A%09%3Cscript%20type%3D%22text%2Fjavascript%22%3Eclouds()%3B%3C%2Fscript%3E%0A%3C%2Fdiv%3E"));break;case 2:case 3:h&&i(h);break;case 4:b.AdWidth&&b.AdHeight&&i(decodeURIComponent("%3Cstyle%3E%0A.container%20%7B%0A%09border%3A%201px%20solid%20%233b599e%3B%0A%09overflow%3A%20hidden%3B%0A%09filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(startColorstr%3D%27%23315d8c%27%2C%20endColorstr%3D%27%2384aace%27)%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cdiv%20class%3D%22container%22%20style%3D%22width%3A%20"+
b.AdWidth+"%3B%20height%3A%20"+b.AdHeight+"%3B%22%3E%09%0A%3C%2Fdiv%3E"))}};var b=function(a){if((a=a.previousSibling)&&"#text"==a.nodeName&&(null==a.nodeValue||void 0==a.nodeValue||0==a.nodeValue.trim().length))a=a.previousSibling;if(a&&"SCRIPT"==a.tagName&&("text/adtag"==a.getAttribute("type").toLowerCase()||"text/passback"==a.getAttribute("type").toLowerCase())&&""!=a.innerHTML.trim()){if("text/adtag"==a.getAttribute("type").toLowerCase())return h=a.innerHTML.replace(j,"<\/script>"),{result:!0,
hasPassback:!1};if(null!=c)return{result:!1,hasPassback:!1};c=a.innerHTML.replace(j,"<\/script>");a=b(a);a.hasPassback=!0;return a}return{result:!1,hasPassback:!1}};return b(a)}function u(d){try{if(1>=d.depth)return{url:"",depth:""};var a,h=[];h.push({win:window._dv_win.top,depth:0});for(var c,j=1,e=0;0<j&&100>e;){try{if(e++,c=h.shift(),j--,0<c.win.location.toString().length&&c.win!=d)return 0==c.win.document.referrer.length||0==c.depth?{url:c.win.location,depth:c.depth}:{url:c.win.document.referrer,
depth:c.depth-1}}catch(f){}a=c.win.frames.length;for(var i=0;i<a;i++)h.push({win:c.win.frames[i],depth:c.depth+1}),j++}return{url:"",depth:""}}catch(b){return{url:"",depth:""}}}function n(d){new String;var a=new String,h,c,j;for(h=0;h<d.length;h++)j=d.charAt(h),c="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(j),0<=c&&(j="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((c+47)%94)),
a+=j;return a}this.createRequest=function(){var d=!1,a=window._dv_win,h=0,c=!1;try{for(dv_i=0;10>=dv_i;dv_i++)if(null!=a.parent&&a.parent!=a)if(0<a.parent.location.toString().length)a=a.parent,h++,d=!0;else{d=!1;break}else{0==dv_i&&(d=!0);break}}catch(j){d=!1}0==a.document.referrer.length?d=a.location:d?d=a.location:(d=a.document.referrer,c=!0);window._dv_win._dvScripts||(window._dv_win._dvScripts=[]);var e=document.getElementsByTagName("script");for(dv_i in e){var f=e[dv_i].src,i=window._dv_win.dv_config.bs_regex||
/^[ \t]*(http(s)?:\/\/)?[a-z\-]*cdn(s)?\.doubleverify\.com:?[0-9]*\/dvbs_src\.js/;if(f&&f.match(i)&&!dv_Contains(window._dv_win._dvScripts,e[dv_i])){this.dv_script=e[dv_i];window._dv_win._dvScripts.push(e[dv_i]);var b;e=f;f={};try{for(var m=RegExp("[\\?&]([^&]*)=([^&#]*)","gi"),l=m.exec(e);null!=l;)"eparams"!==l[1]&&(f[l[1]]=l[2]),l=m.exec(e);b=f}catch(v){b=f}b.uid=Math.floor(1E12*(Math.random()+""));b.script=this.dv_script;b.callbackName="__verify_callback_"+b.uid;b.integrityResult=t(b.callbackName,
b.script);e=h;f=c;h=c="";!1==b.integrityResult.result?c="&isbadimp=1":b.integrityResult.hasPassback&&(h="&tagpb=1");m="http:";l="0";"https"==b.script.src.match("^https")&&"https"==window._dv_win.location.toString().match("^https")&&(m="https:",l="1");i="https"==window._dv_win.location.toString().match("^https")?"https:":"http:";window._dv_win.$dvbs&&(window._dv_win.$dvbs.tags.add(b.uid,b),window._dv_win.$dvbs.tags[b.uid].set({tagElement:b.script,dv_protocol:m,protocol:i,uid:b.uid}));void 0==b.dvregion&&
(b.dvregion=0);try{for(var p=i=a,q=0;10>q&&p!=window._dv_win.top;)q++,p=p.parent;i.depth=q;var g=u(a),r="&aUrl="+encodeURIComponent(g.url),s="&aUrlD="+g.depth,k=a.depth+e;f&&a.depth--}catch(w){s=r=k=a.depth=""}g=b.script.src;e="&ctx="+(dv_GetParam(g,"ctx")||"")+"&cmp="+(dv_GetParam(g,"cmp")||"")+"&plc="+(dv_GetParam(g,"plc")||"")+"&sid="+(dv_GetParam(g,"sid")||"")+"&advid="+(dv_GetParam(g,"advid")||"")+"&adsrv="+(dv_GetParam(g,"adsrv")||"")+"&unit="+(dv_GetParam(g,"unit")||"")+"&uid="+b.uid;f=dv_GetParam(g,
"xff");null!=f&&(e+="&xff="+f);f=dv_GetParam(g,"useragent");null!=f&&(e+="&useragent="+f);k=m+"//"+(window._dv_win.dv_config.bsAddress||"rtb"+b.dvregion+".doubleverify.com")+"/verify.js?jsCallback="+b.callbackName+"&num=6"+e+"&srcurlD="+a.depth+"&ssl="+l+"&refD="+k+c+h;(b=dv_GetDynamicParams(g).join("&"))&&(k+="&"+b);d="srcurl="+encodeURIComponent(d);if((b=window._dv_win[n("=@42E:@?")][n("2?46DE@C~C:8:?D")])&&0<b.length){a=[];a[0]=window._dv_win.location.protocol+"//"+window._dv_win.location.hostname;
for(c=0;c<b.length;c++)a[c+1]=b[c];b=a.reverse().join(",")}else b=null;b&&(d+="&ancChain="+encodeURIComponent(b));b=4E3;/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&7>=new Number(RegExp.$1)&&(b=2E3);if(g=dv_GetParam(g,"referrer"))g="&referrer="+g,k.length+g.length<=b&&(k+=g);r.length+s.length+k.length<=b&&(k+=s,d+=r);return k+="&eparams="+encodeURIComponent(n(d))+"&"+this.getVersionParamName()+"="+this.getVersion()}}};this.sendRequest=function(d){dv_sendScriptRequest(d);return!0};this.isApplicable=
function(){return!0};this.onFailure=function(){var d=window._dv_win._dvScripts,a=this.dv_script;null!=d&&(void 0!=d&&a)&&(a=d.indexOf(a),-1!=a&&d.splice(a,1))};this.getVersionParamName=function(){return"ver"};this.getVersion=function(){return"5"}};


function dvbs_src_main(dvbs_baseHandlerIns, dvbs_handlersDefs) {

    this.bs_baseHandlerIns = dvbs_baseHandlerIns;
    this.bs_handlersDefs = dvbs_handlersDefs;

    this.exec = function() {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dvbs = (window._dv_win.$dvbs || new dvBsType());

            window._dv_win.dv_config = window._dv_win.dv_config || { };
            window._dv_win.dv_config.bsErrAddress = window._dv_win.dv_config.bsAddress || 'rtb0.doubleverify.com';

            var errorsArr = (new dv_rolloutManager(this.bs_handlersDefs, this.bs_baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verify.js?ctx=818052&cmp=1619415', errorsArr);
        }
        catch(e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verify.js?ctx=818052&cmp=1619415&num=6&ver=0&dvp_isLostImp=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch(e) { }
        }
    };
};

try {
    window._dv_win = window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];
    (new dvbs_src_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
} catch (e) { }
