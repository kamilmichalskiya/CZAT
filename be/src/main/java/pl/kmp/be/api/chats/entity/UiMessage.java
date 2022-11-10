package pl.kmp.be.api.chats.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.kmp.be.bm.messages.entity.Message;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class UiMessage {
    private String id;
    private String text;
    private String author;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss.SSS")
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
