import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 
 
  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault(); 

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm 
      title='Редактировать профиль' 
      name='edit-profile' 
      modalState={isOpen ? 'modal_opened' : ''} 
      onClose={onClose}
      children={
      <form action="#" name="edit-profile" className="modal__form modal__form_type_profile" onSubmit={handleSubmit} noValidate>
        <input id="name-input" name="name" type="text" className="modal__input modal__input_type_name" value={name} onChange={handleNameChange} placeholder="Имя" required minLength="2" maxLength="40" autoComplete="off"/>
        <span id="name-input-error" className="modal__input-error"></span>
        <input id="character-input" name="about" type="text" className="modal__input modal__input_type_character" value={description} onChange={handleDescriptionChange} placeholder="Занятие" required minLength="2" maxLength="200" autoComplete="off"/>
        <span id="character-input-error" className="modal__input-error"></span>
        <button type="submit" className="modal__save-button">Сохранить</button>
      </form>
    }/>
  );
}

export default EditProfilePopup;

