(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),o=(n(12),n(2)),a=n(3),i=n(5),h=n(4),l=n(0),u=function(e){e.robots;throw new Error("Noooooooo")},b=function(e){e.searchField;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2 ba b--green bg-lightest-blue",children:Object(l.jsx)("input",{type:"search",placeholder:"search monsters",onChange:t})})},d=function(e){return Object(l.jsx)("div",{style:{overflow:"scrollY",border:"5px solid black",height:"500px"},children:e.children})},j=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"OOOpppppsss, bad luck"}):this.props.children}}]),n}(r.Component),p=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(l.jsx)("h1",{children:"Loading"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"MonsterFriends"}),Object(l.jsx)(b,{searchChange:this.onSearchChange}),Object(l.jsx)(d,{children:Object(l.jsx)(j,{children:Object(l.jsx)(u,{robots:r})})})]})}}]),n}(r.Component));n(15);s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"));t.default=p}},[[16,1,2]]]);
//# sourceMappingURL=main.dea87d9f.chunk.js.map