import React from "react";
import "./Tag.css";

const Tag = ({ tag }) => {
  const classes = `tag ${tag === "admin" ? "Tag--highlight" : ""}`;

  return <li className={classes}>{tag}</li>;
};

export default Tag;
