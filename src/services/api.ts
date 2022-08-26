import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-vite.vercel.app/api",
});
