import { ActionType } from '../action-types';

interface LoginUserAction {
  type: ActionType.LOGIN_USER;
}

interface LoginUserSuccessAction {
  type: ActionType.LOGIN_USER_SUCCESS;
  payload: { login: string; password: string; loggedIn: boolean };
}

interface LoginUserErrorAction {
  type: ActionType.LOGIN_USER_ERROR;
  payload: string;
}

interface RegisterUserAction {
  type: ActionType.REGISTER_USER;
}

interface RegisterUserSuccessAction {
  type: ActionType.REGISTER_USER_SUCCESS;
  payload: { login: string; password: string; loggedIn: boolean };
}

interface RegisterUserErrorAction {
  type: ActionType.REGISTER_USER_ERROR;
  payload: string;
}

interface SearchUsersAction {
  type: ActionType.SEARCH_USERS;
}

interface SearchUsersSuccessAction {
  type: ActionType.SEARCH_USERS_SUCCESS;
  payload: string[];
}

interface SearchUsersErrorAction {
  type: ActionType.SEARCH_USERS_ERROR;
  payload: string;
}

export type LoginAction = LoginUserAction | LoginUserSuccessAction | LoginUserErrorAction;
export type RegisterAction = RegisterUserAction | RegisterUserSuccessAction | RegisterUserErrorAction;
export type UsersAction = SearchUsersAction | SearchUsersSuccessAction | SearchUsersErrorAction;
