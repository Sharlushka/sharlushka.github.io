(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{E5W8:function(t,e,s){var a=s("lAP5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s("SZ7m").default)("5c0dec46",a,!0,{})},III1:function(t,e,s){"use strict";var a=s("E5W8");s.n(a).a},JtMT:function(t,e,s){"use strict";s.r(e);var a={name:"Settings",data:function(){return{title:"Settings",settingsList:[{settingName:"Debug",settingIcon:"mdi-eye"},{settingName:"Debug2",settingIcon:"mdi-eye"}]}}},r=s("KHd+"),o=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[e("h1",[this._v(this._s(this.title))])]),this._v(" "),e("v-flex",[e("v-switch",{attrs:{value:"","input-value":"true"}}),this._v(" "),e("h4",[this._v("Setting")])],1)],1)},[],!1,null,null,null);e.default=o.exports},lAP5:function(t,e,s){(t.exports=s("JPst")(!1)).push([t.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}*{font-family:"Quicksand","Verdana",sans-serif}.highlighted{color:#FF9800 !important}.default-icon-color{color:#7B1FA2}.button{border-radius:.3em;line-height:2em}.button-icon-margin{margin:.3em}.dialog{font-size:1.3em;border-radius:.3em;border:0.1em solid #7B4B9D !important}.input-icon{color:#e4c2ff}.default-text-color{color:#7B1FA2}.help-title{font-size:2.3em}.user-name{color:#FF9800;font-size:1.7em}.hi-score{line-height:1}.hi-score-display{color:#b625ff;font-size:1.7em;text-align:center}.stats-display{color:#301246;font-size:1.1em;font-weight:700;line-height:1.3}.ct-series-a .ct-point{stroke:#b625ff;stroke-width:.1em}.ct-series-a .ct-line{stroke:#E1BEE7;stroke-width:.06em}.ct-series-a .ct-bar{stroke:#b625ff;stroke-width:.25em}.ct-nodata{visibility:hidden;height:0em}.game-results-chart .ct-series-a .ct-bar{stroke:#b625ff;stroke-width:.25em}.dice-favs-chart .ct-series-a .ct-bar{stroke-width:.35em}.dice-favs-chart .ct-end{font-size:1em;color:#b625ff}.combinations-favs-chart .ct-start{font-size:.9em;color:#b625ff}.combinations-favs-chart .ct-series-a .ct-bar{stroke-width:.35em}@media screen and (orientation: landscape){.hi-score-display{font-size:1.3em;font-weight:700}}@media screen and (max-resolution: 96dpi) and (min-width: 500px){.help-title{font-size:4em}.user-name{font-size:3em}.hi-score-display{font-size:2em}.stats-display{font-size:1.5em}}#userStats{height:100%}.message-to-anonymous{font-family:"Quicksand","Verdana",sans-serif;padding:2em 0em 2em 0em}\n',""])},rFDy:function(t,e,s){"use strict";s.r(e);s("XfO3"),s("HEwt"),s("a1Th"),s("yt8O"),s("RW0V"),s("rE2o"),s("ioFf"),s("rGqo"),s("KKXr");var a=s("L2JU");function r(t){return function(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var n={name:"UserStats",data:function(){return{userName:"",anonymousUserNoGames:!1,messageToAnonymous:null,statsTitle:"Stats",highestScore:"",hiscoreGreeting:"Your highest score",lastScoresHeading:"Most recent scores are",userScoresArray:"",lastScoresToDisplay:"",userGamesPlayed:"",chartData:{labels:[],series:[]},chartOptions:{fullWidth:!0,lineSmooth:!0,showArea:!0,axisX:{showGrid:!0,showLabel:!0},axisY:{high:879}},diceValuesFavsChartData:{labels:["one","two","three","four","five","six"],series:[]},diceValuesFavsChartOptions:{fullWidth:!0,lineSmooth:!1,axisX:{showGrid:!0,showLabel:!0}},newStats:{gamesPlayed:{msg:"Games played",value:""},averageScore:{msg:"Your average score is",value:""},percentFromMax:{msg:"Percent from max score ~",value:""}},schoolScores:"",schoolChartData:{labels:[],series:[]},schoolChartOptions:{fullWidth:!0,showArea:!0,axisX:{showGrid:!0,showLabel:!0},axisY:{scaleMinSpace:15,low:-42,high:42}},combinationsFavsChartData:{labels:["Pair","Two pairs","Three O.A.K","Full","Quads","Poker","Small","Large","Chance"],series:[[18,14,6,4,5,1,10,5,19]]},combinationsFavsChartOptions:{seriesBarDistance:30,reverseData:!0,horizontalBars:!0,axisY:{offset:70}}}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.forEach(function(e){o(t,e,s[e])})}return t}({},Object(a.c)(["getMaxPossibleScore","getUserAuthState","getDiceValuesFavs"])),mounted:function(){var t=this;this.$nextTick(function(){console.log("User stats page mounted."),localStorage.hasOwnProperty("userName")&&(t.userName=localStorage.getItem("userName"),t.highestScore=localStorage.getItem("highestScore"),t.userScoresArray=t.assembleLastScoresArray(),t.assembleSchoolScoresArray(),t.setDiceFavsValuesChartSeries(),t.setCombinationsFavsChartSeries(),t.lastScoresToDisplay=t.userScoresArray.slice(0).slice(-12),t.newStats.gamesPlayed.value=t.userScoresArray.length,t.newStats.averageScore.value=t.computeAverageScore(),t.newStats.percentFromMax.value=t.computePercentFromMax(),t.userScoresArray.length&&(t.chartData.labels=t.prepareLabelsForChart(t.userScoresArray.length),t.chartData.series=[t.lastScoresToDisplay]),""==localStorage.getItem("highestScore")?(console.log("You are truly an Anonymous!"),t.userName="Anonymous",t.anonymousUserNoGames=!0,t.messageToAnonymous="You have to finish at least one game to\n          calculate stats."):""==localStorage.getItem("lastScoresArray")&&(t.anonymousUserNoGames=!0,t.messageToAnonymous="You have to finish at least one game to\n          calculate stats."))})},methods:{restartGame:function(){console.log("Restarting."),this.$store.commit("resetState"),this.$router.push("/game")},assembleLastScoresArray:function(){return localStorage.getItem("lastScoresArray").split(",")},assembleSchoolScoresArray:function(){if(this.schoolScores=localStorage.getItem("schoolScores"),this.schoolScores){var t=this.schoolScores.split(",").slice(-18);this.schoolChartData.series=[t]}},convertValuesToPercent:function(t){var e=[],s=Math.max.apply(Math,r(t)),a=!0,o=!1,n=void 0;try{for(var i,l=t[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var c=i.value;if(c===s)return;e.push(Math.floor(c/s*100))}}catch(t){o=!0,n=t}finally{try{a||null==l.return||l.return()}finally{if(o)throw n}}return e},setDiceFavsValuesChartSeries:function(){var t=localStorage.getItem("diceValuesFavs").split(","),e=this.convertValuesToPercent(t);this.diceValuesFavsChartData.series=[e]},setCombinationsFavsChartSeries:function(){var t=localStorage.getItem("combinationsFavs").split(","),e=this.convertValuesToPercent(t);this.combinationsFavsChartData.series=[e]},prepareLabelsForChart:function(t){var e=t-12,s=[];if(t>=12){for(;t!==e;)s.push(t),t--;return s.reverse()}for(;0!==t;)s.push(t),t--;return s.reverse()},computeAverageScore:function(){if(this.userScoresArray){var t=[],e=!0,s=!1,a=void 0;try{for(var r,o=this.userScoresArray[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var n=r.value;t.push(parseInt(n))}}catch(t){s=!0,a=t}finally{try{e||null==o.return||o.return()}finally{if(s)throw a}}return t.length>0?parseInt(t.reduce(function(t,e){return t+e})/t.length):0}},computePercentFromMax:function(){var t=Math.floor(this.newStats.averageScore.value/this.getMaxPossibleScore*100);return t?t+"%":""}}},i=(s("III1"),s("KHd+")),l=Object(i.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"text-xs-center",attrs:{column:"","pt-2":""}},[s("v-layout",{attrs:{column:"","align-center":"","pt-2":""}},[s("h2",{staticClass:"user-name"},[t._v("\n      "+t._s(t.userName)+"!\n    ")]),t._v(" "),t.anonymousUserNoGames?s("v-flex",[s("h3",{staticClass:"message-to-anonymous"},[t._v("\n        "+t._s(t.messageToAnonymous)+"\n      ")])]):s("v-flex",[s("h3",{staticClass:"hi-score pb-2"},[t._v("\n        Your highest score\n        "),s("span",{staticClass:"highlighted"},[t._v("\n          "+t._s(t.highestScore)+"\n        ")])]),t._v(" "),s("h3",{staticClass:"hi-score pb-2"},[t._v("\n        Max possible score "+t._s(t.getMaxPossibleScore)+"\n      ")])])],1),t._v(" "),t.anonymousUserNoGames?t._e():s("v-layout",{attrs:{column:""}},[s("v-layout",{attrs:{row:"",wrap:"","pt-4":""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",[t._v("\n          School results\n        ")])]),t._v(" "),s("v-flex",{attrs:{xs12:"","d-flex":"","align-center":"","pr-3":""}},[s("chartist",{attrs:{ratio:"ct-major-twelfth",type:"Line",data:t.schoolChartData,options:t.schoolChartOptions}})],1)],1),t._v(" "),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"","pb-2":""}},[s("h2",[t._v("\n          Game results\n        ")])]),t._v(" "),t._l(t.newStats,function(e){return s("v-flex",{key:e.msg,staticClass:"stats-display pb-1",attrs:{xs12:""}},[t._v("\n        "+t._s(e.msg)+" "+t._s(e.value)+"\n      ")])})],2),t._v(" "),s("v-layout",{attrs:{wrap:"","py-2":""}},[s("v-flex",{attrs:{"d-flex":"","align-center":"","pr-3":""}},[s("chartist",{staticClass:"game-results-chart",attrs:{ratio:"ct-major-twelfth",type:"Line",data:t.chartData,options:t.chartOptions}})],1)],1),t._v(" "),s("v-layout",{attrs:{"align-space-around":"",column:""}},[t.highestScore?s("h2",[t._v("\n        Most recent scores are\n      ")]):t._e(),t._v(" "),s("v-flex",{staticClass:"hi-score-display pt-1",attrs:{"d-flex":""}},[s("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},t._l(t.lastScoresToDisplay,function(e,a){return s("v-flex",{key:a,attrs:{xs4:"",sm1:"","ma-0":""}},[t._v("\n            "+t._s(e)+"\n          ")])}),1)],1)],1),t._v(" "),s("v-layout",{attrs:{wrap:"","pt-4":""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",[t._v("\n          Your favorite values\n        ")])]),t._v(" "),s("v-flex",{attrs:{xs12:"","align-center":"","pr-3":""}},[s("chartist",{staticClass:"dice-favs-chart",attrs:{ratio:"ct-major-twelfth",type:"Bar",data:t.diceValuesFavsChartData,options:t.diceValuesFavsChartOptions}})],1)],1),t._v(" "),s("v-layout",{attrs:{wrap:"","pt-4":""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",[t._v("\n          Your favorite combinations\n        ")])]),t._v(" "),s("v-flex",{attrs:{xs12:"","align-center":"","pr-3":""}},[s("chartist",{staticClass:"combinations-favs-chart",attrs:{ratio:"ct-square",type:"Bar",data:t.combinationsFavsChartData,options:t.combinationsFavsChartOptions}})],1)],1)],1)],1)},[],!1,null,null,null);e.default=l.exports}}]);
//# sourceMappingURL=settings.d7689dc036ede01fdcf7.js.map