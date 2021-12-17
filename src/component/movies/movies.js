import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { Link } from "react-router-dom";
import axios from "axios";
import "./movies.scss";
import MovieCard from "./movie_card/movieCard";

const Movies = () => {
  const [movieCard, setMovieCard] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
      )
      .then((res) => {
        const movies = res?.data?.results || [];
        setMovieCard(
          movies?.map((movie) => ({
            id: movie?.id || "",
            title: movie?.title || "",
            poster: movie?.poster_path || "",
            rating: movie?.vote_average || 0,
          })) || []
        );
      });
  }, []);

  const items =
    movieCard?.map((item) => (
      <Link to={`/movie/${item.id}`} key={item.id}>
        <MovieCard movie={item} key={item.id} />
      </Link>
    )) || [];

  return (
    <div className="movies">
      <Grid container justifyContent="center" className="movies_banner">
        <Grid container item xs={12} sm={10} md={8} lg={7}>
          <img
            className="movies_banner__image"
            src="https://ustaliy.ru/wp-content/uploads/2020/04/1573703523_friends.jpg"
            alt=""
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid container item xs={12} sm={10} md={8} lg={7}>
          <h3 className="movies_list__header"> Что популярно </h3>
          <div className="movies_list">{items}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Movies;
