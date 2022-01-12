import React from "react";
import { moviePoster } from "constants/images";
import "./movieCard.scss";

const MovieCard = ({ movie }) => {
  const { title, rating, poster, date } = movie;

  return (
    <div className="movie_wrapper">
      <div className="movie_image">
        <img src={`${moviePoster}/${poster}`} alt="" />
      </div>

      <div className="movie_content">
        <h3 className="movie_content_rating"> Рейтинг: {rating}</h3>
        <h3 className="movie_content_date">{date} </h3>

        <h2 className="movie_content__title"> {title} </h2>
      </div>
    </div>
  );
};

export default MovieCard;
