import serviceAuthInstance, { serviceAuth } from "@/lib/interceptor/admin_content/axios";

export const count = async () => {
  try {
    const response = await serviceAuthInstance.get("/count");
    console.log("count = ", response?.data);
    return response?.data
  } catch (error) {
    console.log(error);
  }
};
