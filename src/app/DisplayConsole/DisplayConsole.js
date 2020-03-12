import React from "react";
import PropTypes from "prop-types";
import "./DisplayConsole.css";

// Todo: swap this with api data later
const data = {
  name: "Elon Musk's Tesla Roadster",
  launch_date_utc: "2018-02-06T20:45:00.000Z",
  launch_date_unix: 1517949900,
  launch_mass_kg: 1350,
  launch_mass_lbs: 2976,
  norad_id: 43205,
  epoch_jd: 2458919.954305556,
  orbit_type: "heliocentric",
  apoapsis_au: 1.663924444957829,
  periapsis_au: 0.9860885481222006,
  semi_major_axis_au: 135.3198436331308,
  eccentricity: 0.2557858767506647,
  inclination: 1.077470362699857,
  longitude: 317.0845341316158,
  periapsis_arg: 177.5124140560681,
  period_days: 557.0900969261688,
  speed_kph: 75520.90368,
  speed_mph: 46926.49944054528,
  earth_distance_km: 331381153.346688,
  earth_distance_mi: 205910638.63618484,
  mars_distance_km: 147621041.86314037,
  mars_distance_mi: 91727434.4035414,
  flickr_images: [
    "https://farm5.staticflickr.com/4615/40143096241_11128929df_b.jpg",
    "https://farm5.staticflickr.com/4702/40110298232_91b32d0cc0_b.jpg",
    "https://farm5.staticflickr.com/4676/40110297852_5e794b3258_b.jpg",
    "https://farm5.staticflickr.com/4745/40110304192_6e3e9a7a1b_b.jpg"
  ],
  wikipedia: "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
  video: "https://youtu.be/wbSwFU6tY1c",
  details:
    "Elon Musk's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space."
};

const displayText = JSON.stringify(data, null, 4);

const DisplayConsole = (props) => {
  return (
    <div className="display-console">
      <pre>{displayText}</pre>
    </div>
  );
};

DisplayConsole.displayText = {
  formattedData: PropTypes.string.isRequired,
};

export default DisplayConsole;