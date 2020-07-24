import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {}

const UserVisitiedForm = () => {
  let token = "";
  if (Cookies.LoginCookies.getLoginCookies()) {
    token = Cookies.LoginCookies.getLoginCookies().token;
  }
  return BaseApi.get(`/forms`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });
};

export default UserVisitiedForm;
