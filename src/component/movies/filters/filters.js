import React from "react";
import { Button, Input } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./filters.scss";

const MoviesFilters = (props) => {
  const { onButtonSearsh, onLabelChange } = props;

  return (
    <div className="movies_filters">
      <Input
        fullWidth
        className="movies_filters_search"
        placeholder="Поиск по фильмам..."
        onChange={onLabelChange}
      />
      <Button variant="contained" disableElevation onClick={onButtonSearsh}>
        Поиск
      </Button>

      <div className="movies_filters_wrapper">
        <FormControl className="movies_filters_sorting">
          <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={" "}
            label="Age"
            onChange={() => {}}
          >
            <MenuItem value={" "}>Рейтинг</MenuItem>
            <MenuItem value={" "}>Популярность</MenuItem>
            <MenuItem value={" "}>Дата выхода</MenuItem>
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
