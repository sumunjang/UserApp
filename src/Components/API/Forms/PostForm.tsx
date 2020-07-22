import { ServerRoutes } from "../../Routes";
import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";

interface ServerData {
  requestForm: [
    {
      questionid: number;
      answer: string;
    }
  ];
}

interface ServerResponse {}

export default function post<ServerResponse>(data: ServerData) {
  return BaseApi.post("/forms/2", data, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then(function (response) {});
}
