CREATE TABLE users
(
    id       SERIAL,
    username VARCHAR(32),
    password VARCHAR(32),
    constraint users_pk primary key (id)
);
