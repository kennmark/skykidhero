import axios from "axios";

const client = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",
});

client.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  (error) =>
    Promise.reject(error)
);

client.interceptors.response.use(
  (response) => response,

  (error) => {
    const status =
      error.response?.status;

    const requestUrl =
      error.config?.url || "";

    const isLoginRequest =
      requestUrl.includes(
        "/auth/login"
      );

    if (
      status === 401 &&
      !isLoginRequest
    ) {
      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      if (
        window.location.pathname !==
        "/login"
      ) {
        window.location.assign(
          "/login"
        );
      }
    }

    return Promise.reject(error);
  }
);

export default client;