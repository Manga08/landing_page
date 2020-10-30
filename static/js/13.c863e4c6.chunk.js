(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[13],{1039:function(e,a,t){"use strict";var r=t(111);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),o=(0,r(t(137)).default)(n.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");a.default=o},1239:function(e,a,t){"use strict";var r=t(1),n=t(3),o=t(0),i=(t(4),t(2)),c=t(6),s=["video","audio","picture","iframe","img"],l=o.forwardRef((function(e,a){var t=e.children,c=e.classes,l=e.className,m=e.component,d=void 0===m?"div":m,u=e.image,p=e.src,b=e.style,f=Object(n.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==s.indexOf(d),v=!g&&u?Object(r.a)({backgroundImage:'url("'.concat(u,'")')},b):b;return o.createElement(d,Object(r.a)({className:Object(i.a)(c.root,l,g&&c.media,-1!=="picture img".indexOf(d)&&c.img),ref:a,style:v,src:g?u||p:void 0},f),t)}));a.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},1287:function(e,a,t){"use strict";t.r(a);var r=t(63),n=t(0),o=t.n(n),i=t(26),c=t(34),s=t(460),l=t(895),m=t(898),d=t(881),u=t(936),p=t(937),b=t(904),f=t(847),g=t(884),v=t(880),h=t(1239),E=t(1039),w=t.n(E),j=t(284),O=t(59),S=t(68),x=t.n(S),y=t(99),k=t(19),N=t(50),C=t(2),B=t(931),R=t(932),M=t(891),z=t(861),P=t(62),V=Object(s.a)((function(){return{root:{}}}));function q(e){var a=e.className,t=e.onSubmitSuccess,r=Object(k.a)(e,["className","onSubmitSuccess"]),n=V(),i=Object(N.b)();return o.a.createElement(R.a,{initialValues:{email:"manga@gmail.com",password:"manga1308"},validationSchema:B.b().shape({email:B.d().email("Must be a valid email").max(255).required("Email is required"),password:B.d().max(255).required("Password is required")}),onSubmit:function(){var e=Object(y.a)(x.a.mark((function e(a,r){var n,o,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setErrors,o=r.setStatus,c=r.setSubmitting,e.prev=1,e.next=4,i(Object(P.g)(a.email,a.password));case 4:t(),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(1),s=e.t0.response&&e.t0.response.data.message||"Something went wrong",o({success:!1}),n({submit:s}),c(!1);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,i=e.handleBlur,c=e.handleChange,s=e.handleSubmit,l=e.isSubmitting,u=e.touched,p=e.values;return o.a.createElement("form",Object.assign({noValidate:!0,className:Object(C.a)(n.root,a),onSubmit:s},r),o.a.createElement(M.a,{error:Boolean(u.email&&t.email),fullWidth:!0,autoFocus:!0,helperText:u.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:i,onChange:c,type:"email",value:p.email,variant:"outlined"}),o.a.createElement(M.a,{error:Boolean(u.password&&t.password),fullWidth:!0,helperText:u.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:i,onChange:c,type:"password",value:p.password,variant:"outlined"}),o.a.createElement(m.a,{mt:2},o.a.createElement(d.a,{color:"secondary",disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Log In"),t.submit&&o.a.createElement(m.a,{mt:3},o.a.createElement(z.a,{error:!0},t.submit))))}))}q.defaultProps={onSubmitSuccess:function(){}};var L=q,T=Object(s.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",height:"100%",minHeight:"100%",flexDirection:"column",paddingBottom:80,paddingTop:80},backButton:{marginLeft:e.spacing(2)},card:{overflow:"visible",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:e.spacing(8,4,3,4)},icon:{backgroundColor:"#2ECC97",color:e.palette.common.white,borderRadius:e.shape.borderRadius,padding:e.spacing(1),position:"absolute",top:-32,left:e.spacing(3),height:64,width:64},media:Object(r.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:e.spacing(3),color:e.palette.common.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},e.breakpoints.down("md"),{display:"none"})}}));a.default=function(){var e=T(),a=Object(c.g)();return o.a.createElement(j.a,{className:e.root,title:"Login"},o.a.createElement(l.a,{maxWidth:"md"},o.a.createElement(m.a,{mb:8,display:"flex",alignItems:"center"},o.a.createElement(i.a,{to:"/home"},o.a.createElement(O.a,null)),o.a.createElement(d.a,{component:i.a,to:"/home",className:e.backButton},"Back to home")),o.a.createElement(u.a,{className:e.card},o.a.createElement(p.a,{className:e.content},o.a.createElement(b.a,{className:e.icon},o.a.createElement(w.a,{fontSize:"large"})),o.a.createElement(f.a,{variant:"h2",color:"textPrimary"},"Sign in"),o.a.createElement(f.a,{variant:"subtitle1",color:"textSecondary"},"Sign in on the internal platform"),o.a.createElement(m.a,{mt:3},o.a.createElement(L,{onSubmitSuccess:function(){a.push("/app")}})),o.a.createElement(m.a,{my:2},o.a.createElement(g.a,null)),o.a.createElement(v.a,{component:i.a,to:"/register",variant:"body2",color:"textSecondary"},"Create new account")),o.a.createElement(h.a,{className:e.media,image:"/static/images/auth.png",title:"Cover"}))))}},936:function(e,a,t){"use strict";var r=t(1),n=t(3),o=t(0),i=(t(4),t(2)),c=t(218),s=t(6),l=o.forwardRef((function(e,a){var t=e.classes,s=e.className,l=e.raised,m=void 0!==l&&l,d=Object(n.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(r.a)({className:Object(i.a)(t.root,s),elevation:m?8:1,ref:a},d))}));a.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},937:function(e,a,t){"use strict";var r=t(1),n=t(3),o=t(0),i=(t(4),t(2)),c=t(6),s=o.forwardRef((function(e,a){var t=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(l,Object(r.a)({className:Object(i.a)(t.root,c),ref:a},m))}));a.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)}}]);
//# sourceMappingURL=13.c863e4c6.chunk.js.map