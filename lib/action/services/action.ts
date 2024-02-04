"use server";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import { revalidatePath } from "next/cache";
import { getErrorMessage } from "@/utils/errorMessage";
import { timeOut } from "@/types/types";

export const getServices = async (searchQuery: string | null, page: string) => {
  try {
    const response = await serviceAuth.get(
      `/fill_contents/ott/?search_query=${searchQuery}&page=${page}`,
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

export const postService = async (formData: FormData) => {
  const name = formData.get("name");
  const picture = formData.get("icons");
  try {
    const response = await serviceAuthInstance.post("/fill_contents/ott/", {
      name: name,
      picture: picture,
    });
    revalidatePath("/services");
    console.log(response?.data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteService = async (state: undefined, formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.delete(
      `/fill_contents/ott/?pk=${id}`
    );
    revalidatePath("/services");
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
