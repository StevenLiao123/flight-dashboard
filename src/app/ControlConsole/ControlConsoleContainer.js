import { connect } from "react-redux";
import ControlConsole from "./ControlConsole";
import { fetchAllCapsules } from "./actions";

const mapDispatchToProps = dispatch => ({
  onCapsulesClick: () => dispatch(fetchAllCapsules())
});

export default connect(null, mapDispatchToProps)(ControlConsole);
