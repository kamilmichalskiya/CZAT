package pl.kmp.be.api;

import lombok.Getter;

@Getter
public enum LinkRelations {
    GET_MAIN_LINKS,

    LOGIN,
    LOGOUT,
    REGISTER,

    GET_ALL_CHATS,
    GET_CHAT,
    WRITE_TO_CHAT,
    WS_CHATS,

    SEND_MESSAGE,
    WS_MESSAGES
}
