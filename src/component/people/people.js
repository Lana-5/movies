import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchPeople } from "store/peopleSlice";
import PeopleCard from "./peopleCard/peopleCard";
import "./people.scss";

const Peoples = () => {
  const dispatch = useDispatch();

  const peopleListInitial = useSelector(
    (state) => state.people.peopleListInitial
  );
  const loader = useSelector((state) => state.people.loader);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

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
