import React from 'react';
import apiRequest from '../utils/api.js'
import Card from './Card.js'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    apiRequest.getUserInfo()
    .then(user => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  React.useEffect(() => {
    apiRequest.getInitialCards()
    .then(items => {
      const cardsArr = items.map((item) => ({
        title: item.name,
        src: item.link,
        id: item._id,
        likes: item.likes
      }));
      setCards(cardsArr);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__overlay" onClick={onEditAvatar}>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
          <p className="profile__character">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map(el => <Card card={el} key={el.id} onCardClick={onCardClick}/>)}
      </section>
    </main>
  );
}

export default Main;