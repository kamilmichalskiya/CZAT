import { ActionType } from '../../action-types';

interface GetAdvancedLinksAction {
  type: ActionType.GET_ADVANCED_LINKS;
}

interface GetAdvancedLinksSuccessAction {
  type: ActionType.GET_ADVANCED_LINKS_SUCCESS;
  payload: { rel: string; href: string }[];
}

interface GetAdvancedLinksErrorAction {
  type: ActionType.GET_ADVANCED_LINKS_ERROR;
  payload: string;
}

export type AdvancedLinksAction = GetAdvancedLinksAction | GetAdvancedLinksSuccessAction | GetAdvancedLinksErrorAction;
