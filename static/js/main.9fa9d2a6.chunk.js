(this.webpackJsonppictures=this.webpackJsonppictures||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),s=a.n(r),i=a(17),c=a.n(i),o=a(8),u=a.n(o),l=a(18),p=a(3),h=a(4),m=a(6),j=a(5),b=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={vrednostNaState:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.invokeValueForInput(e.state.vrednostNaState)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"ui segment",children:Object(n.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(n.jsxs)("div",{className:"field",children:[Object(n.jsx)("label",{children:"Image Search"}),Object(n.jsx)("input",{type:"text",onChange:function(t){return e.setState({vrednostNaState:t.target.value})}})]})})})}}]),a}(s.a.Component),d=a(19),f=a.n(d),v=(a(44),function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10+1);n.setState({spans:t})},n.state={spans:0},n.imageRef=s.a.createRef(),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){return Object(n.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(n.jsx)("img",{ref:this.imageRef,alt:this.props.image.description,src:this.props.image.urls.regular})})}}]),a}(s.a.Component)),g=function(e){var t=e.images.map((function(e){return Object(n.jsx)(v,{image:e},e.id)}));return Object(n.jsx)("div",{className:"image-list",children:t})},O=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={imagesArray:[]},e.onSearchSubmit=function(){var t=Object(l.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://api.unsplash.com/search/photos",{params:{query:{vrednostNaState:a}},headers:{Authorization:"Client-ID 2O8ahvOx3hpYC1eKrkLGHfqCIDCFtHvMwCb3TLXIeHs"}});case 2:n=t.sent,e.setState({imagesArray:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(n.jsx)(b,{invokeValueForInput:this.onSearchSubmit}),"Found : ",this.state.imagesArray.length," images.",Object(n.jsx)(g,{images:this.state.imagesArray})]})}}]),a}(s.a.Component);c.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.9fa9d2a6.chunk.js.map