import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3002",
  timeout: 3000,
});
