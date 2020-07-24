import { createStore } from "redux";

const SetUserData = "userUserData" as const;
const SetMessage = "setMessage" as const;

interface SetUserDataAction {
  type: typeof SetUserData;
  payload: {
    userName: string;
  };
}

interface SetMessageAction {
  type: typeof SetMessage;
  payload: {
    message: string;
  };
}

const setUserData = (userName: string) => {
  return { type: SetUserData, payload: { userName } };
};

const setMessage = (message: string) => {
  return { type: SetMessage, payload: { message } };
};

type Action = SetUserDataAction | SetMessageAction;

export const ReduxActions = {
  setUserData,
  setMessage,
};

const reducer = (state = {}, action: Action) => {
  switch (action.type) {
    case SetUserData:
      return { ...state, username: action.payload.userName };
    case SetMessage:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

const Store = createStore(reducer);
export default Store;
