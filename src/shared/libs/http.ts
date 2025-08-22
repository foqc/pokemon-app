/**
 * Axios HTTP client wrapper for the app.
 * Provides a configured instance for all API requests.
 */

import axios from "axios";

export const http = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});