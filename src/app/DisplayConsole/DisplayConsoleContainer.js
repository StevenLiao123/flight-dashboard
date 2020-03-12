import { connect } from "react-redux";
import DisplayConsole from "./DisplayConsole";

const mapStateToProps = state => ({
  formattedData: JSON.stringify(state.displayConsole.data, null, 4)
});

export default connect(mapStateToProps, null)(DisplayConsole);
