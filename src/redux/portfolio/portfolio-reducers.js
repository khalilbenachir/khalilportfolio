import portfolioActionTypes from "./portfolio-actions-types";

const INITIAL_STATE = {
  phone: "",
  message: "",
  lastName: "",
  firstName: "",
  email: "",
  repositories: {},
  data: {}
};

const portfolioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case portfolioActionTypes.GET_LOCAL_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload
      };
    case portfolioActionTypes.GET_USER_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case portfolioActionTypes.SEND_DATA_TO_MAIL:
      return {
        ...state,
        phone: "",
        message: "",
        lastName: "",
        firstName: "",
        email: ""
      };
    default:
      return state;
  }
};

export default portfolioReducer;
