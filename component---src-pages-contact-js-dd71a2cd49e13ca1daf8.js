(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Cuy+":function(e,t,a){"use strict";a.r(t);var n={_origin:"https://api.emailjs.com"},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";n._userID=e,n._origin=t},r=function(e,t,a){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,a){return t&&l(e.prototype,t),a&&l(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=s((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText})),c=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(i,r){var l=new XMLHttpRequest;l.addEventListener("load",(function(e){var t=e.target,a=new o(t);200===a.status||"OK"===a.text?i(a):r(a)})),l.addEventListener("error",(function(e){var t=e.target;r(new o(t))})),l.open("POST",n._origin+e,!0),Object.keys(a).forEach((function(e){l.setRequestHeader(e,a[e])})),l.send(t)}))},m=function(e,t,a,i){var l=i||n._userID;r(l,e,t);var s={lib_version:"3.6.2",user_id:l,service_id:e,template_id:t,template_params:a};return c("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},u=a("q1tI"),d=a.n(u),p=a("70lj"),h=a("Bl7J"),f=function(e){var t=e.fieldName;return d.a.createElement("span",{style:{color:"#ff4542"}}," — "+t+" is required!")};t.default=function(e){var t=e.data.site,a=Object(u.useState)(!1),n=a[0],r=a[1],l=Object(u.useState)(!1),s=l[0],o=l[1],c=Object(u.useState)([]),g=c[0],v=c[1];return Object(u.useEffect)((function(){i("user_7FkzaMvkc6TGQ9Yqy5sml")}),[]),d.a.createElement(h.a,null,d.a.createElement(p.a,{title:"Contact | "+t.siteMetadata.title,description:"Contact page of "+t.siteMetadata.description}),d.a.createElement("div",{className:"two-grids -contact"},d.a.createElement("div",null,d.a.createElement("h1",{className:"post-title"},"Contact us"),d.a.createElement("div",{className:"primary-content"},"If you are interested to join the lab, collaborate, or inquire, please do not hesitate to send Titipat an email (titipat.ach [AT] mahidol [DOT] edu) or using the form in this page →"),d.a.createElement("div",{className:"primary-content"},d.a.createElement("b",null,"Undergraduate students: "),"To discuss potential research projects or ideas, feel free to reach out to Titipat and arrange a brief meeting."),d.a.createElement("div",{className:"primary-content"},d.a.createElement("b",null,"Graduate students: "),"Prospective students interested in pursuing a Masters or PhD program in Biomedical Engineering at Mahidol University can submit a CV along with a brief statement of their research interests before applying. Additionally, they can arrange a discussion with Titipat in advance. Titipat is also available for co-advising in various departments outside Mahidol University, such as the Department of Computer Engineering at Mahidol University, Vidyasirimedhi Institute of Science and Technology (VISTEC), or Chulalongkorn University, Thailand, providing multiple options for interested students."),d.a.createElement("div",{className:"primary-content"},d.a.createElement("b",null,"Other positions: "),"The lab is always actively looking for interns, researchers, and developers. If you are interested in doing these position (locally or remotely), please also do not hesitate to email Titipat to discuss."),d.a.createElement("div",{className:"primary-content"},d.a.createElement("b",null,"Office: "),"Mahidol University, Engineering Building 3, 3rd Floor 999 Phutthamonthon 4 Road, Salaya, Nakhon Pathom, Thailand 73170")),d.a.createElement("div",null,d.a.createElement("form",{className:"form-container",onSubmit:function(e){e.preventDefault();var t=new FormData(e.target),a={name:t.get("w3lName"),replyTo:t.get("w3lSender"),subject:t.get("w3lSubject"),message:t.get("w3lMessage")},n=[];Object.entries(a).forEach((function(e){var t=e[0];e[1]?n=n.filter((function(e){return e!==t})):n.push(t)})),v(n),0===n.length&&(o(!0),m("service_qfp7bhb","template_y2z350n",a).then((function(){r(!0)}),(function(e){console.log("failed with result:",e)})))}},n?d.a.createElement("p",{style:{margin:0,lineHeight:"1.5em"}},"Your message has successfully been sent to Titipat! It generally takes one to two days for him to reply."):d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"w3lName"},"Name"," ",g.includes("name")&&d.a.createElement(f,{fieldName:"Name"})),d.a.createElement("input",{type:"text",name:"w3lName",id:"w3lName"})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"w3lSender"},"Email",g.includes("replyTo")&&d.a.createElement(f,{fieldName:"Email"})),d.a.createElement("input",{type:"email",name:"w3lSender",id:"w3lSender"})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"w3lSubject"},"Subject",g.includes("subject")&&d.a.createElement(f,{fieldName:"Subject"})),d.a.createElement("input",{type:"text",name:"w3lSubject",id:"w3lSubject"})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"w3lMessage"},"Message",g.includes("message")&&d.a.createElement(f,{fieldName:"Message"})),d.a.createElement("textarea",{name:"w3lMessage",id:"w3lMessage"})),!s&&d.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},d.a.createElement("input",{type:"submit",className:"button -primary",style:{marginRight:0},disabled:s})))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-dd71a2cd49e13ca1daf8.js.map