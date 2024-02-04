import serviceAuthInstance from "@/lib/interceptor/admin_content/axios";
import { getErrorMessage } from "@/utils/errorMessage";
import { timeOut } from "@/types/types";

export const count = async () => {
  try {
    const response = await serviceAuthInstance.get("/count", {
      timeout: timeOut, // Timeout in milliseconds (2 seconds)
    });

    console.log("count = ", response?.data);
    return response?.data;
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
