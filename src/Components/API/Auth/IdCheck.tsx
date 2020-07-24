import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {}

const UserProfile = (key: string) =>
  BaseApi.get(`/auth/idcheck/${key}`, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });

export default UserProfile;
