import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";
import UserProfile from "./UserProfile";

interface ServerResponse {}

interface ServerData {
  password: string;
}

interface UserData {
  userid: string;
  username: string;
}

const UserDelete = async (serverData: ServerData) => {
  const userData = (await UserProfile()).data as UserData;
  const { username, userid } = userData;
  const data = {
    password: serverData.password,
    username,
    userid,
  };
  console.log(data);
  BaseApi.put(`/profile`, data, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });
};

export default UserDelete;
