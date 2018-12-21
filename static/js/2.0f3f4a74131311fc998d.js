webpackJsonp([2],{"38B+":function(t,e){},cLJt:function(t,e){},mZlD:function(t,e){},tZZY:function(t,e,a){"use strict";function r(t){a("38B+")}function s(t){a("mZlD")}function o(t){a("cLJt")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),l=a("NYxO"),c=a("wtEF"),u={name:"Navigation",data:function(){return{title:"Sharlushka"}},computed:{computedGameScore:function(){return c.a.state.schoolScoreTotal+c.a.state.gameTotal},rollsLeft:function(){return c.a.state.rollCount}}},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"",row:"",id:"gameNavigation"}},[a("v-flex",{staticClass:"score text-xs-left",attrs:{xs4:""}},[t._v("\n    "+t._s(t.computedGameScore)+"\n  ")]),t._v(" "),a("v-flex",{staticClass:"game-name text-xs-center",attrs:{xs4:"",role:"button","aria-label":"Go to main page"}},[a("router-link",{attrs:{to:"/"}},[t._v(t._s(t.title))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{to:"/settings",small:"",icon:"",fab:"",dark:""}},[a("v-icon",{attrs:{size:"2.8em",color:"white"}},[t._v("more_vert")])],1)],1)},m=[],v={render:d,staticRenderFns:m},h=v,f=a("VU/8"),g=r,C=f(u,h,!1,g,"data-v-406a1733",null),y=C.exports,p={name:"DiceBox",props:["turnCompleted"],data:function(){return{navigatorSupported:!1,zzz:"zzz",mainButtonState:{play:!0,roll:!1,save:!1,disabled:!1}}},mounted:function(){this.$nextTick(function(){console.log("Dice box component mounted"),"vibrate"in navigator&&(this.navigatorSupported=!0,console.log("Vibrate in navigator is "+("vibrate"in navigator)))})},watch:{turnCompleted:{immediate:!0,handler:function(){this.getCurrentGameState.gameEnded||this.updateMainButtonState()}}},computed:n()({},Object(l.c)(["getDiceArray","getCurrentGameState"])),methods:{vibrate:function(){console.log("zzz"),this.zzz+="-zzz";var t=[5,75,66,300,33,150,15];navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate(t)},vibrateOnce:function(){console.log("One z");var t=[10];navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate(t)},updateMainButtonState:function(){var t=document.querySelector(".main-button");if(this.mainButtonState.play=!0,this.mainButtonState.save=!1,this.mainButtonState.roll=!1,3!==this.getCurrentGameState.rollsCountForButton||this.getCurrentGameState.turnCompleted||(this.mainButtonState.play=!0),this.getCurrentGameState.rollsCountForButton<=2&&!this.getCurrentGameState.turnCompleted&&(this.mainButtonState.play=!1,this.mainButtonState.roll=!0),this.getCurrentGameState.turnCompleted&&(this.mainButtonState.roll=!1,this.mainButtonState.play=!0,this.mainButtonState.disabled=!1),0!==this.getCurrentGameState.rollsCountForButton||this.getCurrentGameState.turnCompleted)return!1;this.mainButtonState.roll=!1,this.mainButtonState.play=!1,this.mainButtonState.save=!0,this.mainButtonState.disabled=!0,this.vibrate(),t.classList.add("bounce")},handleMainGameButtonClick:function(){this.getCurrentGameState.rollsCountForButton>0&&!this.getCurrentGameState.turnCompleted&&(this.diceRolled||(this.diceRolled=!0),this.vibrateOnce(),c.a.commit("rollDice"),0===this.getCurrentGameState.currentRollCount&&this.getCurrentGameState.currentGameTurn<=6&&!this.getCurrentGameState.gameCheck&&this.$router.push({path:"/endgame"}),this.updateMainButtonState())},selectDice:function(t){var e=t.currentTarget,a=document.querySelector(".dice-box");e.classList.contains("chosen")?a.appendChild(e):a.insertBefore(e,a.childNodes[0]),c.a.commit("setDiceChosenState",e.id),c.a.commit("computeScore")}}},x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{"d-flex":"","ma-0":"","pa-0":"",id:"diceControls"}},[a("v-layout",{staticClass:"dice-box-layout",attrs:{row:"","align-center":""}},[a("v-flex",{staticClass:"game-dice-container dice-box",class:{visible:!t.turnCompleted},attrs:{"d-flex":"",xs9:""}},t._l(this.getDiceArray,function(e){return a("svg",{key:e.id,staticClass:"dice-icon default",class:{chosen:e.chosen},attrs:{id:e.id,fill:"none"},on:{click:t.selectDice}},[a("use",t._b({staticClass:"game-dice animated fadeIn"},"use",{"xlink:href":"#"+e.currentIcon},!1))])})),t._v(" "),a("v-flex",{staticClass:"main-button animated",class:{save:this.mainButtonState.save,bounce:this.mainButtonState.save,visible:this.getCurrentGameState.gameEnded},on:{click:t.handleMainGameButtonClick}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[this.mainButtonState.play?a("v-flex",{staticClass:"play-arrow animated fadeIn",attrs:{xs2:""}}):t._e(),t._v(" "),this.mainButtonState.roll&&this.getCurrentGameState.rollsCountForButton<=3?a("v-flex",{staticClass:"circle-container animated fadeIn"},[a("v-layout",{attrs:{row:"","justify-center":""}},t._l(this.getCurrentGameState.rollsCountForButton,function(t,e){return a("div",{key:e,staticClass:"roll-circle animated fadeIn"})}))],1):t._e(),t._v(" "),this.mainButtonState.save?a("v-flex",{staticClass:"stop-brick animated fadeIn",attrs:{xs4:""}}):t._e()],1)],1)],1)],1)},S=[],_={render:x,staticRenderFns:S},b=_,B=a("VU/8"),A=s,k=B(p,b,!1,A,"data-v-67806c0b",null),w=k.exports,V={name:"Game",data:function(){return{title:"Sharlushka",highestScore:0,turnCompleted:!1,progressBarLength:3}},components:{Navigation:y,DiceBox:w},computed:n()({},Object(l.c)(["debugInfo","chosenDiceArray","currentValuesInScoreArray","getSchoolArray","getCombinationArray","getDiceArray","getCurrentGameState"]),{turnState:function(){return c.a.state.newTurn},progressBarState:function(){return c.a.state.rollCount}}),watch:{turnState:{immediate:!0,handler:function(){this.turnCompleted=!this.turnState}},progressBarState:{immediate:!0,handler:function(){if(!document.querySelector(".progress-bar"))return!1;this.updateProgressBar()}}},mounted:function(){var t=localStorage.getItem("highestScore");t&&(this.highestScore=t)},methods:n()({},Object(l.b)(["nextTurn","computeScore"]),{updateProgressBar:function(){var t=document.querySelector(".progress-bar");2===c.a.state.rollCount?t.style.width="33%":1===c.a.state.rollCount?t.style.width="66%":0===c.a.state.rollCount?(t.style.width="100%",t.classList.add("full")):3===c.a.state.rollCount&&(t.style.width="0%",t.classList.remove("full"))},handleBoardClick:function(t){for(var e=!1,a=null,r=t.target;!e&&r;)r.classList.contains("school-dice-icon")||r.classList.contains("dice-icon")||r.classList.contains("game-combination")?(a=r.id,e=!0):r.getAttribute("resultId")?(a=r.getAttribute("resultId"),e=!0):r=r.parentElement;a?this.recordResult(a):console.log("Id is: "+a)},clearResultBox:function(){for(var t in c.a.state.scoreArray)c.a.state.scoreArray[t].final||(c.a.state.scoreArray[t].value="");for(var e in c.a.state.diceArray)c.a.state.diceArray[e].chosen&&(c.a.state.diceArray[e].chosen=!1)},debugMode:function(){c.a.state.debug=!0},recordResult:function(t){console.log("Recording result"),c.a.state.gameInProgress=!0;var e=t,a=c.a.state.scoreArray.map(function(t){return t.id}).indexOf(e);if(c.a.state.schoolCompleted||""===c.a.state.scoreArray[a].value||c.a.state.turnCompleted||c.a.state.scoreArray[a].final)if(""!==c.a.state.scoreArray[a].value&&c.a.state.scoreArray[a].displayValues&&c.a.state.scoreArray[a].displayValues.length<3&&!c.a.state.turnCompleted)c.a.state.turnCompleted=!0,c.a.state.scoreArray[a].displayValues.push(c.a.state.scoreArray[a].value),c.a.state.gameTotal+=c.a.state.scoreArray[a].value,3===c.a.state.scoreArray[a].displayValues.length&&(c.a.state.scoreArray[a].final=!0,c.a.state.scoreArray[a].value=""),this.clearResultBox();else{if(c.a.state.turnCompleted||""!==c.a.state.scoreArray[a].value||c.a.state.scoreArray[a].final||!c.a.state.schoolCompleted||0!==c.a.state.rollCount||c.a.state.zeroCheck)return!1;c.a.state.scoreArray[a].displayValues.length<3&&(c.a.state.scoreArray[a].displayValues.push(0),c.a.state.zeroCheck=!0,this.clearResultBox(),c.a.state.turnCompleted=!0),3===c.a.state.scoreArray[a].displayValues.length&&(c.a.state.scoreArray[a].final=!0),c.a.state.turnCompleted=!0}else c.a.state.scoreArray[a].final=!0,c.a.state.schoolScoreTotal+=c.a.state.scoreArray[a].value,c.a.state.turnCompleted=!0,6===c.a.state.currentGameTurn&&(c.a.state.schoolCompleted=!0),this.clearResultBox();if(33===c.a.state.currentGameTurn&&c.a.state.turnCompleted){console.log("Game Over!");var r=c.a.state.schoolScoreTotal+c.a.state.gameTotal,s=localStorage.getItem("highestScore");s?r>s?localStorage.setItem("highestScore",r):console.log("Your score is not so high "+r):localStorage.setItem("highestScore",r),c.a.state.gameEnded=!0,this.$router.push({path:"/endgame"})}else this.turnCompleted=!0,c.a.commit("nextTurn"),this.updateProgressBar();this.turnCompleted=!0,console.log("Turn completed")}})},G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":"","ma-0":"","pa-0":"",id:"gameView"}},[a("svg",{staticStyle:{display:"none"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("symbol",{attrs:{id:"diceOnes",viewBox:"0 0 200 200"}},[a("circle",{attrs:{fill:"currentColor",cx:"100",cy:"100",r:"18"}}),t._v(" "),a("path",{attrs:{"stroke-width":".4em",d:"M20,5H180a15,15,0,0,1,15,15V180a15,15,0,0,1-15,15H20A15,15,0,0,1,5,180V20A15,15,0,0,1,20,5Z"}})]),t._v(" "),a("symbol",{attrs:{id:"diceTwos",viewBox:"0 0 200 200"}},[a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"150",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"50",r:"18"}}),t._v(" "),a("path",{attrs:{"stroke-width":".4em",d:"M20,5H180a15,15,0,0,1,15,15V180a15,15,0,0,1-15,15H20A15,15,0,0,1,5,180V20A15,15,0,0,1,20,5Z"}})]),t._v(" "),a("symbol",{staticClass:"dice",attrs:{id:"diceThrees",viewBox:"0 0 200 200"}},[a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"150",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"100",cy:"100",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"50",r:"18"}}),t._v(" "),a("path",{attrs:{"stroke-width":".4em",d:"M20,5H180a15,15,0,0,1,15,15V180a15,15,0,0,1-15,15H20A15,15,0,0,1,5,180V20A15,15,0,0,1,20,5Z"}})]),t._v(" "),a("symbol",{staticClass:"dice",attrs:{id:"diceFours",viewBox:"0 0 200 200"}},[a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"50",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"150",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"150",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"50",r:"18"}}),t._v(" "),a("path",{attrs:{"stroke-width":".4em",d:"M20,5H180a15,15,0,0,1,15,15V180a15,15,0,0,1-15,15H20A15,15,0,0,1,5,180V20A15,15,0,0,1,20,5Z"}})]),t._v(" "),a("symbol",{staticClass:"dice",attrs:{id:"diceFives",viewBox:"0 0 200 200"}},[a("circle",{attrs:{fill:"currentColor",cx:"100",cy:"100",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"50",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"150",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"150",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"50",r:"18"}}),t._v(" "),a("path",{attrs:{"stroke-width":".4em",d:"M20,5H180a15,15,0,0,1,15,15V180a15,15,0,0,1-15,15H20A15,15,0,0,1,5,180V20A15,15,0,0,1,20,5Z"}})]),t._v(" "),a("symbol",{staticClass:"dice",attrs:{id:"diceSixes",viewBox:"0 0 200 200"}},[a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"100",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"50",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"150",cy:"150",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"150",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"100",r:"18"}}),t._v(" "),a("circle",{attrs:{fill:"currentColor",cx:"50",cy:"50",r:"18"}}),t._v(" "),a("path",{attrs:{"stroke-width":".4em",d:"M20,5H180a15,15,0,0,1,15,15V180a15,15,0,0,1-15,15H20A15,15,0,0,1,5,180V20A15,15,0,0,1,20,5Z"}})])]),t._v(" "),a("Navigation"),t._v(" "),a("v-layout",{staticClass:"game-layout",attrs:{column:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"school-dice-container",attrs:{"d-flex":"","align-center":""}},t._l(this.getSchoolArray,function(e){return a("svg",{key:e.id,staticClass:"school-dice-icon default",class:{chosen:e.final},attrs:{id:e.id,fill:"none"},on:{click:t.handleBoardClick}},[a("use",t._b({},"use",{"xlink:href":"#"+e.icon},!1))])}))],1),t._v(" "),a("v-layout",{staticClass:"school-results-layout",attrs:{row:""}},t._l(this.getSchoolArray,function(e){return a("v-flex",{key:e.id,staticClass:"school-result",class:{saved:e.final,blink:!e.final},attrs:{"d-flex":"",xs2:"","align-center":"","justify-center":""},on:{click:t.handleBoardClick}},[a("span",{attrs:{resultId:e.id}},[t._v(t._s(e.value))])])})),t._v(" "),a("v-layout",{staticClass:"game-combinations-layout",attrs:{column:"","justify-center":""}},t._l(this.getCombinationArray,function(e){return a("v-flex",{key:e.id,staticClass:"game-combination",class:{set:e.final},attrs:{"d-flex":"","align-center":"",id:e.id},on:{click:t.handleBoardClick}},[a("v-layout",[a("v-flex",{attrs:{xs6:"","pl-2":""}},[t._v(t._s(e.fullName))]),t._v(" "),t._l(e.displayValues,function(e,r){return a("v-flex",{key:r,staticClass:"text-xs-center",attrs:{xs2:""}},[t._v("\n              "+t._s(e)+"\n            ")])}),t._v(" "),e.value?a("v-flex",{staticClass:"blink text-xs-center",attrs:{xs2:""}},[t._v("\n              "+t._s(e.value)+"\n            ")]):t._e()],2)],1)})),t._v(" "),a("DiceBox",{attrs:{turnCompleted:t.turnCompleted}})],1),t._v(" "),a("div",{staticClass:"progress-bar"})],1)},z=[],I={render:G,staticRenderFns:z},T=I,D=a("VU/8"),M=o,R=D(V,T,!1,M,"data-v-051ce87a",null);e.default=R.exports}});
//# sourceMappingURL=2.0f3f4a74131311fc998d.js.map