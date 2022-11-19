import { ActionType } from '../../action-types';

interface GetAllChatsAction {
  type: ActionType.GET_ALL_CHATS;
}

interface GetAllChatsSuccessAction {
  type: ActionType.GET_ALL_CHATS_SUCCESS;
  payload:
    | {
        _embedded: {
          uiChatList: {
            id: number;
            lastMessageDate: string;
            messages: {
              author: string;
              chatId: number;
              id: string;
              messageDate: string;
              text: string;
            }[];
            title: string;
            users: {
              username: string;
              password: string;
            }[];
            _links: {
              GET_CHAT: {
                href: string;
              };
              SEND_MESSAGE: {
                href: string;
              };
            };
          }[];
        };
      }
    | {};
}

interface GetAllChatsErrorAction {
  type: ActionType.GET_ALL_CHATS_ERROR;
  payload: string;
}

export type ChatsAction = GetAllChatsAction | GetAllChatsSuccessAction | GetAllChatsErrorAction;
