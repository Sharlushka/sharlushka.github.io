"use strict";var precacheConfig=[["/android-chrome-192x192.png","0f0ef89d6532a2a86d213392223966c8"],["/android-chrome-512x512.png","711b509347256b3470dd568884f53e66"],["/apple-touch-icon.png","2ac1e29fe842d3f66ace27f68767f409"],["/browserconfig.xml","2fc2cf278972980fff631db4f8f65f2f"],["/endgame.ada513244f09bddbc1ac.js","e13fed900641e4670cde1c6a2a219b8b"],["/favicon-16x16.png","12345f89f8f884a92a3d5f69f9e1a3f6"],["/favicon-32x32.png","f67620f222df310b5af097a968509fad"],["/favicon.ico","cc92053a39f38782e481ecfe617f02f2"],["/game.355d2e73f5a076d0b3d1.js","f20b4b789d76053572758ef97fb8645c"],["/help.84ccd3976dd20af3a126.js","c5751eddfe052a7e60d03dac91066ffd"],["/index.html","6bc3a38497d05247b9a4e081a00c7746"],["/leaderboard.3929b51467521ac32e64.js","b2387f49a70d2407441bb2492b42fe5f"],["/login.b7de93daa2ee9fb9e237.js","a7c732d5d82fa559b2306866f70a96b1"],["/main.0bd42aadf355fd3ab8e4.js","d75b3a81a798f05217b0b769838c5ad4"],["/mainpage.367c96256779ea09a870.js","401a6d7a7a3e56d0c74c689edc12c6a8"],["/mstile-150x150.png","56c7441b6b338f85f361bbdce178d560"],["/register.e732dfbdfb9050520c37.js","604fea88b542d3ce5d604f06dec9fca5"],["/robots.txt","b6216d61c03e6ce0c9aea6ca7808f7ca"],["/runtime~main.dbc43d5f96caf76df927.js","f1c5e074aa388088a95a4b615f54d3ee"],["/safari-pinned-tab.svg","273c54437be35a307af07192673e9871"],["/settings.6252cc799615f041caf5.js","6626ad550b73449a4bc90bece0b9dcc2"],["/vendors~endgame~leaderboard~login~register.ab07c6e79b00354b6af6.js","bca414690ed44364ec93817d3b1c8d39"],["/vendors~main.f52652c22af330e570d1.js","5adb5faee4c0dae4c36636d41a928030"]],cacheName="sw-precache-v3-sharlushkaMk6-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),r=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});