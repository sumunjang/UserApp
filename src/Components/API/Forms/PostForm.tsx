import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import API from "..";

interface ServerData {
  requestForm: [
    {
      questionid: number;
      answer: string;
    }
  ];
}

interface ServerResponse {}

export default async function post<ServerResponse>(
  data: ServerData,
  placeid: string
) {
  const finaldata = {
    username: ((await API.User.UserProfile()) as any).data.username,
    ...data,
  };
  console.log(finaldata);
  return BaseApi.post(`/forms/${placeid}`, finaldata, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then(function (response) {
    console.log(placeid);
  });
}
