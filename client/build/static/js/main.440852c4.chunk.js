(this["webpackJsonpphone-catalogue"]=this["webpackJsonpphone-catalogue"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(80),a(31)),o=a(9),l=a(27),i=a(65),s=a(66),u=a(36),m=a(47),p=a.n(m),h=a(67),f=a(48),E=a.n(f),d="https://phone-catalogue-api.herokuapp.com/phones",b={phones:{read:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(h.a)(p.a.mark((function t(){var a,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e){t.next=6;break}return t.next=4,E.a.get(d);case 4:return a=t.sent,t.abrupt("return",Promise.resolve(a));case 6:return t.next=8,E.a.get("".concat(d,"/").concat(e));case 8:return n=t.sent,t.next=11,n.json();case 11:return r=t.sent,t.abrupt("return",Promise.resolve(r));case 15:return t.prev=15,t.t0=t.catch(0),console.log("Error retrieving the data from API"),t.abrupt("return",Promise.reject(t.t0));case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()}}};function v(){return function(e){return e({type:"FETCH_REQUEST"}),b.phones.read().then((function(t){200===t.status?e({type:"FETCH_SUCCESS",payload:t.data}):e(j())})).catch((function(t){e(j())}))}}function g(e){return function(t){t(function(e){return{type:"SET_FILTER",text:e}}(e))}}function j(){return{type:"FETCH_ERROR"}}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_REQUEST":return Object(u.a)({},e,{isLoading:!0,phones:[],searchTerm:""});case"FETCH_SUCCESS":return Object(u.a)({},e,{isLoading:!1,phones:t.payload,searchTerm:""});case"FETCH_ERROR":return Object(u.a)({},e,{isLoading:!1,error:!0});case"SET_FILTER":return Object(u.a)({},e,{searchTerm:t.text});default:return e}},y=Object(l.c)({phoneReducer:O,filterReducer:O}),k=Object(s.createLogger)();var N=a(8),C=a(6),w=a(10),R=a(11),S=a(12),T=a(43),F=(a(106),a(107),a(144)),x=(a(108),function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(w.a)(this,Object(R.a)(t).call(this,e))).state={rating:Math.floor(5*Math.random()+1)},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"renderRating",value:function(){for(var e=[],t=0;t<this.state.rating;t++)e.push(r.a.createElement("i",{key:t,className:"fas fa-star"}));return e}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-rating"},this.renderRating())}}]),t}(r.a.Component)),L=(a(109),a(110),function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(w.a)(this,Object(R.a)(t).call(this,e))).state={value:Math.floor(80*Math.random()+1)},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"discount"},"- ",this.state.value," %")}}]),t}(r.a.Component)),P=function(e){var t=e.value;return r.a.createElement("div",{className:"container-price"},r.a.createElement("p",null,"From ",r.a.createElement("span",{className:"price"},t,".99 \u20ac"),r.a.createElement(L,null)))},_=(a(111),a(139)),M=function(e){var t=e.title,a=e.elements;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),r.a.createElement(_.a,{responsive:!0},r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",{className:"row-bold"},e.name),r.a.createElement("td",null,e.value))})))))},U=(a(112),a(140)),D=function(e){var t=e.color;return r.a.createElement("div",{className:"container-color"},r.a.createElement(U.a,{className:"justify-content-center"},r.a.createElement("p",{className:"m-1"},"Avariable in: "),r.a.createElement("div",{className:"square m-1",style:{backgroundColor:t}})))},H=(a(113),a(141)),B=function(e){var t=e.imageFileName;return r.a.createElement("div",{className:"container-image"},r.a.createElement(H.a,{className:"phone-image",fluid:!0,src:"./images/".concat(t)}))},I=(a(114),function(e){var t=e.toggleDrawer;return r.a.createElement("div",{className:"container-back-arrow"},r.a.createElement("span",{onClick:t(!1),className:"back-arrow"},r.a.createElement("i",{className:"fas fa-arrow-left"})))}),A=function(e){var t=e.phone,a=e.show,n=e.toggleDrawer;return r.a.createElement(F.a,{anchor:"right",open:a,onClose:n(!1)},r.a.createElement("div",{className:"container-drawer"},r.a.createElement(I,{toggleDrawer:n}),r.a.createElement("h2",{className:"text-center phone-title"},t.name),r.a.createElement(x,null),r.a.createElement("hr",{width:"50%"}),r.a.createElement(B,{imageFileName:t.imageFileName}),r.a.createElement(D,{color:t.color}),r.a.createElement(P,{value:t.price}),r.a.createElement(M,{elements:[{name:"Manufacturer",value:t.manufacturer},{name:"Description",value:t.description},{name:"Screen",value:t.screen},{name:"RAM",value:t.ram+" GB"}],title:"Specifications"})))};var q,G=function(e){var t=e.phone,a=r.a.useState(!1),n=Object(T.a)(a,2),c=n[0],o=n[1],l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o(e)}};return r.a.createElement("div",null,r.a.createElement("div",{onClick:l(!0),className:"card-container ".concat(c?"selected":"arroz con cosas")},r.a.createElement(B,{imageFileName:t.imageFileName}),r.a.createElement("h2",{className:"text-center"},t.name),r.a.createElement("p",null,t.manufacturer),r.a.createElement(x,null),r.a.createElement(P,{value:t.price})),r.a.createElement(A,{phone:t,show:c,toggleDrawer:l}))},J=a(142),Q=a(69),W=function(e){var t=e.phones;return r.a.createElement(J.a,null,r.a.createElement(U.a,{className:"justify-content-md-center"},t.map((function(e){return r.a.createElement(Q.a,{key:e.id,xs:"12",md:"6",lg:"4"},r.a.createElement(G,{key:e.id,phone:e}))}))))},z=a(143),K=function(e){function t(){return Object(N.a)(this,t),Object(w.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"block container-message"},r.a.createElement(z.a,{animation:"grow",variant:"dark"}),r.a.createElement("span",null," Loading..."))}}]),t}(r.a.Component),V=(a(115),a(148)),X=function(e){function t(){return Object(N.a)(this,t),Object(w.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"block container-message"},r.a.createElement(V.a,{variant:"danger"},this.props.children))}}]),t}(r.a.Component),Y=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(w.a)(this,Object(R.a)(t).call(this,e))).state={phoneList:a.props.phones},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.getPhones()}},{key:"componentWillReceiveProps",value:function(e){this.setState({phoneList:e.phones.filter((function(t){return(t.manufacturer.toUpperCase()+" "+t.name.toUpperCase()).includes(e.text.toUpperCase())}))})}},{key:"renderBody",value:function(){return this.props.isLoading?r.a.createElement(K,null):this.props.error?r.a.createElement(X,null,"Sorry, there was a problem and we ",r.a.createElement("strong",null,"couldn't retrieve")," the phone list. Please, try again later."):0===this.state.phoneList.length?r.a.createElement(X,null,"Sorry, we ",r.a.createElement("strong",null,"couldn't find")," phones that matches your query. Please, try again using different words."):r.a.createElement(W,{phones:this.state.phoneList})}},{key:"render",value:function(){return r.a.createElement("div",{className:"block app-body"},this.renderBody())}}]),t}(n.Component),Z=Object(c.b)((function(e){return{phones:e.phoneReducer.phones||[],isLoading:e.phoneReducer.isLoading,error:e.phoneReducer.error,text:e.filterReducer.searchTerm}}),(function(e){return{getPhones:function(){return e(v())}}}))(Y),$=(a(116),a(147)),ee=a(146),te=a(30),ae=a(145),ne=a(71),re=function(e){var t=e.setFilter,a=e.error;return r.a.createElement(ae.a,{inline:!0},r.a.createElement(ne.a,{disabled:a,onChange:function(e){return t(e.target.value)},type:"text",placeholder:"Search...",className:"mr-sm-2"}))},ce=Object(c.b)((function(e){return{error:e.phoneReducer.error}}),(function(e){return{setFilter:function(t){return e(g(t))}}}))(re),oe=function(e){function t(){return Object(N.a)(this,t),Object(w.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement($.a,{className:"navigation-bar",sticky:"top",bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(te.b,{className:"brand-link",to:"/"},r.a.createElement("i",{className:"fas fa-mobile-alt"})," Phone-shop"),r.a.createElement($.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement($.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ee.a,{className:"ml-auto align-items-center"},r.a.createElement(ce,null))))}}]),t}(r.a.Component),le=(a(119),function(e){function t(){return Object(N.a)(this,t),Object(w.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"block container-message"},r.a.createElement("h1",null,"Error ",r.a.createElement("span",{className:"code-error"},"404")),r.a.createElement("p",null,"Oops! Whatever you were looking for... it's not here. Please ",r.a.createElement("strong",null,r.a.createElement(te.b,{to:"/"},"Go home!"))))}}]),t}(r.a.Component)),ie=a(22),se=(a(120),Object(l.d)(y,q,Object(l.a)(i.a,k)));Object(o.render)(r.a.createElement(c.a,{store:se},r.a.createElement(te.a,null,r.a.createElement(ie.a,{path:"/",component:oe}),r.a.createElement(ie.c,null,r.a.createElement(ie.a,{exact:!0,path:"/",component:Z}),r.a.createElement(ie.a,{component:le})))),document.getElementById("root"))},78:function(e,t,a){e.exports=a(121)}},[[78,1,2]]]);
//# sourceMappingURL=main.440852c4.chunk.js.map