package pl.kmp.be.api.chats.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import pl.kmp.be.bm.messages.entity.Message;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
public class UiMessage {
    private String id;
    private String text;
    private String author;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    private Date messageDate;
    private Long chatId;

    public UiMessage(final Message message) {
        this.id = message.getId();
        this.text = message.getText();
        this.author = message.getAuthor();
        this.messageDate = message.getMessageDate();
        this.chatId = message.getChatId();
    }
}
