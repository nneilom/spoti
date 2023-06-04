import axios from "axios";
import { API } from "../constants";

const confAxios = () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = tokens ? `Bearer ${tokens.access}` : null;

  const configuratedAxios = axios.create({
    baseURL: API,
    headers: { Authorization },
  });

  return configuratedAxios;
};

export default confAxios();
