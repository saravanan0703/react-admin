(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[14,36],{1261:function(e,t,a){"use strict";a.r(t);a(0);var n=a(1);t.default=function(e){var t=e.name,a=e.desc;return Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsxs)("span",{className:"font-weight-bold text-dark",children:[t,":"]}),Object(n.jsxs)("span",{className:"text-gray-light",children:[" ",a]})]})}},1263:function(e,t,a){"use strict";var n=a(5),c=a(3),r=a(0),s=a(6),l=a.n(s),o=a(45),i=a(62),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},b=function(e){var t=e.prefixCls,a=e.className,s=e.hoverable,o=void 0===s||s,b=d(e,["prefixCls","className","hoverable"]);return r.createElement(i.a,null,(function(e){var s=(0,e.getPrefixCls)("card",t),i=l()("".concat(s,"-grid"),a,Object(n.a)({},"".concat(s,"-grid-hoverable"),o));return r.createElement("div",Object(c.a)({},b,{className:i}))}))},j=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},m=function(e){return r.createElement(i.a,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,s=e.className,o=e.avatar,i=e.title,d=e.description,b=j(e,["prefixCls","className","avatar","title","description"]),m=a("card",n),h=l()("".concat(m,"-meta"),s),u=o?r.createElement("div",{className:"".concat(m,"-meta-avatar")},o):null,p=i?r.createElement("div",{className:"".concat(m,"-meta-title")},i):null,O=d?r.createElement("div",{className:"".concat(m,"-meta-description")},d):null,x=p||O?r.createElement("div",{className:"".concat(m,"-meta-detail")},p,O):null;return r.createElement("div",Object(c.a)({},b,{className:h}),u,x)}))},h=a(1262),u=a(1174),p=a(1175),O=a(71),x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};var f=function(e){var t,a,s,d=r.useContext(i.b),j=d.getPrefixCls,m=d.direction,f=r.useContext(O.b),v=e.prefixCls,g=e.className,y=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,S=void 0===N?{}:N,w=e.title,F=e.loading,T=e.bordered,k=void 0===T||T,A=e.size,z=e.type,M=e.cover,P=e.actions,H=e.tabList,B=e.children,D=e.activeTabKey,L=e.defaultActiveTabKey,R=e.tabBarExtraContent,K=e.hoverable,I=e.tabProps,V=void 0===I?{}:I,W=x(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),q=j("card",v),J=0===S.padding||"0px"===S.padding?{padding:24}:void 0,X=r.createElement("div",{className:"".concat(q,"-loading-block")}),G=r.createElement("div",{className:"".concat(q,"-loading-content"),style:J},r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:22},X)),r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:8},X),r.createElement(p.a,{span:15},X)),r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:6},X),r.createElement(p.a,{span:18},X)),r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:13},X),r.createElement(p.a,{span:9},X)),r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:4},X),r.createElement(p.a,{span:3},X),r.createElement(p.a,{span:16},X))),Y=void 0!==D,Q=Object(c.a)(Object(c.a)({},V),(t={},Object(n.a)(t,Y?"activeKey":"defaultActiveKey",Y?D:L),Object(n.a)(t,"tabBarExtraContent",R),t)),U=H&&H.length?r.createElement(h.a,Object(c.a)({size:"large"},Q,{className:"".concat(q,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),H.map((function(e){return r.createElement(h.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(w||y||U)&&(s=r.createElement("div",{className:"".concat(q,"-head"),style:C},r.createElement("div",{className:"".concat(q,"-head-wrapper")},w&&r.createElement("div",{className:"".concat(q,"-head-title")},w),y&&r.createElement("div",{className:"".concat(q,"-extra")},y)),U));var Z=M?r.createElement("div",{className:"".concat(q,"-cover")},M):null,$=r.createElement("div",{className:"".concat(q,"-body"),style:S},F?G:B),_=P&&P.length?r.createElement("ul",{className:"".concat(q,"-actions")},function(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}(P)):null,ee=Object(o.a)(W,["onTabChange"]),te=A||f,ae=l()(q,(a={},Object(n.a)(a,"".concat(q,"-loading"),F),Object(n.a)(a,"".concat(q,"-bordered"),k),Object(n.a)(a,"".concat(q,"-hoverable"),K),Object(n.a)(a,"".concat(q,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===b&&(t=!0)})),t}()),Object(n.a)(a,"".concat(q,"-contain-tabs"),H&&H.length),Object(n.a)(a,"".concat(q,"-").concat(te),te),Object(n.a)(a,"".concat(q,"-type-").concat(z),!!z),Object(n.a)(a,"".concat(q,"-rtl"),"rtl"===m),a),g);return r.createElement("div",Object(c.a)({},ee,{className:ae}),s,Z,$,_)};f.Grid=b,f.Meta=m;t.a=f},1267:function(e,t,a){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}},1269:function(e,t,a){"use strict";var n=a(18),c=(a(0),a(1220)),r=a(1),s=function(e){return Object(r.jsx)(c.a,Object(n.a)(Object(n.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))};t.a=function(e){var t=e.name,a=e.suffix,n=e.subTitle,c=e.id,l=e.type,o=e.src,i=e.icon,d=e.size,b=e.shape,j=e.gap,m=e.text,h=e.onNameClick;return Object(r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[s({icon:i,src:o,type:l,size:d,shape:b,gap:j,text:m}),Object(r.jsxs)("div",{className:"ml-2",children:[Object(r.jsxs)("div",{children:[h?Object(r.jsx)("div",{onClick:function(){return h({name:t,subTitle:n,src:o,id:c})},className:"avatar-status-name clickable",children:t}):Object(r.jsx)("div",{className:"avatar-status-name",children:t}),Object(r.jsx)("span",{children:a})]}),Object(r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:n})]})]})}},1350:function(e,t,a){"use strict";var n=a(2),c=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"},s=a(9),l=function(e,t){return c.createElement(s.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:r}))};l.displayName="FolderOutlined";t.a=c.forwardRef(l)},1591:function(e,t,a){"use strict";a.r(t);a(0);var n=a(1269),c=a(1261),r=a(1248),s=a(1267),l=a(1263),o=a(1350),i=a(1),d=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)(n.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",name:"Terrance Moreno",subTitle:"Software Engineer"})}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)(n.a,{icon:Object(i.jsx)(o.a,{}),name:"Terrance Moreno",type:"cyan",subTitle:"Software Engineer"})}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)(n.a,{text:"TM",type:"blue",name:"Terrance Moreno",subTitle:"Software Engineer"})}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)(n.a,{src:"http://enlink.themenate.net/assets/images/avatars/thumb-3.jpg",name:"Name Clickable",subTitle:"Software Engineer",id:1,onNameClick:function(e){return t=e,void console.log(t);var t}})})]})};t.default=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"AvatarStatus"}),Object(i.jsxs)("div",{className:"mt-4",children:[Object(i.jsx)(c.default,{name:"Location",desc:"src/components/shared-components/AvatarStatus.js"}),Object(i.jsx)(c.default,{name:"Description",desc:"AvatarStatus allow you to add additional info on top of Avatar component"})]}),Object(i.jsxs)("div",{className:"mt-4",children:[Object(i.jsxs)(l.a,{title:"Example",children:[Object(i.jsx)(d,{}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsx)(r.a,{className:"hl-code",language:"jsx",style:s.a,children:'import React from \'react\'\nimport AvatarStatus from \'components/shared-components/AvatarStatus\'\nimport { FolderOutlined } from \'@ant-design/icons\';\n\nexport default const Demo = () =>  (\n\t<>\n\t\t<div className="mb-3">\n\t\t\t<AvatarStatus \n\t\t\t\tsrc="http://enlink.themenate.net/assets/images/avatars/thumb-3.jpg" \n\t\t\t\tname="Terrance Moreno"\n\t\t\t\tsubTitle="Software Engineer"\n\t\t\t/>\n\t\t</div>\n\t\t<div className="mb-3">\n\t\t\t<AvatarStatus \n\t\t\t\ticon={<FolderOutlined />}\n\t\t\t\tname="Terrance Moreno"\n\t\t\t\ttype="cyan"\n\t\t\t\tsubTitle="Software Engineer"\n\t\t\t/>\n\t\t</div>\n\t\t<div className="mb-3">\n\t\t\t<AvatarStatus \n\t\t\t\ttext="TM"\n\t\t\t\ttype="blue"\n\t\t\t\tname="Terrance Moreno"\n\t\t\t\tsubTitle="Software Engineer"\n\t\t\t/>\n\t\t</div>\n\t</>\n)'})})]}),Object(i.jsx)("h4",{className:"mt-4",children:"Props"}),Object(i.jsx)("div",{className:"api-container border-0 p-0",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Property"}),Object(i.jsx)("th",{children:"Description"}),Object(i.jsx)("th",{children:"Type"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"name"}),Object(i.jsx)("td",{children:"Main display title"}),Object(i.jsx)("td",{children:"string"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"subTitle"}),Object(i.jsx)("td",{children:"Sub display title"}),Object(i.jsx)("td",{children:"string"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"suffix"}),Object(i.jsx)("td",{children:"The suffix node of value"}),Object(i.jsx)("td",{children:"string | ReactNode"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"id"}),Object(i.jsx)("td",{children:"identifier for the avatar"}),Object(i.jsx)("td",{children:"string | number"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"type"}),Object(i.jsx)("td",{children:"Color of the avatar"}),Object(i.jsx)("td",{children:"string"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"src"}),Object(i.jsx)("td",{children:"The address of the image for an image avatar"}),Object(i.jsx)("td",{children:"string"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"icon"}),Object(i.jsx)("td",{children:"Custom icon type for an icon avatar"}),Object(i.jsx)("td",{children:"ReactNode"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"size"}),Object(i.jsx)("td",{children:"The size of the avatar"}),Object(i.jsx)("td",{children:"number | large | small | default"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"shape"}),Object(i.jsx)("td",{children:"The shape of avatar"}),Object(i.jsx)("td",{children:"circle | square"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"gap"}),Object(i.jsx)("td",{children:"Letter type unit distance between left and right sides"}),Object(i.jsx)("td",{children:"number"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"text"}),Object(i.jsx)("td",{children:"Letter in Avatar"}),Object(i.jsx)("td",{children:"string | ReactNode"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"onNameClick"}),Object(i.jsx)("td",{children:"Handler click on name"}),Object(i.jsxs)("td",{children:["() => ","{"," name, subTitle, src, id ","}"]})]})]})]})})]})]})}}}]);
//# sourceMappingURL=14.14852edc.chunk.js.map