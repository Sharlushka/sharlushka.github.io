(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5E5M":function(t,e,a){var n=a("oDMo");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("SZ7m").default)("d0d8c762",n,!0,{})},EAko:function(t,e,a){"use strict";var n=a("5E5M");a.n(n).a},EUGD:function(t,e,a){(t.exports=a("JPst")(!1)).push([t.i,"p[data-v-268ac4b4]{margin:0}.school-dice-layout[data-v-268ac4b4],.school-dice-icon[data-v-268ac4b4]{padding:0em .15em 0em .15em}.game-layout[data-v-268ac4b4]{transition:background-color 1s ease-in;padding:.3em 0em .3em 0em;color:#7B1FA2}.school-results-layout[data-v-268ac4b4]{height:1em;font-size:1.5em}.game-combinations-layout[data-v-268ac4b4]{font-size:1.8em}.game-combination[data-v-268ac4b4]{padding:.075em 0em .075em 0em}.accented[data-v-268ac4b4]{background-color:#f9f2ff}.background-transition[data-v-268ac4b4]{transition:background-color .6s ease-in}.chosen[data-v-268ac4b4]{color:#FF9800}.v-progress-linear[data-v-268ac4b4]{margin:0em;position:absolute;bottom:0}@keyframes blinker-data-v-268ac4b4{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 360px){.dice-icon[data-v-268ac4b4]{height:3.8em}.school-result[data-v-268ac4b4]{font-size:1.1em}.game-combination[data-v-268ac4b4]{font-size:1.05em}}@media screen and (orientation: landscape){.game-layout[data-v-268ac4b4]{flex-direction:row}.school-dice-layout[data-v-268ac4b4]{flex-direction:column;padding-left:1em}.school-dice-icon[data-v-268ac4b4]{width:3.8em}.school-results-layout[data-v-268ac4b4]{flex-direction:column;width:15%;padding-right:2em;height:auto}.game-combinations-layout[data-v-268ac4b4]{font-size:1.1em;width:60%}.game-combination[data-v-268ac4b4]{padding:0em}}@media screen and (max-resolution: 96dpi) and (min-width: 500px){.school-dice-icon[data-v-268ac4b4]{width:7em}.school-result[data-v-268ac4b4]{font-size:2.5em}.game-combination[data-v-268ac4b4]{font-size:2.5em}}@media screen and (-webkit-min-device-pixel-ratio: 3) and (min-width: 375px){.game-combination[data-v-268ac4b4]{font-size:1.3em}}@media screen and (-webkit-min-device-pixel-ratio: 3) and (min-width: 414px){.game-combination[data-v-268ac4b4]{font-size:1.35em}}@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px){.dice-icon[data-v-268ac4b4]{height:7em}.school-result[data-v-268ac4b4]{font-size:2.2em}.game-combination[data-v-268ac4b4]{font-size:1.7em}}@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px){.dice-icon[data-v-268ac4b4]{height:8em}.school-result[data-v-268ac4b4]{font-size:2.5em}.game-combination[data-v-268ac4b4]{font-size:2.3em}}\n",""])},dmz6:function(t,e,a){var n=a("EUGD");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("SZ7m").default)("2b420ae0",n,!0,{})},fTas:function(t,e,a){"use strict";a.r(e);a("rGqo"),a("yt8O"),a("RW0V");var n=a("L2JU"),o=(a("rE2o"),a("ioFf"),a("B6RA")),i=a("x5mw"),c=a("Izml"),r=a("yDpw"),s=a("PRtR"),l=a("nAgn"),d=a("2BQD"),u=a("Tdv1"),m={functional:!0,render(t,e){const{_c:a,_v:n,data:o,children:i=[]}=e,{class:c,staticClass:r,style:s,staticStyle:l,attrs:d={},...u}=o;return a("svg",{class:[c,r],style:[s,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},d),...u},i.concat([a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{fill:"currentColor",d:"M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}})]))}};function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v={name:"DiceBox",components:{diceOnes:i.a,diceTwos:c.a,diceThrees:r.a,diceFours:s.a,diceFives:l.a,diceSixes:d.a,restartIcon:u.a,saveIcon:m},data:function(){return{navigatorSupported:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){f(t,e,a[e])})}return t}({},Object(n.c)(["getDiceArray","getCurrentGameState","isGameEnded","isNewTurn","mainButtonIsRolling","isLastResultSaved"]),{mainButtonStateCheck:function(){return 0===o.a.state.rollCount}}),mounted:function(){var t=this;this.$nextTick(function(){console.log("Dice box mounted."),"vibrate"in navigator&&(t.navigatorSupported=!0)})},methods:{restartGame:function(){console.log("Restarting game."),o.a.commit("resetState")},vibrate:function(){if(!this.navigatorSupported)return!1;navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate([155,150,105,0])},animateDice:function(){var t=document.querySelectorAll(".game-dice:not(.chosen)"),e=!0,a=!1,n=void 0;try{for(var o,i=t[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var c=o.value;c.classList.add("blink"),c.offsetWidth,c.classList.remove("blink")}}catch(t){a=!0,n=t}finally{try{e||null==i.return||i.return()}finally{if(a)throw n}}},handleMainGameButtonClick:function(){this.$store.state.rollCount>0?(o.a.commit("rollDice"),this.animateDice()):0===this.$store.state.rollCount&&this.vibrate()},selectDice:function(t){if(this.isNewTurn)console.log("Roll some dice, duh.");else{this.$store.commit("setDiceChosenState",t),this.$store.dispatch("computeScore",t),this.$store.dispatch("saveFavDiceValue",t);var e=document.getElementById(t),a=e.parentElement,n=a.querySelectorAll(".chosen").length;a.insertBefore(e,a.childNodes[n])}}}},b=(a("EAko"),a("KHd+")),g=Object(b.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isGameEnded||t.isLastResultSaved?a("v-layout",{staticClass:"end-game-buttons",attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{"d-flex":"",xs6:""}},[t.isLastResultSaved?a("v-btn",{staticClass:"button",attrs:{flat:"",outline:"",ripple:"",color:"orange"},on:{click:function(e){return t.restartGame()}}},[a("restartIcon",{staticClass:"chosen button-icon-margin"}),t._v("\n      Restart\n    ")],1):a("v-btn",{staticClass:"button",attrs:{flat:"",outline:"",ripple:"",color:"purple darken-2",to:"/endgame"}},[a("saveIcon",{staticClass:"default-icon-color button-icon-margin"}),t._v("\n      Save\n    ")],1)],1)],1):a("v-layout",{staticClass:"dice-box-container",attrs:{"align-center":""}},[a("v-flex",{attrs:{xs9:""}},[t.getCurrentGameState.currentRollCount<=2?a("v-layout",{staticClass:"dice-icons-layout",attrs:{row:"","justify-space-around":"","fill-height":"","px-1":""}},t._l(t.getDiceArray,function(e){return a("v-flex",{key:e.id,staticClass:"game-dice animated slow fadeIn",class:{chosen:e.chosen},attrs:{id:e.id,"d-flex":"",shrink:""},on:{click:function(a){return t.selectDice(e.id)}}},[a(e.currentIcon,{tag:"component",staticClass:"dice-box-icon"})],1)}),1):t._e()],1),t._v(" "),a("v-flex",{staticClass:"main-button-container"},[a("v-layout",{staticClass:"main-button animated slow fadeIn",class:{save:t.mainButtonStateCheck},attrs:{"align-center":"","justify-center":"",row:"","fill-height":"","aria-label":"Main game button",type:"button"},on:{click:function(e){return e.preventDefault(),t.handleMainGameButtonClick(e)}}},[3!==t.getCurrentGameState.currentRollCount||t.isGameEnded?t._e():a("v-flex",{staticClass:"play-arrow animated slow fadeIn",attrs:{xs2:""}}),t._v(" "),!0===t.mainButtonIsRolling?a("v-flex",{staticClass:"circle-container"},[a("v-layout",{attrs:{row:"","justify-center":""}},t._l(t.getCurrentGameState.rollsCountForButton,function(t,e){return a("div",{key:e,staticClass:"roll-circle animated slow fadeIn"})}),0)],1):t._e(),t._v(" "),0===t.getCurrentGameState.currentRollCount?a("v-flex",{staticClass:"stop-brick animated slow fadeIn",attrs:{xs4:""}}):t._e()],1)],1)],1)},[],!1,null,"2f1c060a",null).exports;function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={name:"GameOverDialog",components:{saveIcon:m},data:function(){return{userName:"",dialog:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){h(t,e,a[e])})}return t}({},Object(n.c)(["isGameEnded","getSchoolScore","getTotalScore","schoolFinished"]),{gameOverDialog:{get:function(){return this.isGameEnded},set:function(){return!1}}}),mounted:function(){var t=this;this.$nextTick(function(){t.userName=localStorage.getItem("userName")})}},x=Object(b.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"20em"},model:{value:t.gameOverDialog,callback:function(e){t.gameOverDialog=e},expression:"gameOverDialog"}},[a("v-card",{staticClass:"dialog"},[a("v-card-text",{staticClass:"text-xs-center default-text-color"},[a("h2",{staticClass:"highlighted"},[t._v("\n        "+t._s(t.userName)+"!\n      ")]),t._v(" "),t.isGameEnded&&t.schoolFinished?a("p",{staticClass:"ma-0"},[t._v("\n        Your score is:\n        "),a("span",{staticClass:"highlighted"},[t._v(t._s(t.getTotalScore)+".")])]):a("p",{staticClass:"ma-0"},[t._v("\n        You can't even finish the school, your score is\n        "),a("span",{staticClass:"highlighted"},[t._v(t._s(t.getSchoolScore)+".")])])]),t._v(" "),a("v-card-actions",[a("v-layout",{attrs:{"justify-center":""}},[a("v-btn",{staticClass:"button",attrs:{flat:"",outline:"",color:"purple darken-2",to:"/endgame"}},[a("saveIcon",{staticClass:"default-icon-color button-icon-margin"}),t._v("\n          Save\n        ")],1)],1)],1)],1)],1)},[],!1,null,null,null).exports,y=a("DC3s");function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){k(t,e,a[e])})}return t}function k(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var C={name:"Game",components:{DiceBox:g,GameOverDialog:x,diceOnes:i.a,diceTwos:c.a,diceThrees:r.a,diceFours:s.a,diceFives:l.a,diceSixes:d.a,restartIcon:u.a,doneIcon:y.a,saveIcon:m},data:function(){return{title:"Sharlushka",userName:"",dialog:!1}},computed:w({},Object(n.c)(["isNewTurn","isGameEnded","getSchoolArray","progressBarState","getCombinationArray","getUserAuthState"])),mounted:function(){var t=this;this.$nextTick(function(){if(console.log("Game view mounted."),t.getUserAuthState){var e=localStorage.getItem("userName");t.$store.dispatch("setUserName",e)}})},methods:w({},Object(n.b)(["nextTurn","saveResultInStore","clearResultBox"]),{recordResult:function(t){var e=this;this.isNewTurn?console.log("Roll some dice."):this.$store.dispatch("saveResultInStore",t).then(function(){e.isNewTurn&&(e.$store.commit("clearResultBox"),e.isGameEnded||e.$store.commit("nextTurn"))})}})},S=(a("tGMb"),Object(b.a)(C,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"game-layout",attrs:{column:""}},[a("v-layout",{staticClass:"school-dice-layout",attrs:{"align-center":""}},t._l(t.getSchoolArray,function(e){return a("v-flex",{key:e.id,staticClass:"school-dice-icon",attrs:{id:e.id,"d-flex":"","justify-center":"","align-center":""}},[a(e.icon,{tag:"component",class:{chosen:e.final},on:{click:function(a){return t.recordResult(e.id)}}})],1)}),1),t._v(" "),a("v-layout",{staticClass:"school-results-layout",attrs:{row:"","align-center":""}},t._l(t.getSchoolArray,function(e){return a("v-flex",{key:e.id,staticClass:"school-result",class:{chosen:e.final,blink:!e.final},attrs:{"d-flex":"",xs2:"","align-center":"","justify-center":""},on:{click:function(a){return t.recordResult(e.id)}}},[t._v("\n      "+t._s(e.value)+"\n    ")])}),1),t._v(" "),a("v-layout",{staticClass:"game-combinations-layout",attrs:{column:"","justify-center":""}},t._l(t.getCombinationArray,function(e){return a("v-flex",{key:e.id,staticClass:"game-combination",class:{chosen:e.final},attrs:{id:e.id,"d-flex":"","align-center":""},on:{click:function(a){return t.recordResult(e.id)}}},[a("v-layout",{staticClass:"background-transition",class:{accented:!e.final&&e.value}},[a("v-flex",{attrs:{xs6:"","pl-2":""}},[t._v("\n          "+t._s(e.fullName)+"\n        ")]),t._v(" "),t._l(e.displayValues,function(e,n){return a("v-flex",{key:n,staticClass:"text-xs-center",attrs:{xs2:""}},[t._v("\n          "+t._s(e)+"\n        ")])}),t._v(" "),e.value?a("v-flex",{staticClass:"text-xs-center blink",attrs:{xs2:""}},[t._v("\n          "+t._s(e.value)+"\n        ")]):t._e()],2)],1)}),1),t._v(" "),a("DiceBox"),t._v(" "),a("v-progress-linear",{staticClass:"progress-bar",attrs:{value:t.progressBarState,color:"purple darken-2",height:"4"}}),t._v(" "),a("GameOverDialog")],1)},[],!1,null,"268ac4b4",null));e.default=S.exports},oDMo:function(t,e,a){(t.exports=a("JPst")(!1)).push([t.i,".dice-box-container[data-v-2f1c060a]{padding-right:.4em}.dice-box-icon[data-v-2f1c060a],.main-button-container[data-v-2f1c060a]{height:3.1em;color:#7B1FA2}.dice-box-icon svg[data-v-2f1c060a],.main-button-container svg[data-v-2f1c060a]{box-shadow:10px 10px 5px 0px rgba(0,0,0,0.75)}.default-icon-color[data-v-2f1c060a]{fill:#7B1FA2}.game-dice svg[data-v-2f1c060a]{color:#7B1FA2}.chosen[data-v-2f1c060a]{fill:#FF9800}.chosen svg[data-v-2f1c060a]{color:#FF9800}.main-button[data-v-2f1c060a]{border-radius:.25em;background-color:#7B1FA2;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)}.save[data-v-2f1c060a]{animation-name:bounce;background-color:#b40000;box-shadow:0em 0em 0.3em #b40000}.play-arrow[data-v-2f1c060a]{margin-left:.375em;border-top:.75em solid transparent;border-bottom:.75em solid transparent;border-left:1.3em solid #e4c2ff}.roll-circle[data-v-2f1c060a]{width:.75em;height:.75em;margin:.2em;background:#e4c2ff;border-radius:50%}.stop-brick[data-v-2f1c060a]{width:1em;height:1em;margin:.2em;background:#fff;box-shadow:0em 0em 0.4em 0.05em #fff}@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 360px){.dice-box-icon[data-v-2f1c060a],.main-button-container[data-v-2f1c060a]{height:3.4em}}@media screen and (orientation: landscape){.dice-box-container[data-v-2f1c060a]{width:20%;height:100%;flex-direction:column;padding:0em 0em .3em 0em}.dice-icons-layout[data-v-2f1c060a]{flex-direction:column}.main-button-container[data-v-2f1c060a]{flex-direction:column;width:6em}.dice-box-icon[data-v-2f1c060a]{height:2.8em}.end-game-buttons[data-v-2f1c060a]{flex-direction:column;position:absolute;right:10%;top:25%}}@media screen and (max-resolution: 96dpi) and (min-width: 500px){.dice-box-icon[data-v-2f1c060a]{height:8em}.main-button-container[data-v-2f1c060a]{width:8em}}@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px){.dice-box-icon[data-v-2f1c060a],.main-button-container[data-v-2f1c060a]{height:7em}.main-button[data-v-2f1c060a]{border-radius:.5em;background-color:#7B1FA2;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)}.save[data-v-2f1c060a]{animation-name:bounce;background-color:#b40000;box-shadow:0em 0em 0.6em #b40000}.play-arrow[data-v-2f1c060a]{margin-left:.75em;border-top:1.5em solid transparent;border-bottom:1.55em solid transparent;border-left:2.6em solid #e4c2ff}.roll-circle[data-v-2f1c060a]{width:1.5em;height:1.5em;margin:.4em;background:#e4c2ff;border-radius:50%}.stop-brick[data-v-2f1c060a]{width:2em;height:2em;margin:.4em;background:#fff;box-shadow:0em 0em 0.8em 0.1em #fff}}@media screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px){.dice-box-icon[data-v-2f1c060a],.main-button-container[data-v-2f1c060a]{height:9em}}\n",""])},tGMb:function(t,e,a){"use strict";var n=a("dmz6");a.n(n).a}}]);
//# sourceMappingURL=game.1014ec3e7b9af213a111.js.map