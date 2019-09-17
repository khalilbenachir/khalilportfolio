import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./card.css";


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    margin: "5px",
    textTransform:'uppercase'
  },
  root: {
    background: "linear-gradient(45deg, #373737 30%, #1B1B1B 90%)",
    color: "#fff",
    margin: "0 5px 5px 5px",
    width: "100%"
  }
}));

const Card = props => {
  const classes = useStyles();

  return (
    <div className=" card card-1">
      <div className="card__background"></div>
      <div className="card__title">
        <Typography
          align="center"
          className={classes.input}
          variant="h6"
          component="h2"
        >
          {props.title}
        </Typography>
      </div>
      <div className="card__button">
        <Button
          href={props.githubLink}
          variant="contained"
          className={classes.root}
        >
          CODE SOURCE
        </Button>
      </div>
    </div>
  );
};

export default Card;
