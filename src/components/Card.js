import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }  

  return (
    <div className="card">
      <button type="button" className="card__delete-button"></button>
      <img src={card ? card.link : ''} alt={card ? card.name : ''} className="card__image" onClick={handleClick}/>
      <div className="card__conteiner">
        <h2 className="card__title">{card ? card.name : ''}</h2>
        <button type="button" className="card__like-button"><span className="card__like-counter">{card ? card.likes.length : ''}</span></button>
      </div>
    </div>
  );
}

export default Card;