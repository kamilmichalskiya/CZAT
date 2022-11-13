import { ActionType } from '../../action-types';

interface RegisterUserAction {
  type: ActionType.REGISTER_USER;
}

interface RegisterUserSuccessAction {
  type: ActionType.REGISTER_USER_SUCCESS;
  payload: { username: string; password: string; isLoggedIn: boolean; isRegistered: boolean };
}

interface RegisterUserErrorAction {
  type: ActionType.REGISTER_USER_ERROR;
  payload: string;
}

export type RegisterAction = RegisterUserAction | RegisterUserSuccessAction | RegisterUserErrorAction;
