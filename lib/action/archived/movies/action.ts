"use server";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";

export const getArchivedMovies = async (
  searchQuery: string | null,
  page: string
) => {
  try {
    const response = await serviceAuthInstance.get(
      `/content/?types=movies&is_archived=True&search_query=${searchQuery}&page=${page}`
    );

    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};

// const response = await serviceAuthInstance.get(
//   `/content/?types=movies&is_archived=True&${
//     searchQuery ? `search_query=${searchQuery}` : ""
//   }&page=${page}`
// );
