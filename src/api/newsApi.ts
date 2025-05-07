import axios from 'axios';

const API_KEY = '0cd7dd0853624b2287cd91182920c672';
const BASE_URL = 'https://newsapi.org/v2';

export const getHeadlines = async (query = '', category = '') => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: 'us',
      q: query,
      category,
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};