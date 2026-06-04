const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : " https://india-latin-backend-1.onrender.com/api";

export default API_BASE_URL;