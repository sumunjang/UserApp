import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {}

const UserRecentlyVisit = () => {
  let token = "";
  if (Cookies.LoginCookies.getLoginCookies()) {
    token = Cookies.LoginCookies.getLoginCookies().token;
  }
  return BaseApi.get(`/visits?items=5`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });
};

export default UserRecentlyVisit;
