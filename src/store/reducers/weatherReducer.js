import { actionTypes } from "../action-types";

const initialState = {
  cod: "",
  message: 0,
  cnt: 0,
  list: [],
  city: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
