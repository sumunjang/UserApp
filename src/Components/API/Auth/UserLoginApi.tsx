import { ServerRoutes } from "../../Routes";
import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";
import Store, { ReduxActions } from "../../Redux/Store";

interface ServerResponse {
  username: string;
  tokens: string;
}

interface ServerData {
  userid: string;
  password: string;
}

const PostLogin = (data: ServerData) =>
  BaseApi.post(ServerRoutes.serverLogin, data).then(
    (response: AxiosResponse<ServerResponse>) => {
      Cookies.LoginCookies.setLoginCookies(response.data);
      Store.dispatch(ReduxActions.setUserData(response.data.username));
    }
  );

export default PostLogin;
