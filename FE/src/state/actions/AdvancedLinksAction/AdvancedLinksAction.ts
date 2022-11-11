import { ActionType } from '../../action-types';

interface GetAdvancedLinksAction {
  type: ActionType.LOGIN_USER;
}

interface GetAdvancedLinksSuccessAction {
  type: ActionType.LOGIN_USER_SUCCESS;
  payload: { login: string; password: string; loggedIn: boolean };
}

interface GetAdvancedLinksErrorAction {
  type: ActionType.LOGIN_USER_ERROR;
  payload: string;
}

export type AdvancedLinksAction = GetAdvancedLinksAction | GetAdvancedLinksSuccessAction | GetAdvancedLinksErrorAction;
