import { actionTypes } from "../action-types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CITY:
      return action.payload;
    default:
      return state;
  }
};
