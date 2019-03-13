"use strict";var precacheConfig=[["/android-chrome-192x192.png","0f0ef89d6532a2a86d213392223966c8"],["/android-chrome-512x512.png","711b509347256b3470dd568884f53e66"],["/apple-touch-icon.png","2ac1e29fe842d3f66ace27f68767f409"],["/browserconfig.xml","2fc2cf278972980fff631db4f8f65f2f"],["/endgame.db88878b7dc7def3ed21.js","1e9572493c22953f84023e4ae07861fb"],["/favicon-16x16.png","12345f89f8f884a92a3d5f69f9e1a3f6"],["/favicon-32x32.png","f67620f222df310b5af097a968509fad"],["/favicon.ico","cc92053a39f38782e481ecfe617f02f2"],["/game.830bdb03027936dbe4b0.js","7c4e8e01bf0cc3561f7644c2168490ce"],["/help.ccaf728a5dadccf9851e.js","b3c06f6c2d9fb3296c877fdbd8273c3c"],["/index.html","665f84a8217a360555843d87a146cd76"],["/leaderboard.f69b8a05de99970619e3.js","c9a4cfd8b1fd9e4cf35238ca80883bc1"],["/login.b7de93daa2ee9fb9e237.js","a7c732d5d82fa559b2306866f70a96b1"],["/main.e64a87595c3a6d23a64a.js","1bd6769e3e98b747d2c5f8e295621ef4"],["/mainpage.6b3744b3bbb1ebe685eb.js","e26350347ba4ae9cda9c5906747061e7"],["/mstile-150x150.png","56c7441b6b338f85f361bbdce178d560"],["/register.e732dfbdfb9050520c37.js","604fea88b542d3ce5d604f06dec9fca5"],["/robots.txt","b6216d61c03e6ce0c9aea6ca7808f7ca"],["/runtime~main.d293d1b65a1de97b21a7.js","1c07fa895248bbef97dfa09ab6057301"],["/safari-pinned-tab.svg","273c54437be35a307af07192673e9871"],["/settings.7bbfec7dfa566f852f15.js","fa4e40465e33cab241e4fcc3b672ad6d"],["/vendors~endgame~leaderboard~login~register.ab07c6e79b00354b6af6.js","bca414690ed44364ec93817d3b1c8d39"],["/vendors~main.a8ea47d6cc1a3b4f25e1.js","15e4fb065602e33e422d0e0c5638bc6f"]],cacheName="sw-precache-v3-sharlushkaMk4-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),r=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/index.html",self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});