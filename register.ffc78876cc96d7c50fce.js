(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{FW2u:function(e,s,t){(e.exports=t("JPst")(!1)).push([e.i,'@font-face{font-family:\'Quicksand\';font-style:normal;font-weight:400;font-display:swap;src:local("Quicksand Regular"),local("Quicksand-Regular"),url(https://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:\'Montserrat\';font-style:normal;font-weight:400;font-display:swap;src:local("Montserrat Regular"),local("Montserrat-Regular"),url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}*[data-v-ca588b94]{font-family:"Quicksand","Verdana",sans-serif}.highlighted[data-v-ca588b94]{color:#FF9800 !important}.default-icon-color[data-v-ca588b94]{color:#7B1FA2}.button[data-v-ca588b94]{border-radius:.3em;line-height:2em}.button-icon-margin[data-v-ca588b94]{margin:.3em}.dialog[data-v-ca588b94]{font-size:1.3em;border-radius:.3em;border:0.1em solid #7B4B9D !important}.input-icon[data-v-ca588b94]{color:#e4c2ff}.default-text-color[data-v-ca588b94]{color:#7B1FA2}#register[data-v-ca588b94]{height:100%}.register-title[data-v-ca588b94],.register-form[data-v-ca588b94],.buttons[data-v-ca588b94]{font-family:"Quicksand","Verdana",sans-serif}.button[data-v-ca588b94]{line-height:2em}.showPass[data-v-ca588b94],.showConfPass[data-v-ca588b94]{color:#7B1FA2}\n',""])},"c8+F":function(e,s,t){"use strict";t.r(s);var a=t("jifH"),o=t("pQVY"),r=t("Hfx9"),n=t("Wcq6"),l=t.n(n),i=(t("6nsN"),{name:"Register",components:{errorMessageDialog:a.a,showPassIcon:o.a},data:function(){return{pageTitle:"Register",registering:!1,errorMessage:"",valid:!0,usersCollRef:"users",userNameFormValue:"",nameRules:[function(e){return!e||e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/.test(e)||"E-mail must be valid"}],password:"",showPass:!1,passwordRules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length<=12||"Password must be less than 12 characters"}],confirmPassword:"",showConfPass:!1}},computed:{comparePasswords:function(){return this.password===this.confirmPassword||"Passwords do not match"}},mounted:function(){this.$nextTick(function(){console.log("Register page mounted.")})},methods:{signUp:function(){var e=this;this.errorMessage="",this.email&&this.password&&(this.registering=!0,l.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(s){""===e.userNameFormValue&&(e.userNameFormValue="Anonymous"),localStorage.setItem("userUid",s.user.uid),localStorage.setItem("userName",e.userNameFormValue);var t={name:localStorage.getItem("userName"),uid:s.user.uid,email:s.user.email,hiScore:localStorage.getItem("highestScore"),resultsArray:localStorage.getItem("lastScoresArray"),schoolResultsArray:localStorage.getItem("schoolScores")};e.addNewUser(t),console.log("User added ".concat(s.user.email)),e.verifyUserEmail(),e.$router.push("/game")}).catch(function(s){console.log(s.message),e.errorMessage=s.message,e.registering=!1}))},addNewUser:function(e){console.log("Adding user"),r.a.collection(this.usersCollRef).doc().set(e),console.log("Document successfully written!")},verifyUserEmail:function(){l.a.auth().currentUser.sendEmailVerification().then(function(){console.log("Email sent")}).catch(function(e){console.log("Error! ".concat(e))})},clear:function(){this.$refs.form.reset(),this.showPass=!1,this.showConfPass=!1}}}),c=(t("qIc2"),t("KHd+")),u=Object(c.a)(i,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",{attrs:{id:"register",fluid:"","pt-4":""}},[t("v-layout",{attrs:{column:""}},[t("errorMessageDialog"),e._v(" "),t("v-flex",{staticClass:"register-title text-xs-center py-4"},[t("h1",[e._v(e._s(e.pageTitle))])]),e._v(" "),t("v-layout",{staticClass:"register-form py-4",attrs:{"justify-center":""}},[t("v-flex",{attrs:{xs10:""}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(s){e.valid=s},expression:"valid"}},[t("v-text-field",{attrs:{rules:e.nameRules,counter:10,label:"Name",color:"purple accent-4",autocomplete:"off"},model:{value:e.userNameFormValue,callback:function(s){e.userNameFormValue=s},expression:"userNameFormValue"}}),e._v(" "),t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",autocomplete:"email",color:"purple accent-4",required:""},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),e._v(" "),t("v-layout",[t("v-flex",{attrs:{xs11:""}},[t("v-text-field",{attrs:{type:e.showPass?"text":"password",rules:e.passwordRules,label:"Password",autocomplete:"new-password",color:"purple accent-4",required:"",hint:"At least 6 characters"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}})],1),e._v(" "),t("v-flex",{staticClass:"text-xs-center",attrs:{"d-flex":"",xs1:"","align-center":"","align-content-center":"","justify-center":""},on:{click:function(s){e.showPass=!e.showPass}}},[t("showPassIcon",{staticClass:"input-icon",class:{showPass:e.showPass}})],1)],1),e._v(" "),t("v-layout",[t("v-flex",[t("v-text-field",{attrs:{type:e.showConfPass?"text":"password",rules:[e.comparePasswords],label:"Confirm password",autocomplete:"off",color:"purple accent-4",required:""},model:{value:e.confirmPassword,callback:function(s){e.confirmPassword=s},expression:"confirmPassword"}})],1),e._v(" "),t("v-flex",{staticClass:"text-xs-center",attrs:{"d-flex":"",xs1:"","align-center":"","align-content-center":"","justify-center":""},on:{click:function(s){e.showConfPass=!e.showConfPass}}},[t("showPassIcon",{staticClass:"input-icon",class:{showConfPass:e.showConfPass}})],1)],1)],1)],1)],1),e._v(" "),t("v-layout",{staticClass:"buttons text-xs-center py-4",attrs:{"justify-center":""}},[t("v-flex",{attrs:{xs6:"","d-flex":""}},[t("v-btn",{staticClass:"white--text button",attrs:{disabled:!e.valid,loading:e.registering,outline:"",color:"orange"},on:{click:function(s){return s.preventDefault(),e.signUp(s)}}},[e._v("\n          register\n        ")])],1),e._v(" "),t("v-flex",{attrs:{xs6:"","d-flex":""}},[t("v-btn",{staticClass:"button white--text",attrs:{disabled:e.valid,outline:"",color:"purple darken-1"},on:{click:e.clear}},[e._v("\n          clear\n        ")])],1)],1)],1)],1)},[],!1,null,"ca588b94",null);s.default=u.exports},eQIa:function(e,s,t){var a=t("FW2u");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("SZ7m").default)("4184a196",a,!0,{})},qIc2:function(e,s,t){"use strict";var a=t("eQIa");t.n(a).a}}]);
//# sourceMappingURL=register.ffc78876cc96d7c50fce.js.map