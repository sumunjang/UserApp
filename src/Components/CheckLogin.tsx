import LoginCookies from "./Cookies/LoginCookies";

const CheckLogin = (): boolean => {
  const loginData = LoginCookies.getLoginCookies();
  if (loginData === undefined) {
    return false;
  } else {
    return true;
  }
};

export default CheckLogin;
