(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[57],{1268:function(t,e,a){"use strict";var c=a(2),s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},r=a(9),i=function(t,e){return s.createElement(r.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:n}))};i.displayName="DeleteOutlined";e.a=s.forwardRef(i)},1269:function(t,e,a){"use strict";var c=a(18),s=(a(0),a(1220)),n=a(1),r=function(t){return Object(n.jsx)(s.a,Object(c.a)(Object(c.a)({},t),{},{className:"ant-avatar-".concat(t.type),children:t.text}))};e.a=function(t){var e=t.name,a=t.suffix,c=t.subTitle,s=t.id,i=t.type,o=t.src,m=t.icon,l=t.size,d=t.shape,u=t.gap,h=t.text,p=t.onNameClick;return Object(n.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[r({icon:m,src:o,type:i,size:l,shape:d,gap:u,text:h}),Object(n.jsxs)("div",{className:"ml-2",children:[Object(n.jsxs)("div",{children:[p?Object(n.jsx)("div",{onClick:function(){return p({name:e,subTitle:c,src:o,id:s})},className:"avatar-status-name clickable",children:e}):Object(n.jsx)("div",{className:"avatar-status-name",children:e}),Object(n.jsx)("span",{children:a})]}),Object(n.jsx)("div",{className:"text-muted avatar-status-subtitle",children:c})]})]})}},1283:function(t,e,a){"use strict";var c=a(3),s=a(5),n=a(0),r=a(6),i=a.n(r),o=a(62),m=function(t,e){var a={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(a[c]=t[c]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(c=Object.getOwnPropertySymbols(t);s<c.length;s++)e.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(t,c[s])&&(a[c[s]]=t[c[s]])}return a};e.a=function(t){return n.createElement(o.a,null,(function(e){var a,r=e.getPrefixCls,o=e.direction,l=t.prefixCls,d=t.type,u=void 0===d?"horizontal":d,h=t.orientation,p=void 0===h?"center":h,j=t.className,f=t.children,b=t.dashed,v=t.plain,g=m(t,["prefixCls","type","orientation","className","children","dashed","plain"]),x=r("divider",l),O=p.length>0?"-".concat(p):p,y=!!f,T=i()(x,"".concat(x,"-").concat(u),(a={},Object(s.a)(a,"".concat(x,"-with-text"),y),Object(s.a)(a,"".concat(x,"-with-text").concat(O),y),Object(s.a)(a,"".concat(x,"-dashed"),!!b),Object(s.a)(a,"".concat(x,"-plain"),!!v),Object(s.a)(a,"".concat(x,"-rtl"),"rtl"===o),a),j);return n.createElement("div",Object(c.a)({className:T},g,{role:"separator"}),f&&n.createElement("span",{className:"".concat(x,"-inner-text")},f))}))}},1288:function(t,e,a){"use strict";var c=a(2),s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"}}]},name:"paper-clip",theme:"outlined"},r=a(9),i=function(t,e){return s.createElement(r.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:n}))};i.displayName="PaperClipOutlined";e.a=s.forwardRef(i)},1291:function(t,e,a){"use strict";a(0);var c=a(1177),s=a(233),n=a(187),r=a(1),i=function(t){return Object(r.jsx)(c.a,{overlay:t.menu,placement:t.placement,trigger:["click"],children:Object(r.jsx)("div",{className:"ellipsis-dropdown",children:Object(r.jsx)(n.a,{})})})};i.defaultProps={trigger:"click",placement:"bottomRight",menu:Object(r.jsx)(s.a,{})},e.a=i},1309:function(t,e,a){"use strict";var c=a(2),s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},r=a(9),i=function(t,e){return s.createElement(r.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:n}))};i.displayName="UserOutlined";e.a=s.forwardRef(i)},1310:function(t,e,a){"use strict";var c=a(2),s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},r=a(9),i=function(t,e){return s.createElement(r.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:n}))};i.displayName="SmileOutlined";e.a=s.forwardRef(i)},1313:function(t,e,a){"use strict";var c=a(18),s=a(54),n=a(0),r=a(194),i=a(1246),o=a(73),m=a(1349),l=a(1),d=r.a.useBreakpoint,u=function(t){var e=t.sideContent,a=t.sideContentWidth,c=void 0===a?250:a,s=t.border;return Object(l.jsx)("div",{className:"side-content ".concat(s?"with-border":""),style:{width:"".concat(c,"px")},children:e})},h=function(t){var e=t.sideContent,a=t.visible,c=t.onSideContentClose;return Object(l.jsx)(i.a,{width:320,placement:"left",closable:!1,onClose:c,visible:a,bodyStyle:{paddingLeft:0,paddingRight:0},children:Object(l.jsx)("div",{className:"h-100",children:e})})};e.a=function(t){var e=t.mainContent,a=t.pageHeader,r=t.sideContentGutter,i=void 0===r||r,p=!o.a.getBreakPoint(d()).includes("lg"),j=Object(n.useState)(!1),f=Object(s.a)(j,2),b=f[0],v=f[1];return Object(l.jsxs)("div",{className:"inner-app-layout",children:[p?Object(l.jsx)(h,Object(c.a)({visible:b,onSideContentClose:function(t){v(!1)}},t)):Object(l.jsx)(u,Object(c.a)({},t)),Object(l.jsxs)("div",{className:"main-content ".concat(a?"has-page-header":""," ").concat(i?"gutter":"no-gutter"),children:[p?Object(l.jsx)("div",{className:"font-size-lg mb-3 ".concat(i?"":"pt-3 px-3"),children:Object(l.jsx)(m.a,{onClick:function(){v(!0)}})}):null,e]})]})}},1348:function(t,e,a){"use strict";var c=a(2),s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"}}]},name:"file",theme:"outlined"},r=a(9),i=function(t,e){return s.createElement(r.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:n}))};i.displayName="FileOutlined";e.a=s.forwardRef(i)},1349:function(t,e,a){"use strict";var c=a(2),s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},r=a(9),i=function(t,e){return s.createElement(r.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:n}))};i.displayName="MenuOutlined";e.a=s.forwardRef(i)},1509:function(t,e,a){"use strict";var c=a(2),s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M682 455V311l-76 76v68c-.1 50.7-42 92.1-94 92a95.8 95.8 0 01-52-15l-54 55c29.1 22.4 65.9 36 106 36 93.8 0 170-75.1 170-168z"}},{tag:"path",attrs:{d:"M833 446h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254-63 0-120.7-23-165-61l-54 54a334.01 334.01 0 00179 81v102H326c-13.9 0-24.9 14.3-25 32v36c.1 4.4 2.9 8 6 8h408c3.2 0 6-3.6 6-8v-36c0-17.7-11-32-25-32H547V782c165.3-17.9 294-157.9 294-328 0-4.4-3.6-8-8-8zm13.1-377.7l-43.5-41.9a8 8 0 00-11.2.1l-129 129C634.3 101.2 577 64 511 64c-93.9 0-170 75.3-170 168v224c0 6.7.4 13.3 1.2 19.8l-68 68A252.33 252.33 0 01258 454c-.2-4.4-3.8-8-8-8h-60c-4.4 0-8 3.6-8 8 0 53 12.5 103 34.6 147.4l-137 137a8.03 8.03 0 000 11.3l42.7 42.7c3.1 3.1 8.2 3.1 11.3 0L846.2 79.8l.1-.1c3.1-3.2 3-8.3-.2-11.4zM417 401V232c0-50.6 41.9-92 94-92 46 0 84.1 32.3 92.3 74.7L417 401z"}}]},name:"audio-muted",theme:"outlined"},r=a(9),i=function(t,e){return s.createElement(r.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:n}))};i.displayName="AudioMutedOutlined";e.a=s.forwardRef(i)},1510:function(t,e,a){"use strict";var c=a(2),s=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},r=a(9),i=function(t,e){return s.createElement(r.a,Object(c.a)(Object(c.a)({},t),{},{ref:e,icon:n}))};i.displayName="SendOutlined";e.a=s.forwardRef(i)},1549:function(t){t.exports=JSON.parse('[{"id":1,"name":"Eileen Horton","avatar":"/img/avatars/thumb-1.jpg","unread":3,"time":"4:16PM","msg":[{"avatar":"/img/avatars/thumb-1.jpg","text":"Hey, Bro...","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Hey","from":"me","time":"","msgType":"text"},{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-1.jpg","text":"Did you check out our latest product?","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-1.jpg","text":"Its awesome!","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-1.jpg","text":"You would probably love it","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Wow, that was cool!","from":"me","time":"","msgType":"text"}]},{"id":2,"name":"Terrance Moreno","avatar":"/img/avatars/thumb-2.jpg","time":"18/04/2020","unread":2,"msg":[{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-2.jpg","text":"Hello Jason ","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Hello, how are you ","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-2.jpg","text":"Remember our previous discussion?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Yeah, sure!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-2.jpg","text":"This is the finalize version.","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Application-United.pdf","from":"opposite","time":"","msgType":"file"},{"avatar":"","text":"Okay! Thank you","from":"me","time":"","msgType":"text"}]},{"id":3,"name":"Ron Vargas","avatar":"/img/avatars/thumb-3.jpg","time":"17/04/2020","unread":5,"msg":[{"avatar":"","text":"","from":"","time":"7:57PM","msgType":"date"},{"avatar":"/img/avatars/thumb-3.jpg","text":"Your great aunt just passed away. LOL","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Why is that funny?","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-3.jpg","text":"Its not funny at all","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Why do you think funny?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"LOL mean laughing out loud","from":"me","time":"","msgType":"text"},{"avatar":"","text":"","from":"","time":"7:59PM","msgType":"date"},{"avatar":"/img/avatars/thumb-3.jpg","text":"OMG! I send that to everyone","from":"opposite","time":"","msgType":"text"}]},{"id":4,"name":"Luke Cook","avatar":"/img/avatars/thumb-4.jpg","time":"14/04/2020","unread":0,"msg":[{"avatar":"","text":"","from":"","time":"8:08PM","msgType":"date"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Dude are you ready to party?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Umm who are you","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Oh sorry wrong chat","from":"opposite","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-4.jpg","text":"Bye","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"...but I wan to party","from":"me","time":"","msgType":"text"}]},{"id":5,"name":"Tara Fletcher","avatar":"/img/avatars/thumb-7.jpg","time":"21/03/2020","unread":0,"msg":[{"avatar":"/img/avatars/thumb-7.jpg","text":"Oh yeah? well I enjoy a nice steak. how about you?","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"We\u2019 d have steak and ice cream three times every day!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"I eat all the steak and chicken too, even bacon","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"That was great!","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"yeah you said that already","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"Dynamic structure can absorb shock.","from":"me","time":"","msgType":"text"},{"avatar":"/img/avatars/thumb-7.jpg","text":"yes it can. I know about that as a bodybuilder","from":"opposite","time":"","msgType":"text"},{"avatar":"","text":"The strongest man in the world is blowing up a hot water bottle.","from":"me","time":"","msgType":"text"}]}]')},3386:function(t,e,a){"use strict";a.r(e);var c=a(18),s=a(0),n=a.n(s),r=a(1313),i=a(53),o=a(288),m=a(26),l=a(27),d=a(32),u=a(33),h=a(1549),p=a(233),j=a(1220),f=a(1283),b=a(3424),v=a(1181),g=a(143),x=a(1309),O=a(1509),y=a(1268),T=a(1348),C=a(1310),w=a(1288),N=a(1510),k=a(184),M=a(158),z=a(1291),S=a(1),H=function(){return Object(S.jsxs)(p.a,{children:[Object(S.jsxs)(p.a.Item,{children:[Object(S.jsx)(x.a,{}),Object(S.jsx)("span",{children:"User Info"})]},"0"),Object(S.jsxs)(p.a.Item,{children:[Object(S.jsx)(O.a,{}),Object(S.jsx)("span",{children:"Mute Chat"})]},"1"),Object(S.jsx)(p.a.Divider,{}),Object(S.jsxs)(p.a.Item,{children:[Object(S.jsx)(y.a,{}),Object(S.jsx)("span",{children:"Delete Chat"})]},"3")]})},I=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(m.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).formRef=n.a.createRef(),t.chatBodyRef=n.a.createRef(),t.state={info:{},msgList:[]},t.getConversation=function(e){var a=h.filter((function(t){return t.id===e}));t.setState({info:a[0],msgList:a[0].msg})},t.getMsgType=function(t){switch(t.msgType){case"text":return Object(S.jsx)("span",{children:t.text});case"image":return Object(S.jsx)("img",{src:t.text,alt:t.text});case"file":return Object(S.jsxs)(M.a,{alignItems:"center",className:"msg-file",children:[Object(S.jsx)(T.a,{className:"font-size-md"}),Object(S.jsx)("span",{className:"ml-2 font-weight-semibold text-link pointer",children:Object(S.jsx)("u",{children:t.text})})]});default:return null}},t.scrollToBottom=function(){t.chatBodyRef.current.scrollToBottom()},t.onSend=function(e){if(e.newMsg){var a={avatar:"",from:"me",msgType:"text",text:e.newMsg,time:""};t.formRef.current.setFieldsValue({newMsg:""}),t.setState({msgList:[].concat(Object(o.a)(t.state.msgList),[a])})}},t.emptyClick=function(t){t.preventDefault()},t.chatContentHeader=function(t){return Object(S.jsxs)("div",{className:"chat-content-header",children:[Object(S.jsx)("h4",{className:"mb-0",children:t}),Object(S.jsx)("div",{children:Object(S.jsx)(z.a,{menu:H})})]})},t.chatContentBody=function(e,a){return Object(S.jsx)("div",{className:"chat-content-body",children:Object(S.jsx)(k.Scrollbars,{ref:t.chatBodyRef,autoHide:!0,children:e.map((function(e,c){return Object(S.jsxs)("div",{className:"msg ".concat("date"===e.msgType?"datetime":""," ").concat("opposite"===e.from?"msg-recipient":"me"===e.from?"msg-sent":""),children:[e.avatar?Object(S.jsx)("div",{className:"mr-2",children:Object(S.jsx)(j.a,{src:e.avatar})}):null,e.text?Object(S.jsx)("div",{className:"bubble ".concat(e.avatar?"":"ml-5"),children:Object(S.jsx)("div",{className:"bubble-wrapper",children:t.getMsgType(e)})}):null,"date"===e.msgType?Object(S.jsx)(f.a,{children:e.time}):null]},"msg-".concat(a,"-").concat(c))}))})})},t.chatContentFooter=function(){return Object(S.jsx)("div",{className:"chat-content-footer",children:Object(S.jsx)(b.a,{name:"msgInput",ref:t.formRef,onFinish:t.onSend,className:"w-100",children:Object(S.jsx)(b.a.Item,{name:"newMsg",className:"mb-0",children:Object(S.jsx)(v.a,{autoComplete:"off",placeholder:"Type a message...",suffix:Object(S.jsxs)("div",{className:"d-flex align-items-center",children:[Object(S.jsx)("a",{href:"/#",className:"text-dark font-size-lg mr-3",onClick:t.emptyClick,children:Object(S.jsx)(C.a,{})}),Object(S.jsx)("a",{href:"/#",className:"text-dark font-size-lg mr-3",onClick:t.emptyClick,children:Object(S.jsx)(w.a,{})}),Object(S.jsx)(g.a,{shape:"circle",type:"primary",size:"small",onClick:t.onSend,htmlType:"submit",children:Object(S.jsx)(N.a,{})})]})})})})})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getConversation(this.getUserId())}},{key:"componentDidUpdate",value:function(t){this.props.location.pathname!==t.location.pathname&&this.getConversation(this.getUserId()),this.scrollToBottom()}},{key:"getUserId",value:function(){var t=this.props.match.params.id;return parseInt(parseInt(t))}},{key:"render",value:function(){var t=this.props.match.params.id,e=this.state,a=e.info,c=e.msgList;return Object(S.jsxs)("div",{className:"chat-content",children:[this.chatContentHeader(a.name),this.chatContentBody(c,t),this.chatContentFooter()]})}}]),a}(n.a.Component),L=I,B=function(){return Object(S.jsx)("div",{className:"chat-content-empty",children:Object(S.jsxs)("div",{className:"text-center",children:[Object(S.jsx)("img",{src:"/img/others/img-11.png",alt:"Start a Conversation"}),Object(S.jsx)("h1",{className:"font-weight-light",children:"Start a conversation"})]})})},R=function(t){var e=t.match;return Object(S.jsxs)(i.d,{children:[Object(S.jsx)(i.b,{path:"".concat(e.url,"/:id"),component:L}),Object(S.jsx)(i.b,{path:"".concat(e.url),component:B})]})},E=a(54),P=a(1247),A=a(1269),D=a(17),U=a(181),V=function(t){var e=t.match,a=t.location,c=Object(s.useState)(h),n=Object(E.a)(c,2),r=n[0],o=n[1],m=Object(i.g)(),l=parseInt(a.pathname.match(/\/([^/]+)\/?$/)[1]);return Object(S.jsxs)("div",{className:"chat-menu",children:[Object(S.jsx)("div",{className:"chat-menu-toolbar",children:Object(S.jsx)(v.a,{placeholder:"Search",onChange:function(t){var e=t.target.value,a=h.filter((function(t){return""===e?t:t.name.toLowerCase().includes(e)}));o(a)},prefix:Object(S.jsx)(U.a,{className:"font-size-lg mr-2"})})}),Object(S.jsx)("div",{className:"chat-menu-list",children:r.map((function(t,a){return Object(S.jsxs)("div",{onClick:function(){return function(t){var a=r.map((function(e){return e.id===t&&(e.unread=0),e}));o(a),m.push("".concat(e.url,"/").concat(t))}(t.id)},className:"chat-menu-list-item ".concat(a===r.length-1?"last":""," ").concat(t.id===l?"selected":""),children:[Object(S.jsx)(A.a,{src:t.avatar,name:t.name,subTitle:t.msg[t.msg.length-1].text}),Object(S.jsxs)("div",{className:"text-right",children:[Object(S.jsx)("div",{className:"chat-menu-list-item-time",children:t.time}),0===t.unread?Object(S.jsx)("span",{}):Object(S.jsx)(P.a,{count:t.unread,style:{backgroundColor:D.c}})]})]},"chat-item-".concat(t.id))}))})]})};e.default=function(t){return Object(S.jsx)("div",{className:"chat",children:Object(S.jsx)(r.a,{sideContent:Object(S.jsx)(V,Object(c.a)({},t)),mainContent:Object(S.jsx)(R,Object(c.a)({},t)),sideContentWidth:450,sideContentGutter:!1,border:!0})})}}}]);
//# sourceMappingURL=57.418fa80a.chunk.js.map