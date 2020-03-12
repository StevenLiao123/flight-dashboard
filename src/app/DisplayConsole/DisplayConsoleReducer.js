import { handleActions } from "redux-actions";
import { actionTypes } from "../ControlConsole";

const API_FAILURE_MESSAGE = "Failed to fecth data. Please try again!";

export default handleActions(
  {
    [`${actionTypes.FETECH_ALL_CAPSULES}_FULFILLED`]: (state, action) => ({
      data: action.payload.data
    }),
    [`${actionTypes.FETECH_ALL_CAPSULES}_REJECTED`]: (state, action) => ({
      data: API_FAILURE_MESSAGE
    })
  },
  { data: "Results will be shown here..." }
);
