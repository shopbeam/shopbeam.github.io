typeof Sharethrough=="undefined"&&(Sharethrough={}),Sharethrough.Apis=Sharethrough.Apis||{internalRoot:"//apis.sharethrough.com/internal/",loadScripts:function(e,t){var n=this;e.length>0?this.loadScript({url:e.shift(),callback:function(){n.loadScripts(e,t)}}):t()},loadScript:function(e){var t,n;e=e||{},e.callback=e.callback||function(){},e.attributes=e.attributes||{},t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.src=e.url;for(var r in e.attributes){var i=e.attributes[r];t.setAttribute(r,new String(i))}n=document.getElementsByTagName("script")[0],n.parentNode.insertBefore(t,n),t.addEventListener?t.addEventListener("load",e.callback,!1):t.attachEvent("onreadystatechange",function(){/complete|loaded/.test(t.readyState)&&e.callback()})}},Sharethrough.Apis.loadScripts(["//assets.sharethrough.com/assets/sharethrough/app/tags_api/application-4f46bb577f31cd56ea75ced8cdc38709.js"],function(){Sharethrough.Vendor.$(".sharethrough-placement").each(function(e,t){var n=new Sharethrough.App.TagsApi.Views.Placement({el:t,model:(new Sharethrough.App.TagsApi.Lib.ModelBuilder(Sharethrough.Vendor.$(t))).build()});n.go()})});
