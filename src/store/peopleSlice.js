import { createSlice } from "@reduxjs/toolkit";
import moviedbAPI from "api/moviedbAPI";

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
    const res = await moviedbAPI.get("/person/popular");
    let peoples = res?.data?.results || [];

    peoples =
      peoples?.map((people) => ({
        id: people?.id || "",
        name: people?.name || "",
        poster: people?.profile_path || "",
      })) || [];

    dispatch(setPeopleListInitial({ peopleListInitial: peoples }));
    dispatch(setLoader({ loader: false }));
  } catch (e) {
    dispatch(setLoader({ loader: false }));
  }
};
