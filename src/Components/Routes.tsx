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
const UserCreate = "/user/create";

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
};
