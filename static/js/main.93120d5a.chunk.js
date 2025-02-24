(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(1),a=n(7),i=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(a.a)(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})};const o="https://surajlokesh.github.io/portfolio/",j="SL.",h={name:"Suraj",role:"Software Engineer",description:"I am a Software Engineer with expertise in full-stack development, specializing in Java, Spring Boot, React, and AWS. I thrive in fast-paced, collaborative environments where I can solve complex problems and build scalable, high-performance applications. With experience in both backend architecture and frontend development, I excel at designing robust APIs, optimizing databases, and creating seamless user experiences. My passion lies in developing impactful solutions that drive efficiency and innovation. I am currently based in Miami, FL, on F1-OPT (STEM eligible), and am open to relocation. Let\u2019s connect and discuss how I can contribute to your team!",resume:"https://example.com",social:{linkedin:"https://www.linkedin.com/in/surajlokesh/",github:"https://github.com/surajlokesh"}},d=[{name:"F1-App (Ongoing)",description:"This is my latest project, where I am working on building an F1 data analytics platform.",stack:["TypeScript","React","Node js"],sourceCode:"https://github.com/F1-Insight/F1-app",livePreview:"https://github.com"},{name:"Sentiment-Analysis-From-Text-Input",description:"A machine learning model that analyzes sentiment from text input.",stack:["Python","Flask","Machine Learning"],sourceCode:"https://github.com/surajlokesh/Sentiment-Analysis-From-Text-Input",livePreview:"https://github.com"},{name:"Walmart Sales Analysis",description:"A predictive sales analysis tool using PySpark for inventory management.",stack:["Python","PySpark"],sourceCode:"https://github.com/surajlokesh/walmart-Sales-Analysis-using-PySpark",livePreview:"https://github.com"}],m=["Java","TypeScript","React","Spring Boot","Python","AWS (EC2, S3, Lambda, DynamoDB)","Git","CI/CD","Microservices","RESTful APIs","Adobe Photshop"],b=[{title:"Software Developer Intern",company:"Lid Vizion, LLC",years:"2024 - Present",mainTech:["Python","TensorFlow","React"],technologies:["Machine Learning","3D Object Generation","Meshy API"]},{title:"Software Engineer",company:"Evive Health",years:"2021 - 2022",mainTech:["Java","Spring Boot","AWS"],technologies:["Microservices","DynamoDB","Docker","React","CI/CD"]},{title:"Software Engineer Intern",company:"Evive Health",years:"2021 - 2022",mainTech:["Java","Spring Boot","AWS"],technologies:["Microservices","DynamoDB","Docker","React","CI/CD"]}],u="surajlokesh12@gmail.com",p="+1 305-464-0283",x=[{degree:"Master of Science in Computer Science",school:"Florida International University",years:"2022 - 2024",courses:["Algorithms","Data Structures","Machine Learning","Advance Data Science","Principles of Data Analysis","Operating Systems"]},{degree:"Bachelor of Engineering in Computer Science",school:"Siddaganga Institute of Technology",years:"2017 - 2021",courses:["Software Engineering","Databases","Operating Systems","Algorithms","Database","Java"]}];var O=n(16),g=n.n(O),f=n(14),_=n.n(f),v=n(18),k=n.n(v),N=n(17),y=n.n(N);n(27);var S=()=>{const[{themeName:e,toggleTheme:t}]=Object(s.useContext)(l),[n,c]=Object(s.useState)(!1),a=()=>c(!n);return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:n?"flex":null},className:"nav__list",children:[b.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#experience",onClick:a,className:"link link--nav",children:"Experience"})}):null,d.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:a,className:"link link--nav",children:"Projects"})}):null,m.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:a,className:"link link--nav",children:"Skills"})}):null,x.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#education",onClick:a,className:"link link--nav",children:"Education"})}):null,u?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:a,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(i.jsx)(_.a,{}):Object(i.jsx)(g.a,{})}),Object(i.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:n?Object(i.jsx)(y.a,{}):Object(i.jsx)(k.a,{})})]})},w=(n(31),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(S,{})]})}),C=n(11),I=n.n(C),E=n(19),P=n.n(E);n(32);var A=()=>{const{name:e,role:t,description:n,social:c}=h,s="https://surajlokesh.github.io/portfolio/Final_Resume__fullStack.pdf";return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[Object(i.jsx)("a",{href:s,download:"Suraj_Lokesh.pdf",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(i.jsxs)(i.Fragment,{children:[c.github&&Object(i.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(I.a,{})}),c.linkedin&&Object(i.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(P.a,{})})]})]})]})},D=n(2),T=n.n(D);n(34);var L=e=>{let{project:t}=e;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(i.jsx)("li",{className:"project__stack-item",children:e},T()())))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(I.a,{})})]})},F=(n(35),function(){return d.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:d.map((function(e){return Object(i.jsx)(L,{project:e},T()())}))})]}):null}),M=(n(36),function(){return m.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:m.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},T()())}))})]}):null}),B=n(20),R=n.n(B),J=(n(37),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top","aria-label":"top",children:Object(i.jsx)(R.a,{fontSize:"large"})})}):null});n(38);var W=()=>u?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:`mailto:${u}`,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})}),p&&Object(i.jsxs)("p",{className:"contact__info",children:["Phone: ",p]}),u&&Object(i.jsxs)("p",{className:"contact__info",children:[" email: ",u]})]}):null;n(39);var z=()=>Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/surajlokesh",className:"link footer__link",children:"Created By Suraj Lokesh"})});n(40);var H=e=>{let{work:t}=e;return Object(i.jsxs)("div",{className:"experience__card",children:[Object(i.jsx)("h3",{children:t.title}),Object(i.jsx)("h4",{className:"experience__company",children:t.company}),Object(i.jsx)("p",{className:"experience__years",children:t.years}),t.mainTech.length>0&&Object(i.jsx)("ul",{className:"experience__stack",children:t.mainTech.map((e=>Object(i.jsx)("li",{className:"experience__stack-item",children:e},T()())))}),t.technologies.length>0&&Object(i.jsx)("ul",{className:"experience__stack",children:t.technologies.map((e=>Object(i.jsx)("li",{className:"experience__stack-item",children:e},T()())))})]})};n(41);var G=()=>b.length?Object(i.jsxs)("section",{id:"experience",className:"section experience",children:[Object(i.jsx)("h2",{className:"section__title",children:"Experience"}),Object(i.jsx)("div",{className:"experience__grid",children:b.map((e=>Object(i.jsx)(H,{work:e},T()())))})]}):null;n(42);var $=e=>{let{education:t}=e;return Object(i.jsxs)("div",{className:"education__card",children:[Object(i.jsx)("h3",{children:t.degree}),Object(i.jsx)("h4",{className:"education__institution",children:t.school}),Object(i.jsx)("p",{className:"education__years",children:t.years}),t.courses&&t.courses.length>0&&Object(i.jsx)("ul",{className:"education__courses",children:t.courses.map((e=>Object(i.jsx)("li",{className:"education__courses-item",children:e},T()())))})]})};n(43);var U=()=>x.length?Object(i.jsxs)("section",{id:"education",className:"section education",children:[Object(i.jsx)("h2",{className:"section__title",children:"Education"}),Object(i.jsx)("div",{className:"education__grid",children:x.map((e=>Object(i.jsx)($,{education:e},T()())))})]}):null;n(44);var V=()=>{const[{themeName:e}]=Object(s.useContext)(l);return Object(i.jsxs)("div",{id:"top",className:`${e} app`,children:[Object(i.jsx)(w,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(A,{}),Object(i.jsx)(G,{}),Object(i.jsx)(F,{}),Object(i.jsx)(M,{}),Object(i.jsx)(U,{}),Object(i.jsx)(W,{})]}),Object(i.jsx)(J,{}),Object(i.jsx)(z,{})]})};n(45);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(V,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.93120d5a.chunk.js.map