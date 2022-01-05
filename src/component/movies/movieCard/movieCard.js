import React from "react";
import "./movieCard.scss";

const MovieCard = ({ movie }) => {
  const { title, rating, poster, date } = movie;

  return (
    <div className="movie_wrapper">
      <div className="movie_image">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`}
          alt=""
        />
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
