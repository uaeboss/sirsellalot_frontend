import "../styles/Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="search">
      <input type="text" className="search-input" />
      <button className="search-btn">
        <SearchIcon />
        Search
      </button>
    </div>
  );
};

export default Search;
