(this["webpackJsonpbhyve-task"]=this["webpackJsonpbhyve-task"]||[]).push([[0],{30:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(16),r=n.n(a),i=(n(30),n(4)),o=n(11),l=n(5),u=n.n(l),j=n(10),b=n(2),d="https://fechallenge.dev.bhyve.io",h="user/skills",p="user/basic/profile",O="user/profile",f=["".concat(d,"/").concat(h),"".concat(d,"/").concat(p),"".concat(d,"/").concat(O)],m=function(e,t){return fetch("".concat(d,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log(e),e}))},x=function(e){return fetch("".concat(d,"/").concat(e)).then((function(e){return console.log(e),e}))},g=n(9),v=(n(21),n(1)),y=function(e){var t=e.showToast,n=e.msg;return Object(s.useEffect)((function(){t&&function(e){Object(g.b)(e)}(n)}),[t]),Object(v.jsx)(g.a,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1})},N=n(12),w=n.n(N),k=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(b.a)(a,2),l=r[0],d=r[1],h=Object(s.useState)(!1),p=Object(b.a)(h,2),O=p[0],f=p[1],x=Object(s.useState)(!1),g=Object(b.a)(x,2),N=g[0],k=g[1],S=Object(s.useState)([]),C=Object(b.a)(S,2),P=C[0],T=C[1],F=Object(i.f)();Object(s.useEffect)((function(){F.location.state&&c(F.location.state.username)}),[F.location.state]);var B=function(){var e=Object(j.a)(u.a.mark((function e(t){var s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),T([]),s={username:n,password:l},e.next=6,m("user/signin",s);case 6:(c=e.sent).ok?(f(!1),k(!0),c.json().then((function(e){console.log(e),window.localStorage.setItem("auth",JSON.stringify(e)),e.user.profileCompleted?F.push("/profile"):F.push("/basicinfo")}))):(f(!1),c.json().then((function(e){return T([].concat(e.message))})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[O&&Object(v.jsx)(w.a,{type:"ThreeDots",color:"lightblue",loading:O,size:15,css:{position:"absolute",left:"49%",top:"50%"}}),Object(v.jsxs)("div",{id:"login_container",children:[Object(v.jsx)(y,{showToast:N,msg:"Successfully Loged in to Bhyve!"}),Object(v.jsx)("h5",{className:"text-center mb-5",children:"Login to Bhyve"}),Object(v.jsxs)("form",{onSubmit:B,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"username",children:"Email Address"}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"username",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",className:"form-control",id:"password",value:l,onChange:function(e){return d(e.target.value)}}),P.map((function(e,t){return Object(v.jsx)("p",{className:"error_message",children:e},t)}))]}),Object(v.jsx)(o.b,{to:"/signup",style:{float:"right"},children:"Not a user? Signup"}),Object(v.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 w-100 text-center",children:"Login"})]})]})]})},S=function(){var e=Object(i.g)(),t=Object(i.f)(),n=Object(s.useState)(!1),c=Object(b.a)(n,2),a=c[0],r=c[1];Object(s.useEffect)((function(){"/profile"==e.pathname||"/basicinfo"==e.pathname?r(!0):r(!1)}),[e.pathname]);return Object(v.jsxs)("div",{className:"text-center py-4",children:[Object(v.jsx)("img",{src:"https://bhyve.io/wp-content/uploads/2019/04/logo-b.png",height:"48",alt:"logo"}),a&&Object(v.jsxs)("div",{class:"dropdown",style:{display:"inline-block",float:"right"},children:[Object(v.jsx)("button",{class:"btn btn-info dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Profile"}),Object(v.jsx)("ul",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:Object(v.jsx)("li",{children:Object(v.jsx)("a",{class:"dropdown-item",href:"#",onClick:function(){window.localStorage.clear(),t.push("/login")},children:"Logout"})})})]})]})},C=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(b.a)(a,2),o=r[0],l=r[1],d=Object(s.useState)(!1),h=Object(b.a)(d,2),p=h[0],O=h[1],f=Object(s.useState)(!1),x=Object(b.a)(f,2),g=x[0],N=x[1],k=Object(s.useState)([]),S=Object(b.a)(k,2),C=S[0],P=S[1],T=Object(i.f)(),F=function(){var e=Object(j.a)(u.a.mark((function e(t){var s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),P([]),s={username:n,password:o},e.next=6,m("user/signup",s);case 6:(c=e.sent).ok?(O(!1),N(!0),setTimeout((function(){T.push("/login",{username:n})}),4e3)):(O(!1),c.json().then((function(e){return P([].concat(e.message))})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[p&&Object(v.jsx)(w.a,{type:"ThreeDots",color:"lightblue",loading:p,size:15,css:{position:"absolute",left:"49%",top:"50%"}}),Object(v.jsxs)("div",{id:"login_container",children:[Object(v.jsx)(y,{showToast:g,msg:"Successfully signed up to Bhyve! Lets login"}),Object(v.jsx)("h5",{className:"text-center mb-5",children:"Signup to Bhyve"}),Object(v.jsxs)("form",{onSubmit:F,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"username",children:"Email Address"}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"username",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",className:"form-control",id:"password",value:o,onChange:function(e){return l(e.target.value)}}),C.map((function(e,t){return Object(v.jsx)("p",{className:"error_message",children:e},t)}))]}),Object(v.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 w-100 text-center",children:"SignUp"})]})]})]})},P=n(24),T=n.n(P),F=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(b.a)(a,2),o=r[0],l=r[1],d=Object(s.useState)(""),O=Object(b.a)(d,2),f=O[0],y=O[1],N=Object(s.useState)(0),k=Object(b.a)(N,2),S=k[0],C=k[1],P=Object(s.useState)([]),F=Object(b.a)(P,2),B=F[0],E=F[1],L=Object(s.useState)([]),_=Object(b.a)(L,2),z=_[0],D=_[1],R=Object(s.useState)(!1),I=Object(b.a)(R,2),J=I[0],M=I[1],q=Object(i.f)();Object(s.useEffect)((function(){A()}),[]),Object(s.useEffect)((function(){S&&U()}),[S]);var A=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,x("skills");case 3:e.sent.json().then((function(e){c(e),C(1),M(!1)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=10*(S-1),t=e+10;D(n.slice(e,t))},Y=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.trim().length?f.trim().length?B.length<3?Object(g.b)("Please select minimum of ".concat(3," skills")):(M(!0),t=[],n={firstName:o,lastName:f},s={skills:B.map((function(e){return e.skillName}))},t.push(m(p,n)),t.push(m(h,s)),Promise.all(t).then((function(e){Promise.all(e.map((function(e){return e.json()}))).then((function(e){var t=[];return e.forEach((function(e){e.error&&(t=[].concat(e.message))})),t})).then((function(e){M(!1),e.length?e.map((function(e){return Object(g.b)(e)})):(Object(g.b)("Profile updated Successfully"),setTimeout((function(){q.push("/profile")}),1e3))}))}))):Object(g.b)("Please enter valid Last Name"):Object(g.b)("Please enter valid First Name");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[J&&Object(v.jsx)(w.a,{type:"ThreeDots",color:"lightblue",loading:J,size:15,css:{position:"absolute",left:"49%",top:"50%"}}),Object(v.jsxs)("div",{id:"basicinfo_container",children:[Object(v.jsx)("h5",{className:"text-center mb-5",children:"Fill up the Basic Info"}),Object(v.jsx)(g.a,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col",children:[Object(v.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(v.jsx)("input",{type:"text",style:{width:"300px"},className:"form-control",id:"firstName",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(v.jsxs)("div",{className:"col",children:[Object(v.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(v.jsx)("input",{type:"text",style:{width:"300px"},className:"form-control",id:"lastName",value:f,onChange:function(e){return y(e.target.value)}})]})]}),Object(v.jsxs)("div",{id:"skills_container",children:[Object(v.jsx)("label",{htmlFor:"lastName",children:"Select Skills"}),Object(v.jsx)("div",{children:z.map((function(e,t){return Object(v.jsx)("button",{type:"button",className:"btn mb-3 ".concat(B.find((function(t){return t.id===e.id}))?"btn-primary":"btn-outline-primary"),style:{marginRight:"15px",borderRadius:"50px",textTransform:"capitalize"},onClick:function(){return t=e,void(B.length<8?B.find((function(e){return e.id===t.id}))||E(B.concat(t)):Object(g.b)("Please remove any one skill by clicking on selected skill"));var t},children:e.skillName},t)}))})]}),Object(v.jsx)(T.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"page",pageCount:n.length/10,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){return C(e.selected+1)},containerClassName:"pagination",pageClassName:"page",previousClassName:"page",nextClassName:"page",activeClassName:"active"}),B.length?Object(v.jsxs)("div",{id:"selected_skills_container",children:[Object(v.jsxs)("label",{htmlFor:"lastName",children:["Selected Skills (",B.length,")"]}),Object(v.jsx)("div",{children:B.map((function(e,t){return Object(v.jsx)("button",{type:"button",className:"btn btn-primary mb-3",style:{marginRight:"15px",borderRadius:"50px",textTransform:"capitalize"},onClick:function(){return t=e,void E(B.filter((function(e){return e.id!==t.id})));var t},children:e.skillName},t)}))}),Object(v.jsx)("p",{children:"* You can select Mininum of 3 skills and Maximum of 8 skills"})]}):null,Object(v.jsxs)("div",{className:"text-end",children:[Object(v.jsx)("button",{className:"btn btn-light",style:{marginRight:"20px"},children:"Cancel"}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:Y,children:"Save"})]})]})]})},B=function(){var e=Object(s.useState)({}),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(b.a)(a,2),i=r[0],o=r[1];Object(s.useEffect)((function(){l()}),[]);var l=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,x(O);case 3:(t=e.sent).ok&&t.json().then((function(e){console.log(e),c(e),o(!1)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[i&&Object(v.jsx)(w.a,{type:"ThreeDots",color:"lightblue",loading:i,size:15,css:{position:"absolute",left:"49%",top:"50%"}}),Object(v.jsxs)("div",{id:"basicinfo_container",children:[Object(v.jsx)("h5",{className:"text-center mb-5",children:"Profile Information"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"First Name"}),Object(v.jsx)("input",{type:"text",style:{width:"300px"},className:"form-control",value:n.firstName,disabled:!0})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Last Name"}),Object(v.jsx)("input",{type:"text",style:{width:"300px"},className:"form-control",value:n.lastName,disabled:!0})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Email"}),Object(v.jsx)("input",{type:"text",style:{width:"300px"},className:"form-control",value:n.username,disabled:!0})]}),Object(v.jsxs)("div",{id:"skills_container",children:[Object(v.jsxs)("label",{children:["Selected Skills (",n.skills&&n.skills.length,")"]}),Object(v.jsx)("div",{children:n.skills&&n.skills.map((function(e,t){return Object(v.jsx)("button",{type:"button",className:"btn mb-3 btn-primary",style:{marginRight:"15px",borderRadius:"50px",textTransform:"capitalize"},children:e},t)}))})]})]})]})},E=n(25),L=n.n(E);var _=function(){return L.a.register({request:function(e,t){if(f.includes(e)){console.log(e),console.log(t);var n=JSON.parse(localStorage.getItem("auth"));t?t.headers.authorization="Bearer ".concat(n.accessToken):t={headers:{authorization:"Bearer ".concat(n.accessToken)}}}return[e,t]},requestError:function(e){return Promise.reject(e)},response:function(e){return e},responseError:function(e){return Promise.reject(e)}}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(S,{}),Object(v.jsxs)(i.c,{children:[Object(v.jsx)(i.a,{exact:!0,path:"/",children:Object(v.jsx)(k,{})}),Object(v.jsx)(i.a,{path:"/login",children:Object(v.jsx)(k,{})}),Object(v.jsx)(i.a,{path:"/signup",children:Object(v.jsx)(C,{})}),Object(v.jsx)(i.a,{path:"/basicinfo",children:Object(v.jsx)(F,{})}),Object(v.jsx)(i.a,{path:"/profile",children:Object(v.jsx)(B,{})})]})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root")),z()}},[[43,1,2]]]);
//# sourceMappingURL=main.6f113110.chunk.js.map