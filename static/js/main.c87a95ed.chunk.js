(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=(a(16),a(2)),i=a(1);var s=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header__logo"}))},u=o.a.createContext(),m={name:"",about:"",avatar:"",_id:""};var d=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,l=o.a.useContext(u),c=t.owner._id===l._id,i=t.likes.some((function(e){return e._id===l._id})),s="".concat(i?"card__like-button card__like-button_status_active":"card__like-button");return o.a.createElement("div",{className:"card"},c&&o.a.createElement("button",{type:"button",className:"card__delete-button",onClick:function(){r(t)}}),o.a.createElement("img",{src:t?t.link:"",alt:t?t.name:"",className:"card__image",onClick:function(){a(t)}}),o.a.createElement("div",{className:"card__conteiner"},o.a.createElement("h2",{className:"card__title"},t?t.name:""),o.a.createElement("button",{type:"button",className:s,onClick:function(){n(t)}},o.a.createElement("span",{className:"card__like-counter"},t&&t.likes.length>0?t.likes.length:null))))};var _=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,l=e.cards,c=e.onCardLike,i=e.onCardDelete,s=o.a.useContext(u);return s.name?o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__overlay",onClick:n},o.a.createElement("img",{src:s.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},s.name),o.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:t}),o.a.createElement("p",{className:"profile__character"},s.about)),o.a.createElement("button",{type:"button",className:"profile__add-button",onClick:a})),o.a.createElement("section",{className:"elements"},l.map((function(e){return o.a.createElement(d,{card:e,key:e._id,onCardClick:r,onCardLike:c,onCardDelete:i})})))):o.a.createElement("main",{className:"content"},o.a.createElement("div",{className:"spinner"},o.a.createElement("i",null)))};var p=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var f=function(e){var t=e.card,a=e.modalState,n=e.onClose;return o.a.createElement("div",{className:"modal modal_type_photo ".concat(a),onClick:function(e){e.target.classList.contains("modal")&&n()}},o.a.createElement("div",{className:"modal__container modal__conteiner_type_photo"},o.a.createElement("button",{type:"button",className:"modal__close-button",onClick:n}),o.a.createElement("img",{src:t.link?t.link:null,alt:t.name?t.name:null,className:"modal__image"}),o.a.createElement("h3",{className:"modal__title modal__title_type_photo"},t.name?t.name:null)))},h=a(9),v=a(10),C=new(function(){function e(t){Object(h.a)(this,e),this._url=t.url,this._token=t.token}return Object(v.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"delCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"saveUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"saveAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",token:"06e1dc17-91d9-4de2-856b-fec4fd742305"});var E=function(e){var t=e.name,a=e.modalState,n=e.title,r=e.containerClass,l=e.onClose,c=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modal modal_type_".concat(t," ").concat(a),onClick:function(e){e.target.classList.contains("modal")&&l()}},o.a.createElement("div",{className:"modal__container ".concat(r)},o.a.createElement("button",{type:"button",className:"modal__close-button",onClick:l}),o.a.createElement("h3",{className:"modal__title"},n),c)))},b=o.a.createContext(),k=a(5);var g=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useContext(u),l=o.a.useContext(b),c=Object(k.a)({mode:"onChange"}),i=c.register,s=c.handleSubmit,m=c.errors;return o.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",modalState:t?"modal_opened":"",onClose:a,children:o.a.createElement("form",{action:"#",name:"edit-profile",className:"modal__form modal__form_type_profile",onSubmit:s((function(e){l.setState(!0),n(e)})),noValidate:!0},o.a.createElement("input",{id:"name-input",name:"name",type:"text",className:m.name?"modal__input modal__input_type_error":"modal__input",defaultValue:r.name,ref:i({required:{value:!0,message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"},minLength:{value:2,message:"\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 2 \u0441\u0438\u043c\u0432."},maxLength:40}),placeholder:"\u0418\u043c\u044f",autoComplete:"off"}),o.a.createElement("span",{id:"name-input-error",className:m.name?"modal__input-error modal__input-error_active":"modal__input-error"},t?m.name&&m.name.message:m.name=!1),o.a.createElement("input",{id:"character-input",name:"about",type:"text",className:m.about?"modal__input modal__input_type_error":"modal__input",defaultValue:r.about,ref:i({required:{value:!0,message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"},minLength:{value:2,message:"\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 2 \u0441\u0438\u043c\u0432."},maxLength:200}),placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",autoComplete:"off"}),o.a.createElement("span",{id:"character-input-error",className:m.about?"modal__input-error modal__input-error_active":"modal__input-error"},t?m.about&&m.about.message:m.about=!1),o.a.createElement("button",{type:"submit",className:m.name||m.about?"modal__save-button modal__save-button_inactive":"modal__save-button",disabled:(m.name||m.about)&&!0},l.state?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))})};var y=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useContext(b),l=o.a.useState(""),c=Object(i.a)(l,2),s=c[0],u=c[1],m=Object(k.a)({mode:"onChange"}),d=m.register,_=m.handleSubmit,p=m.errors;return o.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",modalState:t?"modal_opened":"",onClose:a,children:o.a.createElement("form",{action:"#",name:"edit-avatar",className:"modal__form modal__form_type_avatar",onSubmit:_((function(){r.setState(!0),n({avatar:s})})),noValidate:!0},o.a.createElement("input",{id:"url-input",name:"avatar",type:"url",className:p.avatar?"modal__input modal__input_type_error":"modal__input",ref:d({required:{value:!0,message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"},validate:{isUrl:function(e){return!0===e.includes("https://")||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL"}},maxLength:200}),onChange:function(e){u(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",autoComplete:"off"}),o.a.createElement("span",{id:"url-input-error",className:p.avatar?"modal__input-error modal__input-error_active":"modal__input-error"},t?p.avatar&&p.avatar.message:p.avatar=!1),o.a.createElement("button",{type:"submit",className:p.avatar?"modal__save-button modal__save-button_inactive":"modal__save-button",disabled:p.avatar&&!0},r.state?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))})};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useState(""),l=Object(i.a)(r,2),c=l[0],s=l[1],u=o.a.useState(""),m=Object(i.a)(u,2),d=m[0],_=m[1],p=o.a.useContext(b),f=Object(k.a)({mode:"onChange"}),h=f.register,v=f.handleSubmit,C=f.errors;return o.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-card",modalState:t?"modal_opened":"",onClose:a,children:o.a.createElement("form",{action:"#",name:"add-card",className:"modal__form modal__form_type_addcard",onSubmit:v((function(){p.setState(!0),n({name:c,link:d})})),noValidate:!0},o.a.createElement("input",{id:"place-input",name:"name",type:"text",className:C.name?"modal__input modal__input_type_error":"modal__input",defaultValue:c,onChange:function(e){s(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",ref:h({required:{value:!0,message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"},minLength:{value:1,message:"\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 1 \u0441\u0438\u043c\u0432."},maxLength:30}),autoComplete:"off"}),o.a.createElement("span",{id:"place-input-error",className:C.name?"modal__input-error modal__input-error_active":"modal__input-error"},t?C.name&&C.name.message:C.name=!1),o.a.createElement("input",{id:"url-input",name:"link",type:"url",className:C.link?"modal__input modal__input_type_error":"modal__input",defaultValue:d,onChange:function(e){_(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:h({required:{value:!0,message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"},minLength:{value:2,message:"\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 2 \u0441\u0438\u043c\u0432."},maxLength:200,validate:{isUrl:function(e){return!0===e.includes("https://")||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL"}}}),autoComplete:"off"}),o.a.createElement("span",{id:"url-input-error",className:C.link?"modal__input-error modal__input-error_active":"modal__input-error"},t?C.link&&C.link.message:C.link=!1),o.a.createElement("button",{type:"submit",className:C.name||C.link?"modal__save-button modal__save-button_inactive":"modal__save-button",disabled:(C.name||C.link)&&!0},p.state?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))})};var j=function(e){var t=e.card,a=e.isOpen,n=e.onClose,r=e.onCardDelete,l=o.a.useContext(b);return o.a.createElement(E,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"del-card",modalState:a?"modal_opened":"",onClose:n,children:o.a.createElement("button",{type:"button",className:"modal__confirm-button",onClick:function(){r(t),l.setState(!0)}},l.state?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430")})};var S=function(e){var t=e.isOpen,a=e.onClose,n=e.errCode;return o.a.createElement(E,{title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... ".concat(n),name:"error",containerClass:"modal__conteiner_type_error",modalState:t?"modal_opened":"",onClose:a})},O=o.a.createContext();var L=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),l=Object(i.a)(r,2),d=l[0],h=l[1],v=o.a.useState(!1),E=Object(i.a)(v,2),k=E[0],L=E[1],P=o.a.useState(!1),x=Object(i.a)(P,2),U=x[0],A=x[1],w=o.a.useState(!1),D=Object(i.a)(w,2),T=D[0],z=D[1],I=o.a.useState(!1),V=Object(i.a)(I,2),q=V[0],J=V[1],R=o.a.useState(""),B=Object(i.a)(R,2),G=B[0],H=B[1],M=o.a.useState({}),W=Object(i.a)(M,2),F=W[0],$=W[1],K=o.a.useState({}),Q=Object(i.a)(K,2),X=Q[0],Y=Q[1],Z=o.a.useState(m),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1],ne=o.a.useState([]),oe=Object(i.a)(ne,2),re=oe[0],le=oe[1],ce=o.a.useState(!1),ie=Object(i.a)(ce,2),se=ie[0],ue=ie[1],me={state:se,setState:ue};function de(){document.addEventListener("keyup",fe)}function _e(e){H(e),z(!0),de()}function pe(){h(!1),n(!1),L(!1),A(!1),z(!1),J(!1),document.removeEventListener("keyup",fe)}function fe(e){"Escape"===e.key&&pe()}return o.a.useEffect((function(){Promise.all([C.getUserInfo(),C.getInitialCards()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];ae(a),le(n)})).catch((function(e){console.log(e),_e(e)}))}),[]),o.a.createElement(u.Provider,{value:te},o.a.createElement(O.Provider,{value:re},o.a.createElement("div",{className:"page"},o.a.createElement(s,null),o.a.createElement(_,{onEditProfile:function(){n(!0),de()},onAddPlace:function(){h(!0),de()},onEditAvatar:function(){L(!0),de()},onCardClick:function(e){Y(e),J(!0),de()},cards:re,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===te._id}));C.changeLikeCardStatus(e._id,t).then((function(t){var a=re.map((function(a){return a._id===e._id?t:a}));le(a)})).catch((function(e){console.log(e),_e(e)}))},onCardDelete:function(e){A(!0),$(e),de()}}),o.a.createElement(p,null),o.a.createElement(b.Provider,{value:me},o.a.createElement(g,{isOpen:a,onClose:pe,onUpdateUser:function(e){C.saveUserInfo(e).then((function(e){ae(e)})).catch((function(e){console.log(e),_e(e)})).finally((function(){n(!1),ue(!1)}))}}),o.a.createElement(N,{isOpen:d,onClose:pe,onAddPlace:function(e){C.postCard(e).then((function(e){le([e].concat(Object(c.a)(re)))})).catch((function(e){console.log(e),_e(e)})).finally((function(){h(!1),ue(!1)}))}}),o.a.createElement(y,{isOpen:k,onClose:pe,onUpdateAvatar:function(e){C.saveAvatar(e).then((function(e){ae(e)})).catch((function(e){console.log(e),_e(e)})).finally((function(){L(!1),ue(!1)}))}}),o.a.createElement(j,{isOpen:U,onClose:pe,onCardDelete:function(){C.delCard(F._id).then((function(){var e=re.filter((function(e){return e._id!==F._id}));le(e)})).catch((function(e){console.log(e),_e(e)})).finally((function(){A(!1),ue(!1)}))}})),o.a.createElement(S,{isOpen:T,onClose:pe,errCode:G}),o.a.createElement(f,{card:X,modalState:q&&"modal_opened",onClose:pe}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c87a95ed.chunk.js.map