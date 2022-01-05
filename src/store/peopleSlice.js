import { createSlice } from "@reduxjs/toolkit";

import instance from "./api/api";

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
    await instance.get("/person/popular").then((res) => {
      let peoples = res?.data?.results || [];

      peoples =
        peoples?.map((people) => ({
          id: people?.id || "",
          name: people?.name || "",
          poster: people?.profile_path || "",
        })) || [];

      dispatch(setPeopleListInitial({ peopleListInitial: peoples }));
      dispatch(setLoader({ loader: false }));
    });
  } catch (e) {
    dispatch(setLoader({ loader: false }));
  }
};
