import React from "react";
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

export default SearchField;
