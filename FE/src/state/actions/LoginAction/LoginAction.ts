import { ActionType } from '../../action-types';

interface LoginUserAction {
  type: ActionType.LOGIN_USER;
}

interface LoginUserSuccessAction {
  type: ActionType.LOGIN_USER_SUCCESS;
  payload: { username: string; password: string; isLoggedIn: boolean; isRegistered: boolean };
}

interface LoginUserErrorAction {
  type: ActionType.LOGIN_USER_ERROR;
  payload: string;
}

export type LoginAction = LoginUserAction | LoginUserSuccessAction | LoginUserErrorAction;
