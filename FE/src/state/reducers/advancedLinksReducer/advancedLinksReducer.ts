import { ActionType } from '../../action-types';
import { AdvancedLinksAction } from '../../actions';

interface LinksState {
  loading: boolean;
  error: string | null;
  data: AdvancedLinksData | null;
}

interface AdvancedLinksData {
  LOGOUT: string;
  GET_ALL_CHATS: string;
  WRITE_TO_CHAT: string;
  WS_QUEUE: string;
  WS_CHATS: string;
  WS_MESSAGES: string;
  MAIN_LINKS: string;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const initialLinksData = {
  LOGOUT: '',
  GET_ALL_CHATS: '',
  WRITE_TO_CHAT: '',
  WS_QUEUE: '',
  WS_CHATS: '',
  WS_MESSAGES: '',
  MAIN_LINKS: '',
};

const reducer = (state: LinksState = initialState, action: AdvancedLinksAction): LinksState => {
  switch (action.type) {
    case ActionType.GET_ADVANCED_LINKS:
      return { loading: true, error: null, data: null };
    case ActionType.GET_ADVANCED_LINKS_SUCCESS:
      const reducedAdvancedLinks: AdvancedLinksData = initialLinksData;
      action.payload.forEach(({ rel, href }) => {
        reducedAdvancedLinks[rel as keyof AdvancedLinksData] = href;
      });
      return { loading: false, error: null, data: reducedAdvancedLinks };
    case ActionType.GET_ADVANCED_LINKS_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export default reducer;
