(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{310:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a(158),l=a(327),s=a(329),c=a(326),i="1252579092";t.default=function(e){var t=e.data,a=Object(r.c)().t,i=Object(c.c)(t);return n.createElement(l.a,{menu:Object(c.b)(t),siteConfig:i,title:a("pages.notfound_page_title")},n.createElement(s.a,{title:a("pages.notfound_page_title"),siteConfig:i}),n.createElement("p",null,a("pages.notfound_page_text")))}},325:function(e,t,a){e.exports=a.p+"static/icons-6642dbab43a8aaf04fc37cc89429ceb5.svg"},326:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return l});var n=function(e){return e.menu&&Array.isArray(e.menu.edges)&&e.menu.edges[0]?e.menu.edges[0].node.menu:null},r=function(e){return e.siteConfig&&Array.isArray(e.siteConfig.edges)&&e.siteConfig.edges[0]?e.siteConfig.edges[0].node:null};function l(e,t){if(!t)return null;var a=e.allFormYaml?e.allFormYaml.edges.filter(function(e){return e.node.id===t}):null;return a&&a[0]&&a[0].node?a[0].node:null}},327:function(e,t,a){"use strict";a(18),a(5);var n=a(131),r=a.n(n),l=(a(159),a(338),a(0)),s=a(945),c=(a(7),a(9),a(14),a(30),a(8),a(129)),i=a(946),o=a(947),m=a(158),u=a(322),d=a.n(u),p=a(325),f=a.n(p);var E=function(e){var t=e.className,a=e.icon,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className","icon"]);return l.createElement("svg",Object.assign({className:d()("icon",t)},n),l.createElement("use",{xlinkHref:f.a+"#it-"+a}))};var g=function(e){var t=e.footerLinks,a=e.socialLinks,n=e.author,r=e.authorLogo,u=e.authorUrl,d=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["footerLinks","socialLinks","author","authorLogo","authorUrl"]);return l.createElement("footer",Object.assign({className:"neutral-1-bg-a9"},d),l.createElement(s.a,null,l.createElement(i.a,{className:"py-4"},l.createElement(o.a,{xs:"12",sm:"6",md:"4"},l.createElement("div",{className:"px-2 py-3"},l.createElement("a",{href:u||"",target:"_blank"},l.createElement("img",{src:r||"",alt:n||"",height:"36",style:{maxWidth:"100%"}})))),l.createElement(o.a,{xs:"12",sm:"6",md:"4",className:"d-flex"},l.createElement("div",{className:"px-2 py-2"})),l.createElement(o.a,{xs:"12",sm:"6",md:"4",className:"text-white text-right pt-2"},l.createElement("span",null,l.createElement(m.a,{i18nKey:"follow_us"})),(a||[]).map(function(e){return e&&e.icon&&e.name&&e.url&&l.createElement("a",{className:"text-white p-2",key:e.icon,href:e.url,"aria-label":e.name},l.createElement(E,{icon:e.icon,className:"icon-sm icon-light align-top"}))}))),l.createElement(i.a,{className:"py-4 border-white border-top"},l.createElement("ul",{className:"col list-inline small"},(t||[]).map(function(e){return e&&e.name&&e.url&&l.createElement("li",{key:e.name,className:"list-inline-item px-1"},l.createElement(c.a,{className:"small-prints font-weight-bold",style:{color:"#0bd9d2"},to:e.url},e.name))})))))},v=a(955),b=a(948),N=a(949),h=a(950),k=a(951),y=a(101),x=function(e){return{relativePosition:{enabled:!0,fn:function(t){return e?Object.assign({},t,{styles:Object.assign({},t.styles,{position:"relative",transform:"none"})}):Object.assign({},t,{styles:Object.assign({},t.styles,{borderRadius:"4px",transform:"translate3d(15px, 65px, 0px)",animationDuration:"0.2s"})})}}}},w=function(e){var t=e.menu,a=e.user;if(!t)return null;var n=l.useState(!1),r=n[0],s=n[1],i=l.useState({}),o=i[0],u=i[1],d=Object(m.c)().t;return l.createElement("nav",{className:"navbar navbar-expand-lg has-megamenu"},l.createElement("button",{className:"custom-navbar-toggler",type:"button","aria-controls":"navbarNavC","aria-expanded":r,"aria-label":d("toggle_navigation"),onClick:function(){return s(!r)}},l.createElement(E,{className:"icon icon-sm icon-light",icon:"burger"})),l.createElement(v.a,{in:r,timeout:{enter:1,exit:300},classNames:{enter:"navbar-collapsable d-block",enterDone:"navbar-collapsable d-block expanded",exit:"navbar-collapsable d-block",exitDone:"navbar-collapsable"}},l.createElement("div",{className:"navbar-collapsable",id:"navbarNavC"},l.createElement("div",{className:"overlay "+(r?"d-block":"d-none"),onClick:function(){return s(!r)}}),l.createElement("div",{className:"close-div sr-only"},l.createElement("button",{className:"btn close-menu",type:"button",onClick:function(){return s(!r)}},l.createElement(E,{className:"icon icon-sm icon-light",icon:"close"}),d("close"))),l.createElement("div",{className:"menu-wrapper"},l.createElement("ul",{className:"navbar-nav megamenu-top-links shadow-md mt-4"},t.map(function(e){return e&&e.name&&Object(y.h)(a,e.roles||[])&&(e.subtree?l.createElement(b.a,{key:e.slug,className:"nav-item megamenu",tag:"li",isOpen:o[e.slug],toggle:function(){var t;return u(((t={})[e.slug]=!o[e.slug]||!o[e.slug],t))}},l.createElement(N.a,{caret:!0,tag:"a",className:"nav-link megamenu-top-link font-weight-600",activeClassName:"active",role:"button",style:{cursor:"pointer"}},d(e.name),l.createElement(E,{className:"icon d-inline-block",icon:"expand",style:{fill:r?"#ffffff":"#455B71"}})),l.createElement(h.a,{modifiers:x(r)},l.createElement("div",{className:"link-list-wrapper"},l.createElement("ul",{className:"mt-2"},e.subtree.map(function(e){return e&&e.slug&&l.createElement(k.a,{tag:"li",key:e.slug,className:"p-0"},l.createElement(c.a,{to:e.slug,className:"p-0"},d(e.name)))}))))):Object(y.h)(a,e.roles||[])&&l.createElement("li",{className:"nav-item megamenu",key:e.slug},l.createElement(c.a,{to:e.slug,className:"nav-link megamenu-top-link font-weight-600"},d(e.name))))}))))))},O=function(e){var t=e.title,a=e.description,n=e.menu,r=e.socialLinks,s=e.organization,i=e.user;return l.createElement(l.Fragment,null,l.createElement("div",{className:"it-nav-wrapper"},l.createElement("div",{className:"it-header-center-wrapper it-small-header"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement("div",{className:"it-header-center-content-wrapper"},l.createElement("div",{className:"it-brand-wrapper"},l.createElement(c.a,{to:"/"},l.createElement("div",{className:"it-brand-text"},l.createElement("h2",{className:"no_toc"},t),l.createElement("h3",{className:"no_toc d-none d-md-block"},a)))),l.createElement("div",{className:"it-right-zone"},l.createElement("div",{className:"d-none d-lg-block"},s),l.createElement("div",{className:"it-socials d-none d-md-flex"},l.createElement("ul",null,(r||[]).map(function(e){return e&&e.name&&e.url&&e.icon&&l.createElement("li",{key:e.name},l.createElement("a",{href:e.url,"aria-label":e.name},l.createElement(E,{icon:e.icon})))}))),l.createElement("div",{className:"it-search-wrapper"}))))))),l.createElement("div",{className:"it-header-navbar-wrapper"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement(w,{menu:n,user:i})))))))},j={flip:{enabled:!0},shift:{enabled:!0},preventOverflow:{enabled:!0,boundariesElement:"viewport"},relativePosition:{enabled:!0,fn:function(e){return Object.assign({},e,{styles:Object.assign({},e.styles,{borderRadius:"4px",transform:"translate3d(0px, 55px, 0px)",animationDuration:"0.2s"})})}}},L=function(e){var t=e.owners,a=e.slimHeaderLinks,n=e.languages,r=e.user,s=e.onLogout,c=Object(m.c)().i18n,i=l.useState(!1),o=i[0],u=i[1],d=l.useState(!1),p=d[0],f=d[1],g=l.useState(!1),v=g[0],x=g[1];return l.createElement("div",{className:"it-header-slim-wrapper"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement("div",{className:"it-header-slim-wrapper-content"},(t||[]).map(function(e){return e&&e.url&&l.createElement("a",{className:"d-none d-lg-block navbar-brand",href:e.url,key:e.url,role:"button","aria-expanded":"false","aria-controls":"header-links"},l.createElement("span",null,e.name))}),l.createElement("div",{className:"nav-mobile"},l.createElement("nav",null,(t||[]).map(function(e){return e&&e.url&&l.createElement("a",{className:"d-lg-none it-opener collapsed",href:e.url,key:e.url,role:"button","aria-expanded":"false","aria-controls":"header-links",onClick:function(e){e.preventDefault(),x(!v)}},l.createElement("span",null,e.name),l.createElement(E,{className:"icon d-lg-none",icon:"expand"}))}),l.createElement("div",{className:"link-list-wrapper collapse "+(v?"show":""),id:"header-links"},l.createElement("ul",{className:"link-list"},(a||[]).map(function(e){return e&&e.name&&e.url&&l.createElement("li",{key:e.name},l.createElement("a",{href:e.url,className:"px-3"},e.name))}))))),l.createElement("div",{className:"header-slim-right-zone"},n&&l.createElement(b.a,{className:"nav-item",isOpen:o,toggle:function(){return u(!o)}},l.createElement(N.a,{caret:!0,tag:"a",className:"nav-link",style:{cursor:"pointer"}},c.language,l.createElement(E,{className:"icon d-block",icon:"expand"})),l.createElement(h.a,{className:"dropdown-menu",modifiers:j},(n||[]).map(function(e){return e&&e.name&&l.createElement(k.a,{key:e.name,tag:"span"},l.createElement("a",{role:"button",href:"#",className:"list-item text-primary",onClick:function(){return c.changeLanguage(e.name)}},l.createElement("span",null,e.name)))}))),l.createElement("div",{className:"it-access-top-wrapper"},Object(y.d)()&&r?l.createElement(b.a,{isOpen:p,toggle:function(){return f(!p)}},l.createElement(N.a,{caret:!0,tag:"a",className:"bg-white text-primary font-weight-600 btn btn-xs px-3 text-decoration-none",style:{cursor:"pointer",marginRight:"-16px"}},l.createElement(E,{className:"icon d-block d-md-none text-primary",style:{fill:"#0066cc"},icon:"user"}),l.createElement("span",{className:"d-none d-md-inline-block text-lowercase text-decoration-none"},r.userEmail),l.createElement(E,{className:"icon d-none d-md-inline-block text-primary",style:{fill:"#0066cc"},icon:"expand"})),l.createElement(h.a,{className:"dropdown-menu",modifiers:j},l.createElement("span",{className:"d-inline-block d-md-none p-4 text-decoration-none"},r.userEmail),l.createElement(k.a,{tag:"span"},l.createElement("a",{className:"list-item text-primary",href:"/user/"+r.userId},l.createElement("span",null,"profile"))),l.createElement(k.a,{tag:"span"},l.createElement("a",{className:"list-item text-primary",href:"#",onClick:s},l.createElement("span",{className:"text-danger"},l.createElement(m.a,{i18nKey:"logout"})))))):l.createElement("a",{href:"/",className:"btn btn-primary btn-sm"},l.createElement(m.a,{i18nKey:"login"})))))))))},C=a(161);function _(e,t,a,n,r,l,s){try{var c=e[l](s),i=c.value}catch(o){return void a(o)}c.done?t(i):Promise.resolve(i).then(n,r)}a(336),a(337);t.a=function(e){var t=e.children,a=e.menu,n=e.title,i=e.siteConfig;if(!i)return l.createElement("p",null,"missing site configuration.");var o=Object(y.c)();return l.createElement(l.Fragment,null,l.createElement("div",{className:"skiplinks"},l.createElement("a",{className:"sr-only sr-only-focusable",href:"#main"},l.createElement(m.a,{i18nKey:"skiplinks.goto_main"})),l.createElement("a",{className:"sr-only sr-only-focusable",href:"#footer"},l.createElement(m.a,{i18nKey:"skiplinks.goto_footer"}))),l.createElement("div",{className:"it-header-wrapper"},l.createElement(L,{owners:i.owners,slimHeaderLinks:i.slimHeaderLinks,languages:i.languages,user:o,onLogout:(u=r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(C.a);case 2:Object(c.b)("/");case 3:case"end":return e.stop()}},e)}),function(){var e=this,t=arguments;return new Promise(function(a,n){var r=u.apply(e,t);function l(e){_(r,a,n,l,s,"next",e)}function s(e){_(r,a,n,l,s,"throw",e)}l(void 0)})})}),l.createElement(O,{title:i.title,description:i.description,socialLinks:i.socialLinks,menu:a,user:o,organization:o?o.organizationName:""})),l.createElement(s.a,{className:"py-5 justify-content-md-center main",id:"main"},l.createElement("main",null,n&&l.createElement("h1",{style:{color:"white"}},n),l.createElement("div",{className:"page-container shadow-md py-4 py-md-5 px-md-5 mt-md-4 rounded bg-white"},t))),l.createElement(g,{id:"footer",author:i.author,authorLogo:i.authorLogo,authorUrl:i.authorUrl,footerLinks:i.footerLinks,socialLinks:i.socialLinks}));var u}},329:function(e,t,a){"use strict";var n=a(0),r=a(331),l=a.n(r);t.a=function(e){var t=e.siteConfig,a=e.description,r=e.lang,s=void 0===r?"en":r,c=e.meta,i=void 0===c?[]:c,o=e.title,m=e.keywords;return n.createElement(l.a,{htmlAttributes:{lang:s},title:o||t.title,meta:[{name:"description",content:a||t.description},{property:"og:title",content:o},{property:"og:description",content:a||t.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a||t.description},{name:"keywords",content:m||t.keywords}].concat(i)},n.createElement("html",{lang:s}))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-2e82dae0fbc16dbab084.js.map