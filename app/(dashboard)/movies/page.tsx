import React from "react";
import { getMovies } from "@/lib/action/movies/action";

const Movies = async () => {
  const movies = await getMovies();
  console.log("movies = ", movies);
  return <div>Movies</div>;
};

export default Movies;
