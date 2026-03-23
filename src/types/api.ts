import { AxiosError } from "axios";

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  isError: boolean;
  redirect?: string;
  error: {
    message: string;
    statusCode: number;
  };
  stack?: string;
};

export interface ApiErrorHandlerParams {
  error: ApiResponse | Error | AxiosError;
  debugText?: string;
  hideToast?: boolean;
  detailedErr?: boolean;
};
