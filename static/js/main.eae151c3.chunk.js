(this.webpackJsonpanimeflixclone=this.webpackJsonpanimeflixclone||[]).push([[0],{136:function(e,t,a){},137:function(e,t,a){},144:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var c=a(235),n=a(237),s=a(1),r=a.n(s),i=a(125),l=a.n(i),d=(a(136),a(3)),o=a(238),u=a(236),j=a(234),h=(a(137),a(233)),p=a(2),m=function(){var e=Object(h.a)(["(max-width:700px)"]),t=Object(d.a)(e,1)[0];console.log(t);var a=Object(s.useState)(""),c=Object(d.a)(a,2),n=c[0],r=c[1];return Object(p.jsxs)("div",{className:"divstyle",children:[Object(p.jsx)("h1",{className:"main-header",children:"aniFLix"}),Object(p.jsxs)(o.a,{size:"sm",padding:"1",marginEnd:"5",children:[Object(p.jsx)(u.a,{placeholder:"Search anime",d:t?"none":"block",focusBorderColor:"red.200",borderRadius:"5px",value:n,onChange:function(e){r(e.target.value),console.log(n)}}),Object(p.jsx)(j.a,{d:t?"none":"block",children:"Search",onClick:function(){return window.alert("hello")},style:{cursor:"pointer"}})]})]})},b=(a(144),a(240)),x=a(35),f=a.n(x),O=a(51),g=a(52),v=a.n(g),y=function(){var e=Object(O.a)(f.a.mark((function e(){var t,a,c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,c="https://api.jikan.moe/v3/schedule/".concat((a=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"])[t.getDay()]),n=[],e.next=6,v.a.get(c).then((function(e){n=e.data[a[t.getDay()]],console.log(n)})).catch((function(e){console.log(e)})).then((function(){}));case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=a(126),w=a.n(N),k=function(e){var t=[],a=w.a.load(e);return a("div#recent-episodes-carousel div.card").each((function(e,c){t.push({imageUrl:a(c).find("img").attr("data-src"),link:"".concat(a(c).find("a").attr("href")),title:a(c).find("h6").attr("title"),type:a(c).find("small span:nth-child(1)").html(),language:a(c).find("small span:nth-child(2) span:nth-child(1)").html()})})),t},S=function(){var e=Object(O.a)(f.a.mark((function e(){var t,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://ww1.animesimple.com/",e.next=3,v.a.get("https://api.scrapeup.com/?api_key=".concat("4a2a4c1372879d38c40f98bf3d447273","&url=").concat("https://ww1.animesimple.com/"));case 3:return t=e.sent,a=t.data,c=k(a),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!0),r=Object(d.a)(n,2),i=r[0],l=r[1],o=Object(s.useState)([]),u=Object(d.a)(o,2),j=u[0],h=u[1];return Object(s.useEffect)((function(){S().then((function(e){l(!1),c(e)})),y().then((function(e){h(e)}))}),[]),Object(p.jsxs)("div",{className:"column-item",children:[Object(p.jsx)("h2",{className:"title",children:"Latest Episodes"}),Object(p.jsx)("div",{className:"episode-scroller",children:i?Object(p.jsx)(b.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"}):a.map((function(e){return Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("a",{href:e.link,children:[Object(p.jsx)("div",{className:"card-image",children:Object(p.jsx)("figure",{className:"image",children:Object(p.jsx)("img",{sizes:"(max-width: 1087px) 416px, (max-width: 500px) 316px, 255px",src:e.imageUrl,alt:"Fruits Basket 3rd Season picture"})})}),Object(p.jsx)("div",{className:"card-content",children:Object(p.jsxs)("div",{className:"episode-meta",children:[Object(p.jsx)("span",{className:"episode-title",children:e.title}),Object(p.jsx)("span",{className:"episode-num",children:e.type}),Object(p.jsx)("span",{className:"episode-meta",children:Object(p.jsx)("span",{className:"",children:String(e.language).substr(0,3)})})]})})]})})}))}),Object(p.jsxs)("div",{className:"latest-anime-div",children:[Object(p.jsx)("h1",{children:"Top 24 Hrs"}),Object(p.jsx)("div",{className:"latest-anime-cards",children:j.map((function(e){return Object(p.jsx)("div",{className:"latest-cards",children:Object(p.jsxs)("figure",{children:[Object(p.jsx)("img",{src:e.image_url,alt:""}),Object(p.jsx)("figcaption",{style:{height:"8vh"},children:e.title})]})})}))})]})]})};var E=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{}),Object(p.jsx)(C,{})]})},z=Object(c.a)({colors:{brand:{100:"#f7fafc",900:"#1a202c"}}});l.a.render(Object(p.jsx)(n.a,{theme:z,children:Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(E,{})})}),document.getElementById("root"))}},[[221,1,2]]]);
//# sourceMappingURL=main.eae151c3.chunk.js.map