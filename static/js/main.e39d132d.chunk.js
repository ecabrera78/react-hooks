(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),r=c.n(s),i=(c(12),c(13),c(2)),j=c(0),o=a.a.createContext([{},function(){}]),h=function(e){var t=Object(n.useState)({theme:"light"}),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(j.jsx)(o.Provider,{value:[a,s],children:e.children})},b=(c(15),function(){var e=Object(n.useContext)(o),t=Object(i.a)(e,1)[0].theme;return Object(j.jsx)("footer",{className:"footer ".concat(t),children:Object(j.jsx)("span",{children:"ecabrera 2021"})})}),l=(c(16),function(){var e=Object(n.useContext)(o),t=Object(i.a)(e,2),c=t[0].theme,a=t[1];return Object(j.jsxs)("header",{className:"header ".concat(c),children:[Object(j.jsx)("section",{className:"title",children:Object(j.jsx)("h1",{children:"Rick and Morty"})}),Object(j.jsxs)("section",{className:"theme",children:[Object(j.jsx)("input",{id:"toggleTheme",type:"checkbox",onChange:function(e){e.target.checked?a({theme:"dark"}):a({theme:"light"})},className:"toggle"}),Object(j.jsx)("label",{htmlFor:"toggleTheme",className:"label",children:c})]})]})}),u=c(3),O=c(5),m=c.n(O),d=c(7),x=(c(18),function(e){var t=e.name,c=e.status,n=e.gender,a=e.origin;return Object(j.jsxs)("section",{className:"details",children:[Object(j.jsx)("span",{className:"char-name",children:t}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{className:c.toLowerCase(),children:c}),"- ",n]}),Object(j.jsx)("span",{children:a.name})]})}),f=(c(19),function(e){var t=Object(n.useContext)(o),c=Object(i.a)(t,1)[0].theme;return Object(j.jsxs)("article",{className:"char-container ".concat(c),children:[Object(j.jsx)("section",{className:"char-container__header",children:Object(j.jsx)("img",{src:e.image,alt:"Character img"})}),Object(j.jsx)(x,Object(u.a)({},e))]})}),p=(c(20),function(){var e=Object(n.useContext)(o),t=Object(i.a)(e,1)[0].theme,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){Object(d.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.results);case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsx)("main",{className:"main-content ".concat(t),children:s.map((function(e){return Object(j.jsx)(f,Object(u.a)({},e),e.id)}))})}),g=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(p,{}),Object(j.jsx)(b,{})]})},N=function(){return Object(j.jsx)(g,{})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{children:Object(j.jsx)(N,{})})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.e39d132d.chunk.js.map