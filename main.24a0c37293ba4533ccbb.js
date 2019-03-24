(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5Yqj":function(e,t,a){var r=a("s9wI");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("SZ7m").default)("13ddf194",r,!0,{})},"9UzC":function(e,t,a){"use strict";var r={name:"NetworkCheck",components:{cloudOffIcon:{functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...f},o.concat([a("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),a("path",{attrs:{fill:"currentColor",d:"M19.35 10.04A7.49 7.49 0 0 0 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46a5.497 5.497 0 0 1 8.05 4.87v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"}})]))}},doneIcon:a("DC3s").a},data:function(){return{offlineMessage:!1}},computed:{networkStatus:function(){return this.isOnline?"ok":null}}},n=a("KHd+"),o=Object(n.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.networkStatus?e._e():a("v-dialog",{attrs:{width:"20em"},model:{value:e.offlineMessage,callback:function(t){e.offlineMessage=t},expression:"offlineMessage"}},[a("v-btn",{attrs:{slot:"activator",small:"",icon:"","aria-label":"network check"},slot:"activator"},[a("cloudOffIcon",{staticClass:"highlighted blink"})],1),e._v(" "),a("v-card",{staticClass:"dialog"},[a("v-card-text",{staticClass:"default-text-color"},[e._v("\n      Check your connection before saving results.\n    ")]),e._v(" "),a("v-card-actions",[a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{staticClass:"button",attrs:{color:"purple darken-2",flat:"",outline:"",ripple:""},on:{click:function(t){e.offlineMessage=!1}}},[a("doneIcon")],1)],1)],1)],1)],1)},[],!1,null,null,null);t.a=o.exports},B6RA:function(e,t,a){"use strict";a("VRzm");var r=a("oCYn"),n=a("L2JU"),o=(a("rE2o"),a("ioFf"),a("rGqo"),{getCurrentGameState:function(e){return{schoolCompleted:e.schoolCompleted,currentGameTurn:e.currentGameTurn,currentRollCount:e.rollCount,rollsCountForButton:e.rollCount,newTurn:e.newTurn}},progressBarState:function(e){var t=3*(e.rollCount-3)*11.075,a=Math.round(Math.abs(t));return a||0},mainButtonIsRolling:function(e){return!e.newTurn&&2===e.rollCount||1===e.rollCount},getDiceIds:function(e){var t=e.scoreArray.slice(0,e.diceArray.length+1),a=[],r=!0,n=!1,o=void 0;try{for(var s,l=t[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var i=s.value;a.push(i.icon)}}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a},getDiceArray:function(e){return e.diceArray},getSchoolArray:function(e){return e.scoreArray.slice(0,e.diceArray.length+1)},isGameEnded:function(e){return e.gameOver},isNewTurn:function(e){return e.newTurn},isLastResultSaved:function(e){return e.user.lastResultSaved},getCombinationArray:function(e){return e.scoreArray.slice(e.diceArray.length+1,e.scoreArray.length)},getMaxPossibleScore:function(e){return e.maxPossibleScore},getUserAuthState:function(e){return e.user.isAuthenticated},getUserData:function(e){return e.user},getTotalScore:function(e){return e.schoolScoreTotal+e.gameTotal},getSchoolScore:function(e){return e.schoolScoreTotal},getDefaultUserName:function(e){return e.defaultUserName},schoolFinished:function(e){return e.schoolCompleted},error:function(e){return e.error}}),s=(a("91GP"),a("Vd3H"),{computeScore:function(e){if(e.newTurn)return!1;var t=[[],[],[],[],[],[]];if(e.combinationArray.length>0){for(var a in e.combinationArray)switch(e.combinationArray[a]){case 1:t[0].push(e.combinationArray[a]);break;case 2:t[1].push(e.combinationArray[a]);break;case 3:t[2].push(e.combinationArray[a]);break;case 4:t[3].push(e.combinationArray[a]);break;case 5:t[4].push(e.combinationArray[a]);break;case 6:t[5].push(e.combinationArray[a]);break;default:return console.log("Can't create array to analyse."),!1}if(e.schoolCompleted){var r=[],n=[],o=[],s=[],l=function(e,t){return e+t};for(var i in t){var c=t[i][0];if(c){if(2===t[c-1].length&&r.push(c),3===t[c-1].length&&n.push(c),4===t[c-1].length&&o.push(c),(r.length>=1||n.length>=1)&&!e.scoreArray[6].final){var u=0;if(r.length>0&&(u=2*r[0],e.scoreArray[6].value=u),r.length>1?(u=r[0]>r[1]?2*r[0]:2*r[1],e.scoreArray[6].value=u):1===r.length&&(u=2*r[0],e.scoreArray[6].value=u),1===n.length){var f=2*n[0];e.scoreArray[6].value=f>u?f:u}}else e.scoreArray[6].final||(e.scoreArray[6].value="");if(2!==r.length||e.scoreArray[7].final)if(1!==r.length||1!==n.length||e.scoreArray[7].final)r.length<2&&!e.scoreArray[7].final&&(e.scoreArray[7].value="");else{var d=2*r[0]+2*n[0];e.scoreArray[7].value=d}else e.scoreArray[7].value=2*r[0]+2*r[1];1!==n.length||e.scoreArray[8].final?e.scoreArray[8].final||(e.scoreArray[8].value=""):e.scoreArray[8].value=3*n[0],1!==n.length||1!==r.length||e.scoreArray[9].final?e.scoreArray[9].final||(e.scoreArray[9].value=""):e.scoreArray[9].value=3*n[0]+2*r[0],o>=1?(e.scoreArray[10].final||(e.scoreArray[10].value=4*o[0]),e.scoreArray[8].final||(e.scoreArray[8].value=3*o[0]),e.scoreArray[6].final||(e.scoreArray[6].value=2*o[0])):e.scoreArray[10].final||(e.scoreArray[10].value=""),5!==t[c-1].length||e.scoreArray[11].final?e.scoreArray[11].final||(e.scoreArray[11].value=""):(e.scoreArray[11].value=5*c+80,e.scoreArray[10].final||(e.scoreArray[10].value=4*t[c-1]),e.scoreArray[8].final||(e.scoreArray[8].value=3*t[c-1]),e.scoreArray[6].final||(e.scoreArray[6].value=2*t[c-1])),1===t[c-1].length&&(s.push(c),5===s.length?(s.sort(),1!==s[0]||5!==s[s.length-1]||e.scoreArray[12].final?2!==s[0]||6!==s[s.length-1]||e.scoreArray[13].final||(e.scoreArray[13].value=s.reduce(l)):e.scoreArray[12].value=s.reduce(l)):(e.scoreArray[12].value="",e.scoreArray[13].value=""));var h=e.combinationArray.reduce(l);e.scoreArray[14].final?e.scoreArray[14].final||(e.scoreArray[14].value=""):e.scoreArray[14].value=h}}}else{var m;for(var v in t){var y=t[v][0];y||!0===e.scoreArray[v].final||(e.scoreArray[v].value=""),m=3===t[v].length?0:(t[v].length-3)*t[v][0],y&&!0!==e.scoreArray[y-1].final&&(e.scoreArray[y-1].value=m)}}}else if(0===e.combinationArray.length)for(var g in console.log("Ain't got shit, captain"),e.scoreArray)!0!==e.scoreArray[g].final&&(e.scoreArray[g].value="");return!0},saveResultInStore:function(e,t){console.log("Saving to store...");var a=e.scoreArray.map(function(e){return e.id}).indexOf(t);if(e.schoolCompleted||e.newTurn)return e.schoolCompleted&&!e.newTurn?(""!==e.scoreArray[a].value&&!e.scoreArray[a].final&&e.scoreArray[a].displayValues.length<3&&(console.log("Saved game result."),e.scoreArray[a].displayValues.push(e.scoreArray[a].value),e.gameTotal+=e.scoreArray[a].value,e.newTurn=!0),e.newTurn||""!==e.scoreArray[a].value||e.scoreArray[a].final||0!==e.rollCount||e.zeroCheck?console.log("You still have a chance to score."):(console.log("Saved zero."),e.scoreArray[a].displayValues.length<3&&(e.scoreArray[a].displayValues.push(0),e.zeroCheck=!0,e.newTurn=!0)),e.currentGameTurn===e.maxGameTurns&&e.newTurn&&(console.log("Last save!"),e.gameOver=!0),3===e.scoreArray[a].displayValues.length&&(console.log("Setting combination final."),e.scoreArray[a].final=!0,e.scoreArray[a].value=""),!0):(console.log("No new turn."),!1);e.scoreArray[a].final||""===e.scoreArray[a].value?console.log("You clicked on an empty field\nand you can't save zero to school combination."):(console.log("Saved school result."),e.scoreArray[a].final=!0,e.schoolScoreTotal+=e.scoreArray[a].value,6===e.currentGameTurn&&(e.schoolCompleted=!0),e.newTurn=!0)},setDiceChosenState:function(e,t){for(var a in e.diceArray)if(e.diceArray[a].id===t)if(e.diceArray[a].chosen){e.diceArray[a].chosen=!1;var r=e.diceArray[a].value,n=e.combinationArray.indexOf(r);e.combinationArray.splice(n,1)}else e.combinationArray.push(e.diceArray[a].value),e.diceArray[a].chosen=!0},rollDice:function(e){e.rollCount--,e.newTurn=!1;var t,a=!0,r=!1,n=void 0;try{for(var o,s=e.diceArray[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var l=o.value;if(!l.chosen){var i=(t=6,Math.floor(Math.random()*Math.floor(t))+1);l.value=i,l.currentIcon=e.scoreArray[i-1].icon}}}catch(e){r=!0,n=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}if(0===e.rollCount&&e.currentGameTurn<=6&&!e.schoolCompleted){e.gameOver=!0;for(var c=[],u=0;u<=5;u++)""!==e.scoreArray[u].value&&e.scoreArray[u].final||c.push(u+1);for(var f=0;f<c.length;f++){var d=c[f];for(var h in e.diceArray)e.diceArray[h].value===d&&(e.gameOver=!1,console.log("All ok, one dice found with id ".concat(e.diceArray[h].id,", with value ").concat(e.diceArray[h].value)))}}},nextTurn:function(e){for(var t in e.zeroCheck=!1,e.currentGameTurn++,e.rollCount=3,e.diceArray)e.diceArray[t].value="#",e.diceArray[t].chosen=!1;e.combinationArray=[]},resetState:function(e){Object.assign(e,{currentGameTurn:1,rollCount:3,maxGameTurns:33,newTurn:!0,schoolCompleted:!1,gameOver:!1,zeroCheck:!1,schoolScoreTotal:0,gameTotal:0,combinationArray:[]});var t=e.user;Object.assign(t,{lastResultSaved:!1});var a=!0,r=!1,n=void 0;try{for(var o,s=e.scoreArray[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var l=o.value;l.value="",l.final=!1,l.displayValues&&(l.displayValues=[])}}catch(e){r=!0,n=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}var i=!0,c=!1,u=void 0;try{for(var f,d=e.diceArray[Symbol.iterator]();!(i=(f=d.next()).done);i=!0){var h=f.value;h.value="#",h.chosen=!1}}catch(e){c=!0,u=e}finally{try{i||null==d.return||d.return()}finally{if(c)throw u}}},setUserIsLoggedIn:function(e,t){var a={isAuthenticated:t},r=e.user;Object.assign(r,a)},setLastSave:function(e,t){var a={lastResultSaved:t},r=e.user;Object.assign(r,a)},resetGameOver:function(e,t){e.gameOver=t},clearResultBox:function(e){for(var t in e.scoreArray)e.scoreArray[t].final||(e.scoreArray[t].value="");for(var a in e.diceArray)e.diceArray[a].chosen&&(e.diceArray[a].chosen=!1)},setErrorMessage:function(e,t){e.error=!1!==t&&t}});r.default.use(n.a);var l={defaultUserName:"Anonymous",user:{isAuthenticated:!1,lastResultSaved:!1},error:!1,currentGameTurn:1,rollCount:3,maxGameTurns:33,maxPossibleScore:879,newTurn:!0,schoolCompleted:!1,gameOver:!1,zeroCheck:!1,schoolScoreTotal:0,gameTotal:0,debug:!1,combinationArray:[],scoreArray:[{value:"",final:!1,id:"ones",icon:"diceOnes"},{value:"",final:!1,id:"twos",icon:"diceTwos"},{value:"",final:!1,id:"threes",icon:"diceThrees"},{value:"",final:!1,id:"fours",icon:"diceFours"},{value:"",final:!1,id:"fives",icon:"diceFives"},{value:"",final:!1,id:"sixes",icon:"diceSixes"},{value:"",displayValues:[],final:!1,id:"pair",fullName:"Pair"},{value:"",displayValues:[],final:!1,id:"twoPairs",fullName:"Two Pairs"},{value:"",displayValues:[],final:!1,id:"threeOfAKind",fullName:"Three O.A.K"},{value:"",displayValues:[],final:!1,id:"full",fullName:"Full"},{value:"",displayValues:[],final:!1,id:"quads",fullName:"Quads"},{value:"",displayValues:[],final:!1,id:"poker",fullName:"Poker"},{value:"",displayValues:[],final:!1,id:"small",fullName:"Small"},{value:"",displayValues:[],final:!1,id:"large",fullName:"Large"},{value:"",displayValues:[],final:!1,id:"chance",fullName:"Chance"}],diceArray:[{value:"#",chosen:!1,id:"first",currentIcon:"diceOnes"},{value:"#",chosen:!1,id:"second",currentIcon:"diceTwos"},{value:"#",chosen:!1,id:"third",currentIcon:"diceThrees"},{value:"#",chosen:!1,id:"fourth",currentIcon:"diceFours"},{value:"#",chosen:!1,id:"fifth",currentIcon:"diceFives"}]},i={setCurrentIcon:function(e){return(0,e.commit)("setCurrentIcon")},setLastSave:function(e,t){var a=e.commit;return new Promise(function(e){a("setLastSave",t),e()})},resetGameOver:function(e,t){var a=e.commit;return new Promise(function(e){a("resetGameOver",t),e()})},setGameOverDialog:function(e,t){var a=e.commit;return new Promise(function(e){a("setGameOverDialog",t),e()})},clearResultBox:function(e){var t=e.commit;return new Promise(function(e){t("clearResultBox"),e()})},saveResultInStore:function(e,t){var a=e.commit;return new Promise(function(e){a("saveResultInStore",t),e()})},computeScore:function(e){var t=e.commit;return new Promise(function(e){t("computeScore"),e()})},setErrorMessage:function(e,t){var a=e.commit;return new Promise(function(e){a("setErrorMessage",t),e()})},resetGameState:function(e){return(0,e.commit)("resetState")},rollDice:function(e){return(0,e.commit)("rollDice")},nextTurn:function(e){return(0,e.commit)("nextTurn")}};t.a=new n.a.Store({state:l,getters:o,mutations:s,actions:i})},DC3s:function(e,t,a){"use strict";t.a={functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...f},o.concat([a("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),a("path",{attrs:{fill:"currentColor",d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}})]))}}},Pf3K:function(e,t,a){"use strict";a.r(t);a("rGqo"),a("yt8O"),a("RW0V");var r=a("L2JU"),n=a("9UzC"),o={functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24"},u),...f},o.concat([a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})]))}},s={functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...f},o.concat([a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{fill:"currentColor",d:"M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"}})]))}},l=a("nPhw"),i={functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...f},o.concat([a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{fill:"currentColor",d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}})]))}},c={functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...f},o.concat([a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{fill:"currentColor",d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}})]))}},u={functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...f},o.concat([a("path",{attrs:{fill:"currentColor",d:"M8 5v14l11-7z"}}),a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]))}},f={functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...f},o.concat([a("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),a("path",{attrs:{fill:"currentColor",d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}})]))}};function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h={name:"Navbar",components:{NetworkCheck:n.a,settingsIcon:o,helpIcon:f,userStatsIcon:s,leaderBoardIcon:l.a,logInOutIcon:i,backIcon:c,playIcon:u},data:function(){return{navDrawer:!1,navDrawerLinks:[{path:"/game",icon:"playIcon",text:"Play"},{path:"/userstats",icon:"userStatsIcon",text:"User stats"},{path:"/leaderboard",icon:"leaderBoardIcon",text:"Leaderboard"},{path:"/help",icon:"helpIcon",text:"Help"},{path:"/login",icon:"logInOutIcon",text:"Log in/out"}]}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){d(e,t,a[t])})}return e}({},Object(r.c)(["getDefaultUserName","getTotalScore"]),{gameName:function(){return"Sharlushka"},currentUserName:function(){return localStorage.hasOwnProperty("userName")?localStorage.getItem("userName"):this.getDefaultUserName}}),methods:{manipulateDrawer:function(){this.navDrawer=!this.navDrawer}}},m=(a("xgod"),a("KHd+")),v={name:"App",components:{navBar:Object(m.a)(h,function(){var e=this,t=e.$createElement,a=e._self._c||t;return["MainPage"].includes(e.$route.name)?e._e():a("nav",[a("v-toolbar",{attrs:{app:"",height:"40",color:"purple darken-2"}},[a("v-layout",{staticClass:"toolbar",attrs:{"justify-space-around":""}},[a("v-flex",{staticClass:"score",attrs:{xs3:"","pl-2":""}},[e._v("\n        "+e._s(e.getTotalScore)+"\n      ")]),e._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-toolbar-title",{staticClass:"game-name"},[a("router-link",{attrs:{to:{path:"/"}}},[e._v("\n            "+e._s(e.gameName)+"\n          ")])],1)],1),e._v(" "),a("v-flex",{attrs:{xs3:""}},[a("v-toolbar-items",{staticClass:"toolbar-tems"},[a("v-layout",{attrs:{"justify-end":""}},[a("NetworkCheck"),e._v(" "),a("v-btn",{staticClass:"settings-button",attrs:{icon:"",small:"","aria-label":"settings"},on:{click:e.manipulateDrawer}},[a("settingsIcon",{staticClass:"settings-icon"})],1)],1)],1)],1)],1)],1),e._v(" "),a("v-navigation-drawer",{staticClass:"navigation-drawer",attrs:{app:"",right:""},model:{value:e.navDrawer,callback:function(t){e.navDrawer=t},expression:"navDrawer"}},[a("v-list",{attrs:{"pa-0":""}},[a("v-list-tile",{staticClass:"pb-3",on:{click:e.manipulateDrawer}},[a("v-list-tile-action",[a("v-layout",{attrs:{"justify-center":""}},[a("backIcon",{staticClass:"highlighted"})],1)],1),e._v(" "),a("v-list-tile-title",{staticClass:"drawer-menu-item"},[e._v("\n          Back\n        ")])],1),e._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-flex",{staticClass:"text-xs-center"},[a("NetworkCheck")],1)],1),e._v(" "),a("v-list-tile-content",{staticClass:"drawer-menu-item pa-0 user-name"},[e._v("\n          Hi, "+e._s(e.currentUserName)+".\n        ")])],1),e._v(" "),e._l(e.navDrawerLinks,function(t){return a("v-list-tile",{key:t.path,class:t.path===e.$route.path?"active-link":"",attrs:{to:{path:t.path},"active-class":"active-link"},on:{click:function(t){e.navDrawer=!1}}},[a("v-list-tile-action",[a("v-layout",{attrs:{"justify-center":""}},[a(t.icon,{tag:"component",staticClass:"nav-drawer-link-icon",class:t.path===e.$route.path?"active-link":"",attrs:{"active-class":"active-link"}})],1)],1),e._v(" "),a("v-list-tile-title",{staticClass:"drawer-menu-item subheading"},[e._v("\n          "+e._s(t.text)+"\n        ")])],1)})],2)],1)],1)},[],!1,null,"033f6c78",null).exports},mounted:function(){this.$nextTick(function(){console.log("App started.")})}},y=(a("cbTO"),a("XGSU"),Object(m.a)(v,function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("navBar"),this._v(" "),t("v-content",[t("v-container",{attrs:{"ma-0":"","pa-0":"","fill-height":""}},[t("transition",{attrs:{name:"custom-classes-transition",mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOutDown fast"}},[t("router-view")],1)],1)],1)],1)},[],!1,null,null,null));t.default=y.exports},XFlr:function(e,t,a){(t=e.exports=a("JPst")(!1)).i(a("vX03"),""),t.push([e.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}*{font-family:"Quicksand","Verdana",sans-serif}.highlighted{color:#FF9800 !important}.default-icon-color{color:#7B1FA2}.button{border-radius:.3em;line-height:2em}.button-icon-margin{margin:.3em}.dialog{font-size:1.3em;border-radius:.3em;border:0.1em solid #7B4B9D !important}.input-icon{color:#e4c2ff}.default-text-color{color:#7B1FA2}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{from{opacity:.9}to{opacity:.2;transform:translate3d(0, 100%, 0)}}.fadeOutDown{animation-name:fadeOutDown}.blink{color:#a0f;font-weight:700;animation:blinker 3s ease-out infinite}.blink:hover{color:#FF9800;animation:none}@keyframes blinker{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes bounce{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transform:translate3d(0, 0, 0)}40%,43%{animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);transform:translate3d(0, -25px, 0)}70%{animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);transform:translate3d(0, -12px, 0)}90%{transform:translate3d(0, -4px, 0)}}.bounce{animation-name:bounce;transform-origin:center bottom}.animated.fast{animation-duration:1100ms}.animated{animation-duration:.7s;animation-fill-mode:both}.animated.delay-s{animation-delay:.5s}@media (prefers-reduced-motion){.animated{animation:unset !important;transition:none !important}}#app{background:#ffffff}.ct-series-a .ct-point{stroke:#AA00FF;stroke-width:.2em}.ct-series-a .ct-line{stroke:#E1BEE7;stroke-width:.06em}.ct-series-a .ct-bar{stroke:#AA00FF;stroke-width:.25em}.ct-nodata{visibility:hidden;height:0em}@media only screen and (max-width: 959px){.v-toolbar__content,.v-toolbar__extension{padding:0 0px}}\n',""])},XGSU:function(e,t,a){"use strict";var r=a("gYZP");a.n(r).a},gYZP:function(e,t,a){var r=a("XFlr");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("SZ7m").default)("34e82662",r,!0,{})},nPhw:function(e,t,a){"use strict";t.a={functional:!0,render(e,t){const{_c:a,_v:r,data:n,children:o=[]}=t,{class:s,staticClass:l,style:i,staticStyle:c,attrs:u={},...f}=n;return a("svg",{class:[s,l],style:[i,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},u),...f},o.concat([a("path",{attrs:{fill:"currentColor",d:"M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"}}),a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]))}}},s9wI:function(e,t,a){(e.exports=a("JPst")(!1)).push([e.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}.game-name[data-v-033f6c78]{display:flex;justify-content:center;align-items:center;align-content:center;height:100%;margin-left:0px !important}.game-name a[data-v-033f6c78]{color:#e4c2ff;font-size:1.1em;font-family:"Quicksand","Verdana",sans-serif;text-transform:capitalize;text-decoration:none}.settings-icon[data-v-033f6c78]{fill:white}.navigation-drawer[data-v-033f6c78]{font-family:"Quicksand","Verdana",sans-serif;border-left:2px solid #7B1FA2}.drawer-menu-item[data-v-033f6c78]{font-family:"Quicksand","Verdana",sans-serif;font-weight:700;font-size:1.4em;color:#301246}.user-name[data-v-033f6c78]{color:#7B1FA2;font-size:2em}.score[data-v-033f6c78]{color:#fff;font-size:2em;font-family:"Quicksand","Verdana",sans-serif}.nav-drawer-link-icon[data-v-033f6c78]{color:#7B1FA2}.active-link[data-v-033f6c78]{color:#FF9800}.highlighted[data-v-033f6c78]{color:#FF9800}\n',""])},tjUo:function(e,t,a){"use strict";a.r(t);var r=a("oCYn"),n=a("zlta"),o=a.n(n),s=a("Pf3K"),l=a("jE9Z");r.default.use(l.a);var i=new l.a({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"MainPage",component:function(){return a.e(12).then(a.bind(null,"Q4Xg"))}},{path:"/register",name:"Register",component:function(){return Promise.all([a.e(1),a.e(2),a.e(5),a.e(24)]).then(a.bind(null,"c8+F"))}},{path:"/userstats",name:"UserStats",component:function(){return Promise.all([a.e(0),a.e(26)]).then(a.bind(null,"rFDy"))}},{path:"/game",name:"Game",component:function(){return Promise.all([a.e(4),a.e(3),a.e(7)]).then(a.bind(null,"fTas"))}},{path:"/endgame",name:"EndGame",component:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(6)]).then(a.bind(null,"C90p"))}},{path:"/help",name:"Help",component:function(){return Promise.all([a.e(4),a.e(8)]).then(a.bind(null,"w+8P"))}},{path:"/settings",name:"Settings",component:function(){return Promise.all([a.e(0),a.e(26)]).then(a.bind(null,"JtMT"))}},{path:"/login",name:"Login",component:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(5),a.e(10)]).then(a.bind(null,"pVsz"))}},{path:"/leaderboard",name:"LeaderBoard",component:function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(9)]).then(a.bind(null,"aVAT"))}}]}),c=a("B6RA"),u=a("v072"),f=a.n(u),d=a("Wcq6"),h=a.n(d);a("6nsN");r.default.config.productionTip=!0,r.default.use(o.a),r.default.use(f.a),h.a.apps.length||h.a.initializeApp({apiKey:"AIzaSyD_vlh1xLKAAZPtwDcEvBuHNWRja6J0Zo0",authDomain:"sharlushka.firebaseapp.com",databaseURL:"https://sharlushka.firebaseio.com",projectId:"sharlushka",storageBucket:"sharlushka.appspot.com",messagingSenderId:"1059637672503"}),h.a.auth().onAuthStateChanged(function(e){e?(console.log("User is logged in: ".concat(e.email,".")),c.a.commit("setUserIsLoggedIn",!0)):(console.log("User is not logged in. Hi, Anonymous."),localStorage.hasOwnProperty("userName")||(localStorage.setItem("userName","Anonymous"),localStorage.setItem("userUid",""),localStorage.setItem("highestScore",""),localStorage.setItem("lastScoresArray",""),localStorage.setItem("schoolScores","")))}),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)},function(e){console.log("ServiceWorker registration failed: ",e)})}),r.default.use(a("hLWi")),new r.default({el:"#app",store:c.a,router:i,components:{AsyncComponent:function(){return Promise.resolve().then(a.bind(null,"Pf3K"))}},render:function(e){return e(s.default)}})},xgod:function(e,t,a){"use strict";var r=a("5Yqj");a.n(r).a}},[["tjUo",25,0,1,22,13,21,14,15,17,18,19,20,16,23]]]);
//# sourceMappingURL=main.24a0c37293ba4533ccbb.js.map