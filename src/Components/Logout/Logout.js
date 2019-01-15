import React from "react";
import PropTypes from "prop-types";
import "./_Logout.scss";

const Logout = props => {
  return (
    <div
      className={
        props.isModalTrue
          ? "logout__cover"
          : "logout__cover  logout__cover--hidden"
      }
    >
      <p>Logout?</p>
      <form className="logout__container">
        <input
          onClick={props.logoutModal}
          type="submit"
          name="yes"
          className="logout__btn yes"
          value="Yes"
        />
        <input
          onClick={props.logoutModal}
          type="submit"
          name="no"
          className="logout__btn no"
          value="No"
        />
      </form>
    </div>
  );
};

Logout.propTypes = {
  isModalTrue: PropTypes.bool,
  logoutModal: PropTypes.func
};

export default Logout;
