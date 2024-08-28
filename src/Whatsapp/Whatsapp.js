import React from 'react';
import './Whatsapp.css';

const URL ='https://wa.me';
const number ='917300720901';
const message= 'Hi, welcome to VBS Tech Solutions! How may we help you?';


const Whatsapp = () => {

  const url = `${URL}/${number}?text=${encodeURI(message)}`;

  return (
    <div className='whatsapp_button_box'>
      <a href = {url}  target='_blank' rel="noreferrer" className='whatsapp_button'>
        <i className="fa-brands fa-whatsapp  fs-4"></i>
      </a>
    </div>
  )
}

export default Whatsapp
