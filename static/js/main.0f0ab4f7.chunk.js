(this.webpackJsonpanimeflixclone=this.webpackJsonpanimeflixclone||[]).push([[0],{167:function(e,t,c){},168:function(e,t,c){},175:function(e,t,c){},245:function(e,t,c){},246:function(e,t,c){"use strict";c.r(t);var a=c(265),n=c(269),s=c(0),i=c.n(s),r=c(54),l=c.n(r),j=(c(167),c(10)),d=c(267),o=c(270),h=c(262),m=(c(168),c(260)),u=c(268),b=c(9),p=c(266),x=c(3),O=function(){var e=Object(b.f)(),t=Object(s.createRef)(),c=Object(m.a)(["(max-width:700px)"]),a=Object(j.a)(c,1)[0];console.log(a);var n=Object(s.useState)(""),i=Object(j.a)(n,2),r=i[0],l=i[1];return Object(x.jsxs)("div",{className:"divstyle",ref:t,children:[Object(x.jsx)(p.a,{hasArrow:!0,label:"Search anime",bg:"red.600",children:Object(x.jsx)("h1",{className:"main-header",onClick:function(){t.current.classList.toggle("divstyle-onclick")},children:"aniFLix"})}),Object(x.jsxs)(o.a,{size:"md",padding:"1",marginEnd:"5",children:[Object(x.jsx)(d.a,{placeholder:"Search anime",border:"2px solid white",color:"white",borderRadius:"1rem",value:r,onChange:function(e){l(e.target.value),console.log(r)},textAlign:"left"}),Object(x.jsx)(h.a,{border:"2px solid white",borderRadius:"1rem",children:Object(x.jsx)(u.a,{}),onClick:function(){""!==r&&e.location.pathname!=="./search?".concat(d.a)&&e.replace({pathname:"/search",search:r})},backgroundColor:"#f53636",color:"white"})]})]})},f=(c(175),c(263)),g=c(103),v=c.n(g),w=c(148),N=c(74),y=c.n(N),k=function(){var e=Object(w.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.next=3,y.a.get(t).then((function(e){c=e.data.top})).catch((function(e){console.log(e)})).then((function(){}));case 3:return e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=c(104),E=c.n(S),_=c(149),C=c(150),T=c.n(C),z=function(e){var t=[],c=T.a.load(e);return c("div#recent-episodes-carousel div.card").each((function(e,a){t.push({imageUrl:c(a).find("img").attr("data-src"),link:"".concat(c(a).find("a").attr("href")),title:c(a).find("h6").attr("title"),type:c(a).find("small span:nth-child(1)").html(),language:c(a).find("small span:nth-child(2) span:nth-child(1)").html()})})),t},A=function(){var e=Object(_.a)(E.a.mark((function e(){var t,c,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://ww1.animesimple.com/",e.next=3,y.a.get("https://api.scrapeup.com/?api_key=".concat("4a2a4c1372879d38c40f98bf3d447273","&url=").concat("https://ww1.animesimple.com/"));case 3:return t=e.sent,c=t.data,a=z(c),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),i=Object(j.a)(n,2),r=i[0],l=i[1],d=Object(s.useState)([]),o=Object(j.a)(d,2),h=o[0],u=o[1],b=Object(s.useState)([]),p=Object(j.a)(b,2),O=p[0],g=p[1],v=Object(m.a)(["(min-width: 400px)","(min-width: 700px)","(min-width: 1080px)","(min-width: 1240px)","(min-width: 1444px)"]),w=Object(j.a)(v,5),N=w[0],y=w[1],S=w[2],E=w[3],_=w[4];return console.log(N,y,S,E,_),Object(s.useEffect)((function(){A().then((function(e){l(!1),a(e)})),k("https://api.jikan.moe/v3/top/anime/1/airing").then((function(e){u(e)})),k("https://api.jikan.moe/v3/top/anime/1/upcoming").then((function(e){g(e)}))}),[]),Object(x.jsxs)("div",{className:"column-item",children:[Object(x.jsx)("h2",{className:"title",children:"Latest Episodes"}),Object(x.jsx)("div",{className:"episode-scroller",style:{padding:"1.5rem"},children:r?Object(x.jsx)(f.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"}):c.map((function(e){return Object(x.jsx)("div",{className:"card",children:Object(x.jsxs)("a",{href:e.link,children:[Object(x.jsx)("div",{className:"card-image",children:Object(x.jsx)("figure",{className:"image",children:Object(x.jsx)("img",{sizes:"(max-width: 1087px) 416px, (max-width: 500px) 316px, 255px",src:e.imageUrl,alt:e.title})})}),Object(x.jsx)("div",{className:"card-content",children:Object(x.jsxs)("div",{className:"episode-meta",children:[Object(x.jsx)("span",{className:"episode-title",children:e.title}),Object(x.jsx)("span",{className:"episode-num",children:e.type}),Object(x.jsx)("span",{className:"episode-meta",children:Object(x.jsx)("span",{className:"",children:String(e.language).substr(0,3)})})]})})]})})}))}),Object(x.jsxs)("div",{className:"latest-anime-div",style:{marginTop:"2rem"},children:[Object(x.jsx)("h1",{children:"Top airing"}),Object(x.jsx)("div",{className:"latest-anime-cards",children:h.slice(0,20).map((function(e){return Object(x.jsx)("a",{href:e.url,target:"_blank",children:Object(x.jsx)("div",{className:"latest-cards",children:Object(x.jsxs)("figure",{children:[Object(x.jsx)("img",{src:e.image_url,alt:e.title}),Object(x.jsx)("figcaption",{style:{height:"8vh"},children:e.title.slice(0,45)})]})})})}))})]}),Object(x.jsxs)("div",{className:"latest-anime-div",style:{marginTop:"3rem"},children:[Object(x.jsx)("h1",{children:"Top upcoming"}),Object(x.jsx)("div",{className:"latest-anime-cards",children:O.slice(0,20).map((function(e){return Object(x.jsx)("a",{href:e.url,target:"_blank",children:Object(x.jsx)("div",{className:"latest-cards",children:Object(x.jsxs)("figure",{style:{width:"".concat({base:"100%",sm:"50%",md:"25%"})},children:[Object(x.jsx)("img",{src:e.image_url,alt:""}),Object(x.jsx)("figcaption",{style:{height:"8vh"},children:e.title.slice(0,41)})]})})})}))})]})]})},R=c(151),J=c(264);c(245),c(31);function U(e){e.search;var t=Object(s.useState)([]),c=Object(j.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!0),r=Object(j.a)(i,2),l=r[0],d=r[1],o=Object(b.f)(),h=function(){d(!0),fetch("https://api.jikan.moe/v3/search/anime?q=".concat(o.location.search.slice(1),"=1"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n(e.results),d(!1)}))};return Object(s.useEffect)((function(){h()}),[o.location.search.slice(1)]),Object(s.useEffect)((function(){h()}),[]),Object(x.jsx)(J.a,{className:"search-body",children:Object(x.jsx)("div",{className:"search-div",children:l?Object(x.jsx)(f.a,{height:"20",width:"20",color:"red"}):0!==a.length?a.slice(0,15).map((function(e){return Object(x.jsx)("a",{href:e.url,children:Object(x.jsx)("div",{className:"search-cards",children:Object(x.jsxs)("div",{className:"image-div",children:[Object(x.jsx)("img",{src:e.image_url,alt:""}),Object(x.jsx)("div",{style:{height:"8vh"},children:e.title})]})})})})):Object(x.jsx)("typography",{children:"Search for anime"})})})}var q=function(){return Object(x.jsxs)(R.a,{children:[Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(O,{})}),Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:"/",component:L}),Object(x.jsx)(b.a,{exact:!0,path:"/search",component:U})]})]})},B=Object(a.a)({colors:{brand:{100:"#f7fafc",900:"#1a202c"}}});l.a.render(Object(x.jsx)(n.a,{theme:B,children:Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(q,{})})}),document.getElementById("root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.0f0ab4f7.chunk.js.map