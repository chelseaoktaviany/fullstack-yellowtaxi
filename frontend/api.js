import axios from "axios";

const api = axios.create({
  baseURL: "https://yellowtaxitrip-api.vercel.app",
});

export default api;
