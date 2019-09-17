import * as axios from "axios";
import portfolioActionsTypes from "./portfolio-actions-types";

export const fetchGithubRepositories = () => {
  return dispatch => {
    axios
      .get("https://api.github.com/users/khalilbenachir/repos", {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
      .then(response => {
        // handle success
        dispatch({
          type: portfolioActionsTypes.GET_LOCAL_REPOSITORIES,
          payload: response.data
        });
      });
  };
};

export const handleUserInput = event => {
  return {
    type: portfolioActionsTypes.GET_USER_INPUT,
    payload: event.target
  };
};

export const handleForm = e => {
  return (dispatch, getState) => {
    const data = {
      email: `${getState().portfolio.email}`,
      phone: `${getState().portfolio.phone}`,
      message: `${getState().portfolio.message}`,
      firstName: `${getState().portfolio.firstName}`,
      lastName: `${getState().portfolio.lastName}`
    };
    e.preventDefault();
    axios
      .post("https://formcarry.com/s/TXpVSOLdMrs", data, {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        dispatch({
          type: portfolioActionsTypes.SEND_DATA_TO_MAIL,
          payload: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};
