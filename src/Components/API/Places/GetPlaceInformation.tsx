import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";

interface ServerResponse {
  places: {
    placeid: number;
    placeName: string;
    Address: string;
  };
}

const SearchPlaces = (id: number) =>
  BaseApi.get(`/places/${id}`, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    return response;
  });

export default SearchPlaces;
