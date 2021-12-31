import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { Link } from "react-router-dom";
import axios from "axios";
import "./movies.scss";
import MovieCard from "./movie_card/movieCard";
import MoviesFilters from "./filters/filters";

const Movies = () => {
  const [movieListInitial, setmovieListInitial] = useState(null); // изначальный массив
  const [filteredMovies, setFilteredArray] = useState([]); // отфильтрованный массив
  const [textInput, setTextInput] = useState(""); // хранится то, что мы ввели в input
  const [listGenres, setListGenres] = useState([]); // хранится список жанров их id и название
  const [sorting, setSorting] = useState(""); // сохраняется номер сортировки который был выбран ( как отсортировать данные)
  const [genre, setGenre] = useState(""); // хранится номер жанра который был выбран

  const unificationFilms = (id) => {
    if (!id) {
      setFilteredArray(
        movieListInitial.filter((movie) =>
          movie.title.toLowerCase().includes(textInput.toLowerCase())
        )
      );
    } else if (textInput === "") {
      setFilteredArray(
        movieListInitial.filter((movie) => movie?.genre.includes(id))
      );
    } else if (textInput !== "" && id) {
      setFilteredArray(
        movieListInitial
          .filter((movie) =>
            movie.title.toLowerCase().includes(textInput.toLowerCase())
          )
          .filter((movie) => movie?.genre?.includes(id)) || " "
      );
    }
  };

  const onButtonSearsh = () => {
    unificationFilms();
  };

  const onLabelChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  const resetFilter = () => {
    setFilteredArray(movieListInitial);
    setTextInput("");
    setGenre("");
    setSorting("");
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
      )
      .then((res) => {
        let movies = res?.data?.results || [];
        // console.log(movies); // Ответ какой он приходит с сервиса

        movies =
          movies?.map((movie) => ({
            id: movie?.id || "",
            title: movie?.title || "",
            poster: movie?.poster_path || "",
            rating: movie?.vote_average || 0,
            popularity: movie?.popularity || 0,
            date: movie?.release_date.replaceAll("-", ".") || 0,
            genre: movie?.genre_ids || 0,
          })) || [];
        setmovieListInitial(movies);
        setFilteredArray(movies);
      });
  }, []);

  useEffect(() => {
    if (sorting === 1) {
      setFilteredArray((prev) => {
        const array = [...prev];
        array.sort((Object1, Object2) => Object2.rating - Object1.rating);
        return array;
      });
    } else if (sorting === 2) {
      setFilteredArray((prev) => {
        const array = [...prev];
        array.sort(
          (Object1, Object2) => Object2.popularity - Object1.popularity
        );
        return array;
      });
    } else if (sorting === 3) {
      setFilteredArray((prev) => {
        const array = [...prev];
        array.sort(
          (Object1, Object2) => new Date(Object2.date) - new Date(Object1.date)
        );
        return array;
      });
    } else if (sorting === 4) {
      setFilteredArray((prev) => {
        const array = [...prev];
        array.sort(
          (Object1, Object2) => new Date(Object1.date) - new Date(Object2.date)
        );
        return array;
      });
    }
  }, [sorting]);

  const onLabelChangeGenre = (e) => {
    unificationFilms(e.target.value);
    setGenre(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
      )
      .then((res) => {
        const genre = res?.data?.genres || [];
        // console.log(genre); // жанры фильмов
        setListGenres(genre);
      });
  }, []);

  const items = filteredMovies.length
    ? filteredMovies?.map((item) => (
        <Link to={`/movie/${item.id}`} key={item.id}>
          <MovieCard movie={item} key={item.id} />
        </Link>
      ))
    : [];

  const item =
    filteredMovies.length === 0 ? "Нет фильмов по данному запросу" : [];

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
            movieListInitial={movieListInitial}
            onButtonSearsh={onButtonSearsh}
            onLabelChange={onLabelChange}
            handleChange={handleChange}
            sorting={sorting}
            genre={genre}
            listGenres={listGenres}
            onLabelChangeGenre={onLabelChangeGenre}
            setFilteredArray={setFilteredArray}
            resetFilter={resetFilter}
            textInput={textInput}
            filteredMovies={filteredMovies}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid container item xs={12} sm={10} md={8} lg={7}>
          <h3 className="movies_list__header"> Что популярно </h3>
          <div className="movies_list">{items}</div>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid container item xs={12} sm={10} md={8} lg={7}>
          <div className="movies_notification">{item}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Movies;
