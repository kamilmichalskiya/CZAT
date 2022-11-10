package pl.kmp.be.api;

import lombok.Getter;

@Getter
public enum LinkRelations {
    MAIN_LINKS,
    ADVANCED_LINKS,

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
