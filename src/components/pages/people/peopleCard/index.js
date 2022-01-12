import React from "react";
import { peoplePicture } from "constants/images";
import "./peopleCard.scss";

const PeopleCard = ({ people }) => {
  const { name, poster } = people;

  return (
    <div className="people_wrapper">
      <div className="people_image">
        <img src={`${peoplePicture}${poster}`} alt="" />
      </div>

      <div className="people_content">
        <h3 className="people_content_name"> {name} </h3>
      </div>
    </div>
  );
};

export default PeopleCard;
