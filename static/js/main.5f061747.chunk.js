(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(6),r=c.n(n),s=c(4),a=c(3),o=c(2),i=c.n(o),u=c(1),l=(c(13),c(14),c(15),c(7)),d=c.n(l),j=c(0),b=function(e){var t=e.todos,c=e.setSelectedUserId,n=e.selectedUserId,r=Object(u.useState)(""),s=Object(a.a)(r,2),o=s[0],i=s[1],l=Object(u.useState)(""),b=Object(a.a)(l,2),p=b[0],f=b[1],h=function(){switch(p){case"Active":return t.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())&&!1===e.completed}));case"Completed":return t.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())&&!0===e.completed}))}return t.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}))}();return Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsxs)("div",{className:"TodoList__list-container",children:[Object(j.jsxs)("form",{action:"",children:[Object(j.jsx)("input",{type:"text","data-cy":"filterByTitle",value:o,onChange:function(e){i(e.target.value)}}),Object(j.jsxs)("select",{onChange:function(e){f(e.target.value)},children:[Object(j.jsx)("option",{value:"All",children:"All"}),Object(j.jsx)("option",{value:"Active",children:"Active"}),Object(j.jsx)("option",{value:"Completed",children:"Completed"})]})]}),Object(j.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:h.map((function(e){return Object(j.jsxs)("li",{className:"TodoList__item TodoList__item--".concat(e.completed),children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",defaultChecked:e.completed,disabled:!0}),Object(j.jsx)("p",{children:e.title})]}),e.userId&&Object(j.jsx)("button",{"data-cy":"userButton",className:d()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===n}),type:"button",onClick:function(){return c(e.userId)},children:"User#".concat(e.userId)})]},e.id)}))})]})]})},p=(c(17),"https://mate.academy/students-api"),f=function(){var e=Object(s.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/users/").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){var t=e.userId,c=e.clearUser,n=Object(u.useState)(!1),r=Object(a.a)(n,2),o=r[0],l=r[1],d=Object(u.useState)(null),b=Object(a.a)(d,2),p=b[0],h=b[1],O=function(){var e=Object(s.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:c=e.sent,l(!1),h(c),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),l(!0),h(null),alert("User not found!");case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){O()}),[t]),Object(j.jsxs)(j.Fragment,{children:[p&&Object(j.jsxs)("div",{className:"CurrentUser",children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:"Selected user: ".concat(p.username)})}),Object(j.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:p.name}),Object(j.jsx)("p",{className:"CurrentUser__email",children:p.email}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:p.phone}),Object(j.jsx)("button",{type:"button",className:"button is-light CurrentUser__clear",onClick:c,children:"Clear"})]},p.id),o&&Object(j.jsx)("p",{children:"Error"})]})},m=function(){var e=Object(u.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(u.useState)([]),o=Object(a.a)(r,2),l=o[0],d=o[1],p=Object(u.useCallback)(Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)}))),[]);Object(u.useEffect)((function(){p()}),[]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(b,{todos:l,setSelectedUserId:n,selectedUserId:c})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:c?Object(j.jsx)(O,{userId:c,clearUser:function(){n(0)}}):"No user selected"})})]})};r.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.5f061747.chunk.js.map