import React from "react";
import PropTypes from "prop-types";
import "./ControlConsole.css";
import Button from "../components/Button";

const ControlConsole = props => {
  return (
    <div className="control-console">
      <div className="control-console-capsules">
        <Button text="Capsules" onClick={props.onRoadsterClick} />
      </div>
      <div className="control-console-landing-pad">
        <form>
          <input
            type="text"
            name="landing-pad"
            value={props.landingPadInputValue}
            className={props.landingPadInputValidationClassname}
            onChange={props.onLandingPadInputChange}
            maxLength="15"
            placeholder="text"
          />
          <Button
            text="Landing Pad"
            className={props.landingPadBtnValidationClassname}
            onClick={props.onLandingPadClick}
          />
        </form>
      </div>
      <div className="control-console-roadster">
        <Button text="Roadster" onClick={props.onRoadsterClick} />
      </div>
    </div>
  );
};

ControlConsole.propTypes = {
  onCapsulesClick: PropTypes.func.isRequired,
  onLandingPadClick: PropTypes.func.isRequired,
  onLandingPadInputChange: PropTypes.func.isRequired,
  landingPadInputValue: PropTypes.string.isRequired,
  landingPadInputValidationClassname: PropTypes.string.isRequired,
  landingPadBtnValidationClassname: PropTypes.string.isRequired,
  onRoadsterClick: PropTypes.func.isRequired
};

export default ControlConsole;
