import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault(); 

    onAddPlace({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm 
      title='Новое место'  
      name='add-card' 
      modalState={isOpen ? 'modal_opened' : ''} 
      onClose={onClose}
      children={
      <form action="#" name="add-card" className="modal__form modal__form_type_addcard" onSubmit={handleSubmit} noValidate>
        <input id="place-input" name="name" type="text" className="modal__input modal__input_type_place" value={name} onChange={handleNameChange} placeholder="Название" required minLength="1" maxLength="30" autoComplete="off"/>
        <span id="place-input-error" className="modal__input-error"></span>
        <input id="url-input" name="link" type="url" className="modal__input modal__input_type_link" value={link} onChange={handleLinkChange} placeholder="Ссылка на картинку" required minLength="2" maxLength="200" autoComplete="off"/>
        <span id="url-input-error" className="modal__input-error"></span>
        <button type="submit" className="modal__save-button">Создать</button>
      </form>
    }/>
  );
}

export default AddPlacePopup;