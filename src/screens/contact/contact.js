import React from "react";

import NavBar from "../../components/NavBar/navBar";

import { Typography, TextField } from "@material-ui/core";
import { InputMask} from "react-input-mask"

import Logo from "../../assets/KBlogo.png";
import Main_picture from "../../assets/2761143.png";

import "./contact.css";

const AboutMe = () => {
  return (
    <div className="main">
      <div className="contact__left">
        <div className="contact__left-logoWrapper">
          <img className="logoWrapper_logo" src={Logo} alt="logo" />
        </div>
        <div className="contact__left-formWrapper">
          <div className="formWrapper__title">
            {" "}
            <Typography variant="h6" gutterBottom>
              LET'S GET IN TOUCH
            </Typography>
          </div>
          <form className="formWrapper__form">
            <div className="form_name">
              <div className="form_firstname">
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </div>
              <div className="form_lastname">
                <TextField
                  autoComplete="fname"
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Last Name"
                  autoFocus
                />
              </div>
            </div>
            <div className="form_email">
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </div>
            <div className="form_phone">
              <TextField
                name="phone"
                type="text"
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax={4}
                id="email"
                label="Phone Number"
                autoComplete="phone"

              >
                          <InputMask  mask="(0)999 999 99 99" maskChar=" " />            

              </TextField>
            </div>
            <div className="form_message">
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={5}
                type="text"
                id="message"
                label="Message"
                name="message"
                autoComplete="message"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="main__right">
        <NavBar />
        <div className="main__right-content">
          <img
            className="content_picture"
            src={Main_picture}
            alt="main_picture"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
