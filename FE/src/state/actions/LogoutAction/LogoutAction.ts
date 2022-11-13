import { ActionType } from '../../action-types';

interface LogoutUserAction {
  type: ActionType.LOGOUT_USER;
}

interface LogoutUserSuccessAction {
  type: ActionType.LOGOUT_USER_SUCCESS;
  payload: { username: string; password: string; isLoggedIn: boolean; isRegistered: boolean };
}

interface LogoutUserErrorAction {
  type: ActionType.LOGOUT_USER_ERROR;
  payload: string;
}

export type LogoutAction = LogoutUserAction | LogoutUserSuccessAction | LogoutUserErrorAction;
