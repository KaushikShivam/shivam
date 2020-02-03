import React from 'react';

import CustomInput from './../components/CustomInput';

const Contact = () => {
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
            <br />
            <p>Alternatively you can connect with me on my social links</p>
          </div>
          <div className="col-md-9 mt-4 mt-lg-0">
            <form onSubmit={this.handleSubmit}>
              <CustomInput
                name="name"
                type="text"
                value={this.state.name}
                handleChange={this.handleChange}
              />

              <CustomInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handleChange}
              />
              <CustomInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
              />
              <CustomInput
                name="passwordConfirm"
                type="password"
                value={this.state.passwordConfirm}
                handleChange={this.handleChange}
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
