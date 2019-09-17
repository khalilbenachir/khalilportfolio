import * as axios from "axios";
import portfolioActionsTypes from "./portfolio-actions-types";


export const fetchGithubRepositories = () => {
    return (dispatch) => {
        axios
            .get("https://api.github.com/users/khalilbenachir/repos", {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
        })
        .then(response => {
          // handle success
          console.log("=========response", response);
          dispatch({
            type: portfolioActionsTypes.GET_LOCAL_REPOSITORIES,
            payload: response.data
          });
        });
    }
};