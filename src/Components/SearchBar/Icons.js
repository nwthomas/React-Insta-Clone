import React from "react";
import icons from "../../images/icons.png";
import "./_SearchBar.scss";

const Icons = props => {
  return (
    <div className="icons">
      <img onClick={props.logout} src={icons} alt="Social icons" />
    </div>
  );
};

export default Icons;
