CREATE TABLE chats
(
    id                SERIAL,
    title             VARCHAR(64),
    last_message_date DATE,
    constraint chats_pk primary key (id)
);

