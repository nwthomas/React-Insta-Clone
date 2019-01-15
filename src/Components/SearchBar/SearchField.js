import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import searchIcon from "../../images/search.svg";

const SearchFieldClass = styled.input`
  margin: 12px auto 0;
  width: 210px;
  height: 23px;
  border: 2px solid #e2e2e2;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  text-align: center;
  font-size: 1.4rem;
  background: ${props =>
    props.searchText
      ? `#f9f9f9`
      : `#f9f9f9 url(${searchIcon}) no-repeat scroll 1px 1px`};
  background-size: 6%;
  background-position: 68px 7px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const SearchField = props => {
  return (
    <SearchFieldClass
      searchText={props.searchText}
      onChange={props.searchOnChange}
      className="search-field"
      type="text"
      name="searchText"
      placeholder="Search"
      value={props.searchText}
    />
  );
};

SearchField.propTypes = {
  searchOnChange: PropTypes.func,
  searchText: PropTypes.string
};

export default SearchField;
