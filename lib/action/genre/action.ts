"use server";

import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { revalidatePath } from "next/cache";

// fetch languages
export const getGenres = async (
  searchQuery: string | null,
  page: string
) => {
  try {
    const response = await serviceAuth.get(
      `/fill_contents/genre/?search_query=${searchQuery}&page=${page}`
    );

    return response?.data?.data;
  } catch (error) {
    console.log("error form getlang = ", error);
  }
};

// add language
export const postGenre = async (state: undefined, formData: FormData) => {
  const { name } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.post(
      "/fill_contents/genre/",
      {
        name: name,
      }
    );
    revalidatePath("/genre");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteGenre = async (state: undefined, formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.delete(
      `/fill_contents/genre/?pk=${id}`
    );
    revalidatePath("/genre");

    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
