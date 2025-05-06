import { api } from "../apiClient";

export const hello = async () => {
  const data = await api.get("/hello/index");
  return data;
};
