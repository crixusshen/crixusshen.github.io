var __wpo = {"assets":{"main":["./framework-runtime.efc678124270fdefb038.js","./application-common.3337327792cb66fe7922.js","./fastman-sdk.801303de8cd4751eb313.js","./fastman-api.4a1eac498e30a10c9dc5.js","./fastman.33232b7fdbf5cacb7c42.js","./fastman-fileuploadman.a64564130aeccc505faa.js","./fastman-passguardman.5cd4d226242d082e4daf.js","./fastman-preloadman.6e712182feb0f438d06e.js","./fastman-swiperman.ede1549b88f529e146af.js","./fastman-traceman.c746f181476eb658987e.js","./fastman-ui-design.d5100d279d3cc3c1da98.js","./main.95f02ceb53164ba16ee5.js","./oauthSimulation.6a58a9b7b7ae58040bd0.js","./template.03ac52d48143971df2bf.js","./../oauth-simulation/index.html","./../demo-index/index.html","./../demo-template/index.html"],"additional":["./7726f044844997ca504afaa51af4c373.ttf"],"optional":[]},"externals":[],"hashesMap":{"3861ea2b75ad5ebc7ec64146bc22838bf3c5e372":"./7726f044844997ca504afaa51af4c373.ttf","e1bfb5f5f08e00a9f2dd81afdfe7ed62cd9d3b4a":"./framework-runtime.efc678124270fdefb038.js","fe7aa1efaa4beea4b6dfbf3c6d0d3265c9bef942":"./application-common.3337327792cb66fe7922.js","1043a8cd8039b6b1c7aecbe77e31963656711e5a":"./fastman-sdk.801303de8cd4751eb313.js","33958aabc2f0e1ce748257e797691de8c1764de2":"./fastman-api.4a1eac498e30a10c9dc5.js","1f4fbfe7d2e3cea30757067b243bf96145a34142":"./fastman.33232b7fdbf5cacb7c42.js","09f8469322a431bfccad3ce7dba43ad416113c19":"./fastman-fileuploadman.a64564130aeccc505faa.js","9937879cb65000dde9c6737b847d9ed5cb877a53":"./fastman-passguardman.5cd4d226242d082e4daf.js","44333f36bbb7391b6534496d074176054e840557":"./fastman-preloadman.6e712182feb0f438d06e.js","56bd70c18621cdc8d8df69477bdc1e8181588f14":"./fastman-swiperman.ede1549b88f529e146af.js","10dd001f6d2dbf39644fe33148dd0eef4fe04c94":"./fastman-traceman.c746f181476eb658987e.js","1eed11d7d64d161247eb9dd1396762d95a733d26":"./fastman-ui-design.d5100d279d3cc3c1da98.js","5aede558eb8d222d207174f1e7ee31ad515c3a73":"./main.95f02ceb53164ba16ee5.js","1fae22ce10936dedb58a4682afa90edb352f10fa":"./oauthSimulation.6a58a9b7b7ae58040bd0.js","2dd17d7812a86cf1c1dab4e3e618b11915ee905d":"./template.03ac52d48143971df2bf.js","1b8108e63f466d9adf4c8a22cfc47b19972bb769":"./../oauth-simulation/index.html","97f8906a9f67545bf0e34877f4353dccac08ece1":"./../demo-index/index.html","84c0b5c86e86dfe7cd9c311f1ba0cfbdb19f14b0":"./../demo-template/index.html"},"strategy":"changed","responseStrategy":"cache-first","version":"2019-7-25 14:44:41","name":"webpack-offline","pluginVersion":"5.0.7","relativePaths":false};

