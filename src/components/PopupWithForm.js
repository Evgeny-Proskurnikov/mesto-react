import React from 'react';

function PopupWithForm({ name, modalState, title, containerClass, onClose, children }) {
  return (
    <>
      <div className={`modal modal_type_${name} ${modalState}`}>
        <div className={`modal__container ${containerClass}`}>
          <button type="button" className="modal__close-button" onClick={onClose}></button>
          <h3 className="modal__title">{title}</h3>
          {children}
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;