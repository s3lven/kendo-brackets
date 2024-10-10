import axios from "axios";
import { useCookies } from "next-client-cookies";

const BASE_URL = "http://backend:5000";

const axiosAPI = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

axiosAPI.interceptors.response.use(
	(response) => response,
	async (error) => {
		const prevRequest = error?.config;
		if (error?.response.status === 403 && !prevRequest?.sent) {
			prevRequest.sent = true;
			try {
				await axiosAPI.get("/refresh-token");
				const cookies = useCookies();
				const newAccessToken = cookies.get("accessToken");
				prevRequest.headers[
					"Authorization"
				] = `Bearer ${newAccessToken}`;
				return axiosAPI(prevRequest);
			} catch (refreshError) {
				window.location.href = "/login";
				return Promise.reject(refreshError);
			}
		}
	}
);

export default axiosAPI;
