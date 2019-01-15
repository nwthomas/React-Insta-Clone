import React from "react";
import icons from "../../images/icons.png";
import PropTypes from "prop-types";
import styled from "styled-components";

const IndividualIcons = styled.div`
  width: 135px;
  top: 0;
  right: 0;
  margin: 12px 1.4% 0 33px;
  cursor: pointer;
`;

const Icons = props => {
  return (
    <IndividualIcons>
      <img onClick={props.logout} src={icons} alt="Social icons" />
    </IndividualIcons>
  );
};

Icons.propTypes = {
  logout: PropTypes.func,
  src: PropTypes.string
};

export default Icons;
