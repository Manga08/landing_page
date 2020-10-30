(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[23],{1224:function(n,e,a){"use strict";a.r(e),a.d(e,"readingTime",(function(){return o})),a.d(e,"default",(function(){return r})),a.d(e,"tableOfContents",(function(){return c})),a.d(e,"frontMatter",(function(){return p}));var t=a(19),s=(a(0),a(285)),o={text:"1 min read",minutes:.57,time:34199.99999999999,words:114},i={};function r(n){var e=n.components,a=Object(t.a)(n,["components"]);return Object(s.b)("wrapper",Object.assign({},i,a,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"environment-variables"},"Environment Variables"),Object(s.b)("p",null,"You must create custom environment variables beginning with ",Object(s.b)("inlineCode",{parentName:"p"},"REACT_APP_"),". Any other variables except ",Object(s.b)("inlineCode",{parentName:"p"},"NODE_ENV")," will be ignored to avoid accidentally exposing a private key on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"WARNING: Do not store any secrets (such as private API keys) in your React app!\nEnvironment variables are embedded into the build, meaning anyone can view them by inspecting your app\u2019s files.")),Object(s.b)("p",null,"Having access to the ",Object(s.b)("inlineCode",{parentName:"p"},"NODE_ENV")," is also useful for performing actions conditionally:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  analytics<span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}))),Object(s.b)("p",null,"Read more about environment variables ",Object(s.b)("a",{href:"https://create-react.dev/docs/adding-custom-environment-variables/"},"here"),"."))}r.isMDXComponent=!0;var c=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[]},p={}}}]);
//# sourceMappingURL=23.ecc931f1.chunk.js.map