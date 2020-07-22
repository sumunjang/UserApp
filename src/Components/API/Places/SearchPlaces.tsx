import { ServerRoutes } from "../../Routes";
import BaseApi from "../BaseApi";
import Cookies from "../../Cookies";
import { AxiosResponse } from "axios";
import Store, { ReduxActions } from "../../Redux/Store";

interface ServerResponse {
  places: [
    {
      placeid: number;
      placeName: string;
      Address: string;
    }
  ];
}

const SearchPlaces = (data: string) =>
  BaseApi.get(`/places/search/${data}`, {
    headers: {
      Authorization: "Bearer " + Cookies.LoginCookies.getLoginCookies().token,
    },
  }).then((response: AxiosResponse<ServerResponse>) => {
    console.log(response);
    return response;
  });

export default SearchPlaces;
