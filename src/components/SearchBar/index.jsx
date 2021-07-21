import { useState } from "react";
import Button from "../Button";
import Style from "./style.module.css";
const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    query !== "" && handleSearch(query);
  };
  return (
    <div>
      <div className={Style.SearchBar}>
        <form onSubmit={onSubmit}>
          <input
            name="track"
            className={Style.input}
            placeholder="Search for track, album, or artist"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" aria-label="search track">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};


export default SearchBar;