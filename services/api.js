import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const directus = axios.create({
  baseURL: "https://adrinks-painel.host.zukt.cloud/",
});

export { api, directus };
