import React from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./filters.scss";

const MoviesFilters = (props) => {
  const { onButtonSearsh, onLabelChange, handleChange, sorting } = props;

  return (
    <div className="movies_filters">
      <div className="movies_filters_input">
        <TextField
          fullWidth
          className="movies_filters_search"
          placeholder="Поиск по фильмам..."
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
      <div className="movies_filters_wrapper">
        <FormControl className="movies_filters_sorting">
          <InputLabel id="demo-simple-select-label">Сортировка по</InputLabel>
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

        <FormControl className="movies_filters_sorting">
          <InputLabel id="demo-simple-select-label">Фильтры</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={" "}
            label="Age"
            onChange={() => {}}
          >
            <MenuItem value={" "}>Жанры </MenuItem>
            <MenuItem value={" "}>Жанры</MenuItem>
            <MenuItem value={" "}>Жанры</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" disableElevation>
          Сбросить все
        </Button>
      </div>
    </div>
  );
};
export default MoviesFilters;
