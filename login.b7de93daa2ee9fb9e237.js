(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{116:function(t,e,o){"use strict";var n=o(25),r=o.n(n);o(121);r.a.firestore().settings({timestampsInSnapshots:!0}),e.a=r.a.firestore()},135:function(t,e,o){var n=o(8).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||o(9)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},136:function(t,e,o){var n=o(156);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(24).default)("25b5cef2",n,!0,{})},155:function(t,e,o){"use strict";var n=o(136);o.n(n).a},156:function(t,e,o){(t.exports=o(14)(!1)).push([t.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}.default use{color:#7B1FA2;stroke:#7B1FA2}.chosen use{color:#FF9800;stroke:#FF9800}.highlighted{color:#FF9800;fill:#FF9800}.default-icon-color{color:#7B1FA2;fill:#7B1FA2}.login-form,.page-title,.info-text,.button{font-family:"Quicksand","Verdana",sans-serif}.info-text{color:#7B1FA2;font-size:1.4em;font-weight:700}\n',""])},168:function(t,e,o){"use strict";o.r(e);o(45),o(46),o(43),o(67),o(135),o(33);var n=o(17),r=o(25),s=o.n(r),a=o(116);o(69);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var u={name:"Login",data:function(){return{loggingIn:!1,signingOut:!1,errorMessage:void 0,newUserBtnText:"Register",pageTitle:"Log In",valid:!0,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length<=12||"Password must be less than 12 characters"}],confirmPassword:"",usersCollRef:"users"}},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){l(t,e,o[e])})}return t}({},Object(n.c)(["getUserAuthState"]),{comparePasswords:function(){return this.password===this.confirmPassword||"Passwords do not match"}}),mounted:function(){this.$nextTick(function(){console.log("Login page mounted.")})},methods:{login:function(){var t=this;if(console.log("Signing user in."),this.errorMessage=void 0,this.email&&this.password)return this.toggleButtonLoadingState("login"),s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.getUserDataFromDB(e.user.uid)}).then(function(){t.toggleButtonLoadingState("login"),t.$router.push("/game")}).catch(function(e){return console.log(e.message),t.errorMessage=e.message,t.toggleButtonLoadingState("login"),!1}),!0},signOut:function(){var t=this;console.log("Signing user out."),this.toggleButtonLoadingState("signout"),s.a.auth().signOut().then(function(){t.loggingOut=!t.loggingOut,t.$store.commit("setUserIsLoggedIn",!1),localStorage.clear(),t.$router.push("/"),t.toggleButtonLoadingState("signout")}).catch(function(e){console.error("Sign Out Error:",e),t.toggleButtonLoadingState("signout")})},getUserDataFromDB:function(t){a.a.collection(this.usersCollRef).where("uid","==",t).get().then(function(e){e.forEach(function(e){e.data().uid===t&&(localStorage.setItem("userName",e.data().name),localStorage.setItem("userUid",e.data().uid),localStorage.setItem("highestScore",e.data().hiScore),localStorage.setItem("lastScoresArray",e.data().resultsArray),localStorage.setItem("schoolScores",e.data().schoolResultsArray))})}).catch(function(t){console.log("Error getting documents: ",t)})},toggleButtonLoadingState:function(t){return console.log("Button to toggle ".concat(t)),"login"===t?(this.loggingIn=!this.loggingIn,!0):"signout"===t?(this.signingOut=!this.signingOut,!0):(console.log("Nothing to toggle, button is ".concat("undefined"==typeof button?"undefined":i(button))),!1)},clearForm:function(){this.$refs.form.reset()}}},c=(o(155),o(12)),g=Object(c.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"text-xs-center",attrs:{id:"login",fluid:"","pa-0":""}},[o("v-layout",{attrs:{column:""}},[o("v-flex",{attrs:{"d-flex":""}},[o("v-alert",{attrs:{value:t.errorMessage,dismissible:"",outline:"",relative:"",type:"error"}},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")])],1),t._v(" "),o("v-flex",{staticClass:"page-title py-4",attrs:{"d-flex":""}},[o("h1",[t._v(t._s(t.pageTitle))])]),t._v(" "),o("v-layout",{staticClass:"login-form py-4",attrs:{"justify-center":""}},[o("v-flex",{attrs:{xs9:"","d-flex":"","align-center":"","py-4":""}},[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",type:"email",autocomplete:"off",required:"",color:"purple accent-4"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),o("v-text-field",{attrs:{rules:t.passwordRules,type:"password",label:"Password",autocomplete:"off",required:"",color:"purple accent-4"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),t._v(" "),o("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[o("v-flex",{attrs:{"d-flex":"",xs5:""}},[o("v-btn",{staticClass:"button white--text",attrs:{type:"submit",loading:t.loggingIn,outline:"",ripple:"",color:"orange"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("\n          login\n        ")])],1),t._v(" "),o("v-flex",{attrs:{"d-flex":"",xs5:""}},[o("v-btn",{staticClass:"button white--text",attrs:{disabled:t.valid,outline:"",ripple:"",color:"purple darken-1"},on:{click:t.clearForm}},[t._v("\n          clear\n        ")])],1),t._v(" "),o("v-flex",{staticClass:"info-text",attrs:{xs12:"","py-4":"","align-center":""}},[o("v-divider")],1),t._v(" "),o("v-flex",{attrs:{"d-flex":"",xs5:""}},[o("v-btn",{staticClass:"button white--text",attrs:{loading:t.signingOut,disabled:!t.getUserAuthState,outline:"",ripple:"",color:"purple darken-1"},on:{click:t.signOut}},[t._v("\n          log out\n        ")])],1),t._v(" "),o("v-flex",{attrs:{"d-flex":"",xs5:""}},[o("v-btn",{staticClass:"button white--text",attrs:{to:"/register",outline:"",ripple:"",color:"purple darken-1"}},[t._v("\n          "+t._s(t.newUserBtnText)+"\n        ")])],1)],1)],1)],1)},[],!1,null,null,null);e.default=g.exports}}]);
//# sourceMappingURL=login.b7de93daa2ee9fb9e237.js.map