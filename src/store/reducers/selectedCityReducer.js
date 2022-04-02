import { actionTypes } from "../action-types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTEDCITY:
      return action.payload;

    default:
      return state;
  }
};
