import style from "./Search.module.scss";
import { useState } from "react";

const Search = ({ inputValue = "", handleSearch = null }) => {
  const [searchValue, setSearchValue] = useState(inputValue);
  return (
    <div className={style.search_box}>
      <div>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className={style.button_search}
          onClick={() =>
            handleSearch !== null ? handleSearch(searchValue) : null
          }
        />
      </div>
    </div>
  );
};

export default Search;
