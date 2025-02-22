(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),a=n(1),i=n(0),l=Object(a.createContext)(),r=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})};const o="https://surajlokesh.github.io/portfolio/",j="SL.",h={name:"Suraj",role:"Software Engineer",description:"I am a Software Engineer with expertise in full-stack development, specializing in Java, Spring Boot, React, and AWS. I thrive in fast-paced, collaborative environments where I can solve complex problems and build scalable, high-performance applications. With experience in both backend architecture and frontend development, I excel at designing robust APIs, optimizing databases, and creating seamless user experiences. My passion lies in developing impactful solutions that drive efficiency and innovation. I am currently based in Miami, FL, on F1-OPT (STEM eligible), and am open to relocation. Let\u2019s connect and discuss how I can contribute to your team!",resume:"https://example.com",social:{linkedin:"https://www.linkedin.com/in/surajlokesh/",github:"https://github.com/surajlokesh?tab=repositories"}},b=[{name:"F1-App (Ongoing)",description:"This is my latest project, where I am working on building an F1 data analytics platform.",stack:["TypeScript","React","Node js"],sourceCode:"https://github.com/F1-Insight/F1-app",livePreview:"https://github.com"},{name:"Sentiment-Analysis-From-Text-Input",description:"A machine learning model that analyzes sentiment from text input.",stack:["Python","Flask","Machine Learning"],sourceCode:"https://github.com/surajlokesh/Sentiment-Analysis-From-Text-Input",livePreview:"https://github.com"},{name:"Walmart Sales Analysis",description:"A predictive sales analysis tool using PySpark for inventory management.",stack:["Python","PySpark"],sourceCode:"https://github.com/surajlokesh/walmart-Sales-Analysis-using-PySpark",livePreview:"https://github.com"}],d=["Java","TypeScript","React","Spring Boot","Python","AWS (EC2, S3, Lambda, DynamoDB)","Git","CI/CD","Microservices","RESTful APIs"],m="surajlokesh12@gmail.com",u="+1 305-464-0283";var p=n(16),O=n.n(p),x=n(14),f=n.n(x),k=n(18),g=n.n(k),v=n(17),_=n.n(v),N=(n(27),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(a.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],u=function(){return h(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[b.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,d.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,m?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(f.a,{}):Object(i.jsx)(O.a,{})}),Object(i.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(_.a,{}):Object(i.jsx)(g.a,{})})]})}),y=(n(31),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(N,{})]})}),S=n(11),w=n.n(S),C=n(19),I=n.n(C);n(32);var P=()=>{const{name:e,role:t,description:n,social:c}=h,s="/assets/Suraj_Lokesh_Resume.pdf";return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[Object(i.jsx)("a",{href:s,download:"Suraj_Lokesh",children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(i.jsxs)(i.Fragment,{children:[c.github&&Object(i.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(w.a,{})}),c.linkedin&&Object(i.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(I.a,{})})]})]})]})},A=n(7),E=n.n(A);n(34);var L=e=>{let{project:t}=e;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(i.jsx)("li",{className:"project__stack-item",children:e},E()())))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(w.a,{})})]})},F=(n(35),function(){return b.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:b.map((function(e){return Object(i.jsx)(L,{project:e},E()())}))})]}):null}),T=(n(36),function(){return d.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:d.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())}))})]}):null}),M=n(20),R=n.n(M),B=(n(37),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top","aria-label":"top",children:Object(i.jsx)(R.a,{fontSize:"large"})})}):null});n(38);var z=()=>m?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:`mailto:${m}`,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})}),u&&Object(i.jsxs)("p",{className:"contact__info",children:["Phone: ",u]}),m&&Object(i.jsxs)("p",{className:"contact__info",children:[" email: ",m]})]}):null;n(39);var J=()=>Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rjshkhr/cleanfolio",className:"link footer__link",children:"Created By Suraj Lokesh"})}),W=(n(40),function(){var e=Object(a.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(y,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(P,{}),Object(i.jsx)(F,{}),Object(i.jsx)(T,{}),Object(i.jsx)(z,{})]}),Object(i.jsx)(B,{}),Object(i.jsx)(J,{})]})});n(41);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.59ec5ca1.chunk.js.map