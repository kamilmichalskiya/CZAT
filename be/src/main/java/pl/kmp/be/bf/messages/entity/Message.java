package pl.kmp.be.bf.messages.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;
import pl.kmp.be.api.messages.entity.UiMessage;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@Document("messages")
public class Message {
    @MongoId
    private String id;
    private String text;
    private Long author;
    private Date messageDate;
    private Long chatId;

    public Message(UiMessage message) {
        this.id = message.getId();
        this.text = message.getText();
        this.author = message.getAuthor();
        this.messageDate = message.getMessageDate();
    }
}
