(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{8681:function(n,e,t){"use strict";t.d(e,{L:function(){return c}});var r,i=t(168),a=t(5867).zo.div(r||(r=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    //justify-content: center;\n    flex-direction: column;\n    padding: 40px 40px 0 40px;\n    margin: 0 auto;\n    background-color: #85afe4c0;\n    height: 100vh;\n    width: -webkit-fill-available;\n\n    @media (min-width: 320px) {\n    min-width: 320px;\n    }\n\n    @media (min-width: 768px) {\n    min-width: 768px;\n    }\n\n    @media (min-width: 1200px) {\n    min-width: 1200px;\n    }\n    .title{\n        font-weight: 600;\n    color: black;\n    font-size: 35px;\n    letter-spacing: 1px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n    text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);\n    }\n"]))),o=t(184),c=function(n){var e=n.title,t=n.children;return(0,o.jsxs)(a,{children:[(0,o.jsx)("h2",{className:"title",children:e}),t]})}},9677:function(n,e,t){"use strict";t.d(e,{$:function(){return c}});var r,i=t(168),a=t(5867).zo.section(r||(r=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n\tflex-direction: column;\n    height: 100vh;\n    //color: #fff;\n\t//background: #092756;\n    //width: 100vh;\n   // margin: auto;\n    "]))),o=t(184),c=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},4159:function(n,e,t){"use strict";t.d(e,{g:function(){return a}});var r=t(9434),i=t(6351),a=function(){return{isLoading:(0,r.v9)(i.NH),contacts:(0,r.v9)(i.Af),filter:(0,r.v9)(i.AD),checkbox:(0,r.v9)(i.k0),itemIDForModal:(0,r.v9)(i.NF)}}},2257:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return en}});var r,i,a,o,c=t(9677),s=t(8681),l=t(9434),u=t(425),d=t(6351),m=t(168),p=t(5867),f=p.zo.form(r||(r=(0,m.Z)(["\n    //width: 400px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    margin-bottom: 20px;\n    .input{\n        width: 280px; \n        height: 30px;\n        margin-bottom: 30px; \n        background: rgba(0,0,0,0.3);\n        border: none;\n        outline: none;\n        padding: 5px;\n        font-size: 20px;\n        color: #fff;\n        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\n        border: 1px solid rgba(0,0,0,0.3);\n        border-radius: 4px;\n    }\n    .input:focus { \n        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); \n    }\n"]))),h=t(184),x=function(){var n=(0,l.I0)(),e=(0,l.v9)(d.AD);return(0,h.jsx)(f,{children:(0,h.jsx)("label",{className:"label",htmlFor:"filter",children:(0,h.jsx)("input",{className:"input",type:"text",name:"filter",title:"Name may contain only letters, apostrophe, dash and spaces",required:!0,placeholder:"",value:e,onChange:function(e){n((0,u.ko)(e.target.value))}})})})},b=p.zo.ul(i||(i=(0,m.Z)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    margin-bottom: 160px;\n    .list{\n        margin: 0;\n        margin-bottom: 20px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .list-name{\n        margin: 0;\n        margin-right: 10px;\n    }\n    .list-number{\n        margin: 0;\n        margin-right: 20px;\n    }\n    .btn { \n        display: inline-block;\n        display: inline;\n        margin-left: auto;\n        zoom: 1; \n        padding: 4px 10px 4px; \n        margin-bottom: 0; \n        font-size: 13px; \n        line-height: 18px; \n        color: #333333; \n        text-align: center;\n        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); \n        vertical-align: middle; \n        background-color: #f5f5f5; \n        border-color: #e6e6e6 #e6e6e6 #e6e6e6; \n        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); \n        border: 1px solid #e6e6e6; \n        border-radius: 4px; \n        cursor: pointer; \n        *margin-left: .3em; \n    }\n    .btn-large { \n        padding: 5px; \n        font-size: 13px; \n        line-height: normal; \n        border-radius: 5px; \n    }\n    .btn:hover { \n        color: #333333;\n        text-decoration: none;  \n        background-color: #e6e6e6; \n        background-position: 0 -15px; \n    }\n    .btn-primary, .btn-primary:hover { \n        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); \n        color: #ffffff; \n    }\n    .btn-primary { \n        background-color: #4a77d4;   \n        border: 1px solid #3762bc; \n        text-shadow: 1px 1px 1px rgba(0,0,0,0.4); \n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); \n    }\n    .btn-primary:hover, .btn-primary:active, .btn-primary.active{ \n        filter: none; \n        background-color: #5549b2;\n    }\n    .btn-block { \n        width: 60px; \n        height: 25px;\n        display: block; \n    }\n"]))),g=function(n){var e=n.filteredContacts,t=n.onDeleteContact;return(0,h.jsx)(b,{children:e.map((function(n){var e=n.id,r=n.name,i=n.number;return(0,h.jsxs)("li",{className:"list",children:[(0,h.jsxs)("h3",{className:"list-name",children:[r,":"]}),(0,h.jsx)("p",{className:"list-number",children:i}),(0,h.jsx)("button",{className:"btn btn-primary btn-block btn-large",type:"button",onClick:function(){return t(e)},children:"Delete"})]},e)}))})},v=t(2007),y=t.n(v),j=p.zo.div(a||(a=(0,m.Z)(["\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 40px;\n    .text-style{\n        font-size: 20px;\n    }\n"]))),w=function(n){var e=n.message;return(0,h.jsx)(j,{children:(0,h.jsx)("h3",{className:"text-style",children:e})})};w.protoTypes={message:y().string.isRequired};var k=p.zo.div(o||(o=(0,m.Z)(["\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 40px;\n    .text-style{\n        font-size: 20px;\n    }\n"]))),C=function(n){var e=n.notification;return(0,h.jsx)(k,{children:(0,h.jsx)("h3",{className:"text-style",children:e})})};C.protoTypes={message:y().string.isRequired};var N,L,O,E=t(2427),z=function(){var n=(0,l.v9)(d.NH),e=(0,l.v9)(d.Af),t=(0,l.v9)(d.AD),r=(0,l.I0)();console.log(e);var i=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())||n.number.includes(t)}));return n?(0,h.jsx)("p",{children:"Loading data..."}):(0,h.jsx)(h.Fragment,{children:0===e.length?(0,h.jsx)(w,{message:"There are no contacts in your list, sorry"}):i.length>0?(0,h.jsx)(g,{filteredContacts:i,onDeleteContact:function(n){r((0,E.m5)(n))}}):(0,h.jsx)(C,{notification:"No contacts found that match the filter"})})},I=p.zo.div(N||(N=(0,m.Z)(["\n    background-color: #85afe4c0;\n    width: -webkit-fill-available;\n    .link {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 5px;\n        text-decoration: none;\n        padding: 10px;\n        font-size: 18px;\n        letter-spacing: 1px;\n        transition: color 0.25s;\n\n        &:hover, &:focus {\n        color: #5549b2;\n        }\n    \n    @media (min-width: 768px) {\n      font-size: 24px;\n    }\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]))),F=t(2791),S=t(1087),D=t(9439),P=t(4164),T=p.zo.div(L||(L=(0,m.Z)(["\n\n"]))),Z=t(8586),_=["title","titleId"];function R(){return R=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},R.apply(this,arguments)}function A(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function U(n,e){var t=n.title,r=n.titleId,i=A(n,_);return F.createElement("svg",R({width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?F.createElement("title",{id:r},t):null,O||(O=F.createElement("path",{d:"M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z",stroke:"#000000",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var q,M=F.forwardRef(U),B=(t.p,["title","titleId"]);function H(){return H=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},H.apply(this,arguments)}function W(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function V(n,e){var t=n.title,r=n.titleId,i=W(n,B);return F.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",ref:e,"aria-labelledby":r},i),t?F.createElement("title",{id:r},t):null,q||(q=F.createElement("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})))}var Y,$=F.forwardRef(V),J=(t.p,t(4159)),G=p.ZP.form(Y||(Y=(0,m.Z)(["\n\n"]))),K=t(8174),Q=function(n){var e=(0,l.I0)(),t=(0,J.g)(),r=t.contacts,i=t.itemIDForModal,a=(0,F.useState)(!1),o=(0,D.Z)(a,1)[0],c=(0,F.useRef)(null),s=r.find((function(n){return n.id===i})),u=s.number.split("-").slice(-4).join(""),d=function(n){c.current&&!c.current.contains(n.target)&&o(!1)};(0,F.useEffect)((function(){return document.addEventListener("click",d),function(){document.removeEventListener("click",d)}}));return(0,h.jsxs)(G,{onSubmit:function(t){t.preventDefault();var r=t.target.country.value,i=t.target.name.value,a=t.target.number.value,o=r.split(":")[1].trim(),c=a.split(""),l="".concat(c.slice(0,2).join(""),"-").concat(c.slice(2,5).join(""),"-").concat(c.slice(5,7).join(""),"-").concat(c.slice(7,9).join("")),u="".concat(o,"-").concat(l),d=s.name,m=s.number,p={id:s.id,name:i,number:u};p.name!==d||p.number!==m?(e((0,E.z)(p)).then((function(){e((0,E.mk)()),n.formShowUpdateForm()})).catch((function(n){console.error("Error updating contact:",n)})),t.target.reset()):K.Am.warning("You are trying to update unchanged data.")},children:[(0,h.jsxs)("label",{className:"label",htmlFor:"name",children:[(0,h.jsxs)("div",{className:"descr-div",children:[(0,h.jsx)(Z.r,{className:"form-icon",width:"30",height:"25"}),(0,h.jsx)("span",{className:"input-title",children:"Username"})]}),(0,h.jsx)("input",{className:"input",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Rosie Simpson",id:"name",defaultValue:s.name})]}),(0,h.jsxs)("label",{className:"label",htmlFor:"number",children:[(0,h.jsxs)("div",{className:"descr-div",children:[(0,h.jsx)(M,{className:"form-icon",width:"30",height:"30"}),(0,h.jsx)("span",{className:"input-title",children:"Number"})]}),(0,h.jsx)("input",{className:"input input-below",type:"tel",name:"number",title:"Phone number must be digits only. Without spaces, dashes, parentheses or +",required:!0,placeholder:"459125687",minLength:"1",maxLength:"9",id:"number",defaultValue:u})]}),(0,h.jsx)("p",{className:"descr-text descr-text-lower",children:"\u2217 Type the number in the format mentioned above only."}),(0,h.jsx)("button",{className:"btn-f btn-primary-f btn-block-f btn-large-f",type:"submit",children:"Update Contact"})]})},X=document.querySelector("#modal-root"),nn=function(){var n=(0,l.I0)(),e=(0,J.g)(),t=e.contacts,r=e.itemIDForModal,i=(0,F.useState)(!1),a=(0,D.Z)(i,2),o=a[0],c=a[1],s=(0,F.useState)(!1),d=(0,D.Z)(s,2),m=d[0],p=d[1],f=(0,F.useRef)(null),x=t.find((function(n){return n.id===r}));if((0,F.useEffect)((function(){r?(c(!0),p(!1)):c(!1);var e=function(n){"Escape"===n.key&&i()},t=function(n){f.current&&!f.current.contains(n.target)&&i()},i=function(){n((0,u.ot)(""))};return document.addEventListener("keydown",e),document.addEventListener("click",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}),[n,r]),x){return(0,P.createPortal)(o&&(0,h.jsx)(T,{children:(0,h.jsxs)("div",{className:"modal ".concat(m?"modal-open-for-form":""),ref:f,children:[(0,h.jsx)("button",{type:"button",className:"close-btn",onClick:function(){return n((0,u.ot)())},children:(0,h.jsx)($,{className:"close-icon",width:"35",height:"35"})}),(0,h.jsxs)("div",{className:"info-container",children:[(0,h.jsxs)("div",{className:"user-container",children:[(0,h.jsxs)("div",{className:"cont-sum",children:[(0,h.jsx)(Z.r,{className:"icon",width:"30",height:"25"}),(0,h.jsx)("p",{className:"title-user",children:"User:"})]}),(0,h.jsxs)("div",{className:"list-name-container",children:[(0,h.jsx)("p",{className:"list-name",children:x.name}),":"]})]}),(0,h.jsxs)("div",{className:"number-container",children:[(0,h.jsxs)("div",{className:"cont-sum",children:[(0,h.jsx)(M,{className:"icon",width:"30",height:"25"}),(0,h.jsx)("p",{className:"title-number",children:"Number:"})]}),(0,h.jsx)("div",{className:"list-number-container",children:(0,h.jsx)("p",{className:"list-number",children:x.number})})]})]}),(0,h.jsxs)("div",{className:"btn-cont",children:[(0,h.jsx)("button",{className:"btn btn-primary btn-block btn-large",type:"button",onClick:function(){return e=x.id,n((0,E.m5)(e)),void c(!1);var e},children:"Delete"}),(0,h.jsx)("button",{className:"btn btn-primary btn-block btn-large",type:"button",onClick:function(){p((function(n){return!n}))},children:"Update"})]}),(0,h.jsx)("div",{className:"update-form ".concat(m?"update-form-visible":""),children:(0,h.jsx)(Q,{formShowUpdateForm:function(){p(!1)}})})]})}),X)}},en=function(){var n=(0,l.I0)();return(0,F.useEffect)((function(){n((0,E.mk)())})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(c.$,{children:[(0,h.jsx)(I,{children:(0,h.jsx)(S.OL,{className:"link btn btn-primary btn-block btn-large",to:"/createcontacts",children:"Back to Ctreate"})}),(0,h.jsx)(s.L,{title:"Filter",children:(0,h.jsx)(x,{})}),(0,h.jsx)(s.L,{title:"Contacts",children:(0,h.jsx)(z,{})})]}),(0,h.jsx)(nn,{})]})}},6351:function(n,e,t){"use strict";t.d(e,{AD:function(){return i},Af:function(){return r},NF:function(){return c},NH:function(){return a},k0:function(){return o}});var r=function(n){return n.contacts.contacts},i=function(n){return n.filter.filter},a=function(n){return n.contacts.isLoading},o=function(n){return n.contacts.selectedCheckedCheckbox},c=function(n){return n.contacts.selectedIDForModal}},888:function(n,e,t){"use strict";var r=t(9047);function i(){}function a(){}a.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,a,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=257.0ac2b279.chunk.js.map