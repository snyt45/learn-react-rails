import axios, { AxiosResponse } from "axios";

interface ApiRequestOptions {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  params?: any;
}

const API_BASE_URL = process.env.REACT_APP_API_URL;

const apiClient = async (
  options: ApiRequestOptions
): Promise<AxiosResponse> => {
  const { method, url, params } = options;

  const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    let respose;

    switch (method) {
      case "GET":
        respose = await client.get(url, { params });
        break;
      case "POST":
        respose = await client.post(url, params);
        break;
      case "PUT":
        respose = await client.put(url, params);
        break;
      case "PATCH":
        respose = await client.patch(url, params);
        break;
      case "DELETE":
        respose = await client.delete(url, { data: params });
        break;
      default:
        throw new Error("Invalid HTTP method");
    }

    return respose;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default apiClient;
