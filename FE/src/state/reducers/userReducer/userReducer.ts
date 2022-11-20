import { ActionType } from '../../action-types';
import { LoginAction, RegisterAction, LogoutAction } from '../../actions';

interface LoginState {
  loading: boolean;
  error: string | null;
  userData: {
    isRegistered: boolean;
    isLoggedIn: boolean;
    username?: string;
    password?: string;
  };
}

const initialState = {
  loading: false,
  error: null,
  userData: {
    isRegistered: false,
    isLoggedIn: false,
  },
};

const userDataInitialState = {
  isRegistered: false,
  isLoggedIn: false,
  username: '',
  password: '',
};

const reducer = (state: LoginState = initialState, action: LoginAction | RegisterAction | LogoutAction): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
    case ActionType.REGISTER_USER:
    case ActionType.LOGOUT_USER:
      return { loading: true, error: null, userData: userDataInitialState };
    case ActionType.LOGIN_USER_SUCCESS:
    case ActionType.REGISTER_USER_SUCCESS:
    case ActionType.LOGOUT_USER_SUCCESS:
      return { loading: false, error: null, userData: action.payload };
    case ActionType.LOGIN_USER_ERROR:
    case ActionType.REGISTER_USER_ERROR:
    case ActionType.LOGOUT_USER_ERROR:
      return { loading: false, error: action.payload, userData: userDataInitialState };
    default:
      return state;
  }
};

export default reducer;
