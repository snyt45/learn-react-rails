import axios, { AxiosInstance, AxiosError } from 'axios';
import { InternalServerException, InValidServiceException, UnAuthorizedException, UnprocessableException } from "./exception";

export interface HttpClient {
  get<T = any>(url: string, params?: any): Promise<T>;
  post<T = any>(url: string, data?: any): Promise<T>;
  put<T = any>(url: string, data?: any): Promise<T>;
  patch<T = any>(url: string, data?: any): Promise<T>;
  delete<T = any>(url: string, params?: any): Promise<T>;
}

export interface ApiClientOptions {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export class ApiClient implements HttpClient {
  private client: AxiosInstance;

  constructor(options: ApiClientOptions) {
    this.client = axios.create({
      baseURL: options.baseURL,
      timeout: options.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    this.addErrorHandlingInterceptors();
  }

  private addErrorHandlingInterceptors = () => {
    this.client.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        if (error.response) {
          const { status } = error.response;
          const data = error.response.data as any;
          const message = data?.message || 'Unknown error';

          if (status === 400) {
            throw new InValidServiceException(data, message);
          } else if (status === 401) {
            throw new UnAuthorizedException(data, message);
          } else if (status === 422) {
            throw new UnprocessableException(data, message);
          } else if (status === 500) {
            throw new InternalServerException(data, message);
          }
        }
        throw new Error('Unknown network error');
      }
    );
  };

  public async get<T = any>(url: string, params?: any): Promise<T> {
    const response = await this.client.get<T>(url, { params });
    return response.data;
  }

  public async post<T = any>(url: string, data?: any): Promise<T> {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  public async put<T = any>(url: string, data?: any): Promise<T> {
    const response = await this.client.put<T>(url, data);
    return response.data;
  }

  public async patch<T = any>(url: string, data?: any): Promise<T> {
    const response = await this.client.patch<T>(url, data);
    return response.data;
  }

  public async delete<T = any>(url: string, params?: any): Promise<T> {
    const response = await this.client.delete<T>(url, { params });
    return response.data;
  }

  public getAxiosInstance(): AxiosInstance {
    return this.client;
  }
}

export const createApiClient = (options: ApiClientOptions): ApiClient => {
  return new ApiClient(options);
};

const API_BASE_URL = process.env.REACT_APP_BASE_URL

export const api = createApiClient({
  baseURL: `${API_BASE_URL}/api/v1`,
});

export const baseApi = createApiClient({
  baseURL: `${API_BASE_URL}`,
});
