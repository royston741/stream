import "./SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { useRef, useState } from "react";
import SearchResults from "./SearchResults";
import streamList from "../../../data/StreamList";

function SearchBar() {
  const [movieResults, setMovieResults] = useState([]);
  const [resultsAvailable, setResultsAvailable] = useState(false);
  const searchRef = useRef();

  const focusHandler = () => {
    searchRef.current.focus();
  };

  const resultsHandler = (event) => {
    // if input is empty string
    if (!event.target.value) {
      setMovieResults([]);
      return setResultsAvailable(false);
    }

    // if array is available
    setResultsAvailable(true);

    setMovieResults(
      streamList.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  return (
    <div className="search_container" onClick={focusHandler}>
      <div className="search_bar">
        <input
          type="text"
          className="search"
          placeholder="Search"
          ref={searchRef}
          onChange={resultsHandler}
        />
        <BiSearchAlt2 className="search_icon" />
      </div>
      {resultsAvailable && <SearchResults results={movieResults} />}
    </div>
  );
}

export default SearchBar;
