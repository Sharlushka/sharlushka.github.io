(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(e,t,r){"use strict";var a=r(25),n=r.n(a);r(121);n.a.firestore().settings({timestampsInSnapshots:!0}),t.a=n.a.firestore()},117:function(e,t,r){r(118)("split",2,function(e,t,a){"use strict";var n=r(119),o=a,s=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var i=void 0===/()??/.exec("")[1];a=function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!n(e))return o.call(r,e,t);var a,l,c,u,f,d=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,p=void 0===t?4294967295:t>>>0,h=new RegExp(e.source,v+"g");for(i||(a=new RegExp("^"+h.source+"$(?!\\s)",v));(l=h.exec(r))&&!((c=l.index+l[0].length)>g&&(d.push(r.slice(g,l.index)),!i&&l.length>1&&l[0].replace(a,function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(l[f]=void 0)}),l.length>1&&l.index<r.length&&s.apply(d,l.slice(1)),u=l[0].length,g=c,d.length>=p));)h.lastIndex===l.index&&h.lastIndex++;return g===r.length?!u&&h.test("")||d.push(""):d.push(r.slice(g)),d.length>p?d.slice(0,p):d}}else"0".split(void 0,0).length&&(a=function(e,t){return void 0===e&&0===t?[]:o.call(this,e,t)});return[function(r,n){var o=e(this),s=null==r?void 0:r[t];return void 0!==s?s.call(r,o,n):a.call(String(o),r,n)},a]})},118:function(e,t,r){"use strict";var a=r(7),n=r(16),o=r(6),s=r(44),i=r(1);e.exports=function(e,t,r){var l=i(e),c=r(s,l,""[e]),u=c[0],f=c[1];o(function(){var t={};return t[l]=function(){return 7},7!=""[e](t)})&&(n(String.prototype,e,u),a(RegExp.prototype,l,2==t?function(e,t){return f.call(e,this,t)}:function(e){return f.call(e,this)}))}},119:function(e,t,r){var a=r(5),n=r(15),o=r(1)("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},135:function(e,t,r){var a=r(8).f,n=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in n||r(9)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},137:function(e,t,r){var a=r(163);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,r(24).default)("2802b46c",a,!0,{})},157:function(e,t,r){"use strict";var a=r(2),n=r(10),o=r(15),s=r(158),i=r(34),l=r(6),c=r(48).f,u=r(68).f,f=r(8).f,d=r(160).trim,v=a.Number,g=v,p=v.prototype,h="Number"==o(r(47)(p)),x="trim"in String.prototype,m=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){var r,a,n,o=(t=x?t.trim():d(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var s,l=t.slice(2),c=0,u=l.length;c<u;c++)if((s=l.charCodeAt(c))<48||s>n)return NaN;return parseInt(l,a)}}return+t};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof v&&(h?l(function(){p.valueOf.call(r)}):"Number"!=o(r))?s(new g(m(t)),r,v):m(t)};for(var b,_=r(9)?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;_.length>y;y++)n(g,b=_[y])&&!n(v,b)&&f(v,b,u(g,b));v.prototype=p,p.constructor=v,r(16)(a,"Number",v)}},158:function(e,t,r){var a=r(5),n=r(159).set;e.exports=function(e,t,r){var o,s=t.constructor;return s!==r&&"function"==typeof s&&(o=s.prototype)!==r.prototype&&a(o)&&n&&n(e,o),e}},159:function(e,t,r){var a=r(5),n=r(4),o=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=r(26)(Function.call,r(68).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:o}},160:function(e,t,r){var a=r(18),n=r(44),o=r(6),s=r(161),i="["+s+"]",l=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(e,t,r){var n={},i=o(function(){return!!s[e]()||"​"!="​"[e]()}),l=n[e]=i?t(f):s[e];r&&(n[r]=l),a(a.P+a.F*i,"String",n)},f=u.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},161:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},162:function(e,t,r){"use strict";var a=r(137);r.n(a).a},163:function(e,t,r){(e.exports=r(14)(!1)).push([e.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}.default use[data-v-626d414a]{color:#7B1FA2;stroke:#7B1FA2}.chosen use[data-v-626d414a]{color:#FF9800;stroke:#FF9800}.highlighted[data-v-626d414a]{color:#FF9800;fill:#FF9800}.default-icon-color[data-v-626d414a]{color:#7B1FA2;fill:#7B1FA2}#leaderboard[data-v-626d414a]{font-family:"Quicksand","Verdana",sans-serif}.leaderboard-title[data-v-626d414a]{font-size:2em}.leaderboard-legend[data-v-626d414a]{font-weight:700;color:#301246;background-color:rgba(242,225,255,0.5)}.leader-board-message[data-v-626d414a]{color:#301246;font-size:1.4em}.leaderboard[data-v-626d414a]{font-size:1.2em;font-weight:700;color:#7B4B9D}.leaderboard-item[data-v-626d414a]:hover{background-color:rgba(242,225,255,0.5)}.curret-user[data-v-626d414a]{color:red}\n',""])},171:function(e,t,r){"use strict";r.r(t);r(43),r(67),r(157),r(117),r(45),r(46),r(135),r(33);var a=r(55),n=r(17),o=r(116);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i={name:"Leaderboard",components:{listIcon:a.a},data:function(){return{title:"leaderboard",userName:null,leaderboard:[],userDataFromDB:[],noLeaderboardMessage:null}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){s(e,t,r[t])})}return e}({},Object(n.c)(["getDefaultUserName","getUserData","getMaxPossibleScore"])),mounted:function(){var e=this;this.$nextTick(function(){console.log("Leaderboard mounted"),e.getUserData.isAuthenticated?(console.log("Getting leaderboard data from db..."),e.getDataForLeaderboard(),e.userName=localStorage.getItem("userName")):(e.userName=e.getDefaultUserName,e.noLeaderboardMessage="Hi, ".concat(e.userName,",\n        log in to view the leaderboard."))})},methods:{getDataForLeaderboard:function(){var e=this;o.a.collection("users").orderBy("hiScore").get().then(function(t){t.forEach(function(t){var r={id:t.id,userName:t.data().name,hiScore:t.data().hiScore,resultsArray:t.data().resultsArray};e.userDataFromDB.push(r)})}).then(function(){var t=!0,r=!1,a=void 0;try{for(var n,o=e.userDataFromDB[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var s=n.value,i=s.resultsArray.split(",").map(Number),l=parseInt(i.reduce(function(e,t){return e+t})/i.length),c=Math.floor(l/e.getMaxPossibleScore*100),u={id:s.id,userName:s.userName,hiScore:parseInt(s.hiScore),averageScore:l,percentFromMax:c,gamesPlayed:i.length};e.leaderboard.push(u)}}catch(e){r=!0,a=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw a}}e.leaderboard.reverse()}).catch(function(e){console.log("Error getting documents: ",e)})}}},l=(r(162),r(12)),c=Object(l.a)(i,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{id:"leaderboard",column:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs2:"","d-flex":"","align-center":""}},[r("h1",{staticClass:"leaderboard-title text-capitalize"},[e._v("\n      "+e._s(e.title)+"\n    ")])]),e._v(" "),r("v-flex",{staticClass:"leaderboard-legend text-xs-center pl-1",attrs:{"d-flex":"",xs1:"","align-center":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":"","d-flex":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs1:""}},[r("listIcon",{staticClass:"default-icon-color"})],1),e._v(" "),r("v-flex",{staticClass:"text-xs-left",attrs:{xs3:""}},[e._v("\n        Name\n      ")]),e._v(" "),r("v-flex",{attrs:{xs2:""}},[e._v("\n        HiScore\n      ")]),e._v(" "),r("v-flex",{attrs:{xs2:""}},[e._v("\n        Average\n      ")]),e._v(" "),r("v-flex",{attrs:{xs2:""}},[e._v("\n        % Max\n      ")]),e._v(" "),r("v-flex",{attrs:{xs2:""}},[e._v("\n        Games\n      ")])],1)],1),e._v(" "),e.noLeaderboardMessage?r("v-flex",{staticClass:"leader-board-message text-xs-center",attrs:{"py-4":""}},[e._v("\n    "+e._s(e.noLeaderboardMessage)+"\n  ")]):e._e(),e._v(" "),null===e.noLeaderboardMessage?r("v-flex",{staticClass:"leaderboard text-xs-center"},e._l(e.leaderboard,function(t,a){return r("v-layout",{key:a,staticClass:"leaderboard-item",class:{"orange--text":t.userName===e.userName},attrs:{"py-2":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs1:""}},[e._v("\n        "+e._s(a+1)+"\n      ")]),e._v(" "),r("v-flex",{staticClass:"text-xs-left",attrs:{xs3:""}},[e._v("\n        "+e._s(t.userName)+"\n      ")]),e._v(" "),r("v-flex",{attrs:{xs2:""}},[e._v("\n        "+e._s(t.hiScore)+"\n      ")]),e._v(" "),r("v-flex",{attrs:{xs2:""}},[e._v("\n        "+e._s(t.averageScore)+"\n      ")]),e._v(" "),r("v-flex",{attrs:{xs2:""}},[e._v("\n        "+e._s(t.percentFromMax)+"\n      ")]),e._v(" "),r("v-flex",{attrs:{xs2:""}},[e._v("\n        "+e._s(t.gamesPlayed)+"\n      ")])],1)}),1):e._e()],1)},[],!1,null,"626d414a",null);t.default=c.exports}}]);
//# sourceMappingURL=leaderboard.f69b8a05de99970619e3.js.map