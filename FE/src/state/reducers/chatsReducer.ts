import { ActionType } from '../action-types';
import { ChatsAction } from '../actions';

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

const reducer = (state: UsersState = initialState, action: ChatsAction): UsersState => {
  switch (action.type) {
    case ActionType.GET_ALL_CHATS:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_ALL_CHATS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_ALL_CHATS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
