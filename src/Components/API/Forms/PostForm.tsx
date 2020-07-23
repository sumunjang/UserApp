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

export default function post<ServerResponse>(
  data: ServerData,
  placeid: string
) {
  return BaseApi.post(`/form/${placeid}`, data, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then(function (response) {
    console.log(placeid);
  });
}
