import { createAction } from "redux-actions";
import { fetchAllCapsulesAjax, fetchRoadsterAjax, fetchLandingPadAjax } from "../api";

export const actionTypes = {
  FETCH_ALL_CAPSULES: "FETCH_ALL_CAPSULES",
  FETCH_ROADSTER: "FETCH_ROADSTER",
  FETCH_LANDING_PAD: "FETCH_LANDING_PAD",
  SET_LANDING_PAD_INPUT_VALUE: "SET_LANDING_PAD_INPUT_VALUE",
};

export const fetchAllCapsules = createAction(
  actionTypes.FETCH_ALL_CAPSULES,
  () => fetchAllCapsulesAjax()
);

export const fetchRoadster = createAction(
  actionTypes.FETCH_ROADSTER,
  () => fetchRoadsterAjax()
);

export const fetchLandingPad = createAction(
  actionTypes.FETCH_LANDING_PAD,
  (id) => fetchLandingPadAjax(id)
);

export const setLandingPadInputValue = createAction(
  actionTypes.SET_LANDING_PAD_INPUT_VALUE
);
