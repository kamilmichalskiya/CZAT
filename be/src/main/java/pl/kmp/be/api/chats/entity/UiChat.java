package pl.kmp.be.api.chats.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bf.chats.entity.Chat;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class UiChat {
    private Long id;
    private String title;
    private Date lastMessageDate;
    private Set<UiUser> users = new HashSet<>();

    public UiChat(final Chat chat) {
        this.id = chat.getId();
        this.title = chat.getTitle();
        this.lastMessageDate = chat.getLastMessageDate();
    }
}
