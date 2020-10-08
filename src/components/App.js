import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditAvatarClick() {
    setAvatarPopupState(true);  
  }

  function handleEditProfileClick() {
    setProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    setPlacePopupState(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setPlacePopupState(false);
    setProfilePopupState(false);
    setAvatarPopupState(false);
    setSelectedCard(undefined);
  }

  return (
    <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick} 
      onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm 
        title='Редактировать профиль' 
        name='edit-profile' 
        modalState={isEditProfilePopupOpen ? 'modal_opened' : ''} 
        onClose={closeAllPopups}
        children={
        <form action="#" name="edit-profile" className="modal__form modal__form_type_profile" noValidate>
          <input id="name-input" name="name" type="text" className="modal__input modal__input_type_name" placeholder="Имя" required minLength="2" maxLength="40" autoComplete="off"/>
          <span id="name-input-error" className="modal__input-error"></span>
          <input id="character-input" name="about" type="text" className="modal__input modal__input_type_character" placeholder="Занятие" required minLength="2" maxLength="200" autoComplete="off"/>
          <span id="character-input-error" className="modal__input-error"></span>
          <button type="submit" className="modal__save-button">Сохранить</button>
        </form>
      }/>

      <PopupWithForm 
        title='Новое место' 
        name='add-card' 
        modalState={isAddPlacePopupOpen ? 'modal_opened' : ''} 
        onClose={closeAllPopups}
        children={
        <form action="#" name="add-card" className="modal__form modal__form_type_addcard" noValidate>
          <input id="place-input" name="name" type="text" className="modal__input modal__input_type_place" placeholder="Название" required minLength="1" maxLength="30" autoComplete="off"/>
          <span id="place-input-error" className="modal__input-error"></span>
          <input id="url-input" name="link" type="url" className="modal__input modal__input_type_link" placeholder="Ссылка на картинку" required minLength="2" maxLength="200" autoComplete="off"/>
          <span id="url-input-error" className="modal__input-error"></span>
          <button type="submit" className="modal__save-button">Создать</button>
        </form>
      }/>

      <PopupWithForm 
        title='Обновить аватар' 
        name='edit-avatar' 
        modalState={isEditAvatarPopupOpen ? 'modal_opened' : ''} 
        onClose={closeAllPopups}
        children={
        <form action="#" name="edit-avatar" className="modal__form modal__form_type_avatar" noValidate>
          <input id="url-input" name="avatar" type="url" className="modal__input modal__input_type_link" placeholder="Ссылка на аватар" required minLength="2" maxLength="200" autoComplete="off"/>
          <span id="url-input-error" className="modal__input-error"></span>
          <button type="submit" className="modal__save-button">Сохранить</button>
        </form>
      }/>

      <PopupWithForm title='Вы уверены?' name='del-card'  children={
        <button type="button" className="modal__confirm-button">Да</button>
      }/>

      <PopupWithForm title='Что-то пошло не так...' name='error'   containerClass='modal__conteiner_type_error'/>

      <ImagePopup card={selectedCard} modalState={selectedCard && 'modal_opened'} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
