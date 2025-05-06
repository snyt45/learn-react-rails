import apiClient from "../apiClient";

export const hello = async () => {
  const response = await apiClient({
    method: "GET",
    url: "/hello/index",
  });
  return response.data;
};
