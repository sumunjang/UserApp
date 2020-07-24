import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {}

const UserVisitiedForm = (placeid: number, visitid: number) => {
  let token = "";
  if (Cookies.LoginCookies.getLoginCookies()) {
    token = Cookies.LoginCookies.getLoginCookies().token;
  }
  return BaseApi.get(`/forms/${placeid}/${visitid}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });
};

export default UserVisitiedForm;
