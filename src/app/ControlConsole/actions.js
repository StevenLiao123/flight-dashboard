import { createAction } from "redux-actions";
import { fetchAllCapsulesAjax } from "../api";

export const actionTypes = {
  FETECH_ALL_CAPSULES: "FETECH_ALL_CAPSULES"
};

export const fetchAllCapsules = createAction(
  actionTypes.FETECH_ALL_CAPSULES,
  () => fetchAllCapsulesAjax()
);
