"use server";

import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getErrorMessage } from "@/utils/errorMessage";
import { timeOut } from "@/types/types";

// fetch languages
export const getLanguages = async (
  searchQuery: string | null,
  page: string
) => {
  try {
    const response = await serviceAuth.get(
      `/fill_contents/audiolanguages/?search_query=${searchQuery}&page=${page}`,
      {
        timeout: timeOut,
      }
    );

    return response?.data?.data;
  } catch (error: any) {
    if (error.code === "ECONNABORTED") {
      // Timeout error
      return {
        error: "Request timed out. Please try again.",
      };
    } else {
      // Other errors
      return {
        error: getErrorMessage(error),
      };
    }
  }
};

// add language
export const postLanguage = async (state: undefined, formData: FormData) => {
  const { name } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.post(
      "/fill_contents/audiolanguages/",
      {
        name: name,
      }
    );
    revalidatePath("/languages");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteLanguage = async (state: undefined, formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.delete(
      `/fill_contents/audiolanguages/?pk=${id}`
    );
    revalidatePath("/languages");

    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
