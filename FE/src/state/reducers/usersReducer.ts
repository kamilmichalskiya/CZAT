import { ActionType } from '../action-types';
import { UsersAction } from '../actions';

interface UsersState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: UsersState = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case ActionType.SEARCH_USERS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
