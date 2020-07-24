import axios from "axios";

export default axios.create({
  baseURL: "https://sumunjangapi.codingnome.dev/",
  timeout: 3000,
});
