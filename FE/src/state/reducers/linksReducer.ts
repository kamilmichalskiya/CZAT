import { ActionType } from '../action-types';
import { LinksAction } from '../actions';

interface LinksState {
  loading: boolean;
  error: string | null;
  data: object[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: LinksState = initialState, action: LinksAction): LinksState => {
  switch (action.type) {
    case ActionType.GET_LINKS:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_LINKS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_LINKS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
