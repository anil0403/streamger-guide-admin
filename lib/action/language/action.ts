"use server";

import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// fetch languages
export const getLanguages = async (
  searchQuery: string | null,
  page: string
) => {
  try {
    const response = await serviceAuth.get(
      `/fill_contents/audiolanguages/?search_query=${searchQuery}&page=${page}`
    );

    return response?.data?.data;
  } catch (error) {
    console.log("error form getlang = ", error);
  }
};

// add language
export const postLanguage = async (formData: FormData) => {
  const { name } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.post(
      "/fill_contents/audiolanguages/",
      {
        name: name,
      }
    );
    console.log("post language = ", response?.data);
  } catch (error) {
    console.log("error");
  }

  revalidatePath("/dashboard/language");
  redirect("/dashboard/language");
};

export const deleteLanguage = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.delete(
      `/fill_contents/audiolanguages/?pk=${id}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/language");
};
