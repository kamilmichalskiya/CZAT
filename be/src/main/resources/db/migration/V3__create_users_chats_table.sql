CREATE TABLE users_chats
(
    user_id SERIAL,
    chat_id SERIAL,
    constraint users_chats_pk primary key (user_id, chat_id),
    constraint users_users_chats_fk foreign key (user_id) references users (id) on delete set null,
    constraint chats_users_chats_fk foreign key (chat_id) references chats (id) on delete set null
);

