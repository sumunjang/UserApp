import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {}

const UserDelete = () =>
  BaseApi.delete(`/profile`, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    Cookies.LoginCookies.setLoginCookies(undefined);
    return response;
  });

export default UserDelete;
