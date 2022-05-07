import "./SearchResults.css";
import SearchResult from "./SearchResult";

function SearchResults(props) {
  return (
    <ul className="search_results">
      {props.results.map((result) => {
       return <SearchResult key={result.id} title={result.title} img={result.img} />
      })}
    </ul>
  );
}

export default SearchResults;
