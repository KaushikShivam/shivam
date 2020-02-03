import React, { useState } from 'react';
import { wrapComponent } from 'react-snackbar-alert';

import CustomInput from './../components/CustomInput';

const Contact = ({ createSnackbar }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    sendFeedback({
      user_name: email,
      user_email: email,
      user_message: message
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  const sendFeedback = async variables => {
    const templateId = 'contact_form';
    try {
      await window.emailjs.send('gmail', templateId, variables);
      createSnackbar({ message: 'Email Sent' });
    } catch (error) {
      createSnackbar({ message: 'Email failed. Please try again' });
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;

      default:
        break;
    }
  };

  return (
    <main className="CustomForm">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3 className="title-small">
              <span>Contact Me</span>
            </h3>
            <p className="content-detail">
              Fill out the form to send me a message and get in touch.
            </p>
          </div>
          <div className="col-md-9 mt-4 mt-lg-0">
            <form onSubmit={handleSubmit}>
              <CustomInput
                name="name"
                type="text"
                value={name}
                handleChange={handleChange}
              />

              <CustomInput
                name="email"
                type="email"
                value={email}
                handleChange={handleChange}
              />
              <CustomInput
                name="message"
                type="text"
                value={message}
                handleChange={handleChange}
              />

              <input
                id="sendMessage"
                name="sendMessage"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default wrapComponent(Contact);
