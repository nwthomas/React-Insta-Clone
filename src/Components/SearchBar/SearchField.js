import React from "react";
import PropTypes from "prop-types";
import "./_SearchBar.scss";

const SearchField = props => {
  return (
    <input
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
