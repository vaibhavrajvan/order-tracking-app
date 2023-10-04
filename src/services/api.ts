// api.ts
import axios from 'axios';

// Define the base URL for your API
const baseURL = 'http://localhost:3000'; // Change this to your API endpoint

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL,
});

// Define functions to fetch data from your API
export const getOrders = async () => {
  try {
    const response = await api.get('/orders_sample.json'); // Adjust the URL accordingly
    return response.data;
  } catch (error) {
    throw error;
  }
};

// You can add more functions for other API endpoints if needed

export default api;
