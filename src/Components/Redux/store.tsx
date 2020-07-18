import { createStore } from "redux";

const SetUserData = "userUserData" as const;
const GetUserData = "getUserData" as const;

interface SetUserDataAction {
  type: typeof SetUserData;
  payload: {
    userName: string;
  };
}

interface GetUserDataAction {
  type: typeof GetUserData;
}

const setUserData = (userName: string) => {
  return { type: SetUserData, payload: { userName } };
};

const getUserData = () => {
  return { type: GetUserData };
};

type Action = SetUserDataAction | GetUserDataAction;

export const ReduxActions = {
  setUserData,
  getUserData,
};

const reducer = (state = {}, action: Action) => {
  switch (action.type) {
    case SetUserData:
      return { username: action.payload.userName };
    case GetUserData:
      return {};
    default:
      return state;
  }
};

const Store = createStore(reducer);
export default Store;
