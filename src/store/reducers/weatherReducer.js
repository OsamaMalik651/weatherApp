import { actionTypes } from "../action-types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER:
      return action.payload;
    case actionTypes.CLEAR_WEATHER:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
