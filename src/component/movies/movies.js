import React from "react";
import { Grid } from "@mui/material";

import "./movies.scss";

const Movies = () => (
  <div className="movies">
    <Grid container justifyContent="center">
      <Grid container item xs={8}>
        <img
          src="https://ustaliy.ru/wp-content/uploads/2020/04/1573703523_friends.jpg"
          alt=""
        />
      </Grid>
    </Grid>
  </div>
);
export default Movies;
