import React from "react";

const Link = ({ href, children }) => (
  <a href={href} className="navigation__link">
    {children}
  </a>
);

export default Link;
