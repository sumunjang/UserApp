import Cookies from "universal-cookie";

interface LoginData {
  username: string;
  token: string;
}

const setFormCookies = (data: any): void => {
  const cookies: Cookies = new Cookies();
  cookies.set("sumunjang_userapp_formcookie", data, { path: "/" });
};

const getFormCookies = (): LoginData => {
  const cookies: Cookies = new Cookies();
  return cookies.get("sumunjang_userapp_formcookie");
};

export default {
  setFormCookies,
  getFormCookies,
};
