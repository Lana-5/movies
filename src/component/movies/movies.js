import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { Link } from "react-router-dom";
import axios from "axios";
import "./movies.scss";
import MovieCard from "./movie_card/movieCard";
import MoviesFilters from "./filters/filters";

const Movies = () => {
  const [movieListInitial, setmovieListInitial] = useState(null); // изначальный массив
  const [filteredMovies, setfilteredArray] = useState([]); // отфильтрованный массив
  const [textInput, setTextInput] = useState(""); // хранится то, что мы ввели в input

  const onLabelChange = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
      )
      .then((res) => {
        let movies = res?.data?.results || [];
        movies =
          movies?.map((movie) => ({
            id: movie?.id || "",
            title: movie?.title || "",
            poster: movie?.poster_path || "",
            rating: movie?.vote_average || 0,
          })) || [];
        setmovieListInitial(movies);
        setfilteredArray(movies);
      });
  }, []);

  const items =
    filteredMovies?.map((item) => (
      <Link to={`/movie/${item.id}`} key={item.id}>
        <MovieCard movie={item} key={item.id} />
      </Link>
    )) || [];

  const onButtonSearsh = () => {
    setfilteredArray(
      // eslint-disable-next-line react/destructuring-assignment
      movieListInitial.filter((movie) =>
        movie.title.toLowerCase().includes(textInput.toLowerCase())
      )
    );
  };

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

      <Grid container justifyContent="center" className="movies_filters">
        <Grid container item xs={10} sm={9} md={8} lg={7}>
          <MoviesFilters
            movie={movieListInitial}
            onButtonSearsh={onButtonSearsh}
            onLabelChange={onLabelChange}
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
