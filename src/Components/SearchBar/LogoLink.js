import React from "react";
import PropTypes from "prop-types";
import instagramNameLogo from "../../images/instagram-name-logo.png";
import instagramIconLogo from "../../images/instagram-icon-logo.svg";
import "./_SearchBar.scss";

const LogoLink = props => {
  return (
    <div className="logo__links">
      <div className="instagram-icon-logo">
        <img src={instagramIconLogo} alt="Instagram icon logo" />
      </div>
      <div
        className={props.isTop ? "divider-line" : "display-none divider-line"}
      />
      <div
        className={
          props.isTop
            ? "instagram-name-logo"
            : "display-none instagram-name-logo"
        }
      >
        <img src={instagramNameLogo} alt="Instagram name logo" />
      </div>
    </div>
  );
};

LogoLink.propTypes = {
  instagramIconLogo: PropTypes.string,
  isTop: PropTypes.bool,
  instagramNameLogo: PropTypes.string
};

export default LogoLink;
