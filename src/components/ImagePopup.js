import React from 'react';

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`modal modal_type_photo ${isOpen}`}>
      <div className="modal__container modal__conteiner_type_photo">
        <button type="button" className="modal__close-button" onClick={onClose}></button>
        <img src={card.src} alt={card.title} className="modal__image"/>
        <h3 className="modal__title modal__title_type_photo">{card.title}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;