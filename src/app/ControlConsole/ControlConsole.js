import React from "react";
import PropTypes from "prop-types";
import "./ControlConsole.css";
import Button from "../components/Button";

const ControlConsole = props => {
  return (
    <div className="control-console">
      <div className="control-console-capsules">
        <Button text="Capsules" onClick={props.onCapsulesClick} />
      </div>
      <div className="control-console-landing-pad">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="landing-pad"
            onChange={props.onLandingPadInputChange}
            maxLength="15"
            placeholder="text"
          />
          <Button
            text="Landing Pad"
            onClick={() => props.onLandingPadClick(props.landingPadInputValue)}
          />
        </form>
      </div>
      <div className="control-console-roadster">
        <Button
          text="Roadster"
          colorClassname={props.roadsterBtnColorClassname}
          onClick={props.onRoadsterClick}
        />
      </div>
    </div>
  );
};

ControlConsole.propTypes = {
  onCapsulesClick: PropTypes.func.isRequired,
  onLandingPadClick: PropTypes.func.isRequired,
  onLandingPadInputChange: PropTypes.func.isRequired,
  landingPadInputValue: PropTypes.string.isRequired,
  onRoadsterClick: PropTypes.func.isRequired,
  roadsterBtnColorClassname: PropTypes.string.isRequired
};

export default ControlConsole;
