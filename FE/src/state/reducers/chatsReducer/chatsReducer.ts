import { ActionType } from '../../action-types';
import { ChatsAction } from '../../actions';

interface UsersState {
  loading: boolean;
  error: string | null;
  data: chatData[];
}

export interface chatData {
  id: number;
  lastMessageDate: string;
  messages: {
    author: string;
    chatId: number;
    id: string;
    messageDate: string;
    text: string;
  }[];
  title: string;
  users: {
    username: string;
    password: string;
  }[];
  _links: {
    GET_CHAT: {
      href: string;
    };
    SEND_MESSAGE: {
      href: string;
    };
  };
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
      let result: chatData[] = [];
      if ('_embedded' in action.payload && 'uiChatList' in action.payload._embedded) {
        result = action.payload._embedded.uiChatList;
      }
      return { loading: false, error: null, data: result };
    case ActionType.GET_ALL_CHATS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
