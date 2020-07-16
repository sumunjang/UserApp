// 홈
const Home = "/";

// 검색
const SearchMain = "/search";
const SearchResult = "/search/result";

// Form
const Form = "/form/:placeid";

// 유저
const UserPass = "/user/pass/:userid";
const UserVisitedList = "/user/visited-list/:userid";
const UserVisitedPlaceFormList = "/user/visited-form-list/:userid/:placeid";
const UserVisitedForm = "/user/visited-form/:placeid/:formid";
const UserEditProfile = "/user/profile/edit";

// Auth
const UserLogin = "/auth/login";
const UserCreate = "/auth/create";

export default {
  Home,
  UserPass,
  UserVisitedList,
  SearchMain,
  SearchResult,
  Form,
  UserVisitedPlaceFormList,
  UserVisitedForm,
  UserCreate,
  UserLogin,
  UserEditProfile,
};

// 서버 관련 routes
const serverCreateUser = "/auth/signup";

export const ServerRoutes = {
  serverCreateUser,
};
