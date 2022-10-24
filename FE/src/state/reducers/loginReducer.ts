import { ActionType } from '../action-types';
import { LoginAction } from '../actions';

interface LoginState {
  loading: boolean;
  error: string | null;
  data: {
    login?: string;
    password?: string;
    loggedIn: boolean;
  };
}

const initialState = {
  loading: false,
  error: null,
  data: { loggedIn: false },
};

const reducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      return { loading: true, error: null, data: { loggedIn: false } };
    case ActionType.LOGIN_USER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.LOGIN_USER_ERROR:
      return { loading: false, error: action.payload, data: { loggedIn: false } };
    default:
      return state;
  }
};

export default reducer;
