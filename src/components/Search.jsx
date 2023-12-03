import "../styles/Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="search">
      <div className="search-content">
        <input type="text" className="search-input" />
        <button className="search-btn">
          <SearchIcon />
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
