import { ServerRoutes } from "../../Routes";
import BaseApi from "../BaseApi";

interface ServerData {
  name: string;
  userid: string;
  password: string;
}

interface ServerResponse {}

export default function post<ServerResponse>(data: ServerData) {
  return BaseApi.post(ServerRoutes.serverCreateUser, data).then(function (
    response
  ) {});
}
