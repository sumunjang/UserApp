import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {}

const UserRecentlyVisit = () =>
  BaseApi.get(`/visits?items=5`, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });

export default UserRecentlyVisit;
