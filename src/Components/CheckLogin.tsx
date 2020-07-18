import LoginCookies from "./Cookies/LoginCookies";

const CheckLogin = (): boolean => {
  const loginData = LoginCookies.getLoginCookies();
  if (typeof loginData === "string") {
    return false;
  } else {
    return true;
  }
};

export default CheckLogin;
