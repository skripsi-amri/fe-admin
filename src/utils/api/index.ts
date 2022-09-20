import axios from "axios";
import { Report } from "notiflix";
axios.defaults.withCredentials = true;
const baseURL = process.env.NEXT_PUBLIC_HOST;

const api = axios.create();

api.interceptors.request.use(
    async (config) => {
        config.baseURL = baseURL;
        if (config.url === "/login") {
            config.headers = {
                "X-Requested-With": "XMLHttpRequest",
                Accept: "application/json",
                "Content-Type": "application/json",
            };
            return config;
        }
        const getToken = await fetch("/api/token").then((res) => res.json());
        const access_token = getToken.accessToken;
        config.headers = {
            Authorization: `Bearer ${access_token}`,
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

/* It's intercepting the response from the server. If the response is 401 or 500, it will redirect to
login page. */
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            Report.failure("Sesi anda telah berakhir", "", "Login Ulang", () => {
                fetch("/api/logout")
                    .then((res) => res.json())
                    .then((res) => {
                        window.location.href = "/login";
                    });
            });
            // } else if (error.code === "ERR_NETWORK" || error.response.status === 500) {
        } else if (error.code === "ERR_NETWORK") {
            Report.failure("Jaringan Ke Server Bermasalah", "", "Coba Login Ulang", () => {
                fetch("/api/logout")
                    .then((res) => res.json())
                    .then((res) => {
                        window.location.href = "/login";
                    });
            });
        }
        return Promise.reject(error);
    }
);

export default api;