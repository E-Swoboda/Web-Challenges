import React from "react";
import Image from "./Image";
import avatar from "../img/avatar.jpg";

const Avatar = () => {
  return <Image className="round-image" src={avatar} alt="avatar" />;
};

export default Avatar;