!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="../scripts/",__webpack_require__(__webpack_require__.s=0)}([function(module,exports,__webpack_require__){"use strict";var waitUntil,respondWith,promisesMap;if(waitUntil=ExtendableEvent.prototype.waitUntil,respondWith=FetchEvent.prototype.respondWith,promisesMap=new WeakMap,ExtendableEvent.prototype.waitUntil=function(promise){var extendableEvent=this,promises=promisesMap.get(extendableEvent);if(!promises)return promises=[Promise.resolve(promise)],promisesMap.set(extendableEvent,promises),waitUntil.call(extendableEvent,Promise.resolve().then(function processPromises(){var len=promises.length;return Promise.all(promises.map(function(p){return p.catch(function(){})})).then(function(){return promises.length!=len?processPromises():(promisesMap.delete(extendableEvent),Promise.all(promises))})}));promises.push(Promise.resolve(promise))},FetchEvent.prototype.respondWith=function(promise){return this.waitUntil(promise),respondWith.call(this,promise)},void 0===DEBUG)var DEBUG=!1;function cachesMatch(request,cacheName){return caches.match(request,{cacheName:cacheName}).then(function(response){return isNotRedirectedResponse(response)?response:fixRedirectedResponse(response).then(function(fixedResponse){return caches.open(cacheName).then(function(cache){return cache.put(request,fixedResponse)}).then(function(){return fixedResponse})})}).catch(function(){})}function isNotRedirectedResponse(response){return!response||!response.redirected||!response.ok||"opaqueredirect"===response.type}function fixRedirectedResponse(response){return isNotRedirectedResponse(response)?Promise.resolve(response):("body"in response?Promise.resolve(response.body):response.blob()).then(function(data){return new Response(data,{headers:response.headers,status:response.status})})}function logGroup(title,assets){console.groupCollapsed("[SW]:",title),assets.forEach(function(asset){console.log("Asset:",asset)}),console.groupEnd()}!function(params,helpers){var cacheMaps=helpers.cacheMaps,navigationPreload=helpers.navigationPreload,strategy=params.strategy,responseStrategy=params.responseStrategy,assets=params.assets,hashesMap=params.hashesMap,externals=params.externals,prefetchRequest=params.prefetchRequest||{credentials:"same-origin",mode:"cors"},CACHE_PREFIX=params.name,CACHE_TAG=params.version,CACHE_NAME=CACHE_PREFIX+":"+CACHE_TAG,PRELOAD_CACHE_NAME=CACHE_PREFIX+"$preload",STORED_DATA_KEY="__offline_webpack__data";Object.keys(assets).forEach(function(key){assets[key]=assets[key].map(function(path){var url=new URL(path,location);return url.hash="",-1===externals.indexOf(path)&&(url.search=""),url.toString()})}),hashesMap=Object.keys(hashesMap).reduce(function(result,hash){var url=new URL(hashesMap[hash],location);return url.search="",url.hash="",result[hash]=url.toString(),result},{}),externals=externals.map(function(path){var url=new URL(path,location);return url.hash="",url.toString()});var allAssets=[].concat(assets.main,assets.additional,assets.optional);function cacheAssets(section){var batch=assets[section];return caches.open(CACHE_NAME).then(function(cache){return addAllNormalized(cache,batch,{bust:params.version,request:prefetchRequest,failAll:"main"===section})}).then(function(){logGroup("Cached assets: "+section,batch)}).catch(function(e){throw console.error(e),e})}function cacheChanged(section){return caches.keys().then(function(keys){for(var index=keys.length,key=void 0;index--&&0!==(key=keys[index]).indexOf(CACHE_PREFIX););if(key){var cache=void 0;return caches.open(key).then(function(_cache){return cache=_cache,_cache.match(new URL(STORED_DATA_KEY,location).toString())}).then(function(response){if(response)return Promise.all([cache,cache.keys(),response.json()])})}}).then(function(args){if(!args)return cacheAssets(section);var lastCache=args[0],lastKeys=args[1],lastData=args[2],lastMap=lastData.hashmap,lastVersion=lastData.version;if(!lastData.hashmap||lastVersion===params.version)return cacheAssets(section);var lastHashedAssets=Object.keys(lastMap).map(function(hash){return lastMap[hash]}),lastUrls=lastKeys.map(function(req){var url=new URL(req.url);return url.search="",url.hash="",url.toString()}),sectionAssets=assets[section],moved=[],changed=sectionAssets.filter(function(url){return-1===lastUrls.indexOf(url)||-1===lastHashedAssets.indexOf(url)});Object.keys(hashesMap).forEach(function(hash){var asset=hashesMap[hash];if(-1!==sectionAssets.indexOf(asset)&&-1===changed.indexOf(asset)&&-1===moved.indexOf(asset)){var lastAsset=lastMap[hash];lastAsset&&-1!==lastUrls.indexOf(lastAsset)?moved.push([lastAsset,asset]):changed.push(asset)}}),logGroup("Changed assets: "+section,changed),logGroup("Moved assets: "+section,moved);var movedResponses=Promise.all(moved.map(function(pair){return lastCache.match(pair[0]).then(function(response){return[pair[1],response]})}));return caches.open(CACHE_NAME).then(function(cache){var move=movedResponses.then(function(responses){return Promise.all(responses.map(function(pair){return cache.put(pair[0],pair[1])}))});return Promise.all([move,addAllNormalized(cache,changed,{bust:params.version,request:prefetchRequest,failAll:"main"===section,deleteFirst:"main"!==section})])})})}function deleteObsolete(){return caches.keys().then(function(keys){var all=keys.map(function(key){if(0===key.indexOf(CACHE_PREFIX)&&0!==key.indexOf(CACHE_NAME))return console.log("[SW]:","Delete cache:",key),caches.delete(key)});return Promise.all(all)})}function storeCacheData(){return caches.open(CACHE_NAME).then(function(cache){var data=new Response(JSON.stringify({version:params.version,hashmap:hashesMap}));return cache.put(new URL(STORED_DATA_KEY,location).toString(),data)})}self.addEventListener("install",function(event){console.log("[SW]:","Install event");var installing=void 0;installing="changed"===strategy?cacheChanged("main"):cacheAssets("main"),event.waitUntil(installing)}),self.addEventListener("activate",function(event){console.log("[SW]:","Activate event");var activation=function(){if(!assets.additional.length)return Promise.resolve();DEBUG&&console.log("[SW]:","Caching additional");return("changed"===strategy?cacheChanged("additional"):cacheAssets("additional")).catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}();activation=(activation=(activation=activation.then(storeCacheData)).then(deleteObsolete)).then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),navigationPreload&&self.registration.navigationPreload&&(activation=Promise.all([activation,self.registration.navigationPreload.enable()])),event.waitUntil(activation)}),self.addEventListener("fetch",function(event){if("GET"===event.request.method&&("only-if-cached"!==event.request.cache||"same-origin"===event.request.mode)){var url=new URL(event.request.url);url.hash="";var urlString=url.toString();-1===externals.indexOf(urlString)&&(url.search="",urlString=url.toString());var assetMatches=-1!==allAssets.indexOf(urlString),cacheUrl=urlString;if(!assetMatches){var cacheRewrite=function(request){var urlString=request.url,url=new URL(urlString),requestType=void 0;requestType=function(request){return"navigate"===request.mode||request.headers.get("Upgrade-Insecure-Requests")||-1!==(request.headers.get("Accept")||"").indexOf("text/html")}(request)?"navigate":url.origin===location.origin?"same-origin":"cross-origin";for(var i=0;i<cacheMaps.length;i++){var map=cacheMaps[i];if(map&&(!map.requestTypes||-1!==map.requestTypes.indexOf(requestType))){var newString=void 0;if((newString="function"==typeof map.match?map.match(url,request):urlString.replace(map.match,map.to))&&newString!==urlString)return newString}}}(event.request);cacheRewrite&&(cacheUrl=cacheRewrite,assetMatches=!0)}if(assetMatches){var resource=void 0;resource="network-first"===responseStrategy?function(event,urlString,cacheUrl){return fetchWithPreload(event).then(function(response){if(response.ok)return DEBUG&&console.log("[SW]:","URL ["+urlString+"] from network"),response;throw response}).catch(function(erroredResponse){return DEBUG&&console.log("[SW]:","URL ["+urlString+"] from cache if possible"),cachesMatch(cacheUrl,CACHE_NAME).then(function(response){if(response)return response;if(erroredResponse instanceof Response)return erroredResponse;throw erroredResponse})})}(event,urlString,cacheUrl):function(event,urlString,cacheUrl){return function(event){if(navigationPreload&&"function"==typeof navigationPreload.map&&event.preloadResponse&&"navigate"===event.request.mode){var mapped=navigationPreload.map(new URL(event.request.url),event.request);mapped&&function(_url,event){var url=new URL(_url,location),preloadResponsePromise=event.preloadResponse;navigationPreloadStore.set(preloadResponsePromise,{url:url,response:preloadResponsePromise});var isSamePreload=function(){return navigationPreloadStore.has(preloadResponsePromise)},storing=preloadResponsePromise.then(function(res){if(res&&isSamePreload()){var clone=res.clone();return caches.open(PRELOAD_CACHE_NAME).then(function(cache){if(isSamePreload())return cache.put(url,clone).then(function(){if(!isSamePreload())return caches.open(PRELOAD_CACHE_NAME).then(function(cache){return cache.delete(url)})})})}});event.waitUntil(storing)}(mapped,event)}}(event),cachesMatch(cacheUrl,CACHE_NAME).then(function(response){return response?(DEBUG&&console.log("[SW]:","URL ["+cacheUrl+"]("+urlString+") from cache"),response):fetch(event.request).then(function(response){return response.ok?(DEBUG&&console.log("[SW]:","URL ["+urlString+"] from network"),cacheUrl===urlString&&(responseClone=response.clone(),storing=caches.open(CACHE_NAME).then(function(cache){return cache.put(urlString,responseClone)}).then(function(){console.log("[SW]:","Cache asset: "+urlString)}),event.waitUntil(storing)),response):(DEBUG&&console.log("[SW]:","URL ["+urlString+"] wrong response: ["+response.status+"] "+response.type),response);var responseClone,storing})})}(event,urlString,cacheUrl),event.respondWith(resource)}else{if("navigate"===event.request.mode&&!0===navigationPreload)return void event.respondWith(fetchWithPreload(event));if(navigationPreload){var preloadedResponse=function(event){var url=new URL(event.request.url);if(self.registration.navigationPreload&&navigationPreload&&navigationPreload.test&&navigationPreload.test(url,event.request)){var fromMemory=function(url){if(navigationPreloadStore){var foundResponse=void 0,foundKey=void 0;return navigationPreloadStore.forEach(function(store,key){store.url.href===url.href&&(foundResponse=store.response,foundKey=key)}),foundResponse?(navigationPreloadStore.delete(foundKey),foundResponse):void 0}}(url),request=event.request;return fromMemory?(event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function(cache){return cache.delete(request)})),fromMemory):cachesMatch(request,PRELOAD_CACHE_NAME).then(function(response){return response&&event.waitUntil(caches.open(PRELOAD_CACHE_NAME).then(function(cache){return cache.delete(request)})),response||fetch(event.request)})}}(event);if(preloadedResponse)return void event.respondWith(preloadedResponse)}}}}),self.addEventListener("message",function(e){var data=e.data;if(data)switch(data.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var navigationPreloadStore=new Map;function addAllNormalized(cache,requests,options){requests=requests.slice();var bustValue=options.bust,failAll=!1!==options.failAll,deleteFirst=!0===options.deleteFirst,requestInit=options.request||{credentials:"omit",mode:"cors"},deleting=Promise.resolve();return deleteFirst&&(deleting=Promise.all(requests.map(function(request){return cache.delete(request).catch(function(){})}))),Promise.all(requests.map(function(request){var asset,key,hasQuery;return bustValue&&(key=bustValue,hasQuery=-1!==(asset=request).indexOf("?"),request=asset+(hasQuery?"&":"?")+"__uncache="+encodeURIComponent(key)),fetch(request,requestInit).then(fixRedirectedResponse).then(function(response){return response.ok?{response:response}:{error:!0}},function(){return{error:!0}})})).then(function(responses){return failAll&&responses.some(function(data){return data.error})?Promise.reject(new Error("Wrong response status")):(failAll||(responses=responses.filter(function(data,i){return!data.error||(requests.splice(i,1),!1)})),deleting.then(function(){var addAll=responses.map(function(_ref,i){var response=_ref.response;return cache.put(requests[i],response)});return Promise.all(addAll)}))})}function fetchWithPreload(event){return event.preloadResponse&&!0===navigationPreload?event.preloadResponse.then(function(response){return response||fetch(event.request)}):fetch(event.request)}}(__wpo,{loaders:{},cacheMaps:[],navigationPreload:!1}),module.exports=__webpack_require__(1)},function(module,exports){}]);