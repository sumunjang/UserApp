import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {}

const UserSearchHistory = () => {
  let token = "";
  if (Cookies.LoginCookies.getLoginCookies()) {
    token = Cookies.LoginCookies.getLoginCookies().token;
  }
  return BaseApi.get(`/places/search/history`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });
};

export default UserSearchHistory;
