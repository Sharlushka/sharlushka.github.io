(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{HKOj:function(e,t,a){var s=a("O2RH");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a("SZ7m").default)("39f52171",s,!0,{})},JtMT:function(e,t,a){"use strict";a.r(t);var s={name:"Settings",data:function(){return{title:"Settings",settingsList:[{settingName:"Debug",settingIcon:"mdi-eye"},{settingName:"Debug2",settingIcon:"mdi-eye"}]}}},r=a("KHd+"),o=Object(r.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",[t("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t("h1",[this._v(this._s(this.title))])]),this._v(" "),t("v-flex",[t("v-switch",{attrs:{value:"","input-value":"true"}}),this._v(" "),t("h4",[this._v("Setting")])],1)],1)},[],!1,null,null,null);t.default=o.exports},O2RH:function(e,t,a){(e.exports=a("JPst")(!1)).push([e.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}*[data-v-7f27f052]{font-family:"Quicksand","Verdana",sans-serif}.default use[data-v-7f27f052]{color:#7B1FA2;stroke:#7B1FA2}.chosen use[data-v-7f27f052]{color:#FF9800;stroke:#FF9800}.highlighted[data-v-7f27f052]{color:#FF9800;fill:green}.default-icon-color[data-v-7f27f052]{color:#7B1FA2;fill:#7B1FA2}.button-icon-margin[data-v-7f27f052]{margin:.3em}.button[data-v-7f27f052]{border-radius:.3em;line-height:2em}.input-icon[data-v-7f27f052]{color:#e4c2ff}.help-title[data-v-7f27f052]{font-size:2.3em}.user-name[data-v-7f27f052]{color:#FF9800;font-size:1.7em}.hi-score[data-v-7f27f052]{line-height:1}.hi-score-display[data-v-7f27f052]{color:#B380D7;font-size:1.9em;text-align:center}.stats-display[data-v-7f27f052]{color:#301246;font-size:1.1em;font-weight:700;line-height:1.3}@media screen and (orientation: landscape){.hi-score-display[data-v-7f27f052]{font-size:1.3em;font-weight:700}}@media screen and (max-resolution: 96dpi) and (min-width: 500px){.help-title[data-v-7f27f052]{font-size:4em}.user-name[data-v-7f27f052]{font-size:3em}.hi-score-display[data-v-7f27f052]{font-size:2em}.stats-display[data-v-7f27f052]{font-size:1.5em}}#userStats[data-v-7f27f052]{height:100%}.message-to-anonymous[data-v-7f27f052]{font-family:"Quicksand","Verdana",sans-serif;padding:2em 0em 2em 0em}.highlighted[data-v-7f27f052]{fill:#FF9800}\n',""])},hrEp:function(e,t,a){"use strict";var s=a("HKOj");a.n(s).a},rFDy:function(e,t,a){"use strict";a.r(t);a("yt8O"),a("RW0V"),a("rE2o"),a("ioFf"),a("rGqo"),a("KKXr");var s=a("L2JU");function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o={name:"UserStats",data:function(){return{userName:"",anonymousUserNoGames:!1,messageToAnonymous:null,helpTitle:"About",highestScore:"",hiscoreGreeting:"Your highest score is",exclamation:".",lastScoresHeading:"Most recent scores are",userScoresArray:"",lastScoresToDisplay:"",userGamesPlayed:"",chartData:{labels:[],series:[]},chartOptions:{fullWidth:!0,lineSmooth:!1,axisX:{showGrid:!0,showLabel:!0}},newStats:{gamesPlayed:{msg:"Games played",value:""},maxPossibleScore:{msg:"Max possible score is",value:""},percentFromMax:{msg:"Percent from max score ~",value:""},averageScore:{msg:"Your average score equals",value:""}}}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){r(e,t,a[t])})}return e}({},Object(s.c)(["getMaxPossibleScore","getUserAuthState"])),mounted:function(){var e=this;this.$nextTick(function(){console.log("User stats page mounted."),localStorage.hasOwnProperty("userName")&&(e.userName=localStorage.getItem("userName"),e.highestScore=localStorage.getItem("highestScore"),e.userScoresArray=e.assembleLastScoresArray(),e.lastScoresToDisplay=e.userScoresArray.slice(0).slice(-12),e.newStats.gamesPlayed.value=e.userScoresArray.length,e.newStats.maxPossibleScore.value=e.getMaxPossibleScore,e.newStats.averageScore.value=e.computeAverageScore(),e.newStats.percentFromMax.value=e.computePercentFromMax(),e.userScoresArray.length&&(e.chartData.labels=e.prepareLabelsForChart(e.userScoresArray.length),e.chartData.series=[e.lastScoresToDisplay]),""==localStorage.getItem("highestScore")?(console.log("You are truly an Anonymous!"),e.userName="Anonymous",e.anonymousUserNoGames=!0,e.messageToAnonymous="You have to finish at least one game to\n          calculate stats, school results are in rules section."):""==localStorage.getItem("lastScoresArray")&&(e.anonymousUserNoGames=!0,e.messageToAnonymous="You have to finish at least one game to\n          calculate stats, school results are in rules section."))})},methods:{restartGame:function(){console.log("Restarting."),this.$store.commit("resetState"),this.$router.push("/game")},assembleLastScoresArray:function(){return localStorage.getItem("lastScoresArray").split(",")},prepareLabelsForChart:function(e){var t=e-12,a=[];if(e>=12){for(;e!==t;)a.push(e),e--;return a.reverse()}for(;0!==e;)a.push(e),e--;return a.reverse()},computeAverageScore:function(){if(this.userScoresArray){var e=[],t=!0,a=!1,s=void 0;try{for(var r,o=this.userScoresArray[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var n=r.value;e.push(parseInt(n))}}catch(e){a=!0,s=e}finally{try{t||null==o.return||o.return()}finally{if(a)throw s}}return e.length>0?parseInt(e.reduce(function(e,t){return e+t})/e.length):0}},computePercentFromMax:function(){var e=Math.floor(this.newStats.averageScore.value/this.getMaxPossibleScore*100);return e?e+"%":""}}},n=(a("hrEp"),a("KHd+")),l=Object(n.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:"","py-2":"","pb-4":""}},[a("v-flex",{staticClass:"text-xs-center"},[a("v-layout",{attrs:{column:""}},[a("h1",{staticClass:"help-title py-1"},[e._v("\n        "+e._s(e.helpTitle)+"\n      ")]),e._v(" "),a("h2",{staticClass:"user-name"},[e._v("\n        "+e._s(e.userName)+"!\n      ")]),e._v(" "),e.anonymousUserNoGames?a("h3",{staticClass:"message-to-anonymous"},[e._v("\n        "+e._s(e.messageToAnonymous)+"\n      ")]):e._e(),e._v(" "),e.anonymousUserNoGames?e._e():a("h3",{staticClass:"hi-score"},[e._v("\n        "+e._s(e.hiscoreGreeting)+"\n        "),a("span",{staticClass:" highlighted"},[e._v("\n          "+e._s(e.highestScore)+"\n        ")]),e._v("\n        "+e._s(e.exclamation)+"\n      ")])])],1),e._v(" "),e.anonymousUserNoGames?e._e():a("v-flex",{attrs:{"d-flex":"","align-center":"","py-1":"","pr-3":""}},[a("chartist",{attrs:{ratio:"ct-major-twelfth",type:"Bar",data:e.chartData,options:e.chartOptions}})],1),e._v(" "),e.anonymousUserNoGames?e._e():a("v-flex",{staticClass:"last-scores-heading text-xs-center",attrs:{"d-flex":"","align-center":""}},[e.highestScore?a("h3",[e._v("\n      "+e._s(e.lastScoresHeading)+"\n    ")]):e._e()]),e._v(" "),e.anonymousUserNoGames?e._e():a("v-layout",{attrs:{"align-space-around":"",column:""}},[a("v-flex",{staticClass:"hi-score-display",attrs:{"d-flex":"","pb-4":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},e._l(e.lastScoresToDisplay,function(t,s){return a("v-flex",{key:s,attrs:{xs4:"",sm1:"","ma-0":""}},[e._v("\n          "+e._s(t)+"\n        ")])}),1)],1),e._v(" "),e._l(e.newStats,function(t){return a("v-flex",{key:t.msg,staticClass:"stats-display text-xs-center"},[e._v("\n      "+e._s(t.msg)+" "+e._s(t.value)+"\n    ")])})],2)],1)},[],!1,null,"7f27f052",null);t.default=l.exports}}]);
//# sourceMappingURL=settings.0a73a475d61a2cddeaa7.js.map