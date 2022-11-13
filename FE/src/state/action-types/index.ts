export enum ActionType {
  GET_LINKS = 'get_links',
  GET_LINKS_SUCCESS = 'get_links_success',
  GET_LINKS_ERROR = 'get_links_error',

  GET_ADVANCED_LINKS = 'get_advanced_links',
  GET_ADVANCED_LINKS_SUCCESS = 'get_advanced_links_success',
  GET_ADVANCED_LINKS_ERROR = 'get_advanced_links_error',

  LOGIN_USER = 'login_user',
  LOGIN_USER_SUCCESS = 'login_user_success',
  LOGIN_USER_ERROR = 'login_user_error',

  REGISTER_USER = 'register_user',
  REGISTER_USER_SUCCESS = 'register_user_success',
  REGISTER_USER_ERROR = 'register_user_error',

  LOGOUT_USER = 'logout_user',
  LOGOUT_USER_SUCCESS = 'logout_user_success',
  LOGOUT_USER_ERROR = 'logout_user_error',

  GET_ALL_CHATS = 'get_all_chats',
  GET_ALL_CHATS_SUCCESS = 'get_all_chats_success',
  GET_ALL_CHATS_ERROR = 'get_all_chats_error',

  WRITE_TO_CHAT = 'write_to_chat',
  WRITE_TO_CHAT_SUCCESS = 'write_to_chat_success',
  WRITE_TO_CHAT_ERROR = 'write_to_chat_error',
}
