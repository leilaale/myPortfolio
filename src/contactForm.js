import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './contactMe_design.css';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log(form.current)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };  

  
  return (
    <div className='ContactForm'>
      <div className='contactMe-container'>
        <div className='contactMe-row'>
          <div className='text-center'>
            <div className='contactForm'>
              <form id='contact-insideForm' onSubmit={sendEmail} ref={form}>
                {/* Row 1 of form */}
                <div className='formRow row1'>
                  <div className='col-1'>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                  </div>
                  <div className='col-1'>
                    <input
                      type='email'
                      name='user_email'
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='formRow row2'>
                  <div className='col-2'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='formRow row3'>
                  <div className='col-3'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
                <div className='formRow row4'>
                  <button className='submit-btn' type='submit'>  
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ContactForm;