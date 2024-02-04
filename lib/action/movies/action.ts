"use server";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";

export const getMovies = async (searchQuery: string | null, page: string) => {
  try {
    const response = await serviceAuthInstance.get(
      `/content/?types=movies&is_archived=False&search_query=${searchQuery}&page=${page}`
    );
    console.log("movies = ", response?.data?.data);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (movieId: any) => {
  console.log("id = ", movieId);
  try {
    const response = await serviceAuthInstance.get(
      `/content/?types=movies&is_archived=True&pk=${movieId}`
    );
    console.log("movies from action = ", response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
