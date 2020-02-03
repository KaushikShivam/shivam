import React, { useState } from 'react';

import CustomInput from './../components/CustomInput';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    console.log('submit');
  };

  const handleChange = e => {
    console.log('change');
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
            <p>Or visit my social links</p>
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
                value="Sign Up"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
