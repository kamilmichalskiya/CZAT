import { ActionType } from '../action-types';

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

export type Action = SearchUsersAction | SearchUsersSuccessAction | SearchUsersErrorAction;
