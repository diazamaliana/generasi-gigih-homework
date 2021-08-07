import React from "react";
import Button from "../Button";
import Style from "./style.module.css";

interface ISearchBar {
  handleSearch: any
}

const SearchBar = ({ handleSearch } : ISearchBar) => {
  const [query, setQuery]: [string, (query: string) => void] = React.useState("");
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     query !== "" && handleSearch(query);
  };
  return (
    <div>
      <div className={Style.SearchBar}>
        <p>Let's find something for your playlist</p>
        <form onSubmit={handleSubmit}>
          <input
            name="track"
            className={Style.input}
            placeholder="Search for track, album, or artist"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            buttonStyle="btn--primary--solid" 
            buttonSize="btn--small"
            type="submit" >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};


export default SearchBar;