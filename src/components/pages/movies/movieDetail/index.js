import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import moviedbAPI from "api/moviedbAPI";

import "./movieDetail.scss";

const MovieDetail = () => {
  const { id } = useParams(); // обеспечивает доступ к параметрам поиска в URL.

  const [movieDetail, setMovieDetail] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    moviedbAPI
      .get(`movie/${id}`)
      .then((res) => {
        const moviesInfo = res?.data || {};

        setMovieDetail(moviesInfo);
        setLoader(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  if (loader) {
    return (
      <Grid container justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Grid>
    );
  }

  const { title, overview } = movieDetail;
  const poster = movieDetail.poster_path;

  return (
    <Grid container justifyContent="center">
      <Grid container item xs={12} sm={10} md={9} lg={9}>
        <div className="movie_detail_wrapper">
          <div className="movie_detail_image">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster}`}
              alt=""
            />
          </div>
          <div className="movie_detail_content">
            <h2 className="movie_detail_content_title">{title}</h2>
            <h3 className="movie_detail_content_plot">Сюжет</h3>
            <h4 className="movie_detail_content_description">{overview}</h4>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default MovieDetail;
