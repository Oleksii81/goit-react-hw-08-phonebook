"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[572],{8681:function(n,t,e){e.d(t,{L:function(){return c}});var r,o=e(168),i=e(5867).zo.div(r||(r=(0,o.Z)(["\n    display: flex;\n    align-items: center;\n    //justify-content: center;\n    flex-direction: column;\n    padding-top: 40px;\n    background-color: #85afe4c0;\n    height: 100vh;\n    width: 100vh;\n    .title{\n        font-weight: 600;\n    color: black;\n    font-size: 35px;\n    letter-spacing: 1px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n    text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);\n    }\n"]))),a=e(184),c=function(n){var t=n.title,e=n.children;return(0,a.jsxs)(i,{children:[(0,a.jsx)("h2",{className:"title",children:t}),e]})}},9677:function(n,t,e){e.d(t,{$:function(){return c}});var r,o=e(168),i=e(5867).zo.section(r||(r=(0,o.Z)(["\n    display: flex;\n    align-items: center;\n\tflex-direction: column;\n    height: 100vh;\n    //color: #fff;\n\t//background: #092756;\n    //width: 100vh;\n   // margin: auto;\n    "]))),a=e(184),c=function(n){var t=n.children;return(0,a.jsx)(i,{children:t})}},4159:function(n,t,e){e.d(t,{g:function(){return i}});var r=e(9434),o=e(6351),i=function(){return{isLoading:(0,r.v9)(o.NH),contacts:(0,r.v9)(o.Af),filter:(0,r.v9)(o.AD),checkbox:(0,r.v9)(o.k0),itemIDForModal:(0,r.v9)(o.NF)}}},1572:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,o,i=e(9677),a=e(8681),c=e(2427),l=e(6351),d=e(9434),s=e(168),p=e(5867),b=p.zo.form(r||(r=(0,s.Z)(["\n    width: 100vh;\n    //height: 250px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    //position: relative;\n    margin-bottom: 30px;\n    .label{\n        margin-bottom: 20px;\n    }\n    .input-title{\n        font-size:20px;\n        position: absolute;\n        transform: translateY(-30px);\n    }\n    .input{\n        min-width: 320px; \n        height: 32px;\n        margin-bottom: 30px; \n        background: rgba(0,0,0,0.3);\n        border: none;\n        outline: none;\n        padding: 5px;\n        font-size: 20px;\n        color: #fff;\n        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\n        border: 1px solid rgba(0,0,0,0.3);\n        border-radius: 4px;\n        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);\n    }\n    .input:focus { \n        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); \n    }\n    .btn { \n        display: inline-block;\n        display: inline; \n        zoom: 1; \n        padding: 4px 10px 4px; \n        margin-bottom: 0; \n        font-size: 13px; \n        line-height: 18px; \n        color: #333333; \n        text-align: center;\n        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); \n        vertical-align: middle; \n        background-color: #f5f5f5; \n        border-color: #e6e6e6 #e6e6e6 #e6e6e6; \n        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); \n        border: 1px solid #e6e6e6; \n        -webkit-border-radius: 4px; \n        -moz-border-radius: 4px; \n        border-radius: 4px; \n        cursor: pointer;\n    }\n    .btn-large { \n        padding: 9px 14px; \n        font-size: 15px; \n        line-height: normal;  \n        border-radius: 5px; \n    }\n    .btn:hover { \n        color: #333333;\n        text-decoration: none;  \n        background-color: #5549b2; \n        background-position: 0 -15px; \n        transition: background-position 0.1s linear;\n    }\n    .btn-primary, .btn-primary:hover { \n        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); \n        color: #ffffff; \n    }\n    .btn-primary { \n        background-color: #4a77d4;  \n        border: 1px solid #3762bc; \n        text-shadow: 1px 1px 1px rgba(0,0,0,0.4); \n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); \n    }\n    .btn-primary:hover, .btn-primary:active, .btn-primary.active{ \n        filter: none; \n        background-color: #5549b2;\n    }\n    .btn-block { \n        width: 200px; \n        height: 40px;\n        display:block; \n    }\n"]))),x=e(184),u=function(){var n=(0,d.I0)(),t=(0,d.v9)(l.Af);return(0,x.jsxs)(b,{onSubmit:function(e){e.preventDefault();var r=e.target.name.value,o=e.target.number.value;t.some((function(n){return n.number===o||n.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," or entered ").concat(o," number is already in contacts.")):(e.target.reset(),n((0,c.ky)({name:r,number:o})))},children:[(0,x.jsxs)("label",{className:"label",htmlFor:"name",children:[(0,x.jsx)("span",{className:"input-title",children:"Name"}),(0,x.jsx)("input",{className:"input",type:"text",name:"name",required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",id:"name"})]}),(0,x.jsxs)("label",{htmlFor:"number",children:[(0,x.jsx)("span",{className:"input-title",children:"Number"}),(0,x.jsx)("input",{className:"input",type:"tel",name:"number",required:!0,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}|^\\d{3}-\\d{3}-\\d{3}$",id:"number"})]}),(0,x.jsx)("button",{className:"btn btn-primary btn-block btn-large",type:"submit",disabled:!function(n){return n.target.checkValidity()},children:"Add Contact"})]})},f=p.zo.div(o||(o=(0,s.Z)(["\n    width: 100vh;\n    text-align: center;\n    \n    .btn { \n        display: flex; \n        zoom: 1; \n        padding: 4px 10px 4px; \n        margin-bottom: 0; \n        justify-content: center;\n        margin: 0 auto;\n        font-size: 13px; \n        line-height: 18px; \n        color: #333333; \n        text-align: center;\n        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); \n        vertical-align: middle; \n        background-color: #f5f5f5; \n        border-color: #e6e6e6 #e6e6e6 #e6e6e6; \n        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); \n        border: 1px solid #e6e6e6; \n        -webkit-border-radius: 4px; \n        -moz-border-radius: 4px; \n        border-radius: 4px; \n        cursor: pointer;\n    }\n    .btn-large { \n        padding: 9px 14px; \n        font-size: 15px; \n        line-height: normal;  \n        border-radius: 5px; \n        text-decoration: none;\n    }\n    .btn:hover { \n        color: #333333;\n        text-decoration: none;  \n        background-color: #5549b2; \n        background-position: 0 -15px; \n        transition: background-position 0.1s linear;\n    }\n    .btn-primary, .btn-primary:hover { \n        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); \n        color: #ffffff; \n    }\n    .btn-primary { \n        background-color: #4a77d4;  \n        border: 1px solid #3762bc; \n        text-shadow: 1px 1px 1px rgba(0,0,0,0.4); \n        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); \n    }\n    .btn-primary:hover, .btn-primary:active, .btn-primary.active{ \n        filter: none; \n        background-color: #5549b2;\n    }\n    .btn-block { \n        width: 200px; \n        display:block; \n    }\n"]))),g=e(1087),m=e(4159),h=function(){var n=(0,m.g)(),t=n.contacts;return n.isLoading?"Is Loading...":(0,x.jsxs)(f,{children:[(0,x.jsxs)("p",{className:"contacts-text",children:["You have already ",t.length," contacts in your list"]}),(0,x.jsx)(g.OL,{className:"link btn btn-primary btn-block btn-large",to:"/contacts",children:"See All Contacts"})]})},v=e(2791),k=function(){var n=(0,d.I0)();return(0,v.useEffect)((function(){n((0,c.mk)())})),(0,x.jsx)(i.$,{children:(0,x.jsxs)(a.L,{title:"Phonebook",children:[(0,x.jsx)(u,{}),(0,x.jsx)(h,{})]})})}},6351:function(n,t,e){e.d(t,{AD:function(){return o},Af:function(){return r},NF:function(){return c},NH:function(){return i},k0:function(){return a}});var r=function(n){return n.contacts.contacts},o=function(n){return n.filter.filter},i=function(n){return n.contacts.isLoading},a=function(n){return n.contacts.selectedCheckedCheckbox},c=function(n){return n.contacts.selectedIDForModal}}}]);
//# sourceMappingURL=572.07b3305e.chunk.js.map