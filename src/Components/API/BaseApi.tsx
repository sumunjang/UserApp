import axios from "axios";

export default axios.create({
  baseURL: "http://34.105.29.115:3000/",
  timeout: 3000,
});
