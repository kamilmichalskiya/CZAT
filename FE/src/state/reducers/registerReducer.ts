import { ActionType } from '../action-types';
import { RegisterAction } from '../actions';

interface RegisterState {
  loading: boolean;
  error: string | null;
  data: {
    login?: string;
    password?: string;
    username?: string;
    loggedIn: boolean;
  };
}

const initialState = {
  loading: false,
  error: null,
  data: { loggedIn: false },
};

const reducer = (state: RegisterState = initialState, action: RegisterAction): RegisterState => {
  switch (action.type) {
    case ActionType.REGISTER_USER:
      return { loading: true, error: null, data: { loggedIn: false } };
    case ActionType.REGISTER_USER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.REGISTER_USER_ERROR:
      return { loading: false, error: action.payload, data: { loggedIn: false } };
    default:
      return state;
  }
};

export default reducer;
