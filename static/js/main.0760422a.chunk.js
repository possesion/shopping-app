(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a(3),i=a(21),s=a(10),o=a(17),u=a(11),d=a(4),m=a(6),f=a.n(m),b=Object(u.b)({name:"tasks",initialState:{allIds:[],byId:{},currentNameFilter:"all"},reducers:{addTask:{reducer:function(e,t){var a=t.payload;return{byId:Object(o.a)(Object(o.a)({},e.byId),{},Object(s.a)({},a.id,a)),allIds:[a.id].concat(Object(i.a)(e.allIds)),currentNameFilter:e.currentNameFilter}},prepare:function(e){return{payload:{id:f.a.uniqueId(),text:e,state:"active"}}}},deleteTask:function(e,t){var a=t.payload.id,n=e.allIds.filter((function(e){return e!==a})),r=f.a.omit(e.byId,a);e.byId=r,e.allIds=n},toggleTask:function(e,t){var a=t.payload.id,n=e.byId[a].state;e.byId[a].state="active"===n?"finished":"active"},toggleFilter:function(e,t){var a=t.payload;e.currentNameFilter=a}}}),p=Object(u.b)({name:"text",initialState:"",reducers:{updateText:function(e,t){return t.payload}},extraReducers:Object(s.a)({},b.actions.addTask,(function(e){return""}))}),v=b.actions,E=v.addTask,y=v.deleteTask,g=v.toggleTask,N=v.toggleFilter,k=p.actions.updateText,h=Object(d.c)({tasks:b.reducer,text:p.reducer}),O=a(42),j=a(41),I=(a(34),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.tasks.byId})),a=Object(l.c)((function(e){return e.tasks.allIds})),c=Object(l.c)((function(e){return e.tasks.currentNameFilter})),i=Object(n.useRef)(),s=function(t){return function(a){a.preventDefault(),e(g(t))}},o=function(t){return function(){e(y(t))}},u="all"===c?a:a.filter((function(e){return t[e].state===c}));return r.a.createElement("div",{className:"mt-3"},r.a.createElement("ul",{ref:i,className:"list-group todo-list"},r.a.createElement(O.a,{className:"todo-list"},u.map((function(e){var a=t[e],n=a.id,c=a.text,l=a.state;return r.a.createElement(j.a,{key:n,timeout:500,classNames:"item"},r.a.createElement(r.a.Fragment,{key:f.a.uniqueId(n)},r.a.createElement("li",{className:"list-element d-flex","data-testid":"elements"},r.a.createElement("span",{className:"mr-auto"},r.a.createElement("button",{className:"btn btn-link","data-testid":"element",onClick:s({id:n}),style:{fontWeight:"bold",color:"#990033",textDecoration:"finished"===l?"line-through":"none"}},r.a.createElement("div",{className:"text"},c))),r.a.createElement("button",{className:"close",onClick:o({id:n})},r.a.createElement("span",null,"\xd7")))))})))))}),x=(a(35),a(22)),F=(a(36),[["all","All list"],["active","Need to buy"],["finished","Done"]]),S=function(){var e=Object(l.c)((function(e){return e.tasks.currentNameFilter})),t=Object(l.b)(),a=function(e){return function(a){a.preventDefault(),t(N(e))}};return r.a.createElement("div",{className:"filter d-flex justify-content-around"},F.map((function(t){var n=Object(x.a)(t,2),c=n[0],l=n[1];return r.a.createElement(r.a.Fragment,{key:c},r.a.createElement("button",{onClick:a(c),className:"card-btn"},r.a.createElement("h3",{style:{transform:c===e?"scale(1.2)":"scale(1)"}},l)))})))},T=function(){var e,t=Object(l.c)((function(e){return e.text})),a=Object(l.b)();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex position"},r.a.createElement("div",{className:"card card-size m-auto",style:{width:"100%"}},r.a.createElement("div",{className:"card-body card-background"},r.a.createElement("div",{className:"card-title text-center"},r.a.createElement("h2",{className:"mt-2"},"Your personal shopping list"),r.a.createElement(S,null)),r.a.createElement(I,null),r.a.createElement("form",{className:"input-group input-group-lg search",onSubmit:(e=t,function(t){t.preventDefault(),a(E(e))})},r.a.createElement("input",{type:"text","data-testid":"input",className:"form-control",value:t,onChange:function(e){a(k(e.target.value))},required:!0,placeholder:"Input the value...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},"Add to list")))))))},D=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}},w=(a(37),a(38),D());console.log(D());var C=Object(u.a)({reducer:h,preloadedState:w});C.subscribe(f.a.throttle((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.error(a)}}(C.getState())}),1e3));var J=function(){return r.a.createElement("div",{"data-testid":"app"},r.a.createElement(T,null))};Object(c.render)(r.a.createElement(l.a,{store:C},r.a.createElement(J,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0760422a.chunk.js.map