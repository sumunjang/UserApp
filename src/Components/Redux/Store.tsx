import { createStore } from "redux";

const SetUserData = "userUserData" as const;
const SetMessage = "setMessage" as const;
const SetSubmitFormData = "setSubmitFormData" as const;

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

interface SetSubmitFormDataAction {
  type: typeof SetSubmitFormData;
  payload: {
    submitFormData: object;
  };
}

const setUserData = (userName: string) => {
  return { type: SetUserData, payload: { userName } };
};

const setMessage = (message: string) => {
  return { type: SetMessage, payload: { message } };
};

const setSubmitFormData = (submitFormData: object) => {
  return { type: SetSubmitFormData, payload: { submitFormData } };
};

type Action = SetUserDataAction | SetMessageAction | SetSubmitFormDataAction;

export const ReduxActions = {
  setUserData,
  setMessage,
  setSubmitFormData,
};

const reducer = (state = {}, action: Action) => {
  switch (action.type) {
    case SetUserData:
      return { ...state, username: action.payload.userName };
    case SetMessage:
      return { ...state, message: action.payload.message };
    case SetSubmitFormData:
      return { ...state, submitFormData: action.payload.submitFormData };
    default:
      return state;
  }
};

const Store = createStore(reducer);
export default Store;
