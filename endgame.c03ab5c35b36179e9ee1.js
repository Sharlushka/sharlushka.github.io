(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(e,t,o){(e.exports=o(21)(!1)).push([e.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}.offline-message[data-v-1f95a776]{border:1px solid #7B1FA2}.offline-message-text[data-v-1f95a776]{font-size:1.5em;font-family:"Quicksand","Verdana",sans-serif;color:#301246}\n',""])},103:function(e,t,o){var s=o(123);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,o(34).default)("7ccb943c",s,!0,{})},108:function(e,t,o){"use strict";var s={name:"NetworkCheck",data:function(){return{offlineMessage:!1}},computed:{networkStatus:function(){return this.isOnline?"ok":null}}},a=(o(99),o(33)),n=Object(a.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.networkStatus?e._e():o("v-dialog",{attrs:{width:"20em"},model:{value:e.offlineMessage,callback:function(t){e.offlineMessage=t},expression:"offlineMessage"}},[o("v-btn",{attrs:{slot:"activator",small:"",icon:"",fab:"",dark:""},slot:"activator"},[o("v-icon",{staticClass:"blink",attrs:{medium:"",color:"orange"}},[e._v("\n      cloud_off\n    ")])],1),e._v(" "),o("v-card",{staticClass:"offline-message"},[o("v-card-text",{staticClass:"offline-message-text"},[e._v("\n      Check your connection to save results.\n    ")]),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"orange",flat:"",outline:"",ripple:""},on:{click:function(t){e.offlineMessage=!1}}},[o("v-icon",{attrs:{large:"",color:"orange"}},[e._v("\n          done\n        ")])],1)],1)],1)],1)},[],!1,null,"1f95a776",null);t.a=n.exports},122:function(e,t,o){"use strict";var s=o(103);o.n(s).a},123:function(e,t,o){(e.exports=o(21)(!1)).push([e.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}.default use[data-v-031dd2ca]{color:#7B1FA2;stroke:#7B1FA2}.chosen use[data-v-031dd2ca]{color:#FF9800;stroke:#FF9800}.user-name-game-end[data-v-031dd2ca],.message-school[data-v-031dd2ca],.message-game[data-v-031dd2ca],.offline-save-message[data-v-031dd2ca]{font-family:"Quicksand","Verdana",sans-serif}.user-name-game-end span[data-v-031dd2ca]{color:#FF9800}.message-school[data-v-031dd2ca]{line-height:1.5}.offline-save-message[data-v-031dd2ca]{font-size:1.2em}\n',""])},138:function(e,t,o){"use strict";o.r(t);o(55),o(87),o(35),o(91);var s=o(23),a=o(25),n=o(90),r=o(89),c=o(108);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var i={components:{closeBtn:r.a,NetworkCheck:c.a},data:function(){return{message:"Game over,",messageText:"Your score is",graduationMessage:"You can't even finish the school.",schoolScoreMessage:"Your score is",userName:"",highestScore:null,networkProblemDialog:!1,tryAgainBtnLoading:!1,offlineSaveUserMessage:"You are offline,\n        connect to the internet to save results.\n        If you choose to cancel, results are saved\n        in local storage and will be saved to DB\n        next time you finish the game.",hiscoreGreeting:"Your highest score is",exclamation:"!",lastScores:"",schoolScores:"",dbUsersCollRef:"users"}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),s.forEach(function(t){l(e,t,o[t])})}return e}({},Object(s.c)(["getTotalScore","getSchoolScore","getCurrentGameState","getDefaultUserName","getUserData"])),mounted:function(){var e=this;this.$nextTick(function(){console.log("Game over."),e.getUserData.isAuthenticated?e.userName=localStorage.getItem("userName"):e.userName=e.getDefaultUserName,e.getCurrentGameState.gameInProgress?(""===localStorage.getItem("highestScore")?(console.log("No local storage score array exist yet, creating one"),e.highestScore=e.getTotalScore,localStorage.setItem("highestScore",e.getTotalScore),e.addScoreToDatabase()):(e.lastScores=localStorage.getItem("lastScoresArray"),e.schoolScores=localStorage.getItem("schoolScores"),e.highestScore=localStorage.getItem("highestScore"),e.addScoreToDatabase()),a.a.commit("stopGame")):console.log("Nothing to record, play the game.")})},methods:{restartGame:function(){console.log("Restarting game."),a.a.commit("resetState"),this.$router.push("/game")},addScoreToDatabase:function(){console.log("Adding score."),""===this.lastScores?this.lastScores=[]:this.lastScores=this.lastScores.split(","),""===this.schoolScores?this.schoolScores=[]:this.schoolScores=this.schoolScores.split(","),this.getTotalScore>this.highestScore?(this.highestScore=this.getTotalScore,localStorage.setItem("highestScore",this.getTotalScore)):console.log("Your score is not so high: ".concat(this.getTotalScore)),this.getCurrentGameState.schoolCompleted?(this.lastScores.push(this.getTotalScore),localStorage.setItem("lastScoresArray",this.lastScores),this.schoolScores.push(this.getSchoolScore),localStorage.setItem("schoolScores",this.schoolScores)):(this.schoolScores.push(this.getSchoolScore),localStorage.setItem("schoolScores",this.schoolScores)),this.getUserData.isAuthenticated?this.getUserData.isAuthenticated&&this.isOnline?(console.log("User is authenticated and network is online. Syncing with firestore."),this.syncScoreWithFirestore()):this.getUserData.isAuthenticated&&!this.isOnline&&this.getCurrentGameState.gameInProgress?(console.log("User is authenticated but network is offline."),this.toggleNetworkProblemDialog()):console.log("Something went wrong in the piping system."):console.log("Anonymous! To save results please register.")},syncScoreWithFirestore:function(){var e=this;this.tryAgainBtnLoading=!this.tryAgainBtnLoading,console.log("Syncing score for user ".concat(localStorage.getItem("userName")));var t=localStorage.getItem("userUid");n.a.collection(this.dbUsersCollRef).where("uid","==",t).get().then(function(e){var o;return e.forEach(function(e){e.data().uid===t&&(o=e.id)}),o}).then(function(t){var o=n.a.collection(e.dbUsersCollRef).doc(t),s=localStorage.getItem("lastScoresArray"),a=localStorage.getItem("highestScore"),r=localStorage.getItem("schoolScores");return o.update({resultsArray:s,schoolResultsArray:r,hiScore:a}),console.log("...updating user stats"),e.tryAgainBtnLoading=!e.tryAgainBtnLoading,e.networkProblemDialog=!1,!0}).catch(function(t){e.tryAgainBtnLoading=!e.tryAgainBtnLoading,console.log("Error getting documents: ",t)})},toggleNetworkProblemDialog:function(){this.networkProblemDialog=!this.networkProblemDialog}}},g=(o(122),o(33)),u=Object(g.a)(i,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{id:"endGame","fill-height":""}},[o("v-layout",{attrs:{column:""}},[o("closeBtn"),e._v(" "),o("v-flex",{staticClass:"user-name-game-end text-xs-center"},[o("h1",[e._v("\n        "+e._s(e.message)),o("br"),e._v(" "),o("span",[e._v(e._s(e.userName)+e._s(e.exclamation))])])]),e._v(" "),e.getCurrentGameState.schoolCompleted?e._e():o("v-flex",{staticClass:"message-school text-xs-center"},[o("h3",[e._v(e._s(e.graduationMessage))]),e._v(" "),o("h2",[e._v(e._s(e.schoolScoreMessage)+" "+e._s(e.getTotalScore))])]),e._v(" "),e.getCurrentGameState.schoolCompleted?o("v-flex",{staticClass:"message-game text-xs-center"},[o("h2",[e._v(e._s(e.messageText)+" "+e._s(e.getTotalScore))])]):e._e(),e._v(" "),o("v-layout",{attrs:{row:"","align-center":"","justify-space-around":""}},[o("v-flex",{staticClass:"text-xs-center",attrs:{"d-flex":"",xs5:"",lg2:""}},[o("v-btn",{attrs:{ripple:"",outline:"",color:"orange"},on:{click:e.restartGame}},[o("v-icon",{attrs:{medium:"",color:"orange"}},[e._v("\n            replay\n          ")]),e._v("\n          restart\n        ")],1)],1),e._v(" "),o("v-flex",{staticClass:"text-xs-center",attrs:{"d-flex":"",xs5:"",lg2:""}},[o("v-btn",{attrs:{ripple:"",outline:"",color:"purple darken-1",to:"/userstats"}},[o("v-icon",{attrs:{medium:"",color:"purple darken-1"}},[e._v("\n            trending_up\n          ")]),e._v("\n          stats\n        ")],1)],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{width:"20em"},model:{value:e.networkProblemDialog,callback:function(t){e.networkProblemDialog=t},expression:"networkProblemDialog"}},[o("v-card",{staticClass:"text-xs-center"},[o("v-flex",{staticStyle:{height:"3em"}},[o("NetworkCheck")],1),e._v(" "),o("v-card-text",{staticClass:"text-xs-center offline-save-message"},[e._v("\n        "+e._s(e.offlineSaveUserMessage)+"\n      ")]),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"orange",outline:"",loading:e.tryAgainBtnLoading},on:{click:e.syncScoreWithFirestore}},[o("v-icon",{attrs:{color:"orange"}},[e._v("\n            done\n          ")]),e._v("\n          Try again\n        ")],1),e._v(" "),o("v-btn",{attrs:{outline:"",ripple:"",color:"purple darken-1"},on:{click:function(t){e.networkProblemDialog=!1}}},[o("v-icon",{attrs:{color:"purple darken-1"}},[e._v("\n            cancel\n          ")]),e._v("\n          Cancel\n        ")],1),e._v(" "),o("v-spacer")],1)],1)],1)],1)},[],!1,null,"031dd2ca",null);t.default=u.exports},87:function(e,t,o){var s=o(36),a=o(13);o(88)("keys",function(){return function(e){return a(s(e))}})},88:function(e,t,o){var s=o(22),a=o(12),n=o(6);e.exports=function(e,t){var o=(a.Object||{})[e]||Object[e],r={};r[e]=t(o),s(s.S+s.F*n(function(){o(1)}),"Object",r)}},89:function(e,t,o){"use strict";var s={name:"CloseBtn"},a=o(33),n=Object(a.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-flex",{staticClass:"text-xs-right"},[o("v-btn",{attrs:{small:"",icon:"",fab:"",dark:""},on:{click:function(t){return e.$router.go(-1)}}},[o("v-icon",{attrs:{size:"3em",color:"#79008f"}},[e._v("\n      close\n    ")])],1)],1)},[],!1,null,null,null);t.a=n.exports},90:function(e,t,o){"use strict";var s=o(15),a=o.n(s);o(95);a.a.firestore().settings({timestampsInSnapshots:!0}),t.a=a.a.firestore()},91:function(e,t,o){o(92)("split",2,function(e,t,s){"use strict";var a=o(93),n=s,r=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var c=void 0===/()??/.exec("")[1];s=function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!a(e))return n.call(o,e,t);var s,l,i,g,u,f=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?4294967295:t>>>0,v=new RegExp(e.source,h+"g");for(c||(s=new RegExp("^"+v.source+"$(?!\\s)",h));(l=v.exec(o))&&!((i=l.index+l[0].length)>d&&(f.push(o.slice(d,l.index)),!c&&l.length>1&&l[0].replace(s,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(l[u]=void 0)}),l.length>1&&l.index<o.length&&r.apply(f,l.slice(1)),g=l[0].length,d=i,f.length>=m));)v.lastIndex===l.index&&v.lastIndex++;return d===o.length?!g&&v.test("")||f.push(""):f.push(o.slice(d)),f.length>m?f.slice(0,m):f}}else"0".split(void 0,0).length&&(s=function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)});return[function(o,a){var n=e(this),r=null==o?void 0:o[t];return void 0!==r?r.call(o,n,a):s.call(String(n),o,a)},s]})},92:function(e,t,o){"use strict";var s=o(4),a=o(14),n=o(6),r=o(38),c=o(3);e.exports=function(e,t,o){var l=c(e),i=o(r,l,""[e]),g=i[0],u=i[1];n(function(){var t={};return t[l]=function(){return 7},7!=""[e](t)})&&(a(String.prototype,e,g),s(RegExp.prototype,l,2==t?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}))}},93:function(e,t,o){var s=o(10),a=o(37),n=o(3)("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},94:function(e,t,o){var s=o(100);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,o(34).default)("f79b76b0",s,!0,{})},99:function(e,t,o){"use strict";var s=o(94);o.n(s).a}}]);
//# sourceMappingURL=endgame.c03ab5c35b36179e9ee1.js.map