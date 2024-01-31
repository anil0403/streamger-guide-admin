"use server";
import { serviceAuth } from "@/lib/interceptor/admin_content/axios";
import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";

export const getMovies = async () => {
  try {
    const response = await serviceAuthInstance.get(
      "/content/?types=movies&is_archived=False"
    );
    return response?.data?.data;
  } catch (error) {
    console.log(error);
  }
};
