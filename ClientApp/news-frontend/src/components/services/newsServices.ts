import axios from 'axios';
import { NewsApiResponse } from '../types/news';

const API_BASE_URL = 'https://localhost:7073';

// Initialize a cache object
const newsCache: {[key: string]: NewsApiResponse} = {};

export const fetchNews = async (country: string, category: string): Promise<NewsApiResponse> => {
  const cacheKey = `${country}_${category}`;
  
  // Check if the data is already in the cache
  if (newsCache[cacheKey]) {
    return newsCache[cacheKey];
  }

  try {
    const response = await axios.get<NewsApiResponse>(`${API_BASE_URL}/News/GetNews`, {
      params: { country, category },
    });
    
    // Store response in cache
    newsCache[cacheKey] = response.data;
    
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching news:', error.message);
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error('Error', error.message);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
    throw error;
  }
};
