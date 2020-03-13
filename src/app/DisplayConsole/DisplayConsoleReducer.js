import { handleActions } from "redux-actions";
import { actionTypes } from "../ControlConsole";

const API_FAILURE_MESSAGE = "Failed to fecth data. Please try again!";

const API_FAILURE_MESSAGE_LANDING_PAD = "Please type in the Landing Pad's ID, like LZ-2, LZ-4, etc.";

export default handleActions(
  {
    [`${actionTypes.FETCH_ALL_CAPSULES}_FULFILLED`]: (state, action) => ({
      data: action.payload.data
    }),
    [`${actionTypes.FTECH_ALL_CAPSULES}_REJECTED`]: (state, action) => ({
      data: API_FAILURE_MESSAGE
    }),
    [`${actionTypes.FETCH_ROADSTER}_FULFILLED`]: (state, action) => ({
      data: action.payload.data
    }),
    [`${actionTypes.FETCH_ROADSTER}_REJECTED`]: (state, action) => ({
      data: API_FAILURE_MESSAGE
    }),
    [`${actionTypes.FETCH_LANDING_PAD}_FULFILLED`]: (state, action) => ({
      data: action.payload.data
    }),
    [`${actionTypes.FETCH_LANDING_PAD}_REJECTED`]: (state, action) => ({
      data: API_FAILURE_MESSAGE_LANDING_PAD
    }),
    [actionTypes.SET_LANDING_PAD_INPUT_VALUE]: (state, action) => ({
      id: action.payload,
      state
    }),
  },
  { 
    data: "Results will be shown here...",
    id: "LZ-1"
  }
);
