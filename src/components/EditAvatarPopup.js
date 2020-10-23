import React from 'react';
import PopupWithForm from './PopupWithForm';
import { FormSubmitStateContext } from '../contexts/FormSubmitStateContext';
import { useForm } from "react-hook-form";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  // const avatarInputRef = React.useRef();

  const formSubmitState = React.useContext(FormSubmitStateContext);
  const [avatar, setAvatar] = React.useState('');
  const { register, handleSubmit, errors } = useForm({mode: 'onChange'});
 
  // function handleUrlChange(evt) {
  //   avatarInputRef.current.value = evt.target.value;
  // }

  function handleUrlChange(evt) {
    setAvatar(evt.target.value);
  }

  function onSubmit() {
    formSubmitState.setState(true);

    onUpdateAvatar({
      // avatar: avatarInputRef.current.value,
      avatar: avatar,
    });
  }

  return (
    <PopupWithForm 
      title='Обновить аватар' 
      name='edit-avatar' 
      modalState={isOpen ? 'modal_opened' : ''} 
      onClose={onClose}
      children={
        <form action="#" name="edit-avatar" className="modal__form modal__form_type_avatar" onSubmit={handleSubmit(onSubmit)}>
          <input 
            id="url-input" 
            name="avatar" 
            type="url" 
            className={errors.avatar ? "modal__input modal__input_type_error" : "modal__input"}
            ref={
              // avatarInputRef,
              register({ 
                required: {value: true, message: 'Заполните это поле'}, 
                validate: {isUrl: value => value.includes('https://') === true || 'Введите URL'},
                maxLength: 200,  
              })
            } 
            onChange={handleUrlChange} 
            placeholder="Ссылка на аватар" 
            autoComplete="off"
          />

          <span 
            id="url-input-error" 
            className={errors.avatar ? "modal__input-error modal__input-error_active" : "modal__input-error"}
          >
            {errors.avatar && errors.avatar.message}
          </span>
          
          <button 
            type="submit" 
            className={errors.avatar ? "modal__save-button modal__save-button_inactive" : "modal__save-button"} 
            disabled={errors.avatar && true}
          >
            {formSubmitState.state ? 'Сохранение...' : 'Сохранить'}
          </button>
        </form>
      }
    />
  );
}

export default EditAvatarPopup;