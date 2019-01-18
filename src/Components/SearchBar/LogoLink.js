import React from "react";
import PropTypes from "prop-types";
import instagramNameLogo from "../../images/instagram-name-logo.png";
import instagramIconLogo from "../../images/instagram-icon-logo.svg";
import styled, { keyframes, css } from "styled-components";

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const LogoLinks = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 180px;

  &:active {
    opacity: 0.6;
  }
`;

const IconLogo = styled.div`
  margin: 9px 0 0 6%;
  width: 30px;
  cursor: pointer;
`;

const DividerLine = styled.div`
  width: 6.7%;
  height: 27px;
  border-right: 1px solid black;
  margin-top: 9px;

  ${props =>
    !props.isTop &&
    css`
      animation: ${fadeOut} 0.15s forwards;
    `}
`;

const NameLogo = styled.div`
  margin: 3px 0 0 9%;
  width: 120px;
  color: black;
  cursor: pointer;

  ${props =>
    !props.isTop &&
    css`
      animation: ${fadeOut} 0.15s forwards;
    `}
`;

const LogoLink = props => {
  return (
    <LogoLinks>
      <IconLogo className="instagram-icon-logo">
        <img src={instagramIconLogo} alt="Instagram icon logo" />
      </IconLogo>
      <DividerLine isTop={props.isTop} />
      <NameLogo isTop={props.isTop}>
        <img src={instagramNameLogo} alt="Instagram name logo" />
      </NameLogo>
    </LogoLinks>
  );
};

LogoLink.defaultProps = {
  isTop: false
};

LogoLink.propTypes = {
  instagramIconLogo: PropTypes.string,
  isTop: PropTypes.bool,
  instagramNameLogo: PropTypes.string
};

export default LogoLink;
