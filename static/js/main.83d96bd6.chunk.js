(window.webpackJsonppostwall=window.webpackJsonppostwall||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),l=n.n(r),c=(n(26),n(4)),i=n(5),s=n(8),u=n(6),p=n(9),h=n(18),m=n.n(h),d=(n(27),n(7)),b=(n(17),n(1)),f=n.n(b),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"componentWillReceiveProps",value:function(e){e.newPost&&this.props.posts.unshift(e.newPost)}},{key:"render",value:function(){return o.a.createElement("div",{className:"postwall"},o.a.createElement("h1",{style:{color:"white"}},"POST"),this.props.posts.map((function(e){return o.a.createElement("div",{key:e.id,style:{paddingTop:"20px",textAlign:"left",margin:"auto",width:"80%"}},o.a.createElement("ul",null,o.a.createElement("li",{style:{listStyle:"none"}},o.a.createElement("h3",null,e.title),o.a.createElement("p",{style:{width:"70%",padding:"10px 0 10px 10px"}},e.body+"."))),o.a.createElement("hr",null))})))}}]),t}(o.a.Component);y.props={fetchPosts:f.a.func.isRequired,posts:f.a.array.isRequired,newPost:f.a.object};var O=Object(d.b)((function(e){return{posts:e.post.items,newPost:e.post.item}}),{fetchPosts:function(){return function(e){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_POST",payload:t})}))}}})(y),j=n(12),v=n(10),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={title:"",body:""},n.handleOnChange=n.handleOnChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleOnChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("from component PostForm "+this.state.title+"\n"+this.state.body);var t={title:this.state.title,body:this.state.body};this.props.createPost(t),this.setState({title:"",body:""})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"label"},o.a.createElement("h3",null,"Title")),o.a.createElement("div",{className:"input"},o.a.createElement("input",{name:"title",onChange:this.handleOnChange,value:this.state.title})),o.a.createElement("br",null),o.a.createElement("div",{className:"label"},o.a.createElement("h3",null,"Body")),o.a.createElement("div",{className:"textarea"},o.a.createElement("textarea",{name:"body",onChange:this.handleOnChange,value:this.state.body}),o.a.createElement("br",null)),o.a.createElement("button",{type:"submit"},o.a.createElement("b",null,"Post")),o.a.createElement("br",null)))}}]),t}(o.a.Component),g=Object(d.b)(null,{createPost:function(e){return function(t){console.log("from Reducer"),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:"NEW_POST",payload:e})}))}}})(E),w=n(3),P=n(20);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={items:[],item:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POST":return k({},e,{items:t.payload});case"NEW_POST":return k({},e,{item:t.payload});default:return e}},N=Object(w.c)({post:T}),x=[P.a],D=Object(w.d)(N,{},w.a.apply(void 0,x)),R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{store:D},o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("h2",null,"The React Redux App")),o.a.createElement(g,null),o.a.createElement(O,null)))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.83d96bd6.chunk.js.map