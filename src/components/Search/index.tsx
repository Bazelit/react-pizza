import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice.js";
import styles from "./Search.module.scss";

const Search = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const clearSearch = () => {
    dispatch(setSearchValue(""));
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIcon}
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
      </svg>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        className={styles.input}
        placeholder="Поиск..."
      />
      {searchValue && (
        <svg
          onClick={clearSearch}
          className={styles.clearIcon}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              {`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
            </style>
          </defs>
          <g id="cross">
            <line className="cls-1" x1="7" y1="7" x2="25" y2="25" />
            <line className="cls-1" x1="7" y1="25" x2="25" y2="7" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
