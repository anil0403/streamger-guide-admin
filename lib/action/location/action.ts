"use server";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getLocations = async (
  searchQuery: string | null,
  page: string
) => {
  try {
    const response = await serviceAuth.get(
      `/fill_contents/location/?search_query=${searchQuery}&page=${page}`
    );
    return response?.data?.data;
  } catch (error) {
    console.log("error");
  }
};

export const postLocation = async (state: undefined, formData: FormData) => {
  const { name } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.post(
      "/fill_contents/location/",
      {
        name: name,
      }
    );
    revalidatePath("/locations");
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log("error");
  }
};

export const deleteLocation = async (state: undefined, formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    const response = await serviceAuthInstance.delete(
      `/fill_contents/location/?pk=${id}`
    );
    console.log(response?.data);
    revalidatePath("/locations");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
