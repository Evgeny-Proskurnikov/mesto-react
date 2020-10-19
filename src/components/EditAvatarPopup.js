import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInputRef = React.useRef();
 
  function handleUrlChange(evt) {
    avatarInputRef.current.value = evt.target.value;
  }

  function handleSubmit(evt) {
    evt.preventDefault(); 

    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  }

  return (
    <PopupWithForm 
      title='Обновить аватар' 
      name='edit-avatar' 
      modalState={isOpen ? 'modal_opened' : ''} 
      onClose={onClose}
      children={
      <form action="#" name="edit-avatar" className="modal__form modal__form_type_avatar" onSubmit={handleSubmit} noValidate>
        <input id="url-input" name="avatar" type="url" className="modal__input modal__input_type_link" ref={avatarInputRef} onChange={handleUrlChange} placeholder="Ссылка на аватар" required minLength="2" maxLength="200" autoComplete="off"/>
        <span id="url-input-error" className="modal__input-error"></span>
        <button type="submit" className="modal__save-button">Сохранить</button>
      </form>
    }/>
  );
}

export default EditAvatarPopup;