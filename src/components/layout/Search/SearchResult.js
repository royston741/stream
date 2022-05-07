function SearchResult(props) {
  return (
    <li>
      <div>
        <img className="search_img" src={props.img} alt="" />
        <p className="search_title">{props.title}</p>
      </div>
      <hr />
    </li>
  );
}

export default SearchResult;
