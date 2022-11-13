import { ActionType } from '../../action-types';

interface GetAllChatsAction {
  type: ActionType.GET_ALL_CHATS;
}

interface GetAllChatsSuccessAction {
  type: ActionType.GET_ALL_CHATS_SUCCESS;
  payload: {}[];
}

interface GetAllChatsErrorAction {
  type: ActionType.GET_ALL_CHATS_ERROR;
  payload: string;
}

export type ChatsAction = GetAllChatsAction | GetAllChatsSuccessAction | GetAllChatsErrorAction;
