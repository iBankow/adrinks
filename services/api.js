import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const directus = axios.create({
  baseURL: "http://localhost:8055",
});

export { api, directus };
