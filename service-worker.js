"use strict";var precacheConfig=[["/android-chrome-192x192.png","0f0ef89d6532a2a86d213392223966c8"],["/android-chrome-512x512.png","711b509347256b3470dd568884f53e66"],["/apple-touch-icon.png","2ac1e29fe842d3f66ace27f68767f409"],["/browserconfig.xml","2fc2cf278972980fff631db4f8f65f2f"],["/default~endgame~game.86a9577324969c3026d5.js","341ed56a15a9ba817da45bef8fa901fa"],["/default~endgame~leaderboard~login~register.98f8bee1995233b84f0d.js","b1c4bb2485ba72f0e033e65eb984dc91"],["/default~game~help.457e20580802d92b03e5.js","daa4f39d47552f3e66889319f95fcc20"],["/default~login~register.6b1806aa96130743d564.js","bb8aa56921935d4fcaf99fe5530349ae"],["/endgame.a2962e2533aeafc84bc6.js","3a1b795041c1ebb190f9f4430c1ca1ca"],["/favicon-16x16.png","12345f89f8f884a92a3d5f69f9e1a3f6"],["/favicon-32x32.png","f67620f222df310b5af097a968509fad"],["/favicon.ico","cc92053a39f38782e481ecfe617f02f2"],["/game.f1279645af6088680ac3.js","0b2805bdc226cf4a459cbcb49b5c5133"],["/help.9454011f23563c4fb425.js","0609a02d0f65e41a5da0e7d45c33904e"],["/index.html","727a5c865b3db4b5b816407c11a38eda"],["/leaderboard.ca771ed3725290a6c4da.js","c39fceedcfe4a7a352f240a28c4743d0"],["/login.8bfa1c16074061bf7ada.js","16f0dd87aa7a92b71cfb2a10d06923ad"],["/main.3a8a9a682eec67c15898.js","395a5f3ff4f6ec282b7a618e9a2301d9"],["/mainpage.78e86695b5e9f7b241cf.js","dd393b8a6b6ba3853ddd798321f9ff15"],["/mstile-150x150.png","56c7441b6b338f85f361bbdce178d560"],["/npm.chartist.49436c56985496c94d22.js","1f726484a9363f3cde0db1887a91fd45"],["/npm.core-js.46c972225cc4548ddcde.js","b113fea397e3b0a927b78322cd422c19"],["/npm.css-loader.e8792b3acb030dfdc4ab.js","ee6ea36cf1fc062f7cab4156429e4e63"],["/npm.firebase.98cf8fbfb861442b1d4c.js","73a01de565cbd53b237794f0aafd3d46"],["/npm.tslib.53fc9b96555ae6528f38.js","db5bd661efaeb9acdef18c8f47f81911"],["/npm.tslib.53fc9b96555ae6528f38.js.LICENSE","7ec01595672f75e83fd81b41f132f4c1"],["/npm.vue-chartist.4b2527370dc1860bbf79.js","37f5ed5d4472d172557df011bec201ad"],["/npm.vue-loader.90f515522295c37d3c56.js","5a1209755c53aa8777618a5b6619a428"],["/npm.vue-offline.ca4edd90e447dc4f605a.js","1b08584792c18846eef63392ade82a4c"],["/npm.vue-offline.ca4edd90e447dc4f605a.js.LICENSE","6a4c590098bde41ed55c5580cbb0989f"],["/npm.vue-router.f7183af43f2a856b439e.js","41adb78a4f77a0bbe5e8f624d2a1d0c5"],["/npm.vue-router.f7183af43f2a856b439e.js.LICENSE","b0d345039fe98d944aa883cfe1cd368d"],["/npm.vue-style-loader.1f55d203d89feba7dedc.js","72fabe048736f54678eeecec0ab7194a"],["/npm.vue.634ea6fa6d949fc98821.js","9e90e24228887f8b379eb240319bf52c"],["/npm.vue.634ea6fa6d949fc98821.js.LICENSE","26dd3b5cc643dba768a31715e1341175"],["/npm.vuetify.7d0a09a0d98317cdec4f.js","62766c5001dd60c471b8c3df7878b68b"],["/npm.vuetify.7d0a09a0d98317cdec4f.js.LICENSE","df441999b6e70d3817d788c676717b7c"],["/npm.vuex.d83d025ebc9ba37bf373.js","ec4e20b5d308394f910f1fc9d6439d77"],["/npm.vuex.d83d025ebc9ba37bf373.js.LICENSE","df4b971dcc597cc87ad611158b973746"],["/register.4025b7b3a8ebe44d52cb.js","fdc9ced6ecc031d69eaa18bf25e94c76"],["/robots.txt","b6216d61c03e6ce0c9aea6ca7808f7ca"],["/runtime~main.07e73ca347c7778a6e5b.js","151837b8ddd37b67f67a8abfc6a30716"],["/safari-pinned-tab.svg","273c54437be35a307af07192673e9871"],["/settings.e0fcf78dc31b7dbce57a.js","911811cd7097918fd589bc3c9a4b4776"]],cacheName="sw-precache-v3-sharlushkaMk9-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,n){var f=new URL(e);return n&&f.pathname.match(n)||(f.search+=(f.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),f.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],n=new URL(a,self.location),f=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),f]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});