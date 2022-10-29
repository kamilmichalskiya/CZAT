package pl.kmp.be.api.chats.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.kmp.be.bm.messages.entity.Message;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
public class UiMessage {
    private String id;
    private String text;
    private Long author;
    private Date messageDate;

    public UiMessage(final Message message) {
        this.id = message.getId();
        this.text = message.getText();
        this.author = message.getAuthor();
        this.messageDate = message.getMessageDate();
    }
}
