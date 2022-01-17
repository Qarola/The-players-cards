import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import {MdOutlineDoNotDisturbOn} from 'react-icons/md';
import './PlayerCard.css';

const ActiveOrInactive = (props) => {
  const active = <AiFillCheckCircle className="icon" />;
  const inactive = <MdOutlineDoNotDisturbOn className="icon" />;

  const isActive = (status) => {
    if (status.toLowerCase() === "active") {
      return active;
    } else if (status.toLowerCase() === "inactive") {
      return inactive;
    } 
  };
  return <>{isActive(props.status)}</>;
};

export default ActiveOrInactive;