"use server";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";

export const getMovies = async () => {
  try {
    const response = await serviceAuthInstance.get(
      "/content/?types=movies&is_archived=False"
    );
    console.log("movies = ", response?.data?.data);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (movieId: any) => {
  console.log("id = ", movieId)
  try {
    const response = await serviceAuthInstance.get(
      `/content/?types=movies&pk=${movieId}`
    );
    console.log("movies from action = ", response?.data);
    return response?.data?.data
  } catch (error) {
    console.log(error);
  }
};
