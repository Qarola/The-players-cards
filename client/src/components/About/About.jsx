import React from "react";
import { Link } from "react-router-dom";

import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";

import "./About.css";

export default function About() {
  return (
    <div className="about-ctn">
      <h3 className="txt">The Players Web Application</h3>
      <hr />
      <div className="about-info">
        <p>
          This <strong>The Players App</strong> is an application Full-Stack. It
          has been built with the follow technologies: <strong>ReactJS, Redux, NodeJS,
          Express, Sequelize, and PostgreSQL.</strong>
        </p>
        <p>
          <strong>Player Hall of Fame:</strong> By default, this will display an interface with
          the 10 highest ranked players, including id, nickname, ranking,
          status, and avatar.
        </p>
        <p>
          <strong>Search Players:</strong> If the search text is an exact match to a player's id,
          this single match should be displayed. Otherwise, using pagination,
          all those matches that contain the search ordered by ranking in their
          nickname and/or status attributes must be displayed.
        </p>
        <p>
          <strong>Filter players:</strong> according to the status attribute and ordered by
          ranking. 
        </p>
        <p>
          <strong>Create a new player:</strong> a player can be created by entering the field nickname and
          optionally select an avatar.
          </p>
      </div>
      <Link to="/" className="detail__back">
        <button className="detail__back">
          <BsFillArrowUpLeftCircleFill className="icon-back" />
          Go back
        </button>
      </Link>
    </div>
  );
}
