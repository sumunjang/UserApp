import { ServerRoutes } from "../../Routes";
import BaseApi from "../BaseApi";

interface ServerData {
  userid: string;
  password: string;
  name: string;
}

interface ServerResponse {
  nickname: string;
  password: string;
  name: string;
}

export default function post<ServerResponse>(data: ServerData) {
  return BaseApi.post(ServerRoutes.serverCreateUser, data).then(function (
    response
  ) {});
}
