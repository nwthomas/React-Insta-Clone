import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const LogoutCover = styled.div`
  z-index: 90;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #f9f9f9;

  ${props =>
    !props.isModalTrue &&
    css`
      display: none;
    `}

  p {
    width: 100%;
    text-align: center;
    margin: 200px auto 20px;
    font-size: 1.4rem;
    font-weight: bold;
  }

  form {
    margin: 0px auto 0;
    height: 150px;
    width: 100%;
    max-width: 400px;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    background: white;

    input {
      height: 75px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      border: none;
      -webkit-appearance: none;

      &:hover {
        background: #e2e2e2;
        opacity: 0.5;
      }
    }

    input:last-child {
      border-top: 1px solid #e2e2e2;
    }
  }
`;

const Logout = props => {
  return (
    <LogoutCover isModalTrue={props.isModalTrue}>
      <p>Logout?</p>
      <form>
        <input
          onClick={props.logoutModal}
          type="submit"
          name="yes"
          value="Yes"
        />
        <input onClick={props.logoutModal} type="submit" name="no" value="No" />
      </form>
    </LogoutCover>
  );
};

Logout.defaultProps = {
  isModalTrue: false
};

Logout.propTypes = {
  isModalTrue: PropTypes.bool,
  logoutModal: PropTypes.func
};

export default Logout;
