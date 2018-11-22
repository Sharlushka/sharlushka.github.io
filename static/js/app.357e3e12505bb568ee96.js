webpackJsonp([8],{"80wr":function(e,r){},"8GVj":function(e,r){},NHnr:function(e,r,n){"use strict";function a(e){n("8GVj"),n("80wr")}Object.defineProperty(r,"__esModule",{value:!0});var o=(n("u7Vc"),n("7+uW")),t=n("3EgV"),i=n.n(t),l={name:"App",mounted:function(){this.$nextTick(function(){console.log("App started")})}},c=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("v-container",{attrs:{fluid:"","fill-height":"","ma-0":"","pa-0":"",id:"app"}},[n("transition",{attrs:{name:"custom-classes-transition",mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOutLeft"}},[n("router-view")],1)],1)},u=[],s={render:c,staticRenderFns:u},f=s,d=n("VU/8"),y=a,m=d(l,f,!1,y,null,null),h=m.exports,A=n("/ocq");o.default.use(A.a);var v=new A.a({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"MainPage",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"US8T"))}},{path:"/register",name:"Register",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"dIqY"))}},{path:"/settings",name:"Settings",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"niH5"))}},{path:"/game",name:"Game",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"tZZY"))}},{path:"/endgame",name:"EndGame",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"/rXD"))}},{path:"/help",name:"Help",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"9YsO"))}}]}),p=n("wtEF"),g=n("ydGU");Object(g.a)("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o.default.config.productionTip=!1,o.default.use(i.a),new o.default({el:"#app",store:p.a,router:v,components:{App:h},template:"<App/>",render:function(e){return e(h)}})},wtEF:function(e,r,n){"use strict";var a=n("7+uW"),o=n("NYxO"),t={getCurrentGameState:function(e){return{currentTurn:e.currentGameTurn,rollsCountForButton:e.rollCount,schoolCompleted:e.schoolCompleted,currentGameTurn:e.currentGameTurn,currentRollCount:e.rollCount,turnCompleted:e.turnCompleted,gameEnded:e.gameEnded,diceRolled:e.diceRolled,gameCheck:e.gameCheck}},getSchoolArray:function(e){return e.scoreArray.slice(0,e.diceArray.length+1)},getCombinationArray:function(e){return e.scoreArray.slice(e.diceArray.length+1,e.scoreArray.length)},getDiceArray:function(e){return e.diceArray},getTotalScore:function(e){return e.schoolScoreTotal+e.gameTotal},getDefaultUserName:function(e){return e.defaultUserName},debugInfo:function(e){for(var r in e.diceArray)if(e.diceArray[r].chosen){var n={chosen:e.diceArray[r].chosen,firstDice:e.diceArray[0].chosen};return n}},chosenDiceArray:function(e){return e.diceArray.filter(function(e){return e.chosen})},currentValuesInScoreArray:function(e){return e.scoreArray.filter(function(e){return""!==e.value&&!e.final})}},i=n("woOf"),l=n.n(i),c=n("BO1k"),u=n.n(c),s=function(){return{debug:!1,defaultUserName:"Anonymous",newTurn:!0,diceRolled:!0,schoolScoreTotal:0,gameTotal:0,schoolCompleted:!1,currentGameTurn:1,maxGameTurns:33,rollCount:3,gameCheck:!1,turnCompleted:!1,gameEnded:!1,combinationArray:[],scoreArray:[{value:"",final:!1,id:"ones",icon:"diceOnes"},{value:"",final:!1,id:"twos",icon:"diceTwos"},{value:"",final:!1,id:"threes",icon:"diceThrees"},{value:"",final:!1,id:"fours",icon:"diceFours"},{value:"",final:!1,id:"fives",icon:"diceFives"},{value:"",final:!1,id:"sixes",icon:"diceSixes"},{value:"",displayValues:[],final:!1,id:"pair",fullName:"Pair"},{value:"",displayValues:[],final:!1,id:"twoPairs",fullName:"Two Pairs"},{value:"",displayValues:[],final:!1,id:"threeOfAKind",fullName:"Three O.A.K"},{value:"",displayValues:[],final:!1,id:"full",fullName:"Full"},{value:"",displayValues:[],final:!1,id:"quads",fullName:"Quads"},{value:"",displayValues:[],final:!1,id:"poker",fullName:"Poker"},{value:"",displayValues:[],final:!1,id:"small",fullName:"Small"},{value:"",displayValues:[],final:!1,id:"large",fullName:"Large"},{value:"",displayValues:[],final:!1,id:"chance",fullName:"Chance"}],diceArray:[{value:"#",chosen:!1,id:"first",currentIcon:"sixes"},{value:"#",chosen:!1,id:"second",currentIcon:"sixes"},{value:"#",chosen:!1,id:"third",currentIcon:"sixes"},{value:"#",chosen:!1,id:"fourth",currentIcon:"sixes"},{value:"#",chosen:!1,id:"fifth",currentIcon:"sixes"}]}},f={computeScore:function(e){if(!e.turnCompleted){var r=[[],[],[],[],[],[]];if(e.combinationArray.length>0){for(var n in e.combinationArray)switch(e.combinationArray[n]){case 1:r[0].push(e.combinationArray[n]);break;case 2:r[1].push(e.combinationArray[n]);break;case 3:r[2].push(e.combinationArray[n]);break;case 4:r[3].push(e.combinationArray[n]);break;case 5:r[4].push(e.combinationArray[n]);break;case 6:r[5].push(e.combinationArray[n]);break;default:return!1}if(e.schoolCompleted){var a=[],o=[],t=[],i=[],l=function(e,r){return e+r};for(var c in r){var u=r[c][0];if(u){2===r[u-1].length&&a.push(u),3===r[u-1].length&&o.push(u),4===r[u-1].length&&t.push(u),(a.length>=1||1===o.length)&&!e.scoreArray[6].final?1===a.length?e.scoreArray[6].value=2*a[0]:a[0]>a[1]?e.scoreArray[6].value=2*a[0]:e.scoreArray[6].value=o?2*o[0]:2*a[1]:e.scoreArray[6].final||(e.scoreArray[6].value=""),2!==a.length||e.scoreArray[7].final?a.length<2&&!e.scoreArray[7].final&&(e.scoreArray[7].value=""):e.scoreArray[7].value=2*a[0]+2*a[1],1!==o.length||e.scoreArray[8].final?e.scoreArray[8].final||(e.scoreArray[8].value=""):e.scoreArray[8].value=3*o[0],1!==o.length||1!==a.length||e.scoreArray[9].final?e.scoreArray[9].final||(e.scoreArray[9].value=""):e.scoreArray[9].value=3*o[0]+2*a[0],t>=1&&!e.scoreArray[10].final?e.scoreArray[10].value=4*t[0]:e.scoreArray[10].final||(e.scoreArray[10].value=""),5!==r[u-1].length||e.scoreArray[11].final?e.scoreArray[11].final||(e.scoreArray[11].value=""):e.scoreArray[11].value=5*u+80,1===r[u-1].length?(i.push(u),5===i.length&&(i.sort(),1!==i[0]||5!==i[i.length-1]||e.scoreArray[12].final?2!==i[0]||6!==i[i.length-1]||e.scoreArray[13].final||(e.scoreArray[13].value=i.reduce(l)):e.scoreArray[12].value=i.reduce(l))):e.scoreArray[12].final?e.scoreArray[13].final||(e.scoreArray[13].value=""):e.scoreArray[12].value="";var s=e.combinationArray.reduce(l);e.scoreArray[14].final?e.scoreArray[14].final||(e.scoreArray[14].value=""):e.scoreArray[14].value=s}}}else{var f=void 0;for(var d in r){var y=r[d][0];y||!0===e.scoreArray[d].final||(e.scoreArray[d].value=""),f=3===r[d].length?0:(r[d].length-3)*r[d][0],y&&!0!==e.scoreArray[y-1].final&&(e.scoreArray[y-1].value=f)}}}else if(0===e.combinationArray.length){console.log("Ain't got shit, captain");for(var m in e.scoreArray)!0!==e.scoreArray[m].final&&(e.scoreArray[m].value="")}else alert("Error!")}},setDiceChosenState:function(e,r){for(var n in e.diceArray)if(e.diceArray[n].id===r)if(e.diceArray[n].chosen){e.diceArray[n].chosen=!1;var a=e.diceArray[n].value,o=e.combinationArray.indexOf(a);e.combinationArray.splice(o,1)}else e.combinationArray.push(e.diceArray[n].value),e.diceArray[n].chosen=!0},rollDice:function(e){e.newTurn=!1,e.diceRolled=!0,e.rollCount--,e.diceRolled=!1;var r=!0,n=!1,a=void 0;try{for(var o,t=u()(e.diceArray);!(r=(o=t.next()).done);r=!0){var i=o.value;if(!i.chosen){var l=Math.floor(6*Math.random()+1);i.value=l,i.currentIcon=e.scoreArray[l-1].icon}}}catch(e){n=!0,a=e}finally{try{!r&&t.return&&t.return()}finally{if(n)throw a}}if(0===e.rollCount&&e.currentGameTurn<=6&&!e.turnCompleted){for(var c=[],s=0;s<=5;s++)""!==e.scoreArray[s].value&&e.scoreArray[s].final||c.push(s+1);var f=!0,d=!1,y=void 0;try{for(var m,h=u()(c);!(f=(m=h.next()).done);f=!0){var A=m.value;for(var v in e.diceArray)e.diceArray[v].value===A&&(console.log("All ok, one found at "+e.diceArray[v].id+" with value "+e.diceArray[v].value),e.gameCheck=!0)}}catch(e){d=!0,y=e}finally{try{!f&&h.return&&h.return()}finally{if(d)throw y}}}if(e.currentGameTurn<=6&&0===e.rollCount&&!e.turnCompleted&&!e.gameCheck)return console.log("You can't even finish the school... Score is: "+e.schoolScoreTotal),e.gameEnded=!0,!1;e.diceBoxHidden=!1},nextTurn:function(e){e.newTurn=!0,e.gameCheck=!1,e.zeroCheck=!1,e.diceBoxHidden=!0,e.currentGameTurn++,e.turnCompleted=!1,e.rollCount=3;for(var r in e.diceArray)e.diceArray[r].value="#",e.diceArray[r].chosen=!1;e.combinationArray=[]},resetState:function(e){l()(e,s())}};a.default.use(o.a);var d=s(),y={setCurrentIcon:function(e){return(0,e.commit)("setCurrentIcon")},resetGameState:function(e){return(0,e.commit)("resetState")},computeScore:function(e){return(0,e.commit)("computeScore")},rollDice:function(e){return(0,e.commit)("rollDice")},nextTurn:function(e){return(0,e.commit)("nextTurn")}};r.a=new o.a.Store({state:d,getters:t,mutations:f,actions:y})}},["NHnr"]);
//# sourceMappingURL=app.357e3e12505bb568ee96.js.map