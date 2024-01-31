"use server";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const getServices = async (searchQuery: string | null, page: string) => {
  try {
    const response = await serviceAuth.get(
      `/fill_contents/ott/?search_query=${searchQuery}&page=${page}`
    );
    return response?.data?.data;
  } catch (error) {
    console.log("error");
  }
};

export const postService = async (formData: FormData) => {
  // Get values directly from FormData
  const name = formData.get("name");
  const picture = formData.get("icons");

  try {
    const response = await serviceAuthInstance.post("/fill_contents/ott/", {
      name: name,
      picture: picture,
    });
    console.log(response?.data);
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/services");
  redirect("/dashboard/services");
};

export const deleteService = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.delete(
      `/fill_contents/ott/?pk=${id}`
    );
    console.log(response?.data);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/services");
};
