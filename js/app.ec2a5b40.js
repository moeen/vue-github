(function(t){function e(e){for(var n,o,l=e[0],i=e[1],u=e[2],p=0,f=[];p<l.length;p++)o=l[p],s[o]&&f.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,l=1;l<r.length;l++){var i=r[l];0!==s[i]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"029b":function(t,e,r){"use strict";var n=r("4b96"),s=r.n(n);s.a},"034f":function(t,e,r){"use strict";var n=r("64a9"),s=r.n(n);s.a},"4b96":function(t,e,r){},"53d5":function(t,e,r){"use strict";var n=r("6f2e"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("el-container",[r("el-header",{attrs:{height:"100px"}},[r("el-col",{attrs:{span:2}},[r("a",{on:{click:function(e){t.$router.go(-1)}}},[r("arrow-left",{staticClass:"header-icon"})],1)]),r("el-col",{attrs:{span:20}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/"}},[r("h1",{staticClass:"text-center header-title"},[t._v("\n            vue-github\n          ")])])],1),r("el-col",{attrs:{span:2}},[r("a",{attrs:{href:"https://github.com/moeen",target:"_blank"}},[r("github-circle",{staticClass:"header-icon"})],1)])],1),r("el-main",[r("router-view")],1),r("el-footer",{staticStyle:{"text-align":"center",color:"#37474F"},attrs:{height:"40px"}},[r("a",{staticClass:"no-decoration",attrs:{href:"https://github.com/moeen/vue-github",target:"_blank"}},[t._v("vue-github")]),t._v(" | "),r("a",{staticClass:"no-decoration",attrs:{href:"https://github.com/moeen",target:"_blank"}},[t._v("Moein")])])],1)],1)},a=[],o=r("22f9"),l=r("57e5"),i={components:{GithubCircle:o["a"],ArrowLeft:l["a"]}},u=i,c=(r("034f"),r("2877")),p=Object(c["a"])(u,s,a,!1,null,null,null);p.options.__file="App.vue";var f=p.exports,d=r("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:22}},[r("el-input",{attrs:{placeholder:"username ..."},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchUsername(e):null}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchUsername}},[t._v("Search")])],1)],1),t.searchResult?[0==t.searchResult.items.length?r("el-alert",{attrs:{title:"Username incorrect",type:"error",description:"We couldn’t find any username matches "+t.username,"show-icon":""}}):t._e(),r("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},t._l(t.searchResult.items,function(e){return r("el-col",{key:e.id,attrs:{xs:12,sm:8,md:4,lg:4,xl:4}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+e.login}},[r("el-card",{staticClass:"username-card",attrs:{"body-style":{padding:"0px"}}},[r("img",{staticClass:"image",attrs:{src:e.avatar_url}}),r("div",{staticStyle:{padding:"14px","text-align":"center"}},[r("span",[t._v(t._s(e.login))])])])],1)],1)}))]:t._e()],2)},h=[],g={name:"home",data:function(){return{username:""}},methods:{searchUsername:function(){this.$store.dispatch("userSearch",this.username)}},computed:{searchResult:function(){return this.$store.state.UserModule.searchResult}}},_=g,v=(r("029b"),Object(c["a"])(_,m,h,!1,null,"dab25e5c",null));v.options.__file="Home.vue";var b=v.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.userDetail&&t.userRepos?[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[r("el-card",{staticClass:"box-card"},[r("el-col",{attrs:{span:8}},[r("img",{staticStyle:{width:"100%",height:"auto","border-radius":"50%"},attrs:{src:t.userDetail.avatar_url,alt:""}})]),r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:16}},[r("h4",{staticStyle:{"margin-left":"15px"}},[t._v("\n              "+t._s(t.userDetail.name)+"\n            ")]),r("p",{staticStyle:{"margin-left":"15px","font-size":"0.9rem"}},[t._v("\n              "+t._s(t.userDetail.bio)+"\n            ")]),r("el-row",[r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[r("p",[t._v("\n                  "+t._s(t.userDetail.public_repos)+"\n                ")]),r("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("Repositories")])]),r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+t.username+"/followers"}},[r("p",[t._v("\n                    "+t._s(t.userDetail.followers)+"\n                  ")])]),r("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("Followers")])],1),r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+t.username+"/following"}},[r("p",[t._v("\n                    "+t._s(t.userDetail.following)+"\n                  ")])]),r("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("Following")])],1)],1)],1)],1)],1),r("el-col",{attrs:{xs:24,sm:24,md:16,lg:16,xl:16}},[r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},t._l(t.userRepos,function(e){return r("el-col",{key:e.id,staticStyle:{margin:"10px 0 10px 0"},attrs:{span:12}},[r("el-card",{staticClass:"box-card"},[r("h4",{staticStyle:{margin:"0"}},[t._v("\n                  "+t._s(e.name)+"\n                ")]),r("p",[t._v("\n                  "+t._s(e.description)+"\n                ")]),r("el-row",[r("el-button",{staticStyle:{padding:"6px 8px 8px 8px"},attrs:{type:"primary",plain:""}},[r("star-outline"),t._v("\n                    "+t._s(e.stargazers_count)+"\n                  ")],1),r("el-button",{staticStyle:{padding:"6px 8px 8px 8px"},attrs:{type:"primary",plain:""}},[r("source-fork"),t._v("\n                    "+t._s(e.forks_count)+"\n                  ")],1),r("el-button",{staticStyle:{padding:"6px 8px 8px 8px",float:"right"},attrs:{type:"warning",plain:""}},[t._v("\n                    "+t._s(e.language)+"\n                  ")])],1)],1)],1)}))],1)],1)],1)]:t._e()],2)},x=[],y=r("7a20"),S=r("166e"),E={name:"user",components:{StarOutline:y["a"],SourceFork:S["a"]},data:function(){return{username:""}},beforeMount:function(){this.username=this.$route.params.username,this.$store.dispatch("userRepos",this.username),this.$store.dispatch("userDetail",this.username)},computed:{userRepos:function(){return this.$store.state.UserModule.userRepos},userDetail:function(){return this.$store.state.UserModule.userDetail}}},R=E,C=Object(c["a"])(R,w,x,!1,null,null,null);C.options.__file="User.vue";var k=C.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},t._l(t.userFollowers,function(e){return r("el-col",{key:e.id,staticClass:"follow-card",attrs:{xs:12,sm:8,md:4,lg:4,xl:4}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+e.login}},[r("el-card",{staticClass:"username-card",attrs:{"body-style":{padding:"0px"}}},[r("img",{staticClass:"image",attrs:{src:e.avatar_url}}),r("div",{staticStyle:{padding:"14px","text-align":"center"}},[r("span",[t._v(t._s(e.login))])])])],1)],1)}))],1)],1)},F=[],U={name:"followers",data:function(){return{}},beforeCreate:function(){var t=this.$route.params.username;this.$store.dispatch("userFollowers",t)},computed:{userFollowers:function(){return this.$store.state.UserModule.userFollowers}}},$=U,D=(r("53d5"),Object(c["a"])($,O,F,!1,null,"1234b422",null));D.options.__file="Followers.vue";var T=D.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},t._l(t.userFollowing,function(e){return r("el-col",{key:e.id,staticClass:"follow-card",attrs:{xs:12,sm:8,md:4,lg:4,xl:4}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+e.login}},[r("el-card",{staticClass:"username-card",attrs:{"body-style":{padding:"0px"}}},[r("img",{staticClass:"image",attrs:{src:e.avatar_url}}),r("div",{staticStyle:{padding:"14px","text-align":"center"}},[r("span",[t._v(t._s(e.login))])])])],1)],1)}))],1)],1)},L=[],M={name:"following",data:function(){return{}},beforeCreate:function(){var t=this.$route.params.username;this.$store.dispatch("userFollowing",t)},computed:{userFollowing:function(){return this.$store.state.UserModule.userFollowing}}},P=M,A=(r("7297"),Object(c["a"])(P,j,L,!1,null,"2b626265",null));A.options.__file="Following.vue";var z=A.exports;n["default"].use(d["a"]);var W=new d["a"]({base:"/",routes:[{path:"/",name:"home",component:b},{path:"/user/:username",name:"user",component:k},{path:"/user/:username/followers",name:"followers",component:T},{path:"/user/:username/following",name:"following",component:z}]}),I=r("2f62"),G=(r("386d"),r("bc3a")),H=r.n(G),J={search:function(t){return H.a.get("https://api.github.com/search/users?q=".concat(t,"&per_page=6"))},userRepos:function(t){return H.a.get("https://api.github.com/users/".concat(t,"/repos"))},userDetail:function(t){return H.a.get("https://api.github.com/users/".concat(t))},followers:function(t){return H.a.get("https://api.github.com/users/".concat(t,"/followers"))},following:function(t){return H.a.get("https://api.github.com/users/".concat(t,"/following"))}},N={searchResult:null,userRepos:null,userDetail:null,userFollowers:null,userFollowing:null},q={userSearch:function(t,e){var r=t.commit;J.search(e).then(function(t){r("SET_SEARCH_RESULT",t.data)})},userRepos:function(t,e){var r=t.commit;J.userRepos(e).then(function(t){r("SET_USER_REPOS",t.data)})},userDetail:function(t,e){var r=t.commit;J.userDetail(e).then(function(t){r("SET_USER_DETAIL",t.data)})},userFollowers:function(t,e){var r=t.commit;J.followers(e).then(function(t){r("SET_USER_FOLLOWERS",t.data)})},userFollowing:function(t,e){var r=t.commit;J.following(e).then(function(t){r("SET_USER_FOLLOWING",t.data)})}},B={SET_SEARCH_RESULT:function(t,e){t.searchResult=e},SET_USER_REPOS:function(t,e){t.userRepos=e},SET_USER_DETAIL:function(t,e){t.userDetail=e},SET_USER_FOLLOWERS:function(t,e){t.userFollowers=e},SET_USER_FOLLOWING:function(t,e){t.userFollowing=e}},K={state:N,actions:q,mutations:B};n["default"].use(I["a"]);var Q=!1,V=new I["a"].Store({modules:{UserModule:K},strict:Q}),X=r("5c96"),Y=r.n(X);r("0fae"),r("d48d");n["default"].use(Y.a),n["default"].config.productionTip=!1,new n["default"]({router:W,store:V,render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,e,r){},"6f2e":function(t,e,r){},7297:function(t,e,r){"use strict";var n=r("a4c2"),s=r.n(n);s.a},a4c2:function(t,e,r){}});
//# sourceMappingURL=app.ec2a5b40.js.map