import React, {useEffect} from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = ({sterm,setsterm}) => {
  const dispatch = useDispatch();
  const movieText =sterm? sterm : "Harry";
  const showText = sterm ? sterm :"Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch,movieText,showText]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
