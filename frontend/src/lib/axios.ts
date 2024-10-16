import axios from "axios";

const BASE_URL = "http://backend:5000/api/v1";

export const axiosAPI = axios.create({
	baseURL: BASE_URL,
});

