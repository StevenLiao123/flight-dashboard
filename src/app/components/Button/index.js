import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Button = props => (
  <button className={props.colorClassname} onClick={props.onClick}>
    {props.text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  colorClassname: PropTypes.string
};

Button.defaultProps = {
  colorClassname: ""
};
export default Button;
