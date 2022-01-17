import React from "react";
import ActiveOrInactive from "./ActiveOrInactive";
import { AiOutlineNumber } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import "./PlayerCard.css";

const PlayerCard = (props) => {
  return (
    <>
      <div className="card__container">
        <div>
          <img
            className="card__image"
            src={props.avatar}
            width={"270"}
            height={"255"}
            alt={props.name}
          />
        </div>
        <div className="card__details">
          <div className="card__details-id">
            <strong className="strong">Id:</strong>
            <AiOutlineNumber className="icon" id={props.id} />
            {props.id}
          </div>
          <div className="card__details-value">
            <strong className="strong">Status:</strong>
            <ActiveOrInactive className="icon" status={props.status} />
            {props.status}
          </div>
          <div>
            <strong className="strong">Ranking:</strong>
            <AiFillStar className="icon" /> {props.ranking}
          </div>
          <div className="card__details-value">
            {" "}
            {/* lo puse aquí por convención... */}
            <h2>Nickname: {props.name}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;

/* 
<div className="card__player-name">
<strong className="strong">nickname:{props.name}</strong>
</div> */
