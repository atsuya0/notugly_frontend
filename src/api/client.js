import axiosbase from "axios";

export default axiosbase.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Content-Type": "application/json"
  }
});

