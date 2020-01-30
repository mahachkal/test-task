(this["webpackJsonp1test-task"]=this["webpackJsonp1test-task"]||[]).push([[0],{31:function(e,t,a){e.exports=a(46)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"addToken",(function(){return b})),a.d(n,"deleteToken",(function(){return E})),a.d(n,"addTasks",(function(){return f})),a.d(n,"addId",(function(){return k}));var r=a(0),o=a.n(r),s=a(18),i=a(21),c=a(20),l=a(5),u=a(16),d=a(8),h=a(9),m=a(12),p=a(10),g=a(11),v=a(15),f=function(e){return{type:"ADD_TASKS",tasks:e}},b=function(e){return{type:"ADD_TOKEN",token:e}},E=function(e){return{type:"DELETE_TOKEN",token:e}},k=function(e){return{type:"ADD_ID",id:e}},y=a(29),O=a.n(y),S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={page:1,sort_field:"id",sort_direction:"asc",task:a.props.task,tasks:a.props.tasks},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(e,t,a){var n=this,r=this.state,o=r.page,s=r.sort_field,i=r.sort_direction,c="&sort_field=".concat(t||s),l="&sort_direction=".concat(a||i),u="&page=".concat(e||o),d="https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=VladimirOleynik".concat(c).concat(l).concat(u);fetch(d,{method:"GET",mode:"cors",cache:"no-cache",referrer:""}).then((function(e){return e.json()})).then((function(e){n.props.addTasks(e.message.tasks),n.setState({total_task_count:e.message.total_task_count,tasks:e.message.tasks})}),(function(e){alert(e)}))}},{key:"handlePageChange",value:function(e){this.setState({page:e.selected+1}),this.fetchTasks(e.selected+1)}},{key:"onChangeSort_field",value:function(e){this.setState({sort_field:e.target.value}),this.fetchTasks("",e.target.value)}},{key:"onChangeSort_direction",value:function(e){this.setState({sort_direction:e.target.value}),this.fetchTasks("","",e.target.value)}},{key:"render",value:function(){var e=this,t=this.state,a=t.tasks,n=t.total_task_count,r=t.page,s=this.props.store.getState().token;return o.a.createElement("div",null,o.a.createElement("div",{className:"data-item"},o.a.createElement("h3",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0417\u0430\u0434\u0430\u0447"),o.a.createElement(l.b,{to:"/create"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),o.a.createElement("form",{name:"sort"},o.a.createElement("select",{onChange:function(t){return e.onChangeSort_field(t)},name:"sort_field"},o.a.createElement("option",{value:"id"},"id"),o.a.createElement("option",{value:"username"},"username"),o.a.createElement("option",{value:"email"},"email"),o.a.createElement("option",{value:"status"},"status")),o.a.createElement("select",{onChange:function(t){return e.onChangeSort_direction(t)},name:"sort_direction"},o.a.createElement("option",{value:"asc"},"\u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044f\u044e"),o.a.createElement("option",{value:"desc"},"\u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"))),o.a.createElement("div",{style:{width:"50%"}},a&&a.map((function(t){return o.a.createElement("div",{key:t.id,className:"tasks-item"},o.a.createElement("div",null,t.username),o.a.createElement("div",null,t.email),o.a.createElement("div",{className:"text-item"},t.text),10===t.status?o.a.createElement("div",null,"Done"):o.a.createElement("div",null,"To do"),s&&o.a.createElement(l.b,{to:"/edit/".concat(t.id)},"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"),e.props.id==t.id&&o.a.createElement("div",null,"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c"))})))),o.a.createElement(O.a,{pageCount:Math.ceil(n/3),pageRangeDisplayed:2,marginPagesDisplayed:1,initialPage:r-1,onPageChange:function(t){return e.handlePageChange(t)},activeClassName:"active-page",containerClassName:"Paginaton",disabledClassName:"prev-next"}))}}]),t}(o.a.Component),C=a(3),j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={reqBody:new FormData},a.onChangeUsername=a.onChangeUsername.bind(Object(C.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(C.a)(a)),a.onChangeText=a.onChangeText.bind(Object(C.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(C.a)(a)),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(){this.state.reqBody.get("username")&&this.state.reqBody.get("email")&&this.state.reqBody.get("text")?fetch("https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=VladimirOleynik",{method:"POST",mode:"cors",cache:"no-cache",referrer:"",body:this.state.reqBody}).then((function(e){return e.json()})).then((function(e){e&&"ok"===e.status?(alert("\u0417\u0430\u0434\u0430\u0447\u0430 c\u043e\u0437\u0434\u0430\u043d\u0430"),window.location.href="/test-task"):alert(JSON.stringify(e.message))})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"+e)})):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")}},{key:"onChangeUsername",value:function(e){var t=this.state.reqBody;t.set("username",e.target.value),this.setState({reqBody:t})}},{key:"onChangeEmail",value:function(e){var t=this.state.reqBody;t.set("email",e.target.value),this.setState({reqBody:t})}},{key:"onChangeText",value:function(e){var t=this.state.reqBody;t.set("text",e.target.value),this.setState({reqBody:t})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),o.a.createElement("form",{onSubmit:this.handleSubmit,name:"create"},o.a.createElement("label",null,"\u041b\u043e\u0433\u0438\u043d:"),o.a.createElement("input",{onChange:this.onChangeUsername}),o.a.createElement("label",null,"Email:"),o.a.createElement("input",{onChange:this.onChangeEmail}),o.a.createElement("label",null,"\u0422\u0435\u043a\u0441\u0442:"),o.a.createElement("input",{onChange:this.onChangeText}),o.a.createElement("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})),o.a.createElement(l.b,{to:"/"},"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0437\u0430\u0434\u0430\u0447"))}}]),t}(o.a.Component),T=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={reqBody:new FormData},a.onChangeUsername=a.onChangeUsername.bind(Object(C.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(C.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(C.a)(a)),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(){var e=this;this.state.reqBody.get("username")&&this.state.reqBody.get("password")?fetch("https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=VladimirOleynik",{method:"POST",mode:"cors",cache:"no-cache",referrer:"",body:this.state.reqBody}).then((function(e){return e.json()})).then((function(t){t&&"ok"===t.status?(e.props.addToken(t.message.token),window.location.href="/test-task"):alert(JSON.stringify(t.message))})).catch((function(e){return alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437")})):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")}},{key:"onChangeUsername",value:function(e){var t=this.state.reqBody;t.set("username",e.target.value),this.setState({reqBody:t})}},{key:"onChangePassword",value:function(e){var t=this.state.reqBody;t.set("password",e.target.value),this.setState({reqBody:t})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),o.a.createElement("form",{onSubmit:this.handleSubmit,name:"login"},o.a.createElement("label",null,"\u041b\u043e\u0433\u0438\u043d:"),o.a.createElement("input",{onChange:this.onChangeUsername}),o.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c:"),o.a.createElement("input",{onChange:this.onChangePassword}),o.a.createElement("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})),o.a.createElement(l.b,{to:"/"},"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0437\u0430\u0434\u0430\u0447"))}}]),t}(o.a.Component),w=function(e){function t(e){var a;Object(d.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={reqBody:new FormData};var n=a.props.tasks.find((function(e){var t=window.location.pathname.substr(6);return e.id==t}));return a.state.task=n,a.state.reqBody.set("status",n.status),a.onChangeStatus=a.onChangeStatus.bind(Object(C.a)(a)),a.onChangeText=a.onChangeText.bind(Object(C.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(C.a)(a)),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidUnmount",value:function(){this.props.deleteTask()}},{key:"handleSubmit",value:function(){var e=this.state.reqBody,t=window.localStorage.getItem("appState").token;e.set("token",t),fetch("https://uxcandy.com/~shapoval/test-task-backend/v2/edit/".concat(this.state.task.id,"?developer=VladimirOleynik"),{method:"POST",mode:"cors",cache:"no-cache",referrer:"",body:e}).then((function(e){return e.json()})).then((function(e){e&&"ok"===e.status?(alert("\u0417\u0430\u0434\u0430\u0447\u0430 \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430"),window.location.href="/test-task"):(alert(JSON.stringify(e.message)),window.location.href="/login")})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437")}))}},{key:"onChangeStatus",value:function(e){var t=this.state.reqBody;t.set("status",e.target.value),this.setState({reqBody:t})}},{key:"onChangeText",value:function(e){var t=this.state,a=t.reqBody,n=t.task;a.set("text",e.target.value),this.setState({reqBody:a}),this.props.addId(n.id)}},{key:"render",value:function(){var e=this.state,t=e.task,a=e.reqBody.get("text")||t.text;return o.a.createElement("div",null,o.a.createElement("h3",null,"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0417\u0430\u0434\u0430\u0447\u0443"),o.a.createElement("div",null,o.a.createElement("div",null,t.id),o.a.createElement("div",null,t.username),o.a.createElement("div",null,t.email)),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"\u0422\u0435\u043a\u0441\u0442:"),o.a.createElement("input",{type:"text",name:"text",onChange:this.onChangeText,value:a}),o.a.createElement("label",null,"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0434\u0430\u0447\u0438:"),0===t.status?o.a.createElement("select",{onChange:this.onChangeStatus},o.a.createElement("option",{value:"0"},"To do"),o.a.createElement("option",{value:"10"},"Done")):o.a.createElement("select",{onChange:this.onChangeStatus},o.a.createElement("option",{value:"0"},"To do"),o.a.createElement("option",{value:"10",selected:!0},"Done")),o.a.createElement("input",{type:"submit",value:"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})),o.a.createElement(l.b,{to:"/"},"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0437\u0430\u0434\u0430\u0447"))}}]),t}(o.a.Component),B=(a(44),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"handleOut",value:function(){this.props.deleteToken();var e=window.localStorage.getItem("appState");delete e.token,window.localStorage.setItem("appState",e)}},{key:"render",value:function(){var e=this,t=this.props.store.getState().token;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement("form",{onSubmit:function(){return e.handleOut()},name:"out"},o.a.createElement("input",{type:"submit",value:"\u0412\u044b\u0439\u0442\u0438"})):o.a.createElement(l.b,{to:"/login"},"\u0412\u043e\u0439\u0442\u0438"),o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/test-task",render:function(t){return o.a.createElement(S,e.props)}}),o.a.createElement(v.a,{exact:!0,path:"/create",render:function(t){return o.a.createElement(j,e.props)}}),o.a.createElement(v.a,{exact:!0,path:"/edit/:id",render:function(t){return o.a.createElement(w,e.props)}}),o.a.createElement(v.a,{exact:!0,path:"/login",render:function(t){return o.a.createElement(T,e.props)}})))}}]),t}(o.a.Component));var _=Object(i.b)((function(e){return{tasks:e.tasks,id:e.id}}),n)(B),q=(a(45),function(){try{var e=window.localStorage.getItem("appState");if(!e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}()),x=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASKS":return Object(u.a)({},e,{tasks:t.tasks});case"ADD_TOKEN":return Object(u.a)({},e,{token:t.token});case"DELETE_TOKEN":return e.token?(delete e.token,Object(u.a)({},e)):Object(u.a)({},e);case"ADD_ID":return Object(u.a)({},e,{id:t.id});default:return e}}),q);x.subscribe((function(){!function(e){try{var t=JSON.stringify(e);window.localStorage.setItem("appState",t)}catch(a){console.log(a)}}(x.getState())})),Object(s.render)(o.a.createElement(i.a,{store:x},o.a.createElement(l.a,null,o.a.createElement(_,{store:x}))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a863b4b1.chunk.js.map