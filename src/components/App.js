import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import apiRequest from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext, userObj } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';


function App() {
  const [isEditProfilePopupOpen, setProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: ''});
  const [currentUser, setCurrentUser] = React.useState(userObj);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([apiRequest.getUserInfo(), apiRequest.getInitialCards()])
    .then(([user, items]) => {
      setCurrentUser(user);      
      setCards(items);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
      // Отправляем запрос в API и получаем обновлённые данные карточки
    apiRequest.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
      setCards(newCards);
    })
    .catch(err => {
      console.log(err);
    })
  } 

  function handleCardDelete(card) {    
    apiRequest.delCard(card._id)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
    .catch(err => {
      console.log(err);
    })
  }

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
    setSelectedCard({link: ''});
  }

  function handleUpdateUser(userStateObj) {
    apiRequest.saveUserInfo(userStateObj)
    .then((user) => {
      setCurrentUser(user);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setProfilePopupState(false);
    })
  }

  function handleUpdateAvatar(avatarStateObj) {
    apiRequest.saveAvatar(avatarStateObj)
    .then((avatar) => {
      setCurrentUser(avatar);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setAvatarPopupState(false);
    })
  }

  function handleAddPlaceSubmit(card) {
    apiRequest.postCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards]);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setPlacePopupState(false);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="page">
          <Header />
          <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 

          <PopupWithForm title='Вы уверены?' name='del-card'  children={
            <button type="button" className="modal__confirm-button">Да</button>
          }/>

          <PopupWithForm title='Что-то пошло не так...' name='error'   containerClass='modal__conteiner_type_error'/>

          <ImagePopup card={selectedCard} modalState={selectedCard.link && 'modal_opened'} onClose={closeAllPopups} />
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
