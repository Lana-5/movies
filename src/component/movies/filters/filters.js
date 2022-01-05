import React from "react";
import { Button, InputAdornment, TextField, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./filters.scss";

const MoviesFilters = (props) => {
  const {
    onButtonSearsh,
    onLabelChange,
    handleChange,
    sorting,
    genre,
    listGenres,
    onLabelChangeGenre,
    resetFilter,
    textInput,
  } = props;

  const itemsGenre = listGenres?.map((item) => (
    <MenuItem value={item.id} key={item.id}>
      {item.name}
    </MenuItem>
  ));

  return (
    <div className="movies_filters">
      <div className="movies_filters_wrapper">
        <div className="movies_filters_input">
          <TextField
            fullWidth
            className="movies_filters_search"
            placeholder="Поиск по фильмам..."
            value={textInput}
            onKeyDown={(ev) => {
              if (ev.keyCode === 13) {
                onButtonSearsh();
              }
            }}
            onChange={onLabelChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={onButtonSearsh}
                  >
                    Поиск
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <Grid
          className="movies_filters_parameters"
          display="flex"
          justifyContent="space-between"
          container
          spacing={2}
        >
          <Grid className="movies_filters_sorting" container item width="50%">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Сортировка по
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sorting}
                onChange={handleChange}
              >
                <MenuItem value={1}>Лучший рейтинг</MenuItem>
                <MenuItem value={2}>Популярность</MenuItem>
                <MenuItem value={3}>Дата выхода (сначала новые) </MenuItem>
                <MenuItem value={4}>Дата выхода (сначала старые) </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid
            className="movies_filters_genres"
            container
            item
            width="50%"
            xs="auto"
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Фильтр по жанрам
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genre}
                label="Age"
                onChange={onLabelChangeGenre}
              >
                {itemsGenre}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <div className="movies_filters_resetting">
          <Button variant="contained" onClick={resetFilter}>
            Сбросить все
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MoviesFilters;
