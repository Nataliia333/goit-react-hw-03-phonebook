(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={Container:"Container_Container__I6ebe"}},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(10),c=n.n(o),i=(n(17),n(12)),s=n(2),u=n(3),l=n(6),h=n(5),d=n(4),m=n(21),b=n(8),j=n.n(b),f=n(0),C={name:"",phone:""},p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={INIITAL_STATE:C},t.handleChangeForm=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.phone,o=t.props.onAdd;t.validateForm()&&(o({id:Object(m.a)(),name:a,phone:r}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.phone,r=t.props.onCheckUnique;return n&&a?r(n):(alert("Some filed is empty"),!1)},t.resetForm=function(){return t.setState(C)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(f.jsxs)("form",{className:j.a.ContactForm,onSubmit:this.handleFormSubmit,children:[Object(f.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm}),Object(f.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm}),Object(f.jsx)("button",{className:j.a.ContactButton,type:"submit",children:"AddContact"})]})}}]),n}(a.Component),v=n(9),O=function(t){var e=t.id,n=t.name,a=t.phone,r=t.onRemove;return Object(f.jsxs)("li",{children:[n,": ",a," ",Object(f.jsx)("button",{onClick:function(){return r(e)},children:"Delete"})]})},x=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsx)(O,Object(v.a)(Object(v.a)({},t),{},{onRemove:n}))}))})},g=function(t){var e=t.filter,n=t.onChange;return Object(f.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Enter name for Search"})},F=n(11),S=n.n(F),y=function(t){var e=t.children;return Object(f.jsx)("div",{className:S.a.Container,children:e})},k=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}}))},t.handleCheckUnique=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Conract is already exist"),!n},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsxs)(y,{children:[Object(f.jsx)("h2",{children:"Form Contact"}),Object(f.jsx)(p,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUnique}),Object(f.jsx)("h2",{children:"Contacts List"}),Object(f.jsx)(g,{filter:t,onChange:this.handleFilterChange}),Object(f.jsx)(x,{contacts:e,onRemove:this.handleRemoveContact})]})}}]),n}(a.Component);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__2ZSub",ContactButton:"ContactForm_ContactButton__3hF6N"}}},[[19,1,2]]]);
//# sourceMappingURL=main.a910e2b6.chunk.js.map