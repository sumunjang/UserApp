import { ServerRoutes } from "../../Routes";
import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {
  username: string;
  token: string;
}

interface ServerData {
  nickname: string;
  password: string;
}

const PostLogin = (data: ServerData) =>
  BaseApi.post(ServerRoutes.serverLogin, data).then(
    (response: AxiosResponse<ServerResponse>) => {
      Cookies.LoginCookies.setLoginCookies(response.data);
    }
  );

export default PostLogin;
