import React from "react";

import NavBar from "../../components/NavBar/navBar";

import { Typography, TextField, Button } from "@material-ui/core";
import { InputMask } from "react-input-mask";

import { makeStyles } from "@material-ui/styles";

import Logo from "../../assets/KBlogo.png";
import Main_picture from "../../assets/2761143.png";

import "./contact.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #373737 30%, #1B1B1B 90%)",
    color: "#fff",
    height: 48,
    margin: "5px 0"
  },
  input: {
    margin: '0',
    height: '50%',
  }
});

const AboutMe = () => {
  const classes = useStyles();

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
                  margin="normal"
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
                  margin="normal"

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
                margin="normal"

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
                margin="normal"

                id="email"
                label="Phone Number"
                autoComplete="phone"
              >
                <InputMask mask="(0)999 999 99 99" maskChar=" " />
              </TextField>
            </div>
            <div className="form_message">
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline                
                rowsMax={4}

                rows={3}
                type="text"
                id="message"
                label="Write us a message"
                name="message"
                autoComplete="message"
              />
            </div>
            <div className="form_button">
              <Button
                className={classes.root}
                fullWidth
                variant="contained"
                color="#000"
              >
                SEND MESSAGE
              </Button>
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
