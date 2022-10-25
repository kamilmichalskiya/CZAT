import { ActionType } from '../action-types';
import { LoginAction } from '../actions';

interface LoginState {
  loading: boolean;
  error: string | null;
  loggedIn: boolean;
  userData: {
    login?: string;
    password?: string;
  };
}

const initialState = {
  loading: false,
  error: null,
  loggedIn: false,
  userData: {},
};

const reducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN_USER || ActionType.REGISTER_USER:
      return { loading: true, error: null, loggedIn: false, userData: {} };
    case ActionType.LOGIN_USER_SUCCESS || ActionType.REGISTER_USER_SUCCESS:
      return { loading: false, error: null, loggedIn: true, userData: action.payload };
    case ActionType.LOGIN_USER_ERROR || ActionType.REGISTER_USER_ERROR:
      return { loading: false, error: action.payload, loggedIn: false, userData: {} };
    default:
      return state;
  }
};

export default reducer;
