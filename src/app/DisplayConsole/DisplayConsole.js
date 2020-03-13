import React from "react";
import PropTypes from "prop-types";
import "./DisplayConsole.css";

const DisplayConsole = props => {
  return (
    <div className="display-console">
      <pre>{props.formattedData}</pre>
    </div>
  );
};

DisplayConsole.propTypes = {
  formattedData: PropTypes.string.isRequired
};

export default DisplayConsole;
