import portfolioActionTypes from "./portfolio-actions-types";





const INITIAL_STATE = {
  repositories:{}
};

const portfolioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case portfolioActionTypes.GET_LOCAL_REPOSITORIES:
      return {
          ...state,
          repositories:action.payload
      };
    

    default:
      return state;
  }
};

export default portfolioReducer;