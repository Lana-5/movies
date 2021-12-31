import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

import PeopleCard from "./peopleCard/peopleCard";
import "./people.scss";

const Peoples = () => {
  const [peopleListInitial, setPeopleListInitial] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=b3b2808173dccf7a658ad31dd4253d93&language=ru-RU`
      )
      .then((res) => {
        let peoples = res?.data?.results || [];

        peoples =
          peoples?.map((people) => ({
            id: people?.id || "",
            name: people?.name || "",
            poster: people?.profile_path || "",
            known_for: people?.known_for || [],
            popularity: people?.popularity || 0,
            gender: people?.gender || 0,
          })) || [];
        setPeopleListInitial(peoples);
        setLoader(false);
      });
  }, []);

  if (loader) {
    return (
      <Grid container justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Grid>
    );
  }

  const itemsPeople =
    peopleListInitial?.map((item) => (
      <PeopleCard people={item} key={item.id} />
    )) || [];

  return (
    <Grid container justifyContent="center">
      <Grid container item xs={12} sm={10} md={8} lg={7}>
        <h3 className="peoples_list__header"> Популярные люди </h3>
        <div className="peoples_list">{itemsPeople} </div>
      </Grid>
    </Grid>
  );
};
export default Peoples;
