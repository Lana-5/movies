import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "./header.scss";

const Header = () => (
  <div className="header">
    <Grid container justifyContent="center" alignItems="center">
      <Grid container alignItems="center" item xs={12} sm={10} md={8} lg={7}>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="logo"
        />
        <ul>
          <li>
            <Link to="/"> Фильмы </Link>
          </li>
          <li>
            <Link to="/people"> Люди </Link>
          </li>
          <li>
            <Link to="/additionally"> Ещё </Link>
          </li>
        </ul>
      </Grid>
    </Grid>
  </div>
);

export default Header;
