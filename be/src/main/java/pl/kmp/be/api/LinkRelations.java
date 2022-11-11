package pl.kmp.be.api;

import lombok.Getter;

@Getter
public enum LinkRelations {
    MAIN_LINKS,
    ADVANCED_LINKS,

    LOGIN,
    LOGOUT,
    REGISTER,

    WS_QUEUE,
    WS_CHATS,
    WS_MESSAGES,

    GET_ALL_CHATS,
    GET_CHAT,
    WRITE_TO_CHAT,
    SEND_MESSAGE
}
