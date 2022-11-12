import { ActionType } from '../../action-types';
import { LoginAction } from '../../actions';

interface LoginState {
  loading: boolean;
  error: string | null;
  userData: {
    loggedIn: boolean;
    login?: string;
    password?: string;
  };
}

const initialState = {
  loading: false,
  error: null,
  userData: {
    loggedIn: false,
  },
};

const userDataInitialState = {
  loggedIn: false,
  login: '',
  password: '',
};

const reducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN_USER || ActionType.REGISTER_USER:
      return { loading: true, error: null, userData: userDataInitialState };
    case ActionType.LOGIN_USER_SUCCESS || ActionType.REGISTER_USER_SUCCESS:
      return { loading: false, error: null, userData: action.payload };
    case ActionType.LOGIN_USER_ERROR || ActionType.REGISTER_USER_ERROR:
      return { loading: false, error: action.payload, userData: userDataInitialState };
    default:
      return state;
  }
};

export default reducer;
