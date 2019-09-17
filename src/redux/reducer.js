import { combineReducers } from "redux";

import portfolioReducer from "./portfolio/portfolio-reducers";


export default combineReducers({
  portfolio: portfolioReducer
});