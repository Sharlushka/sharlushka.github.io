(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/cwl":function(e,t,o){var s=o("58f3");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,o("SZ7m").default)("2268fd4f",s,!0,{})},"58f3":function(e,t,o){(e.exports=o("JPst")(!1)).push([e.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}*[data-v-7bf9d951]{font-family:"Quicksand","Verdana",sans-serif}.highlighted[data-v-7bf9d951]{color:#FF9800 !important}.default-icon-color[data-v-7bf9d951]{color:#7B1FA2}.button[data-v-7bf9d951]{border-radius:.3em;line-height:2em}.button-icon-margin[data-v-7bf9d951]{margin:.3em}.dialog[data-v-7bf9d951]{font-size:1.3em;border-radius:.3em;border:0.1em solid #7B4B9D !important}.input-icon[data-v-7bf9d951]{color:#e4c2ff}.default-text-color[data-v-7bf9d951]{color:#7B1FA2}.user-name-game-end span[data-v-7bf9d951]{color:#FF9800}.message-school[data-v-7bf9d951]{line-height:1.5}.network-check-background[data-v-7bf9d951]{height:3em}.offline-dialog[data-v-7bf9d951]{border-radius:.3em;border:0.1em solid #7B1FA2}.offline-dialog-message[data-v-7bf9d951]{padding-top:0em;font-size:1.2em;color:#301246}\n',""])},C90p:function(e,t,o){"use strict";o.r(t);o("yt8O"),o("RW0V"),o("rGqo"),o("xfY5"),o("KKXr");var s=o("L2JU"),a=o("B6RA"),r=o("Hfx9"),n=o("9UzC"),i=o("Tdv1"),c={functional:!0,render(e,t){const{_c:o,_v:s,data:a,children:r=[]}=t,{class:n,staticClass:i,style:c,staticStyle:l,attrs:g={},...h}=a;return o("svg",{class:[n,i],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},g),...h},r.concat([o("path",{attrs:{fill:"currentColor",d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}}),o("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]))}};function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),s.forEach(function(t){g(e,t,o[t])})}return e}function g(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var h={components:{NetworkCheck:n.a,restartIcon:i.a,cancelIcon:c},data:function(){return{message:"Game over,",messageText:"Your score is",graduationMessage:"You can't even finish the school.",schoolScoreMessage:"Your score is",userName:"",highestScore:null,networkProblemDialog:!1,tryAgainBtnLoading:!1,offlineSaveUserMessage:"You are offline,\n        connect to the internet to save results.\n        If you choose to cancel, results are saved\n        in local storage and will be saved to DB\n        next time you finish the game.",exclamation:"!",lastScores:"",schoolScores:"",combinationsFavs:"",dbUsersCollRef:"users"}},computed:l({},Object(s.c)(["getTotalScore","getSchoolScore","getCurrentGameState","getDefaultUserName","getUserData","isGameEnded","getCurrentNonZeroCombinations"])),mounted:function(){var e=this;this.$nextTick(function(){console.log("Game over view mounted."),e.getUserData.isAuthenticated?e.userName=localStorage.getItem("userName"):e.userName=e.getDefaultUserName,e.isGameEnded?(""===localStorage.getItem("highestScore")?(console.log("No local storage score array exist yet, creating one"),e.highestScore=e.getTotalScore,localStorage.setItem("highestScore",e.getTotalScore),e.addScoreToDatabase()):(e.lastScores=localStorage.getItem("lastScoresArray"),e.schoolScores=localStorage.getItem("schoolScores"),e.highestScore=localStorage.getItem("highestScore"),e.combinationsFavs=localStorage.getItem("combinationsFavs"),e.addScoreToDatabase()),e.$store.dispatch("setLastSave",!0).then(function(){console.log("This was the last save until reset.")}),e.$store.dispatch("resetGameOver",!1).then(function(){console.log("Resetting game over.")})):console.log("Nothing to record, play the game.")})},methods:l({},Object(s.b)(["resetGameOver","setLastSave"]),{restartGame:function(){console.log("Restarting game."),a.a.commit("resetState"),this.$router.push("/game")},addScoreToDatabase:function(){if(console.log("Adding score."),""===this.lastScores?this.lastScores=[]:this.lastScores=this.lastScores.split(","),""===this.schoolScores?this.schoolScores=[]:this.schoolScores=this.schoolScores.split(","),""===this.combinationsFavs?this.combinationsFavs=[0,0,0,0,0,0,0,0,0]:this.combinationsFavs=this.combinationsFavs.split(",").map(Number),this.getTotalScore>this.highestScore?(this.highestScore=this.getTotalScore,localStorage.setItem("highestScore",this.getTotalScore)):console.log("Your score is not so high: ".concat(this.getTotalScore)),this.getCurrentGameState.schoolCompleted){this.lastScores.push(this.getTotalScore),localStorage.setItem("lastScoresArray",this.lastScores),this.schoolScores.push(this.getSchoolScore),localStorage.setItem("schoolScores",this.schoolScores);var e=this.getCurrentNonZeroCombinations;for(var t in this.combinationsFavs)this.combinationsFavs[t]+=e[t];localStorage.setItem("combinationsFavs",this.combinationsFavs)}else this.schoolScores.push(this.getSchoolScore),localStorage.setItem("schoolScores",this.schoolScores);localStorage.setItem("diceValuesFavs",this.$store.state.user.diceValuesFavs),this.getUserData.isAuthenticated?this.getUserData.isAuthenticated&&this.isOnline?(console.log("User is authenticated and network is online. Syncing with firestore."),this.syncScoreWithFirestore()):this.getUserData.isAuthenticated&&!this.isOnline&&this.isGameEnded?(console.log("User is authenticated but network is offline."),this.toggleNetworkProblemDialog()):console.log("Something went wrong in the piping system."):console.log("Anonymous! To save results please register.")},syncScoreWithFirestore:function(){var e=this;this.tryAgainBtnLoading=!this.tryAgainBtnLoading,console.log("Syncing score for user ".concat(localStorage.getItem("userName")));var t=localStorage.getItem("userUid");r.a.collection(this.dbUsersCollRef).where("uid","==",t).get().then(function(e){var o;return e.forEach(function(e){e.data().uid===t&&(o=e.id)}),o}).then(function(t){var o=r.a.collection(e.dbUsersCollRef).doc(t),s=localStorage.getItem("lastScoresArray"),a=localStorage.getItem("highestScore"),n=localStorage.getItem("schoolScores"),i=e.$store.state.user.diceValuesFavs,c=localStorage.getItem("combinationsFavs");return o.update({resultsArray:s,schoolResultsArray:n,hiScore:a,diceValuesFavs:i,combinationsFavs:c}),console.log("...updating user stats"),e.tryAgainBtnLoading=!e.tryAgainBtnLoading,e.networkProblemDialog=!1,!0}).catch(function(t){e.tryAgainBtnLoading=!e.tryAgainBtnLoading,console.log("Error getting documents: ",t)})},toggleNetworkProblemDialog:function(){this.networkProblemDialog=!this.networkProblemDialog}})},d=(o("DdEn"),o("KHd+")),u=Object(d.a)(h,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{id:"endGame","fill-height":"","pa-0":"","mp-0":""}},[o("v-layout",{attrs:{column:""}},[o("v-flex",{staticClass:"user-name-game-end text-xs-center",attrs:{"align-center":"","d-flex":""}},[o("h1",[e._v("\n        "+e._s(e.message)),o("br"),e._v(" "),o("span",[e._v(e._s(e.userName)+e._s(e.exclamation))])])]),e._v(" "),e.getCurrentGameState.schoolCompleted?e._e():o("v-flex",{staticClass:"message-school text-xs-center"},[o("h3",[e._v(e._s(e.graduationMessage))]),e._v(" "),o("h2",[e._v(e._s(e.schoolScoreMessage)+" "+e._s(e.getTotalScore))])]),e._v(" "),e.getCurrentGameState.schoolCompleted?o("v-flex",{staticClass:"message-game text-xs-center"},[o("h2",[e._v(e._s(e.messageText)+" "),o("span",{staticClass:"highlighted"},[e._v(e._s(e.getTotalScore))])])]):e._e(),e._v(" "),o("v-layout",{attrs:{row:"","align-center":"","justify-space-around":""}},[o("v-flex",{staticClass:"text-xs-center",attrs:{"d-flex":"",xs6:"",lg2:""}},[o("v-btn",{staticClass:"button",attrs:{ripple:"",outline:"",color:"orange"},on:{click:function(t){return e.restartGame()}}},[o("restartIcon",{staticClass:"highlighted button-icon-margin"}),e._v("\n          restart\n        ")],1)],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{width:"20em"},model:{value:e.networkProblemDialog,callback:function(t){e.networkProblemDialog=t},expression:"networkProblemDialog"}},[o("v-card",{staticClass:"text-xs-center offline-dialog"},[o("v-flex",{staticClass:"network-check-background pt-1"},[o("NetworkCheck")],1),e._v(" "),o("v-card-text",{staticClass:"text-xs-left offline-dialog-message"},[e._v("\n        "+e._s(e.offlineSaveUserMessage)+"\n      ")]),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{staticClass:"button",attrs:{color:"orange",outline:"",loading:e.tryAgainBtnLoading},on:{click:e.syncScoreWithFirestore}},[o("restartIcon",{staticClass:"highlighted"}),e._v("\n          Try again\n        ")],1),e._v(" "),o("v-btn",{staticClass:"button",attrs:{outline:"",ripple:"",color:"purple darken-2"},on:{click:function(t){e.networkProblemDialog=!1}}},[o("cancelIcon",{staticClass:"default-icon-color"}),e._v("\n          Cancel\n        ")],1),e._v(" "),o("v-spacer")],1)],1)],1)],1)},[],!1,null,"7bf9d951",null);t.default=u.exports},DdEn:function(e,t,o){"use strict";var s=o("/cwl");o.n(s).a}}]);
//# sourceMappingURL=endgame.28196f0bcc4cecf39152.js.map