import React from "react";
import LogoLink from "./LogoLink";
import SearchField from "./SearchField";
import Icons from "./Icons";
import PropTypes from "prop-types";
import "./_SearchBar.scss";

const SearchBarContainer = props => {
  return (
    <div
      className={
        props.isTop
          ? "search-bar__container"
          : "search-bar__container--scroll search-bar__container"
      }
    >
      <div
        className={props.isTop ? "search-bar__main" : "search-bar__main scroll"}
      >
        <LogoLink isTop={props.isTop} />
        <SearchField
          isTop={props.isTop}
          searchText={props.searchText}
          searchOnChange={props.searchOnChange}
        />
        <Icons logout={props.logout} isTop={props.isTop} />
      </div>
    </div>
  );
};

SearchBarContainer.propTypes = {
  isTop: PropTypes.bool,
  searchText: PropTypes.string,
  searchOnChange: PropTypes.func,
  logout: PropTypes.func
};

export default SearchBarContainer;
