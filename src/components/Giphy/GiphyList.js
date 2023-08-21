import React from "react";
import GiphyItem from "./GiphyItem";
import classes from "./GiphyList.module.css";

const GiphyList = (props) => {
  return props.items.length!==0 && (
    <div className={classes.container} >
      {props.items.map((item) => {
        return <GiphyItem key={item.id} data={item} />;
    })}
    </div>
  );
};

export default GiphyList;
