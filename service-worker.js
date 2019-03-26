"use strict";var precacheConfig=[["/android-chrome-192x192.png","0f0ef89d6532a2a86d213392223966c8"],["/android-chrome-512x512.png","711b509347256b3470dd568884f53e66"],["/apple-touch-icon.png","2ac1e29fe842d3f66ace27f68767f409"],["/browserconfig.xml","2fc2cf278972980fff631db4f8f65f2f"],["/default~endgame~game.7d3fbb32a9931b2efcb3.js","99c1295bc65d5756585b9a421d0c3bf7"],["/default~endgame~leaderboard~login~register.fd48458bc691f2a71bc7.js","60f1f89f575f49106a1bf4dc5902d1ab"],["/default~game~help.ab8fce3547f3fecba6d3.js","7442d273c0467d1bab38d7c8c3e95a51"],["/default~login~register.e591af2711c21f3ba54c.js","49221fef985fa464eeadc0a285683dbd"],["/endgame.b9508729e8ed49d6b552.js","dba25bc4d17ea3ea86efca7c224ab705"],["/favicon-16x16.png","12345f89f8f884a92a3d5f69f9e1a3f6"],["/favicon-32x32.png","f67620f222df310b5af097a968509fad"],["/favicon.ico","cc92053a39f38782e481ecfe617f02f2"],["/game.ba3a63c7fbd1f8a17b54.js","b1591821a08e260a729f98bdbb0a9edf"],["/help.b2f206a3aac75e37ed4b.js","6edae22c007ef5408886259ce5fe9b6a"],["/index.html","6cf77d66bd49c0209d99ac10faa8b7a1"],["/leaderboard.d1af17a89a9693395b43.js","9b4932d9a665917e6da76dbd7028de91"],["/login.448377e062c00f891cc6.js","fcfeb260c5e70f193bf4ea37ef999f51"],["/main.266a5a6ade71dc06b042.js","508ce735fd20f5df6d842f063c0626de"],["/mainpage.e927dfa05700b5a5f339.js","a45d9bc942aea87394518260802f5421"],["/mstile-150x150.png","56c7441b6b338f85f361bbdce178d560"],["/npm.chartist.87e3f22c1c8ebecb8615.js","5cdeb9ca756fbf0baa947f0a2e85232d"],["/npm.core-js.03323a079dad3392eb5e.js","1cfa640a1cf3a172b87a07fc782bb9f0"],["/npm.css-loader.2166f110c9d757345742.js","3e391acc5f58bff2425c9dd781f5373e"],["/npm.firebase.1500ee8068f2c263fae1.js","7d1a4822c34bd7b9e928ac3b08ed4f8c"],["/npm.tslib.9fbc2a2df7841d53027a.js","69bae9241a44ac291683ef655d1183b8"],["/npm.vue-chartist.3d0acbc05183c19e5d8b.js","ad178d5e38b6a8416b98b489ddda4bf9"],["/npm.vue-loader.76cd512c2a0787834fb3.js","f36569dca16f818c8486b3cf7873fed5"],["/npm.vue-offline.37415ce50b3b1f399263.js","997afee43f4165a5586a4b59640e50dc"],["/npm.vue-router.6a06374965689c4eecbc.js","7393e074f93a3d1b9206f67886471160"],["/npm.vue-style-loader.03cf04248f2f08195f40.js","e606e47484e1725d9addc21e35aa9ef7"],["/npm.vue.c48519114793e27baed4.js","3bf79190dfa51e8d995fe2f2677060d4"],["/npm.vuetify.83a2a5bb74fa351086eb.js","2b824332de55b1ddbbe353e7bc5058a2"],["/npm.vuex.5ee4b461713dda6b16d9.js","6d40b1ca1ae5fa517fc296d0bfe870f1"],["/register.34bef0014efa1750badf.js","011210a7847c3614199ab1dc1151e2fc"],["/robots.txt","b6216d61c03e6ce0c9aea6ca7808f7ca"],["/runtime~main.de31420b8b79d33688ca.js","c4b047d9c5fa0ba795c42413dcd56a4d"],["/safari-pinned-tab.svg","273c54437be35a307af07192673e9871"],["/settings.03f97304499a5d86ef52.js","8339d5942d9d2bdc62279fc693010e82"]],cacheName="sw-precache-v3-sharlushkaMk9-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});