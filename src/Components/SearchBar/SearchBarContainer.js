import React from "react";
import LogoLink from "./LogoLink";
import SearchField from "./SearchField";
import Icons from "./Icons";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

const adjustHeight = keyframes`
  0% {
    height: 76px;
  }
  100% {
    height: 52px;
  }
`;

const adjustItems = keyframes`
  0% {
    padding-top: 15px;
  }
  100% {
    padding-top: 0;
  }
`;

const SearchBarContainerClass = styled.div`
  width: 100%;
  border-bottom: 2px solid #e2e2e2;
  position: fixed;
  top: 0;
  z-index: 100;
  background: white;

  ${props =>
    !props.isTop &&
    css`
      animation: ${adjustHeight} 0.3s forwards;
    `}
`;

const SearchBarMain = styled.div`
  display: flex;
  justify-content: space-between;
  height: 61px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  position: relative;

  ${props =>
    !props.isTop &&
    css`
      animation: ${adjustItems} 0.3s forwards;
    `}
`;

const SearchBarContainer = props => {
  return (
    <SearchBarContainerClass isTop={props.isTop}>
      <SearchBarMain isTop={props.isTop}>
        <LogoLink isTop={props.isTop} />
        <SearchField
          isTop={props.isTop}
          searchText={props.searchText}
          searchOnChange={props.searchOnChange}
        />
        <Icons logout={props.logout} isTop={props.isTop} />
      </SearchBarMain>
    </SearchBarContainerClass>
  );
};

SearchBarContainer.defaultProps = {
  isTop: false,
  searchText: ""
};

SearchBarContainer.propTypes = {
  isTop: PropTypes.bool,
  searchText: PropTypes.string,
  searchOnChange: PropTypes.func,
  logout: PropTypes.func
};

export default SearchBarContainer;
