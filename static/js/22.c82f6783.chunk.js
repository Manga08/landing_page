(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[22],{1225:function(n,e,t){"use strict";t.r(e),t.d(e,"readingTime",(function(){return o})),t.d(e,"default",(function(){return p})),t.d(e,"tableOfContents",(function(){return l})),t.d(e,"frontMatter",(function(){return c}));var s=t(19),a=(t(0),t(285)),o={text:"3 min read",minutes:2.33,time:139800,words:466},i={};function p(n){var e=n.components,t=Object(s.a)(n,["components"]);return Object(a.b)("wrapper",Object.assign({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"deployment"},"Deployment"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"npm run build")," creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served ",Object(a.b)("inlineCode",{parentName:"p"},"index.html"),", and requests to static paths like ",Object(a.b)("inlineCode",{parentName:"p"},"/static/js/main.<hash>.js")," are served with the contents of the ",Object(a.b)("inlineCode",{parentName:"p"},"/static/js/main.<hash>.js")," file. For more information see the production build section."),Object(a.b)("h2",{id:"static-server"},"Static Server"),Object(a.b)("p",null,"For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"npm install -g serve\nserve -s build\n"}}))),Object(a.b)("p",null,"The last command shown above will serve your static site on the port ",Object(a.b)("strong",{parentName:"p"},"5000"),". Like many of serve\u2019s internal settings, the port can be adjusted using the ",Object(a.b)("inlineCode",{parentName:"p"},"-l")," or ",Object(a.b)("inlineCode",{parentName:"p"},"--listen")," flags:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"serve -s build -l 4000\n"}}))),Object(a.b)("p",null,"Run this command to get a full list of the options available:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"serve -h\n"}}))),Object(a.b)("h2",{id:"other-solutions"},"Other Solutions"),Object(a.b)("p",null,"You don\u2019t necessarily need a static server in order to run a Create React App project in production. It also works well when integrated into an existing server side app."),Object(a.b)("h3",{id:"expressjs"},"ExpressJS"),Object(a.b)("p",null,"Here\u2019s a programmatic example using Node and Express:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'express\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/*\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">,</span> <span class="token string">\'index.html\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}))),Object(a.b)("p",null,"The choice of your server software isn\u2019t important either. Since Create React App is completely platform-agnostic, there\u2019s no need to explicitly use Node."),Object(a.b)("p",null,"The build folder with static assets is the only output produced by Create React App."),Object(a.b)("h3",{id:"netlify-cli"},"Netlify CLI"),Object(a.b)("p",null,"Netlify\u2019s command line interface (CLI) lets you deploy sites or configure continuous deployment straight from the command line."),Object(a.b)("p",null,"To install Netlify CLI, make sure you have Node.js version 8 or higher, then run this command from any directory in your terminal:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"npm install netlify-cli -g\n"}}))),Object(a.b)("p",null,"It is possible to deploy a site manually, without continuous deployment. This method uploads files directly from your local project directory to your site on Netlify."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"netlify deploy\n"}}))),Object(a.b)("p",null,"The first time you run the command, Netlify CLI will prompt you to select an existing site or create a new one, linking the site for all future deploys."),Object(a.b)("p",null,"You will need to set up a redirect and rewrite rule for the single page app."),Object(a.b)("p",null,"That redirect rule would look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"/*    /index.html   200\n"}}))),Object(a.b)("p",null,"You can add redirect rules to the _redirects file or to your netlify.toml config file. For more information on redirects on Netlify ",Object(a.b)("a",{href:"https://www.netlify.com/docs/redirects",target:"_blank"},"checkout the docs"),"."),Object(a.b)("h3",{id:"firebase-hosting"},"Firebase Hosting"),Object(a.b)("p",null,"Using the Firebase CLI, you deploy files from local directories on your computer to your Hosting server. Beyond serving static content, you can use Cloud Functions for Firebase or Cloud Run to serve dynamic content and host microservices on your sites. Read more about it from ",Object(a.b)("a",{href:"https://firebase.google.com/docs/hosting"},"official docs"),"."))}p.isMDXComponent=!0;var l=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"static-server",level:2,title:"Static Server",children:[]},{id:"other-solutions",level:2,title:"Other Solutions",children:[{id:"expressjs",level:3,title:"ExpressJS",children:[]},{id:"netlify-cli",level:3,title:"Netlify CLI",children:[]},{id:"firebase-hosting",level:3,title:"Firebase Hosting",children:[]}]}]},c={}}}]);
//# sourceMappingURL=22.c82f6783.chunk.js.map