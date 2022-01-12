import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import moviedbAPI from "api/moviedbAPI";
import "./movies.scss";
import { banner } from "constants/images";
import MovieCard from "./movieCard";
import MoviesFilters from "./filters";

const Movies = () => {
  const [movieListInitial, setMovieListInitial] = useState(null); // изначальный массив
  const [filteredListMovies, setFilteredListMovies] = useState([]); // отфильтрованный массив
  const [textInputSearch, setTextInputSearch] = useState(""); // хранится то, что мы ввели в input
  const [listGenresInitial, setListGenresInitial] = useState([]); // хранится список жанров их id и название
  const [sortingSelect, setSortingSelect] = useState(""); // сохраняется номер сортировки который был выбран ( как отсортировать данные)
  const [genreSelect, setGenreSelect] = useState(""); // хранится номер жанра который был выбран
  const [loading, setLoading] = useState(true);

  const combiningSearchAndGenres = (id) => {
    if (!id) {
      setFilteredListMovies(
        movieListInitial.filter((movie) =>
          movie.title.toLowerCase().includes(textInputSearch.toLowerCase())
        )
      );
    } else if (textInputSearch === "") {
      setFilteredListMovies(
        movieListInitial.filter((movie) => movie?.genre.includes(id))
      );
    } else if (textInputSearch !== "" && id) {
      setFilteredListMovies(
        movieListInitial
          .filter((movie) =>
            movie.title.toLowerCase().includes(textInputSearch.toLowerCase())
          )
          .filter((movie) => movie?.genre?.includes(id)) || " "
      );
    }
  }; // обьединение работы поиска и выбора жанров

  const searchButton = () => {
    combiningSearchAndGenres();
  }; // выполняется ф-я при нажании на поиск

  const InputSearchChange = (e) => {
    setTextInputSearch(e.target.value);
  }; // выполняется при изменении текста в поиске

  const SortingSelectChange = (e) => {
    setSortingSelect(e.target.value);
  };

  const resetFilter = () => {
    setFilteredListMovies(movieListInitial);
    setTextInputSearch("");
    setGenreSelect("");
    setSortingSelect("");
  }; // очистка фильтров, поиска и сортировки

  const onChangeGenre = (e) => {
    combiningSearchAndGenres(e.target.value);
    setGenreSelect(e.target.value);
  };

  useEffect(() => {
    moviedbAPI
      .get(`movie/popular`)
      .then((res) => {
        let movies = res?.data?.results || [];

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
        setMovieListInitial(movies);
        setFilteredListMovies(movies);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []); // осуществляется get запрос, ответ обрабатывается и сохраняется в стейт

  useEffect(() => {
    if (sortingSelect === 1) {
      setFilteredListMovies((prev) => {
        const array = [...prev];
        array.sort((Object1, Object2) => Object2.rating - Object1.rating);
        return array;
      });
    } else if (sortingSelect === 2) {
      setFilteredListMovies((prev) => {
        const array = [...prev];
        array.sort(
          (Object1, Object2) => Object2.popularity - Object1.popularity
        );
        return array;
      });
    } else if (sortingSelect === 3) {
      setFilteredListMovies((prev) => {
        const array = [...prev];
        array.sort(
          (Object1, Object2) => new Date(Object2.date) - new Date(Object1.date)
        );
        return array;
      });
    } else if (sortingSelect === 4) {
      setFilteredListMovies((prev) => {
        const array = [...prev];
        array.sort(
          (Object1, Object2) => new Date(Object1.date) - new Date(Object2.date)
        );
        return array;
      });
    }
  }, [sortingSelect]); // в зависимости от выбранного select осуществляется сортировка

  useEffect(() => {
    moviedbAPI
      .get(`genre/movie/list`)
      .then((res) => {
        const listGenre = res?.data?.genres || [];

        setListGenresInitial(listGenre);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []); // сохранение списка жанров в стейт

  const items = filteredListMovies.length
    ? filteredListMovies?.map((item) => (
        <Link to={`/movie/${item.id}`} key={item.id}>
          <MovieCard movie={item} key={item.id} />
        </Link>
      ))
    : [];

  if (loading) {
    return (
      <Grid container justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Grid>
    );
  }
  const notificationNoMovies =
    filteredListMovies.length === 0 ? "Нет фильмов по данному запросу" : [];

  return (
    <div className="movies">
      <Grid container justifyContent="center" className="movies_banner">
        <Grid container item xs={12} sm={10} md={8} lg={7}>
          <img className="movies_banner__image" src={banner} alt="" />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className="movies_filters">
        <Grid container item xs={10} sm={9} md={8} lg={7}>
          <MoviesFilters
            searchButton={searchButton}
            InputSearchChange={InputSearchChange}
            SortingSelectChange={SortingSelectChange}
            sortingSelect={sortingSelect}
            genreSelect={genreSelect}
            listGenresInitial={listGenresInitial}
            onChangeGenre={onChangeGenre}
            setFilteredListMovies={setFilteredListMovies}
            resetFilter={resetFilter}
            textInputSearch={textInputSearch}
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
          <div className="movies_notification">{notificationNoMovies}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Movies;
