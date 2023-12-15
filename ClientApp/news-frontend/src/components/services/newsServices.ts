// src/services/newsService.ts
import axios from 'axios';
import { NewsApiResponse } from '../types/news';

const API_BASE_URL = 'https://localhost:7073';

export const fetchNews = async (country: string, category: string): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${API_BASE_URL}/News/GetNews`, {
      params: { country, category },
    });
    return response.data;
  } catch (error: unknown) {
    // Type-checking the error object
    if (axios.isAxiosError(error)) {
      console.error('Error fetching news:', error.message);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
    }

    else {
      console.error('An unexpected error occurred:', error);
    }
    throw error;
  }

};

