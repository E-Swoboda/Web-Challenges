import "./styles.css";
import React from "react";

function Greeting({ name }) {
  console.log("Name:", name);
  if (name === "Coach") {
    return <h1> Hello, Coach! </h1>;
  } else {
    return <h1>Hello, {name}!</h1>;
  }
}

export default function App() {
  return <Greeting name="Coach" />;
}
