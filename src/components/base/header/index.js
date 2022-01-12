import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { logo } from "constants/images";
import "./header.scss";

const Header = () => (
  <div className="header">
    <Grid container justifyContent="center" alignItems="center">
      <Grid container alignItems="center" item xs={12} sm={10} md={8} lg={7}>
        <img src={`${logo}`} alt="logo" />
        <ul>
          <li>
            <Link to="/"> Фильмы </Link>{" "}
            {/*  используется для создания ссылок на разные маршруты и реализует навигацию по приложению */}
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
