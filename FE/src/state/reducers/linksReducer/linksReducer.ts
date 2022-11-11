import { ActionType } from '../../action-types';
import { LinksAction } from '../../actions';

interface LinksState {
  loading: boolean;
  error: string | null;
  data: linksData | null;
}

interface linksData {
  LOGIN: string;
  REGISTER: string;
  ADVANCED_LINKS: string;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const initialLinksData = {
  LOGIN: '',
  REGISTER: '',
  ADVANCED_LINKS: '',
};

const reducer = (state: LinksState = initialState, action: LinksAction): LinksState => {
  switch (action.type) {
    case ActionType.GET_LINKS:
      return { loading: true, error: null, data: null };
    case ActionType.GET_LINKS_SUCCESS:
      const reducedLinks: linksData = initialLinksData;
      action.payload.forEach(({ rel, href }) => {
        reducedLinks[rel as keyof linksData] = href;
      });
      return { loading: false, error: null, data: reducedLinks };
    case ActionType.GET_LINKS_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export default reducer;
