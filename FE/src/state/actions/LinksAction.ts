import { ActionType } from '../action-types';

interface GetLinksAction {
  type: ActionType.GET_LINKS;
}

interface GetLinksSuccessAction {
  type: ActionType.GET_LINKS_SUCCESS;
  payload: object[];
}

interface GetLinksErrorAction {
  type: ActionType.GET_LINKS_ERROR;
  payload: string;
}

export type LinksAction = GetLinksAction | GetLinksSuccessAction | GetLinksErrorAction;
