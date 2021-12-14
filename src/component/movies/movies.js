import React from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import "./movies.scss";

const Movies = () => (
  <div className="movies">
    <div className="movies_banner">
      <Grid container justifyContent="center">
        <Grid container item xs={12} sm={10} md={8} lg={7}>
          <img
            src="https://ustaliy.ru/wp-content/uploads/2020/04/1573703523_friends.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </div>

    <Grid container justifyContent="center">
      <Grid container item xs={12} sm={10}>
        <div className="movie_card">
          <div className="movie_header">
            <h3> Что популярно </h3>
          </div>
          <div className="movie_wrapper">
            <a
              className="image"
              href="https://www.themoviedb.org/tv/88329-hawkeye"
              title="Соколиный глаз"
            >
              <div className="movie_image">
                <img
                  src="https://www.themoviedb.org/t/p/w220_and_h330_face/d9s5Ma2BC7y3A8sMpxqbxWj9VQA.jpg"
                  alt=""
                />
              </div>

              <div className="movie_content">
                <h2> Соколиный глаз ( 2021 )</h2>

                <h3 className="moxie_content_rating"> Рейтинг: 85% </h3>
              </div>
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
);

// axios
//   .get(
//     `https://api.themoviedb.org/3/movie/76341?api_key=b3b2808173dccf7a658ad31dd4253d93&language=rus-RU`
//   )
//   .then((res) => {
//     const persons = res.data;
//     console.log(persons);
//   });
// деталка фильма запрос

axios
  .get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
  )
  .then((res) => {
    const persons = res.data;
    console.log(persons);
  });
// список фильмов с лучшим рейтингом на сайте
export default Movies;
