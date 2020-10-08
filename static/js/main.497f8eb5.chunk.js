(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),l=(a(11),a(1));var i=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header__logo"}))},m=a(4),s=a(5),u=new(function(){function e(t){Object(m.a)(this,e),this._url=t.url,this._token=t.token}return Object(s.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"delCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"saveUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"saveAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",token:"06e1dc17-91d9-4de2-856b-fec4fd742305"});var d=function(e){var t=e.card,a=e.onCardClick;return o.a.createElement("div",{className:"card"},o.a.createElement("button",{type:"button",className:"card__delete-button"}),o.a.createElement("img",{src:t?t.link:"",alt:t?t.name:"",className:"card__image",onClick:function(){a(t)}}),o.a.createElement("div",{className:"card__conteiner"},o.a.createElement("h2",{className:"card__title"},t?t.name:""),o.a.createElement("button",{type:"button",className:"card__like-button"},o.a.createElement("span",{className:"card__like-counter"},t?t.likes.length:""))))};var _=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,c=o.a.useState(),i=Object(l.a)(c,2),m=i[0],s=i[1],_=o.a.useState(),p=Object(l.a)(_,2),h=p[0],f=p[1],E=o.a.useState(),v=Object(l.a)(E,2),y=v[0],N=v[1],b=o.a.useState([]),k=Object(l.a)(b,2),C=k[0],g=k[1];return o.a.useEffect((function(){Promise.all([u.getUserInfo(),u.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];s(a.name),f(a.about),N(a.avatar),g(n)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__overlay",onClick:n},o.a.createElement("img",{src:y,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},m),o.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:t}),o.a.createElement("p",{className:"profile__character"},h)),o.a.createElement("button",{type:"button",className:"profile__add-button",onClick:a})),o.a.createElement("section",{className:"elements"},C.map((function(e){return o.a.createElement(d,{card:e,key:e._id,onCardClick:r})}))))};var p=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var h=function(e){var t=e.name,a=e.modalState,n=e.title,r=e.containerClass,c=e.onClose,l=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modal modal_type_".concat(t," ").concat(a)},o.a.createElement("div",{className:"modal__container ".concat(r)},o.a.createElement("button",{type:"button",className:"modal__close-button",onClick:c}),o.a.createElement("h3",{className:"modal__title"},n),l)))};var f=function(e){var t=e.card,a=e.modalState,n=e.onClose;return o.a.createElement("div",{className:"modal modal_type_photo ".concat(a)},o.a.createElement("div",{className:"modal__container modal__conteiner_type_photo"},o.a.createElement("button",{type:"button",className:"modal__close-button",onClick:n}),o.a.createElement("img",{src:t?t.link:"#",alt:t?t.name:"",className:"modal__image"}),o.a.createElement("h3",{className:"modal__title modal__title_type_photo"},t?t.name:"")))};var E=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(l.a)(r,2),m=c[0],s=c[1],u=o.a.useState(!1),d=Object(l.a)(u,2),E=d[0],v=d[1],y=o.a.useState(),N=Object(l.a)(y,2),b=N[0],k=N[1];function C(){s(!1),n(!1),v(!1),k(void 0)}return o.a.createElement("div",{className:"page"},o.a.createElement(i,null),o.a.createElement(_,{onEditProfile:function(){n(!0)},onAddPlace:function(){s(!0)},onEditAvatar:function(){v(!0)},onCardClick:function(e){k(e)}}),o.a.createElement(p,null),o.a.createElement(h,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",modalState:a?"modal_opened":"",onClose:C,children:o.a.createElement("form",{action:"#",name:"edit-profile",className:"modal__form modal__form_type_profile",noValidate:!0},o.a.createElement("input",{id:"name-input",name:"name",type:"text",className:"modal__input modal__input_type_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",autoComplete:"off"}),o.a.createElement("span",{id:"name-input-error",className:"modal__input-error"}),o.a.createElement("input",{id:"character-input",name:"about",type:"text",className:"modal__input modal__input_type_character",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",required:!0,minLength:"2",maxLength:"200",autoComplete:"off"}),o.a.createElement("span",{id:"character-input-error",className:"modal__input-error"}),o.a.createElement("button",{type:"submit",className:"modal__save-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}),o.a.createElement(h,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-card",modalState:m?"modal_opened":"",onClose:C,children:o.a.createElement("form",{action:"#",name:"add-card",className:"modal__form modal__form_type_addcard",noValidate:!0},o.a.createElement("input",{id:"place-input",name:"name",type:"text",className:"modal__input modal__input_type_place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",autoComplete:"off"}),o.a.createElement("span",{id:"place-input-error",className:"modal__input-error"}),o.a.createElement("input",{id:"url-input",name:"link",type:"url",className:"modal__input modal__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,minLength:"2",maxLength:"200",autoComplete:"off"}),o.a.createElement("span",{id:"url-input-error",className:"modal__input-error"}),o.a.createElement("button",{type:"submit",className:"modal__save-button"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))}),o.a.createElement(h,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",modalState:E?"modal_opened":"",onClose:C,children:o.a.createElement("form",{action:"#",name:"edit-avatar",className:"modal__form modal__form_type_avatar",noValidate:!0},o.a.createElement("input",{id:"url-input",name:"avatar",type:"url",className:"modal__input modal__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,minLength:"2",maxLength:"200",autoComplete:"off"}),o.a.createElement("span",{id:"url-input-error",className:"modal__input-error"}),o.a.createElement("button",{type:"submit",className:"modal__save-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))}),o.a.createElement(h,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"del-card",children:o.a.createElement("button",{type:"button",className:"modal__confirm-button"},"\u0414\u0430")}),o.a.createElement(h,{title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...",name:"error",containerClass:"modal__conteiner_type_error"}),o.a.createElement(f,{card:b,modalState:b&&"modal_opened",onClose:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.497f8eb5.chunk.js.map