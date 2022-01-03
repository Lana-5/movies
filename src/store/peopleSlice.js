import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const peopleSlice = createSlice({
  name: "people",
  initialState: { peopleListInitial: [], loader: true },
  reducers: {
    setPeopleListInitial(state, action) {
      state.peopleListInitial = action.payload.peopleListInitial;
    },
    setLoader(state, action) {
      state.loader = action.payload.loader;
    },
  },
});

export const { setPeopleListInitial, setLoader } = peopleSlice.actions;

export default peopleSlice.reducer;

export const fetchPeople = () => async (dispatch) => {
  try {
    await axios
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

        dispatch(setPeopleListInitial({ peopleListInitial: peoples }));
        dispatch(setLoader({ loader: false }));
      });
  } catch (e) {
    dispatch(setLoader({ loader: false }));
  }
};
