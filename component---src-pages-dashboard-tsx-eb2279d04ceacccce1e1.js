(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{317:function(e,n,t){"use strict";t.r(n);var a=t(59),r=t(0),l=t(342),i=(t(13),t(327)),s=t(329),c=t(129),o=t(162),m=t(158),u=t(326),d=t(332),p=t(101),f=function(e){var n=e.data,t=Object(m.c)().t,a=Object(u.c)(n),l=Object(p.c)();return l&&l.userId?r.createElement(i.a,{menu:Object(u.b)(n),siteConfig:a,title:t("pages.dashboard_title")},r.createElement(s.a,{title:t("pages.dashboard_title"),siteConfig:a}),r.createElement(o.c,{query:d.d,variables:{userId:l.userId}},function(e){var a=e.loading,i=e.error,s=e.data;return a?r.createElement("p",null,t("loading_data")):i?r.createElement("p",null,t("errors.error_getting_data")," ",JSON.stringify(i)):s?r.createElement("table",{className:"table table-hover"},r.createElement("thead",{className:"lightgrey-bg-a3"},r.createElement("tr",null,r.createElement("th",{className:"font-variant-small-caps"},"title"),r.createElement("th",{className:"font-variant-small-caps"},"type"),r.createElement("th",{className:"font-variant-small-caps"},"created"),r.createElement("th",{className:"font-variant-small-caps"},"updated"),r.createElement("th",{className:"font-variant-small-caps"},"status"),r.createElement("th",{className:"font-variant-small-caps"},"actions"))),r.createElement("tbody",{className:"font-size-xs color-black font-weight-600"},s.node.map(function(e){return r.createElement("tr",{key:e.id},r.createElement("td",null,e.title,r.createElement("br",null),r.createElement("small",null,e.id)),r.createElement("td",null,e.type),r.createElement("td",null,new Date(e.created_at).toLocaleDateString()),r.createElement("td",null,new Date(e.updated_at).toLocaleDateString()),r.createElement("td",null,e.status),r.createElement("td",null,r.createElement(c.a,{to:"/form/"+e.type.replace("_","-")+"/"+e.id},"edit")," ",r.createElement(c.a,{to:"/revision/"+e.id+"/"+e.version},"view")))}))):r.createElement("p",null,n,l.userId)})):null};t.d(n,"query",function(){return g});var g="3343368260";n.default=function(e){var n=e.data;return r.createElement(a.Router,null,r.createElement(l.a,{pageComponent:function(){return r.createElement(f,{data:n})},path:"/dashboard"}))}},325:function(e,n,t){e.exports=t.p+"static/icons-6642dbab43a8aaf04fc37cc89429ceb5.svg"},326:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"c",function(){return r}),t.d(n,"a",function(){return l});var a=function(e){return e.menu&&Array.isArray(e.menu.edges)&&e.menu.edges[0]?e.menu.edges[0].node.menu:null},r=function(e){return e.siteConfig&&Array.isArray(e.siteConfig.edges)&&e.siteConfig.edges[0]?e.siteConfig.edges[0].node:null};function l(e,n){if(!n)return null;var t=e.allFormYaml?e.allFormYaml.edges.filter(function(e){return e.node.id===n}):null;return t&&t[0]&&t[0].node?t[0].node:null}},327:function(e,n,t){"use strict";t(18),t(5);var a=t(131),r=t.n(a),l=(t(159),t(338),t(0)),i=t(945),s=(t(7),t(9),t(14),t(30),t(8),t(129)),c=t(946),o=t(947),m=t(158),u=t(322),d=t.n(u),p=t(325),f=t.n(p);var g=function(e){var n=e.className,t=e.icon,a=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","icon"]);return l.createElement("svg",Object.assign({className:d()("icon",n)},a),l.createElement("use",{xlinkHref:f.a+"#it-"+t}))};var E=function(e){var n=e.footerLinks,t=e.socialLinks,a=e.author,r=e.authorLogo,u=e.authorUrl,d=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["footerLinks","socialLinks","author","authorLogo","authorUrl"]);return l.createElement("footer",Object.assign({className:"neutral-1-bg-a9"},d),l.createElement(i.a,null,l.createElement(c.a,{className:"py-4"},l.createElement(o.a,{xs:"12",sm:"6",md:"4"},l.createElement("div",{className:"px-2 py-3"},l.createElement("a",{href:u||"",target:"_blank"},l.createElement("img",{src:r||"",alt:a||"",height:"36",style:{maxWidth:"100%"}})))),l.createElement(o.a,{xs:"12",sm:"6",md:"4",className:"d-flex"},l.createElement("div",{className:"px-2 py-2"})),l.createElement(o.a,{xs:"12",sm:"6",md:"4",className:"text-white text-right pt-2"},l.createElement("span",null,l.createElement(m.a,{i18nKey:"follow_us"})),(t||[]).map(function(e){return e&&e.icon&&e.name&&e.url&&l.createElement("a",{className:"text-white p-2",key:e.icon,href:e.url,"aria-label":e.name},l.createElement(g,{icon:e.icon,className:"icon-sm icon-light align-top"}))}))),l.createElement(c.a,{className:"py-4 border-white border-top"},l.createElement("ul",{className:"col list-inline small"},(n||[]).map(function(e){return e&&e.name&&e.url&&l.createElement("li",{key:e.name,className:"list-inline-item px-1"},l.createElement(s.a,{className:"small-prints font-weight-bold",style:{color:"#0bd9d2"},to:e.url},e.name))})))))},v=t(955),b=t(948),h=t(949),N=t(950),y=t(951),_=t(101),k=function(e){return{relativePosition:{enabled:!0,fn:function(n){return e?Object.assign({},n,{styles:Object.assign({},n.styles,{position:"relative",transform:"none"})}):Object.assign({},n,{styles:Object.assign({},n.styles,{borderRadius:"4px",transform:"translate3d(15px, 65px, 0px)",animationDuration:"0.2s"})})}}}},w=function(e){var n=e.menu,t=e.user;if(!n)return null;var a=l.useState(!1),r=a[0],i=a[1],c=l.useState({}),o=c[0],u=c[1],d=Object(m.c)().t;return l.createElement("nav",{className:"navbar navbar-expand-lg has-megamenu"},l.createElement("button",{className:"custom-navbar-toggler",type:"button","aria-controls":"navbarNavC","aria-expanded":r,"aria-label":d("toggle_navigation"),onClick:function(){return i(!r)}},l.createElement(g,{className:"icon icon-sm icon-light",icon:"burger"})),l.createElement(v.a,{in:r,timeout:{enter:1,exit:300},classNames:{enter:"navbar-collapsable d-block",enterDone:"navbar-collapsable d-block expanded",exit:"navbar-collapsable d-block",exitDone:"navbar-collapsable"}},l.createElement("div",{className:"navbar-collapsable",id:"navbarNavC"},l.createElement("div",{className:"overlay "+(r?"d-block":"d-none"),onClick:function(){return i(!r)}}),l.createElement("div",{className:"close-div sr-only"},l.createElement("button",{className:"btn close-menu",type:"button",onClick:function(){return i(!r)}},l.createElement(g,{className:"icon icon-sm icon-light",icon:"close"}),d("close"))),l.createElement("div",{className:"menu-wrapper"},l.createElement("ul",{className:"navbar-nav megamenu-top-links shadow-md mt-4"},n.map(function(e){return e&&e.name&&Object(_.h)(t,e.roles||[])&&(e.subtree?l.createElement(b.a,{key:e.slug,className:"nav-item megamenu",tag:"li",isOpen:o[e.slug],toggle:function(){var n;return u(((n={})[e.slug]=!o[e.slug]||!o[e.slug],n))}},l.createElement(h.a,{caret:!0,tag:"a",className:"nav-link megamenu-top-link font-weight-600",activeClassName:"active",role:"button",style:{cursor:"pointer"}},d(e.name),l.createElement(g,{className:"icon d-inline-block",icon:"expand",style:{fill:r?"#ffffff":"#455B71"}})),l.createElement(N.a,{modifiers:k(r)},l.createElement("div",{className:"link-list-wrapper"},l.createElement("ul",{className:"mt-2"},e.subtree.map(function(e){return e&&e.slug&&l.createElement(y.a,{tag:"li",key:e.slug,className:"p-0"},l.createElement(s.a,{to:e.slug,className:"p-0"},d(e.name)))}))))):Object(_.h)(t,e.roles||[])&&l.createElement("li",{className:"nav-item megamenu",key:e.slug},l.createElement(s.a,{to:e.slug,className:"nav-link megamenu-top-link font-weight-600"},d(e.name))))}))))))},x=function(e){var n=e.title,t=e.description,a=e.menu,r=e.socialLinks,i=e.organization,c=e.user;return l.createElement(l.Fragment,null,l.createElement("div",{className:"it-nav-wrapper"},l.createElement("div",{className:"it-header-center-wrapper it-small-header"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement("div",{className:"it-header-center-content-wrapper"},l.createElement("div",{className:"it-brand-wrapper"},l.createElement(s.a,{to:"/"},l.createElement("div",{className:"it-brand-text"},l.createElement("h2",{className:"no_toc"},n),l.createElement("h3",{className:"no_toc d-none d-md-block"},t)))),l.createElement("div",{className:"it-right-zone"},l.createElement("div",{className:"d-none d-lg-block"},i),l.createElement("div",{className:"it-socials d-none d-md-flex"},l.createElement("ul",null,(r||[]).map(function(e){return e&&e.name&&e.url&&e.icon&&l.createElement("li",{key:e.name},l.createElement("a",{href:e.url,"aria-label":e.name},l.createElement(g,{icon:e.icon})))}))),l.createElement("div",{className:"it-search-wrapper"}))))))),l.createElement("div",{className:"it-header-navbar-wrapper"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement(w,{menu:a,user:c})))))))},O={flip:{enabled:!0},shift:{enabled:!0},preventOverflow:{enabled:!0,boundariesElement:"viewport"},relativePosition:{enabled:!0,fn:function(e){return Object.assign({},e,{styles:Object.assign({},e.styles,{borderRadius:"4px",transform:"translate3d(0px, 55px, 0px)",animationDuration:"0.2s"})})}}},j=function(e){var n=e.owners,t=e.slimHeaderLinks,a=e.languages,r=e.user,i=e.onLogout,s=Object(m.c)().i18n,c=l.useState(!1),o=c[0],u=c[1],d=l.useState(!1),p=d[0],f=d[1],E=l.useState(!1),v=E[0],k=E[1];return l.createElement("div",{className:"it-header-slim-wrapper"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement("div",{className:"it-header-slim-wrapper-content"},(n||[]).map(function(e){return e&&e.url&&l.createElement("a",{className:"d-none d-lg-block navbar-brand",href:e.url,key:e.url,role:"button","aria-expanded":"false","aria-controls":"header-links"},l.createElement("span",null,e.name))}),l.createElement("div",{className:"nav-mobile"},l.createElement("nav",null,(n||[]).map(function(e){return e&&e.url&&l.createElement("a",{className:"d-lg-none it-opener collapsed",href:e.url,key:e.url,role:"button","aria-expanded":"false","aria-controls":"header-links",onClick:function(e){e.preventDefault(),k(!v)}},l.createElement("span",null,e.name),l.createElement(g,{className:"icon d-lg-none",icon:"expand"}))}),l.createElement("div",{className:"link-list-wrapper collapse "+(v?"show":""),id:"header-links"},l.createElement("ul",{className:"link-list"},(t||[]).map(function(e){return e&&e.name&&e.url&&l.createElement("li",{key:e.name},l.createElement("a",{href:e.url,className:"px-3"},e.name))}))))),l.createElement("div",{className:"header-slim-right-zone"},a&&l.createElement(b.a,{className:"nav-item",isOpen:o,toggle:function(){return u(!o)}},l.createElement(h.a,{caret:!0,tag:"a",className:"nav-link",style:{cursor:"pointer"}},s.language,l.createElement(g,{className:"icon d-block",icon:"expand"})),l.createElement(N.a,{className:"dropdown-menu",modifiers:O},(a||[]).map(function(e){return e&&e.name&&l.createElement(y.a,{key:e.name,tag:"span"},l.createElement("a",{role:"button",href:"#",className:"list-item text-primary",onClick:function(){return s.changeLanguage(e.name)}},l.createElement("span",null,e.name)))}))),l.createElement("div",{className:"it-access-top-wrapper"},Object(_.d)()&&r?l.createElement(b.a,{isOpen:p,toggle:function(){return f(!p)}},l.createElement(h.a,{caret:!0,tag:"a",className:"bg-white text-primary font-weight-600 btn btn-xs px-3 text-decoration-none",style:{cursor:"pointer",marginRight:"-16px"}},l.createElement(g,{className:"icon d-block d-md-none text-primary",style:{fill:"#0066cc"},icon:"user"}),l.createElement("span",{className:"d-none d-md-inline-block text-lowercase text-decoration-none"},r.userEmail),l.createElement(g,{className:"icon d-none d-md-inline-block text-primary",style:{fill:"#0066cc"},icon:"expand"})),l.createElement(N.a,{className:"dropdown-menu",modifiers:O},l.createElement("span",{className:"d-inline-block d-md-none p-4 text-decoration-none"},r.userEmail),l.createElement(y.a,{tag:"span"},l.createElement("a",{className:"list-item text-primary",href:"/user/"+r.userId},l.createElement("span",null,"profile"))),l.createElement(y.a,{tag:"span"},l.createElement("a",{className:"list-item text-primary",href:"#",onClick:i},l.createElement("span",{className:"text-danger"},l.createElement(m.a,{i18nKey:"logout"})))))):l.createElement("a",{href:"/",className:"btn btn-primary btn-sm"},l.createElement(m.a,{i18nKey:"login"})))))))))},C=t(161);function L(e,n,t,a,r,l,i){try{var s=e[l](i),c=s.value}catch(o){return void t(o)}s.done?n(c):Promise.resolve(c).then(a,r)}t(336),t(337);n.a=function(e){var n=e.children,t=e.menu,a=e.title,c=e.siteConfig;if(!c)return l.createElement("p",null,"missing site configuration.");var o=Object(_.c)();return l.createElement(l.Fragment,null,l.createElement("div",{className:"skiplinks"},l.createElement("a",{className:"sr-only sr-only-focusable",href:"#main"},l.createElement(m.a,{i18nKey:"skiplinks.goto_main"})),l.createElement("a",{className:"sr-only sr-only-focusable",href:"#footer"},l.createElement(m.a,{i18nKey:"skiplinks.goto_footer"}))),l.createElement("div",{className:"it-header-wrapper"},l.createElement(j,{owners:c.owners,slimHeaderLinks:c.slimHeaderLinks,languages:c.languages,user:o,onLogout:(u=r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.e)(C.a);case 2:Object(s.b)("/");case 3:case"end":return e.stop()}},e)}),function(){var e=this,n=arguments;return new Promise(function(t,a){var r=u.apply(e,n);function l(e){L(r,t,a,l,i,"next",e)}function i(e){L(r,t,a,l,i,"throw",e)}l(void 0)})})}),l.createElement(x,{title:c.title,description:c.description,socialLinks:c.socialLinks,menu:t,user:o,organization:o?o.organizationName:""})),l.createElement(i.a,{className:"py-5 justify-content-md-center main",id:"main"},l.createElement("main",null,a&&l.createElement("h1",{style:{color:"white"}},a),l.createElement("div",{className:"page-container shadow-md py-4 py-md-5 px-md-5 mt-md-4 rounded bg-white"},n))),l.createElement(E,{id:"footer",author:c.author,authorLogo:c.authorLogo,authorUrl:c.authorUrl,footerLinks:c.footerLinks,socialLinks:c.socialLinks}));var u}},329:function(e,n,t){"use strict";var a=t(0),r=t(331),l=t.n(r);n.a=function(e){var n=e.siteConfig,t=e.description,r=e.lang,i=void 0===r?"en":r,s=e.meta,c=void 0===s?[]:s,o=e.title,m=e.keywords;return a.createElement(l.a,{htmlAttributes:{lang:i},title:o||n.title,meta:[{name:"description",content:t||n.description},{property:"og:title",content:o},{property:"og:description",content:t||n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter:title",content:o},{name:"twitter:description",content:t||n.description},{name:"keywords",content:m||n.keywords}].concat(c)},a.createElement("html",{lang:i}))}},332:function(e,n,t){"use strict";t.d(n,"f",function(){return E}),t.d(n,"a",function(){return v}),t.d(n,"g",function(){return N}),t.d(n,"e",function(){return y}),t.d(n,"b",function(){return _}),t.d(n,"c",function(){return k}),t.d(n,"d",function(){return w});var a=t(107),r=t.n(a);function l(){var e=g(["\n  query GetUserInfo($userId: uuid) {\n    user(where: { id: { _eq: $userId } }) {\n      id\n      email\n    }\n  }\n"]);return l=function(){return e},e}function i(){var e=g(["\n  query GetUserNodes($userId: uuid) {\n    node(where: { user_id: { _eq: $userId } }) {\n      id\n      created_at\n      updated_at\n      title\n      group\n      language\n      status\n      version\n      type\n    }\n  }\n"]);return i=function(){return e},e}function s(){var e=g(['\n  query GetNodeRevision($id: uuid!, $version: Int!) {\n    revision: node_revision(\n      where: { _and: { id: { _eq: $id }, version: { _eq: $version } } }\n      limit: 1\n    ) {\n      ...NodeRevisionFragment\n    }\n    published: node_revision(\n      where: { _and: { id: { _eq: $id }, status: { _eq: "published" } } }\n      order_by: { version: desc }\n      limit: 1\n    ) {\n      ...NodeRevisionFragment\n    }\n  }\n\n  ',"\n"]);return s=function(){return e},e}function c(){var e=g(['\n  query GetNode($id: uuid!) {\n    latest: node(where: { id: { _eq: $id } }, limit: 1) {\n      ...NodeFragment\n      published: revisions(\n        where: { status: { _eq: "published" } }\n        order_by: { version: desc }\n        limit: 1\n      ) {\n        ...NodeRevisionFragment\n      }\n    }\n  }\n\n  ',"\n  ","\n"]);return c=function(){return e},e}function o(){var e=g(['\n  mutation PublishNode($id: uuid!, $version: Int!) {\n    update_node(\n      where: { id: { _eq: $id } }\n      _set: { status: "published", version: $version }\n    ) {\n      returning {\n        ...NodeFragment\n      }\n    }\n  }\n  ',"\n"]);return o=function(){return e},e}function m(){var e=g(["\n  mutation UpsertNode($node: node_insert_input!) {\n    insert_node(\n      objects: [$node]\n      on_conflict: {\n        constraint: node_pkey\n        update_columns: [status, title, content, version]\n      }\n    ) {\n      returning {\n        ...NodeFragment\n      }\n    }\n  }\n\n  ","\n"]);return m=function(){return e},e}function u(){var e=g(["\n  fragment NodeRevisionFragment on node_revision {\n    id\n    created_at\n    updated_at\n    title\n    node_revision_group {\n      group\n      group_ipa_pa {\n        des_amm\n      }\n    }\n    content\n    language\n    status\n    version\n    type\n  }\n"]);return u=function(){return e},e}function d(){var e=g(["\n  fragment NodeFragment on node {\n    id\n    created_at\n    updated_at\n    title\n    node_group {\n      group\n      group_ipa_pa {\n        des_amm\n      }\n    }\n    content\n    language\n    status\n    version\n    type\n  }\n"]);return d=function(){return e},e}function p(){var e=g(['\n  query GetIpa($ipa_code: String!) {\n    ipa_pa(where: { cod_amm: { _eq: $ipa_code } }) {\n      cod_amm\n      des_amm\n      Comune\n    }\n    ipa_ou(\n      where: {\n        _and: {\n          cod_amm: { _eq: $ipa_code }\n          cod_ou: { _eq: "Ufficio_Transizione_Digitale" }\n        }\n      }\n    ) {\n      cod_ou\n      nome_resp\n      cogn_resp\n      mail_resp\n    }\n  }\n']);return p=function(){return e},e}function f(){var e=g(["\n  query SearchIpa($search: String!) {\n    search_ipa(args: { search: $search }) {\n      cod_amm\n      des_amm\n      Comune\n    }\n    ipa_pa(where: { cod_amm: { _eq: $search } }) {\n      cod_amm\n      des_amm\n      Comune\n    }\n  }\n"]);return f=function(){return e},e}function g(e,n){return n||(n=e.slice(0)),e.raw=n,e}var E=r()(f()),v=r()(p()),b=r()(d()),h=r()(u()),N=r()(m(),b),y=r()(o(),b),_=r()(c(),b,h),k=r()(s(),h),w=r()(i());r()(l())},342:function(e,n,t){"use strict";t(7),t(9),t(5),t(14);n.a=function(e){return(0,e.pageComponent)(function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["pageComponent"]))}}}]);
//# sourceMappingURL=component---src-pages-dashboard-tsx-eb2279d04ceacccce1e1.js.map