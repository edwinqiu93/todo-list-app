_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{RLOJ:function(e,t,n){e.exports={"max-size":"login_max-size__1tK4j",overlay:"login_overlay__Yihf4",bg:"login_bg__3E09M",container:"login_container__2Sxgt","left-portal":"login_left-portal__1NBp8",title:"login_title__1pqVd","idp-button":"login_idp-button__2luvX","line-input":"login_line-input__14ckt","forget-password":"login_forget-password__2CUWN"}},RNiq:function(e,t,n){"use strict";n.r(t);var r,a=n("o0o1"),o=n.n(a),s=n("HaE+"),i=n("1OyB"),u=n("vuIU"),l=n("JX7q"),c=n("Ji7U"),p=n("md7G"),d=n("foSv"),f=n("rePB"),b=n("q1tI"),g=n.n(b),v=n("boci"),m=n.n(v),_=n("/MKj"),h=n("bMwp"),w=(n("co3k"),n("nOHt")),O=n.n(w),y=n("RLOJ"),j=n.n(y),N=n("YFqc"),P=n.n(N),k=n("TSYQ"),R=n.n(k),x=n("PRzg"),S=n("BKN8"),D=g.a.createElement;function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var C=Object(_.b)()(r=function(e){Object(c.a)(n,e);var t=q(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,[this].concat(a)),Object(f.a)(Object(l.a)(e),"state",{payload:{password:"",user_id:""},loading:!1}),Object(f.a)(Object(l.a)(e),"handleChange",(function(t){return function(n){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.state);m.a.set(r,t,n),e.setState(r)}})),Object(f.a)(Object(l.a)(e),"handleSubmit",function(){var t=Object(s.default)(o.a.mark((function t(n){var r,a,i,u,l,c,p;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state.payload,a=r.user_id,i=r.password,""!==a.trim()&&""!==i.trim()){t.next=4;break}return t.abrupt("return",window.alert("User ID and Password can't be empty"));case 4:return u={user_id:a,password:i},t.prev=5,e.setState({loading:!0}),t.next=9,h.user.login(u);case 9:if(!(l=t.sent)){t.next=16;break}return S.default.saveAuthToken(l.authToken),x.a.registerIdleTimerResets(),S.default.queueCallbackBeforeExpiry(Object(s.default)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.user.postRefreshToken();case 2:case"end":return e.stop()}}),e)})))),e.setState({loading:!1}),t.abrupt("return",O.a.push("/dashboard"));case 16:t.next=23;break;case 18:return t.prev=18,t.t0=t.catch(5),console.error(t.t0),window.alert(null!==(c=null===(p=t.t0.response)||void 0===p?void 0:p.data)&&void 0!==c?c:t.t0.message),t.abrupt("return",e.setState({loading:!1}));case 23:case"end":return t.stop()}}),t,null,[[5,18]])})));return function(e){return t.apply(this,arguments)}}()),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.payload;t.loading;return D(g.a.Fragment,null,D("div",{className:R()(j.a.bg)}),D("div",{className:R()(j.a.overlay)}),D("div",{className:R()(j.a.container)},D("div",{className:R()(j.a["left-portal"])},D("h2",null,"Login"),D("form",{className:"login-form",onSubmit:this.handleSubmit},D("div",{className:"signup-element"},D("div",{className:"signup-label"},D("label",{htmlFor:"user_id"},"User ID"),D("div",{className:"signup-input"},D("input",{id:"user_id",name:"user_id",value:n.user_id,onChange:function(t){return e.handleChange("payload.user_id")(t.target.value)},required:!0})))),D("div",{className:"signup-element"},D("div",{className:"signup-label"},D("label",{htmlFor:"password"},"Password"),D("div",{className:"signup-input"},D("input",{id:"password",name:"password",type:"password",value:n.password,onChange:function(t){return e.handleChange("payload.password")(t.target.value)},required:!0})))),D("div",{className:"signin-button"},D("button",{className:"btn btn-login",type:"submit"},"Sign In")),D("div",{className:"login-demo"},D("h4",null,"Demo Account"),D("p",null,"User ID: demo"),D("p",null,"Password: Testing123")),D("div",{className:"login-form-redirect"},D(P.a,{href:"/register"},D("a",null,'Don"t have an account? Create one.')))))))}}]),n}(g.a.Component))||r;t.default=C},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,4,3,8]]]);