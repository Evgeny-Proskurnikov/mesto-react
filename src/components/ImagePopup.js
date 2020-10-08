import React from 'react';

function ImagePopup({ card, modalState, onClose }) {
  return (
    <div className={`modal modal_type_photo ${modalState}`}>
      <div className="modal__container modal__conteiner_type_photo">
        <button type="button" className="modal__close-button" onClick={onClose}></button>
        <img src={card ? card.link : '#'} alt={card ? card.name : ''} className="modal__image"/>
        <h3 className="modal__title modal__title_type_photo">{card ? card.name : ''}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;