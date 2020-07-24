import LoginCookies from "./Cookies/LoginCookies";

const CheckLogin = (): boolean => {
  let loginData2 = LoginCookies.getLoginCookies();
  let loginData = String(loginData2);
  if (loginData === "undefined") {
    return false;
  } else {
    return true;
  }
};

export default CheckLogin;
