(function(e){function n(n){for(var r,a,i=n[0],c=n[1],u=n[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(d.length)d.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(s.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={4:0},o={4:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{1:"fc17f90b",2:"400a5525",3:"00798d59"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={1:1,3:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{1:"acc1607c",2:"31d6cfe0",3:"a68210ec"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===a))return n()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],u=i.getAttribute("data-href");if(u===r||u===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,t(o)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var s=new Promise(function(n,t){r=o[e]=[n,t]});n.push(r[2]=s);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e),u=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=l;s.push([8,0]),t()})({"+hOJ":function(e,n,t){},"1kRs":function(e,n,t){"use strict";var r=t("pZ3L"),a=t.n(r);a.a},"3zqZ":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"image-fade",class:e.className,style:e.loaded?{backgroundImage:"url('"+e.src+"')",opacity:1}:{},attrs:{id:e.id}})},a=[],o={data:function(){return{img:null,loaded:!1}},props:["src","className","id"],mounted:function(){var e=this;this.$nextTick(function(){e.loadImg()})},watch:{src:function(){this.loadImg()}},methods:{loadImg:function(){var e=this;this.loaded=!1,this.img=new window.Image,this.img.onload=function(){e.loaded=!0},this.img.src=this.src}}},s=o,i=(t("1kRs"),t("KHd+")),c=Object(i["a"])(s,r,a,!1,null,null,null);n["a"]=c.exports},8:function(e,n,t){e.exports=t("Vtdi")},"C4a/":function(e,n,t){"use strict";var r=t("YYIF"),a=t.n(r);a.a},DFCr:function(e,n,t){},Gl1J:function(e,n,t){var r={"./NotFound.vue":["lwP7",3],"./RepoDetail.vue":["0t8/",2],"./UserDetail.vue":["UyCs",1]};function a(e){var n=r[e];return n?t.e(n[1]).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}a.keys=function(){return Object.keys(r)},a.id="Gl1J",e.exports=a},HkdS:function(e,n,t){},Ol7d:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"loading"}},[t("h1",{staticStyle:{color:"black"}},[e._v("Loading ....")]),t("div",{staticClass:"loading"})])}],o=(t("C4a/"),t("KHd+")),s={},i=Object(o["a"])(s,r,a,!1,null,"4476e6d3",null);n["a"]=i.exports},P7k8:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Something went wrong")])])}],o=t("KHd+"),s={},i=Object(o["a"])(s,r,a,!1,null,null,null);n["a"]=i.exports},Q3WX:function(e,n,t){"use strict";var r=t("HkdS"),a=t.n(r);a.a},"V/19":function(e,n,t){"use strict";var r=t("ebjG"),a=t.n(r);a.a},Vtdi:function(e,n,t){"use strict";t.r(n);t("yt8O"),t("VRzm");var r=t("Kw5r"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("side-bar"),t("header-bar"),t("main",{attrs:{id:"nav"}},[t("router-view")],1),t("footer-bar")],1)},o=[],s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",{staticClass:"header",attrs:{id:"appHeader"}},[t("div",{staticClass:"brand"},[t("a",{on:{click:e.SHOW_HIDE_NAVIGATION}},[t("i",{staticClass:"fa fa-bars"})]),t("span",{staticClass:"hidden"},[e._v("Github Explorer")])]),t("div"),t("nav"),e._m(0)])},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"row auth-div"},[t("div",{staticClass:"search"},[t("input",{attrs:{placeholder:"search repo"}}),t("span",{staticClass:"fa fa-search"})]),t("button",{staticClass:"auth-buttons",attrs:{name:"button"}},[e._v("SignIn")])])}],c=t("yT7P"),u=t("L2JU"),l={methods:Object(c["a"])({},Object(u["c"])(["SHOW_HIDE_NAVIGATION"]))},d=l,f=(t("hMKP"),t("KHd+")),h=Object(f["a"])(d,s,i,!1,null,null,null),p=h.exports,v=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"row footer"},[t("div",[e._v("1.0"),t("span",[t("i",{staticClass:"fa fa-github"})])]),t("div",{staticClass:"trade-mark"},[e._v("Github Explorer By :- Amit Mundra")])])}],g=(t("Q3WX"),{}),b=Object(f["a"])(g,v,m,!1,null,null,null),y=b.exports,_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"sidebar row",class:{visible:e.visible}},[t("div",{staticClass:"row sidenav-content"},[t("div",{staticClass:"side-search"},[t("search-input",{attrs:{"aria-label":"Search",type:"search",placeholder:"enter keyword",value:e.searchText},model:{value:e.searchText,callback:function(n){e.searchText=n},expression:"searchText"}})],1),t("div",{staticClass:"side-content"},[e.$apollo.loading?t("loading-component"):t("div",[t("div",[t("search-list",{attrs:{searchResult:e.search.edges}})],1)])],1)])])},O=[],C=(t("OG14"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"row search"},[t("input",e._b({staticClass:"search-input",domProps:{value:e.value},on:{focus:function(n){e.$emit("focus")},input:function(n){e.$emit("input",n.target.value)},keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;e.$emit("search")}}},"input",e.$attrs,!1)),t("button",{staticClass:"search-button",on:{click:function(n){e.$emit("search")}}},[t("i",{staticClass:"fa fa-search"})])])}),w=[],E={inheritAttrs:!1,props:["searchText","value"]},k=E,j=(t("V/19"),Object(f["a"])(k,C,w,!1,null,"7975f041",null)),T=j.exports,$=t("jT9q"),S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"scroll-list"},e._l(e.searchResult,function(n){return t("a",{key:n.node.login,staticClass:"row list-item",attrs:{name:"item.node.login"},on:{click:function(t){e.handleClick(n.node.login)}}},[t("avatar",{attrs:{src:n.node.avatarUrl,className:"user-avatar"}}),t("div",{staticClass:"user-info"},[t("div",{staticClass:"fullname"},[e._v(e._s(n.node.name))]),t("div",{staticClass:"loginname"},[e._v(e._s(n.node.login))])])],1)}))},x=[],A=t("3zqZ"),I={components:{Avatar:A["a"]},props:["searchResult"],methods:Object(c["a"])({},Object(u["c"])(["SHOW_HIDE_NAVIGATION"]),{handleClick:function(e){var n=this;setTimeout(function(){n.$router.push({name:"USER_DETAIL",params:{username:e}}),n.SHOW_HIDE_NAVIGATION()},300)}})},N=I,U=(t("kcpW"),Object(f["a"])(N,S,x,!1,null,null,null)),q=U.exports,D=t("Ol7d"),H={data:function(){return{searchText:"AmitMundra54",loading:0,search:[]}},created:function(){this.fetchUserDetails()},components:{SearchInput:T,SearchList:q,LoadingComponent:D["a"]},computed:Object(c["a"])({},Object(u["b"])(["visible"])),methods:Object(c["a"])({},Object(u["c"])(["SHOW_HIDE_NAVIGATION"]),{fetchUserDetails:function(){var e=this;this.$apollo.query({query:$["d"],variables:{query:this.searchText},fetchPolicy:"cache-first"}).then(function(n){var t=n.data;e.search=t.search})}}),apollo:{search:{$loadingKey:"loading",query:$["d"],variables:function(){return{query:this.searchText}},fetchPolicy:"cache-first"}}},P=H,R=(t("oH1T"),Object(f["a"])(P,_,O,!1,null,"618f6b9d",null)),V=R.exports,G={components:{HeaderBar:p,FooterBar:y,SideBar:V}},L=G,F=(t("nNx0"),Object(f["a"])(L,a,o,!1,null,null,null)),M=F.exports,W=t("jE9Z"),B=t("P7k8");r["a"].use(W["a"]);var J=function(e){return t("Gl1J")("./".concat(e,".vue"))},K=new W["a"]({mode:"history",routes:[{path:"/",name:"APP",component:function(){return{component:J("UserDetail"),loading:D["a"],error:B["a"],delay:0,timeout:0}},children:[{path:"user/:username",name:"USER_DETAIL",component:function(){return{component:J("UserDetail"),loading:D["a"],error:B["a"],delay:0,timeout:0}}},{path:"user/username/:reponame",name:"REPO_DETAIL",component:function(){return J("RepoDetail")}},{path:"*",name:"NOT_FOUND",component:J("NotFound"),redirect:{name:"USER_DETAIL",params:{username:"AmitMundra54"}}}]}]}),z=t("lIOY");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Y=t("J7Bk"),Z=t("hEyz"),Q=t("cfNM"),X=t("Ui0k"),ee="7bf2b13020e1ed2278db4bba3f5e7a53102cbc37",ne=new Z["a"]({uri:"https://api.github.com/graphql",headers:{Authorization:"bearer ".concat(ee)}}),te=new Y["a"]({link:ne,cache:new Q["a"],connectToDevTools:!0,cachePolicy:{query:!0,data:!0}});r["a"].use(X["a"]);var re=new X["a"]({defaultClient:te,defaultOptions:{$query:{$loadingKey:"loading"},$deep:!0}}),ae=t("oyJW"),oe="SHOW_HIDE_NAVIGATION",se={isVisible:!1},ie={visible:function(e){return e.isVisible}},ce=Object(ae["a"])({},oe,function(e){e.isVisible=!e.isVisible}),ue={state:se,mutations:ce,getters:ie},le={sidebar:ue},de=t("sFTC"),fe=t.n(de);r["a"].use(u["a"]);var he=new u["a"].Store({modules:le,plugins:[fe()()]});r["a"].config.productionTip=!1,new r["a"]({router:K,store:he,provide:re.provide(),render:function(e){return e(M)}}).$mount("#app")},YYIF:function(e,n,t){},boi5:function(e,n,t){},ebjG:function(e,n,t){},hMKP:function(e,n,t){"use strict";var r=t("+hOJ"),a=t.n(r);a.a},jT9q:function(e,n,t){"use strict";t.d(n,"e",function(){return d}),t.d(n,"c",function(){return f}),t.d(n,"b",function(){return h}),t.d(n,"a",function(){return p}),t.d(n,"d",function(){return v});var r=t("buwU"),a=t("lTCR"),o=t.n(a);function s(){var e=Object(r["a"])(["query search($query: String!){\n      search(first: 15, query: $query, type: USER) {\n        edges {\n          node {\n            ... on User {\n              login\n              avatarUrl\n              name\n            }\n          }\n        }\n      }\n    }"]);return s=function(){return e},e}function i(){var e=Object(r["a"])(["query Search($username: String! $after: String!) {\n    search(first: 1 query: $username type: USER){\n      nodes {\n        ... on User {\n          repositories(first: 5 after: $after){\n            edges {\n              cursor\n            node {\n                name\n                description\n                watchers {\n                  totalCount\n                }\n                forks {\n                  totalCount\n                }\n                stargazers {\n                  totalCount\n                }\n                languages(last: 3) {\n                  edges {\n                    node {\n                      name\n                    }\n                  }\n                }\n                updatedAt\n                }\n            }\n          }\n        }\n      }\n    }\n  }"]);return i=function(){return e},e}function c(){var e=Object(r["a"])(["query Search($username: String! $before: String!) {\n  search(first: 5 query: $username type: USER){\n    nodes {\n      ... on User {\n        repositories(last: 5, before: $before){\n          edges {\n            cursor\n          node {\n              name\n              description\n              watchers {\n                totalCount\n              }\n              forks {\n                totalCount\n              }\n              stargazers {\n                totalCount\n              }\n              languages(last: 3) {\n                edges {\n                  node {\n                    name\n                  }\n                }\n              }\n              updatedAt\n              }\n          }\n        }\n      }\n    }\n  }\n}"]);return c=function(){return e},e}function u(){var e=Object(r["a"])(["query Search($username: String!) {\n  search(first:1, query:$username, type:USER){\n    nodes {\n      ... on User {\n        repositories(first: 5){\n            edges {\n              cursor\n              node {\n                name\n                description\n                watchers {\n                  totalCount\n                }\n                forks {\n                  totalCount\n                }\n                stargazers {\n                  totalCount\n                }\n                languages(last: 3) {\n                  edges {\n                    node {\n                      name\n                    }\n                  }\n                }\n                updatedAt\n              }\n            }\n          }\n      }\n    }\n  }\n}"]);return u=function(){return e},e}function l(){var e=Object(r["a"])(["query User($login: String!){\n      user(login: $login) {\n        name\n          login\n        bio \n          avatarUrl\n            bioHTML\n      followers{\n        totalCount\n      }\n      following{\n        totalCount\n      }\n      }\n    } "]);return l=function(){return e},e}var d=o()(l()),f=o()(u()),h=o()(c()),p=o()(i()),v=o()(s())},kcpW:function(e,n,t){"use strict";var r=t("ox2h"),a=t.n(r);a.a},nNx0:function(e,n,t){"use strict";var r=t("boi5"),a=t.n(r);a.a},oH1T:function(e,n,t){"use strict";var r=t("DFCr"),a=t.n(r);a.a},ox2h:function(e,n,t){},pZ3L:function(e,n,t){}});
//# sourceMappingURL=app.a2a2a1c2.js.map