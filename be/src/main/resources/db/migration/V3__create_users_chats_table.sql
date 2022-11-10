CREATE TABLE users_chats
(
    username VARCHAR(32),
    chat_id SERIAL,
    constraint users_chats_pk primary key (username, chat_id),
    constraint users_users_chats_fk foreign key (username) references users (username) on delete set null,
    constraint chats_users_chats_fk foreign key (chat_id) references chats (id) on delete set null
);

