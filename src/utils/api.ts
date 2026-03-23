import { AxiosError } from "axios";
import { showToast } from "@/utils/toaster";
import { ApiErrorHandlerParams, ApiResponse } from "@/types/api";

export const openAsBlobInNewTab = async (url: string) => {
  const response = await fetch(url, { method: 'GET', credentials: 'include' });

  if (!response.ok) {
    throw new Error('Failed to fetch file');
  }

  const blob = await response.blob();

  const blobUrl = URL.createObjectURL(blob);
  window.open(blobUrl, '_blank');

  setTimeout(() => URL.revokeObjectURL(blobUrl), 10_000);
};

export const downloadFileWithFileObj = (file: File) => {
  const fileUrl = URL.createObjectURL(file);

  const downloadLink = document.createElement('a');

  downloadLink.href = fileUrl;
  downloadLink.download = file.name;

  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(fileUrl);
};

export const blobToJson = async (blob: Blob) => {
  const text = await blob.text();
  return JSON.parse(text);
};

export const toBase64 = async (url: string) => {
  const res = await fetch(url);
  const blob = await res.blob();
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const withApiErrorHandler = <T, A extends unknown[]>(
  apiCall: (...args: A) => Promise<T>
) => {
  return async (...args: A): Promise<T | ApiResponse<T>> => {
    try {
      const response = await apiCall(...args);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return (error.response?.data as ApiResponse<T>) || {};
      }

      console.error('Non-Axios error:', error);
      return {
        success: false,
        message: (error as ApiResponse<T>).message,
        isError: true,
        error: {
          message: (error as ApiResponse<T>).message,
          statusCode: 500,
        }
      };
    }
  };
};

const formatError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};

const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError)?.isAxiosError === true;
};

const getAxiosErrorMessage = async (error: unknown): Promise<string> => {
  return Promise.resolve((error as ApiResponse).message || '');
};

export const apiErrorHandler = async ({ error, debugText = '', hideToast = false, detailedErr = false }: ApiErrorHandlerParams): Promise<string> => {
  let text: string = 'An unexpected error occurred ...';

  if (isAxiosError(error)) {
    switch ((error as AxiosError).code) {
      case 'ERR_NETWORK':
        text = 'Unable to connect to the server.';
        break;

      case 'ECONNABORTED':
      case 'ERR_TIMEOUT':
        text = 'Request timed out. The server is taking too long to respond';
        break;

      default:
        text = await getAxiosErrorMessage(error.response?.data);
        break;
    }
  } else {
    text = formatError((error as ApiResponse).message);
  }

  if (!hideToast && typeof window !== 'undefined') {
    showToast({ text, type: 'error' });
  }

  if (debugText.trim().length !== 0) {
    console.error(
      debugText,
      detailedErr ? error : text,
    );
  }

  return Promise.resolve(text);
};
