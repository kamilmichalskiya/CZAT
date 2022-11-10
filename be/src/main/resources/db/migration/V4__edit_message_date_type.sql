ALTER TABLE public.chats
    ALTER COLUMN last_message_date TYPE timestamp USING last_message_date::timestamp;
