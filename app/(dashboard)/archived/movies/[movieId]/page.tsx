import AddMovieForm from "@/components/movie/add-movie-form";
import React from "react";
import { getLanguages } from "@/lib/action/language/action";
import { getCasts } from "@/lib/action/cast/action";
import { getLocations } from "@/lib/action/location/action";
import { getServices } from "@/lib/action/services/action";
import { getGenres } from "@/lib/action/genre/action";
import { getMovie } from "@/lib/action/movies/action";
import { Cast } from "lucide-react";
import UpdateMovieForm from "@/components/movie/update-movie-form";

interface ServicePageProps {
  searchParams?: Record<string, string | string[]>;
  params: { movieId: string };
}

const UpdateMoviePage = async ({
  searchParams,
  params: { movieId },
}: ServicePageProps) => {
  const searchQuery = searchParams?.searchQuery?.toString() || "";
  const page = searchParams?.page?.toString() || "1";

  const languages = await getLanguages(searchQuery, page);
  const casts = await getCasts(searchQuery, page);
  const locations = await getLocations(searchQuery, page);
  const services = await getServices(searchQuery, page);
  const genres = await getGenres(searchQuery, page);
  const movie = await getMovie(movieId);

  console.log("movie id = ", movieId);
  console.log("movie = ", movie)

  return (
    <div className="hidden h-full flex-1 flex-col  px-4  md:flex border-2 rounded-lg">
      <h2 className="text-lg font-semibold py-2 border-b-2">Update Movie</h2>
      <div>
        <UpdateMovieForm
          languagesProps={languages}
          castsProps={casts}
          locationsProps={locations}
          servicesProps={services}
          genresProps={genres}
          movieId={movieId}
        />
      </div>
    </div>
  );
};

export default UpdateMoviePage;
