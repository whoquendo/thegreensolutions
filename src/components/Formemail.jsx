import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '@styles/formemail.css';

export const Formemail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_alfcx5c', 'template_ydzzwbl', form.current, '0DMIA7ZNIuaYftpVu')
      .then((result) => {
          alert(`Votre E-mail a été envoyé avec succès ${result.text}`);
      }, (error) => {
          alert(`Votre email n'a pas été envoyé, réessayez ${error.text}`);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='field'>
      <label>Nom</label>
      <input type="text" name="user_name" required/>

      <label>Email</label>
      <input type="email" name="user_email" required/>

      <label>Tel</label>
      <input type="number" name="user_tel" required/>

      <label>Message</label>
      <textarea name="message" />

      <input type="submit" value="Send" />
    </form>
  );
};

export default Formemail