webpackJsonp([4],{AOlO:function(e,t){},niH5:function(e,t,s){"use strict";function r(e){s("AOlO")}Object.defineProperty(t,"__esModule",{value:!0});var a=s("BO1k"),o=s.n(a),l=s("Dd8w"),c=s.n(l),n=s("wtEF"),i=s("NYxO"),u=s("stGB"),h=s("qVsQ"),g={name:"Settings",data:function(){return{userName:"",helpTitle:"About",helpButtonText:"Help!",highestScore:"",hiscoreGreeting:"Your highest score is",exclamation:".",lastScoresHeadingPartOne:"Most recent",lastScoresHeadingPartTwo:"scores are",userScoresArray:"",lastScoresToDisplay:"",userGamesPlayed:"",chartData:{labels:[],series:[]},chartOptions:{lineSmooth:!1,axisX:{showGrid:!0,showLabel:!0}},newStats:{gamesPlayed:{msg:"Games played",value:""},maxPossibleScore:{msg:"Max possible score is",value:""},percentFromMax:{msg:"Percent from max score ~",value:""},averageScore:{msg:"Your average score equals",value:""}}}},components:{closeBtn:u.a},computed:c()({},Object(i.c)(["getDefaultUserName","getUserData","getMaxPossibleScore"])),mounted:function(){if(console.log("Settings mounted"),this.getUserData.isAuthenticated){console.log("You are existing user!"),this.highestScore=localStorage.getItem("highestScore"),this.userName=this.getUserData.name;var e=localStorage.getItem("lastScoresArray");e&&(this.userScoresArray=e.split(","))}else console.log("You are anonymous!"),this.userName=this.getDefaultUserName,this.highestScore=localStorage.getItem("highestScore"),this.userScoresArray=this.assembleLastScoresArray();this.userScoresArray&&(this.lastScoresToDisplay=this.userScoresArray.slice(0).slice(-12)),this.newStats.gamesPlayed.value=this.userScoresArray.length,this.newStats.maxPossibleScore.value=this.getMaxPossibleScore,this.newStats.averageScore.value=this.computeAverageScore(),this.newStats.percentFromMax.value=this.computePercentFromMax(),this.userScoresArray.length&&(this.chartData.labels=this.prepareLabelsForChart(this.userScoresArray.length),this.chartData.series=[this.lastScoresToDisplay])},methods:{restartGame:function(e){console.log("Restarting."),n.a.commit("resetState"),this.$router.push("/game")},prepareLabelsForChart:function(e){var t=e-12,s=[];if(e>=12){for(;e!==t;)s.push(e),e--;return s.reverse()}for(;0!==e;)s.push(e),e--,console.log("Scaaary..");return s.reverse()},assembleLastScoresArray:function(){console.log("Preparing array");var e=localStorage.getItem("lastScoresArray");return e?e.split(","):(console.log("You have to play at least one game to calculate stats"),!1)},setUserScoreDataFromDB:function(e){console.log("Getting user scores for uid "+e),h.a.collection("users").where("uid","==",e).get().then(function(t){var s=void 0;return t.forEach(function(t){t.data().uid===e&&(s=t.data().resultsArray)}),s}).then(function(e){localStorage.setItem("lastScoresArray",e),console.log("Setting users score array to local storage "+e)}).catch(function(e){console.log("Error getting documents: ",e)})},computeAverageScore:function(){if(this.userScoresArray){var e=[],t=function(e,t){return e+t},s=!0,r=!1,a=void 0;try{for(var l,c=o()(this.userScoresArray);!(s=(l=c.next()).done);s=!0){var n=l.value;e.push(parseInt(n))}}catch(e){r=!0,a=e}finally{try{!s&&c.return&&c.return()}finally{if(r)throw a}}return console.log("User scores array: "+this.userScoresArray),e.length>0?parseInt(e.reduce(t)/e.length):0}},computePercentFromMax:function(){var e=Math.floor(this.newStats.averageScore.value/this.getMaxPossibleScore*100);return!!e&&e+"%"}}},v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{id:"gameSettings"}},[s("v-layout",{attrs:{"align-space-around":"",column:""}},[s("v-spacer"),e._v(" "),s("closeBtn"),e._v(" "),s("v-flex",{staticClass:"text-xs-center"},[s("v-layout",{attrs:{column:""}},[s("h1",{staticClass:"help-title"},[e._v(e._s(e.helpTitle))]),e._v(" "),s("h2",{staticClass:"user-name"},[e._v(e._s(e.userName)+"!")]),e._v(" "),e.highestScore?s("h3",{staticClass:"hi-score"},[e._v(e._s(e.hiscoreGreeting)+" "+e._s(e.highestScore)+e._s(e.exclamation))]):e._e()])],1),e._v(" "),s("v-flex",{attrs:{"d-flex":"","align-center":"","my-2":""}},[s("chartist",{attrs:{ratio:"ct-major-twelfth",type:"Line",data:e.chartData,options:e.chartOptions}})],1),e._v(" "),e.lastScoresToDisplay?s("v-flex",{staticClass:"last-scores-heading text-xs-center",attrs:{"d-flex":"","align-end":""}},[s("h3",[e._v(e._s(e.lastScoresHeadingPartOne)+" "+e._s(e.lastScoresHeadingPartTwo))])]):e._e(),e._v(" "),s("v-flex",[s("v-layout",{attrs:{"align-space-around":"",column:""}},[s("v-flex",{staticClass:"hi-score-display",attrs:{"d-flex":""}},[s("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},e._l(e.lastScoresToDisplay,function(t,r){return s("v-flex",{key:r,attrs:{xs4:"",sm1:"","ma-0":""}},[e._v("\n                "+e._s(t)+"\n              ")])}))],1),e._v(" "),e._l(e.newStats,function(t){return t.value?s("v-flex",{key:t.msg,staticClass:"stats-display text-xs-center"},[e._v("\n            "+e._s(t.msg)+" "+e._s(t.value)+"\n          ")]):e._e()})],2)],1),e._v(" "),s("v-layout",{attrs:{"mt-4":"",row:"","align-center":"","justify-space-around":""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs4:"",lg2:""}},[s("v-btn",{staticClass:"ui-button",attrs:{ripple:"",block:"",large:"",color:"orange"},on:{click:e.restartGame}},[s("v-icon",{attrs:{medium:"",color:"white"}},[e._v("replay")])],1)],1),e._v(" "),s("v-flex",{staticClass:"text-xs-center",attrs:{xs4:"",lg2:""}},[s("v-btn",{staticClass:"ui-button",attrs:{ripple:"",block:"",large:"",color:"purple darken-1",to:"/help"}},[s("v-icon",{attrs:{medium:"",color:"white"}},[e._v("help_outline")])],1)],1)],1)],1)],1)},m=[],S={render:v,staticRenderFns:m},p=S,f=s("VU/8"),y=r,d=f(g,p,!1,y,"data-v-d3834f90",null);t.default=d.exports}});
//# sourceMappingURL=4.3d6f0bf8dcc9515018e1.js.map