(this["webpackJsonpfield-editor-plant-full-latin-name"]=this["webpackJsonpfield-editor-plant-full-latin-name"]||[]).push([[0],{30:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(3),c=n(8),i=(n(27),n(28),n(29),n(30),n(9)),o=n.n(i),s=n(12),u=n(16),l=n(17),f=n(22),p=n(21),d=n(2),j=n(5),O=n(4),b=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).onConfigure=Object(s.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.props.sdk.app.getCurrentState();case 2:return e=t.sent,t.abrupt("return",{parameters:a.state.parameters,targetState:e});case 4:case"end":return t.stop()}}),t)}))),a.state={parameters:{}},t.sdk.app.onConfigure((function(){return a.onConfigure()})),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=Object(s.a)(o.a.mark((function t(){var e,n=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.sdk.app.getParameters();case 2:e=t.sent,this.setState(e?{parameters:e}:this.state,(function(){n.props.sdk.app.setReady()}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)(d.j,{className:Object(j.a)({margin:"80px"}),children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(d.b,{children:"Field Editor: Plant Full Latin Name"}),Object(O.jsx)(d.f,{children:"No additional configuration required :)"})]})})}}]),n}(a.Component),h=n(20),m=function(t){var e=t.sdk,n=e.field,r=e.entry.fields.genus,c=e.entry.fields.species,i=e.entry.fields.varietyCultivar,o=function(){var t=r.getValue(),e=c.getValue(),a=i.getValue();if(t&&e){var o="".concat(t," ").concat(e).concat(a?" '".concat(a,"'"):"");n.getValue()!==o&&n.setValue(o)}else n.setValue("")};return Object(a.useEffect)((function(){return r.onValueChanged((function(){o()}))})),Object(a.useEffect)((function(){return c.onValueChanged((function(){o()}))})),Object(a.useEffect)((function(){return i.onValueChanged((function(){o()}))})),Object(O.jsx)(h.a,{baseSdk:e,field:n,isInitiallyDisabled:!0})};Object(c.init)((function(t){var e=document.getElementById("root");[{location:c.locations.LOCATION_APP_CONFIG,component:Object(O.jsx)(b,{sdk:t})},{location:c.locations.LOCATION_ENTRY_FIELD,component:Object(O.jsx)(m,{sdk:t})}].forEach((function(n){t.location.is(c.locations.LOCATION_ENTRY_FIELD)&&t.window.startAutoResizer(),t.location.is(n.location)&&Object(r.render)(n.component,e)}))}))}},[[34,1,2]]]);
//# sourceMappingURL=main.777b5518.chunk.js.map