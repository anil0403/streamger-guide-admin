"use server";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { redirect } from "next/navigation";

export const getArchivedMovies = async (
  searchQuery: string | null,
  page: string
) => {
  try {
    const response = await serviceAuthInstance.get(
      `/content/?types=movies&is_archived=True&search_query=${searchQuery}&page=${page}`
    );
    console.log("archived mopvies = ", response?.data);
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

export const postArchivedMovie = async (formData: FormData) => {
  console.log("formData = ", formData);
  // const {
  //   audiolanguages,
  //   cast,
  //   location,
  //   genre,

  //   title,
  //   description,
  //   age_rating,
  //   release_date,
  //   director,
  //   producer,
  //   thumbnail,
  //   service,
  //   isArchived,
  // } = Object.fromEntries(formData);
  // const title = formData.get("title");
  // const audiolanguages = formData.get("audiolanguages");

  const audiolanguages = formData.getAll("audiolanguages");
  const cast = formData.getAll("cast");
  const location = formData.getAll("location");
  const genre = formData.getAll("genre");

  const title = formData.getAll("title");
  const description = formData.getAll("description");
  const age_rating = formData.getAll("age_rating");
  const release_date = formData.getAll("release_date");
  const rating = formData.getAll("rating");

  const director = formData.getAll("director");
  const producer = formData.getAll("producer");
  const service = formData.getAll("service");
  const isArchived = formData.getAll("isArchived");
  const thumbnail = formData.getAll("thumbnail");
  const duration = formData.getAll("duration");

  console.log("audiolanguages = ", audiolanguages);


  try {
    const response = await serviceAuthInstance.post(
      "/content/guide/?movies=True",
      {
        audiolanguages: audiolanguages,
        cast: cast,
        location: location,
        genre: genre,
        title: title.toString(),
        description: description.toString(),
        age_rating: age_rating,
        duration: duration.toString(),

        rating: parseInt(rating.toString()),
        director: director,
        producer: producer,
        ott: parseInt(service.toString()),
        isArchived: isArchived,
        thumbnail: thumbnail.toString(),
        release_date: release_date.toString(),
      }
    );
    redirect("/archived/movies")
    console.log(response?.data);
  } catch (error) {
    console.log(error);
  }
};
