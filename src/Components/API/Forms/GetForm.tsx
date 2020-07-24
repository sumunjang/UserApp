import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {}

const GetForm = (placeid: number) =>
  BaseApi.get(`/forms/${placeid}`, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });

export default GetForm;
