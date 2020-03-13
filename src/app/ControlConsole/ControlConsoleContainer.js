import { connect } from "react-redux";
import ControlConsole from "./ControlConsole";
import {
  fetchAllCapsules,
  fetchRoadster,
  fetchLandingPad,
  setLandingPadInputValue
} from "./actions";

const colorChangedBySpeedKPH = state => {
  let speed_kph = state.displayConsole.data.speed_kph;
  if (speed_kph >= 75000) {
    return "orange";
  } else if (speed_kph > 73000 && speed_kph < 74999) {
    return "yellow";
  } else if (speed_kph > 70000 && speed_kph < 72999) {
    return "green";
  } else {
    return "red";
  }
};

const mapStateToProps = state => ({
  landingPadInputValue: state.displayConsole.id,
  roadsterBtnColorClassname: state.displayConsole.data
    ? colorChangedBySpeedKPH(state)
    : ""
});

const mapDispatchToProps = dispatch => ({
  onCapsulesClick: () => dispatch(fetchAllCapsules()),
  onRoadsterClick: () => dispatch(fetchRoadster()),
  onLandingPadInputChange: event =>
    dispatch(setLandingPadInputValue(event.target.value)),
  onLandingPadClick: id => dispatch(fetchLandingPad(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlConsole);
