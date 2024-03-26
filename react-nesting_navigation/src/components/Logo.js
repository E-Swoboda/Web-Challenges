import React from "react";
import Link from "./Link";
import Image from "./Image";
import logo from "../img/logo.jpg";

const Logo = () => {
  return (
    <Link href="#">
      <Image className="round-image" src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
