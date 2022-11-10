package pl.kmp.be.bm.messages.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;
import pl.kmp.be.api.chats.entity.UiMessage;

import java.time.Instant;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Document("messages")
public class Message {
    @MongoId
    private String id;
    private String text;
    private String author;
    private Date messageDate;
    private Long chatId;

    public Message(final UiMessage message, final String author, final Long chatId) {
        this.text = message.getText();
        this.author = author;
        this.messageDate = message.getMessageDate() != null ? message.getMessageDate() : Date.from(Instant.now());
        this.chatId = chatId;
    }
}
