"use server";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getErrorMessage } from "@/utils/errorMessage";
import { timeOut } from "@/types/types";
export const getCasts = async (searchQuery: string | null, page: string) => {
  try {
    const response = await serviceAuth.get(
      `/fill_contents/cast/?search_query=${searchQuery}&page=${page}`,{
        timeout: timeOut
      }
    );
    console.log("cast = ", response?.data);
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

export const deleteCast = async (state: undefined, formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.delete(
      `/fill_contents/cast/?pk=${id}`
    );
    revalidatePath("/cast");
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const postCast = async (formData: FormData) => {
  const name = formData.get("name");
  const profile = formData.get("icons");
  console.log(name, profile);
  try {
    const response = await serviceAuthInstance.post("/fill_contents/cast/", {
      name: name,
      picture: profile,
    });

    revalidatePath("/cast");
    console.log("post service = ", response?.data);
    // return response;
  } catch (error) {
    console.log(error);
  }
};
