import React from "react";
import { Button, InputAdornment, TextField, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./filters.scss";

const MoviesFilters = (props) => {
  const {
    searchButton,
    InputSearchChange,
    SortingSelectChange,
    sortingSelect,
    genreSelect,
    listGenresInitial,
    onChangeGenre,
    resetFilter,
    textInputSearch,
  } = props;

  const itemsGenre = listGenresInitial?.map((item) => (
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
            value={textInputSearch}
            onKeyDown={(ev) => {
              if (ev.keyCode === 13) {
                searchButton();
              }
            }}
            onChange={InputSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" onClick={searchButton}>
                    Поиск
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <Grid className="movies_filters_parameters" container spacing={2}>
          <Grid className="movies_filters_sorting" item width="50%">
            <FormControl fullWidth>
              <InputLabel>Сортировка по</InputLabel>
              <Select
                label="Сортировка по"
                value={sortingSelect}
                onChange={SortingSelectChange}
              >
                <MenuItem value={1}>Лучший рейтинг</MenuItem>
                <MenuItem value={2}>Популярность</MenuItem>
                <MenuItem value={3}>Дата выхода (сначала новые) </MenuItem>
                <MenuItem value={4}>Дата выхода (сначала старые) </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid className="movies_filters_genres" item width="50%">
            <FormControl fullWidth>
              <InputLabel>Фильтр по жанрам</InputLabel>
              <Select
                value={genreSelect}
                label="Фильтр по жанрам"
                onChange={onChangeGenre}
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
