import axios from "axios";
import React, { useState, useEffect } from "react";
// import classes from "./Giphy.module.css";
import GiphyList from "./GiphyList";
import GiphySearch from "./GiphySearch";
import Spinner from "../UI/Spinner";
import Error from "../UI/Error";

const Giphy = () => {
  const key = "co7PJNwNArBYbndkadF839ZqzAmqzEom";
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=50`
        );
        setItems(result.data.data);
      } catch (err) {
        console.log(err);
        setIsError(true);
        setInterval(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isError) {
    return <Error />;
  }
  return isLoading ? (
    <div>
      <GiphySearch
        onLoading={(q) => setIsLoading(q)}
        onError={(q) => setIsError(q)}
        onSearchQuery={(q) => setItems(q)}
      />
      <Spinner/>
    </div>
  ) : (
    <div>
      <GiphySearch
        onLoading={(q) => setIsLoading(q)}
        onError={(q) => setIsError(q)}
        onSearchQuery={(q) => setItems(q)}
      />
      <GiphyList items={items} />
    </div>
  );
};

export default Giphy;
