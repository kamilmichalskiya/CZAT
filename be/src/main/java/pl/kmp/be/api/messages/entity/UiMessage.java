package pl.kmp.be.api.messages.entity;

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

    public UiMessage(Message save) {
        id = save.getId();
        text = save.getText();
        author = save.getAuthor();
        messageDate = save.getMessageDate();
    }

}
