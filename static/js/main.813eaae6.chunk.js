(this["webpackJsonpbhyve-task"]=this["webpackJsonpbhyve-task"]||[]).push([[0],{25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(12),a=n.n(r),o=(n(25),n.p,n(11)),i=n(2),u=n(9),j=n.n(u),l=n(13),b=n(6),d=function(e,t){return fetch("".concat("https://fechallenge.dev.bhyve.io","/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log(e),e}))},h=n(18),O=(n(27),n(1)),p=function(e){var t=e.showToast,n=e.msg;return Object(s.useEffect)((function(){t&&function(e){Object(h.b)(e)}(n)}),[t]),Object(O.jsx)(h.a,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1})},m=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)("Password1"),a=Object(b.a)(r,2),u=a[0],h=a[1],m=Object(s.useState)(!1),f=Object(b.a)(m,2),g=f[0],x=f[1],v=Object(s.useState)(!1),w=Object(b.a)(v,2),y=w[0],S=w[1],N=Object(s.useState)([]),C=Object(b.a)(N,2),k=C[0],T=C[1],F=Object(i.f)();Object(s.useEffect)((function(){F.location.state&&c(F.location.state.username)}),[F.location.state]);var P=function(){var e=Object(l.a)(j.a.mark((function e(t){var s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x(!0),T([]),s={username:n,password:u},e.next=6,d("/user/signin",s);case 6:(c=e.sent).ok?(x(!1),S(!0)):(x(!1),c.json().then((function(e){return T([].concat(e.message))})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{id:"login_container",children:[g&&Object(O.jsx)("p",{children:"Loading ....."}),Object(O.jsx)(p,{showToast:y,msg:"Successfully Loged in to Bhyve!"}),Object(O.jsxs)("form",{onSubmit:P,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"username",children:"Email Address"}),Object(O.jsx)("input",{type:"email",className:"form-control",id:"username",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password",value:u,onChange:function(e){return h(e.target.value)}}),k.map((function(e,t){return Object(O.jsx)("p",{className:"error_message",children:e},t)}))]}),Object(O.jsx)(o.b,{to:"/signup",style:{float:"right"},children:"Not a user? Signup"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 w-100 text-center",children:"Login"})]})]})},f=function(){return Object(O.jsx)("div",{className:"text-center py-4",children:Object(O.jsx)("img",{src:"https://bhyve.io/wp-content/uploads/2019/04/logo-b.png",height:"48"})})},g=function(){var e=Object(s.useState)("testemail@gmail.com"),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)("Password1"),a=Object(b.a)(r,2),o=a[0],u=a[1],h=Object(s.useState)(!1),m=Object(b.a)(h,2),f=m[0],g=m[1],x=Object(s.useState)(!1),v=Object(b.a)(x,2),w=v[0],y=v[1],S=Object(s.useState)([]),N=Object(b.a)(S,2),C=N[0],k=N[1],T=Object(i.f)(),F=function(){var e=Object(l.a)(j.a.mark((function e(t){var s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),k([]),s={username:n,password:o},e.next=6,d("/user/signup",s);case 6:(c=e.sent).ok?(g(!1),y(!0),setTimeout((function(){T.push("/login",{username:n})}),4e3)):(g(!1),c.json().then((function(e){return k([].concat(e.message))})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{id:"login_container",children:[f&&Object(O.jsx)("p",{children:"Loading ....."}),Object(O.jsx)(p,{showToast:w,msg:"Successfully signed up to Bhyve! Lets login"}),Object(O.jsxs)("form",{onSubmit:F,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"username",children:"Email Address"}),Object(O.jsx)("input",{type:"email",className:"form-control",id:"username",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"password",value:o,onChange:function(e){return u(e.target.value)}}),C.map((function(e,t){return Object(O.jsx)("p",{className:"error_message",children:e},t)}))]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 w-100 text-center",children:"SignUp"})]})]})};var x=function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(f,{}),Object(O.jsx)(o.a,{children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",children:Object(O.jsx)(m,{})}),Object(O.jsx)(i.a,{path:"/login",children:Object(O.jsx)(m,{})}),Object(O.jsx)(i.a,{path:"/signup",children:Object(O.jsx)(g,{})})]})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.813eaae6.chunk.js.map