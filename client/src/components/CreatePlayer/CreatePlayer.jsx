import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addPlayer, getAllPlayers } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";

import "./CreatePlayer.css";

function CreatePlayer(props) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    status: "",
    ranking: 0,
    avatar: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addPlayer(form));
    dispatch(getAllPlayers());
    setForm("");
    alert("Player Created Successfully");
  }

  const validate = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "Nickname is required";
    }
    if (!form.status) {
      errors.status = "Status is required";
    }
    if (!form.ranking) {
      errors.ranking = "Ranking is required";
    }
    if (!form.avatar) {
      errors.avatar = "Avatar is required";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,

    });
    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className="newP">
      <form className="player-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="newPlayer-form">
          <label className="label-title">Nickname:</label>
          <input
            className="input-box"
            type="text"
            name="name"
            value={props.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="danger">{errors.name}</p>}

          <label className="label-title">Status:</label>
          <textarea
            className="input-box"
            name="status"
            value={props.status}
            onChange={handleInputChange}
          />
          {errors.status && <p className="danger">{errors.status}</p>}

          <label className="label-title">Ranking:</label>
          <input
            className="input-box"
            type="number"
            min="0"
            max="1000"
            name="ranking"
            value={props.ranking}
            onChange={handleInputChange}
          />
          <label className="label-title">Avatar:</label>
          <textarea
            className="input-box"
            name="avatar"
            value={props.avatar}
            onChange={handleInputChange}
          />
          {errors.avatar && <p className="danger">{errors.avatar}</p>}
          <button className="newPlayer-submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      <p>
        Notice: Please, to choose your player's avatar, go to:
        <a className="click-here"
        href="https://vinicius73.github.io/gravatar-url-generator/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <h5>Click here</h5>
        </a>
      </p>
      <Link to="/" className="detail__back">
        <button className="detail__back">
          <BsFillArrowUpLeftCircleFill className="icon-back" />
          Go back
        </button>
      </Link>
    </div>
  );
}
export default CreatePlayer;
