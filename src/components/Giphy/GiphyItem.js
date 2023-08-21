import React from "react";
import classes from "./GiphyItem.module.css";

const GiphyItem = (props) => {
  return (
    <div className={classes.containerImg} >
      <img src={props.data.images.fixed_height.url} alt="404" />
    </div>
  );
};

export default GiphyItem;
