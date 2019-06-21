(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports={definitions:{},$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/root.json",type:"object",title:"The Root Schema",required:["budget","expenses"],properties:{budget:{$id:"#/properties/budget",type:"integer",title:"The Budget Schema",default:0,examples:[0]},expenses:{$id:"#/properties/expenses",type:"array",title:"The Expenses Schema"}}}},23:function(e,t,n){e.exports={container:"appstyles_container__3urTz"}},24:function(e,t,n){e.exports={form:"Form_form__jJthX"}},25:function(e,t,n){e.exports={label:"Label_label__RhihE"}},26:function(e,t,n){e.exports={input:"Input_input__2rN2L"}},27:function(e,t,n){e.exports={button:"Button_button__JmdFq"}},29:function(e,t,n){e.exports={table:"ExpensesTable_table__2Emuo"}},30:function(e,t,n){e.exports={section:"Values_section__1YpVn"}},32:function(e,t,n){e.exports=n(49)},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(7),l=n.n(u),c=n(1),o=n(3),i=n(20),s="SAVE_BUDGET",m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s:return a;default:return e}},p=n(31),b=n(21),d=n.n(b),f="ADD_EXPENSE",E="DELETE_EXPENSE",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:return[a].concat(Object(p.a)(e));case E:return e.filter(function(e){return e.id!==a});default:return e}},v=n(16),g=n.n(v),y=n(22),_=function(e){return function(t){return function(n){t(n),g.a.validate(e.getState(),y)||(console.warn("Invalid state schema detected!"),console.log(g.a.error))}}},x=Object(o.combineReducers)({budget:m,expenses:h}),j=Object(o.applyMiddleware)(_),S=Object(o.createStore)(x,Object(i.composeWithDevTools)(j)),O=n(23),C=n.n(O),N=n(8),w=n(9),k=n(11),P=n(10),B=n(12),D=n(24),T=n.n(D),A=function(e){var t=e.onSubmit,n=void 0===t?function(){return null}:t,a=e.children;return r.a.createElement("form",{className:T.a.form,onSubmit:n},a)},$=n(25),J=n.n($),L=function(e){var t=e.children;return r.a.createElement("label",{className:J.a.label},t)},I=n(26),R=n.n(I),V=function(e){var t=e.type,n=e.value,a=e.onChange,u=e.name;return r.a.createElement("input",{className:R.a.input,type:t,value:n,onChange:a,name:u})};V.defaultProps={name:""};var X=V,q=n(27),F=n.n(q),z=function(e){var t=e.type,n=e.label,a=e.onClick;return r.a.createElement("button",{className:F.a.button,type:t,onClick:a},n)};z.defaultProps={onClick:function(){return null},type:"button",label:""};var G=z,M=function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(k.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).state={budget:0},n.handleChange=function(e){var t=e.target.value;return n.setState({budget:t})},n.handleSubmit=function(e){e.preventDefault(),(0,n.props.saveBudget)(n.state.budget),n.setState({budget:0})},n}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state.budget;return r.a.createElement(A,{onSubmit:this.handleSubmit},r.a.createElement(L,null,"Enter your total budget",r.a.createElement(X,{type:"number",value:e,onChange:this.handleChange})),r.a.createElement(G,{label:"Save",type:"submit"}))}}]),t}(a.Component),U=Object(c.b)(null,function(e){return{saveBudget:function(t){return e(function(e){return{type:s,payload:Number(e)}}(t))}}})(M),W=n(28),Y=function(e){function t(){var e,n;Object(N.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(k.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",amount:0},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;return n.setState(Object(W.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.amount;(0,n.props.addExpense)(a,r),n.setState({name:"",amount:0})},n}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.amount;return r.a.createElement(A,{onSubmit:this.handleSubmit},r.a.createElement(L,null,"Enter expense name",r.a.createElement(X,{type:"text",name:"name",value:t,onChange:this.handleChange})),r.a.createElement(L,null,"Enter expense amount",r.a.createElement(X,{type:"number",name:"amount",value:n,onChange:this.handleChange})),r.a.createElement(G,{label:"Add",type:"submit"}))}}]),t}(a.Component),H=Object(c.b)(null,function(e){return{addExpense:function(t,n){return e(function(e,t){return{type:f,payload:{id:d.a.generate(),name:e,amount:Number(t)}}}(t,n))}}})(Y),K=n(29),Q=n.n(K),Z=function(e){var t=e.expenses,n=void 0===t?[]:t,a=e.deleteExpense;return n.length>0&&r.a.createElement("table",{className:Q.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.map(function(e){var t=e.id,n=e.name,u=e.amount;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n),r.a.createElement("td",null,u),r.a.createElement("td",null,r.a.createElement(G,{label:"Delete",onClick:function(){return a(t)}})))})))},ee=function(e){return e.expenses},te=function(e){return function(e){return e.reduce(function(e,t){return e+t.amount},0)}(ee(e))},ne=Object(c.b)(function(e){return{expenses:ee(e)}},function(e){return{deleteExpense:function(t){return e(function(e){return{type:E,payload:e}}(t))}}})(Z),ae=n(30),re=n.n(ae),ue=n(5),le=n.n(ue),ce=function(e){var t=e.label,n=e.value,a=e.isPositive,u=[le.a.container];return a&&u.push(le.a.positive),r.a.createElement("div",{className:u.join(" ")},r.a.createElement("p",{className:le.a.label},t),r.a.createElement("p",{className:le.a.value},n,"\xa0$"))};ce.defaultProps={isPositive:!1};var oe=ce,ie=function(e){var t=e.budget,n=e.expenses,a=e.balance;return r.a.createElement("section",{className:re.a.section},r.a.createElement(oe,{label:"Budget",value:t,isPositive:!0}),r.a.createElement(oe,{label:"Expenses",value:n}),r.a.createElement(oe,{label:"Balance",value:a,isPositive:a>=0}))};ie.defaultProps={budget:0,expenses:0,balance:0};var se=ie,me=function(e){return e.budget},pe=function(e){return function(e,t){return e-t}(me(e),te(e))},be=Object(c.b)(function(e){return{budget:me(e),expenses:te(e),balance:pe(e)}},null)(se),de=Object(c.b)(function(e){return{budget:me(e),expenses:ee(e)}},null)(function(){return r.a.createElement("div",{className:C.a.container},r.a.createElement(U,null),r.a.createElement(be,null),r.a.createElement(H,null),r.a.createElement(ne,null))});l.a.render(r.a.createElement(c.a,{store:S},r.a.createElement(de,null)),document.getElementById("root"))},5:function(e,t,n){e.exports={container:"Stat_container__2vfvk",positive:"Stat_positive__29tcw",label:"Stat_label__2epLl",value:"Stat_value__3iu60"}}},[[32,1,2]]]);
//# sourceMappingURL=main.da9429af.chunk.js.map