import React, { useState } from "react";
import classes from "./GiphySearch.module.css";
import axios from "axios";

const GiphySearch = (props) => {
  const [query, setQuery] = useState("");

  const queryHandler = async (event) => {
    event.preventDefault();
    props.onLoading(true);
    props.onError(false);
    try {
      const result = await axios(
        `https://api.giphy.com/v1/gifs/search?api_key=co7PJNwNArBYbndkadF839ZqzAmqzEom&q=${query}&limit=50`
      );
      props.onSearchQuery(result.data.data);
    } catch (err) {
      console.log(err);
      props.onError(true);
      setInterval(() => props.onError(false), 4000);
    }
    props.onLoading(false);
  };

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={classes.form}>
      <form onSubmit={queryHandler}>
        <input
          type="text"
          placeholder="search..."
          onChange={queryChangeHandler}
        />
        <button type="submit" className={classes.butttonMain} value={query}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GiphySearch;
