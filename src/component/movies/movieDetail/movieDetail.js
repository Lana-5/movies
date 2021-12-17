import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import "./movieDetail.scss";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();

  const [moviedetail, setMovieDetail] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b3b2808173dccf7a658ad31dd4253d93&&language=ru-RU`
      )
      .then((res) => {
        const moviesInfo = res?.data || [];

        setMovieDetail(moviesInfo);
      });
  }, [id]);

  const { title, overview } = moviedetail;
  const poster = moviedetail.poster_path;
  console.log(moviedetail);
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
