import React from "react";
import { Link } from "react-router-dom";
import InputNickname from "./InputNickname";
import "./SearchBar.css";

const SearchBar = () => {
  const onClear = () => {
    window.location.reload();
  };

  return (
    <div className="form">
      <InputNickname />
      <div>
        <button className="form__select">
          <Link className="text" to="/add">
            Add a player
          </Link>{" "}
        </button>
      </div>
      <div>
        <button className="form__select">
          <Link className="text" to="/about">
            About
          </Link>{" "}
        </button>
      </div>
      <button className="form__select" type="submit" onClick={onClear}>
        {" "}
        <Link className="text" to="/">
          Reset
        </Link>
      </button>
    </div>
  );
};
export default SearchBar;
