import React from "react";
import LogoLink from "./LogoLink";
import SearchField from "./SearchField";
import Icons from "./Icons";
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
export default SearchBarContainer;
