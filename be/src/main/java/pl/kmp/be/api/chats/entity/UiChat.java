package pl.kmp.be.api.chats.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bm.chats.entity.Chat;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
public class UiChat {
    private Long id;
    private String title;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss.SSS")
    private Date lastMessageDate;
    private Set<UiUser> users = new HashSet<>();
    private Set<UiMessage> messages = new HashSet<>();

    public UiChat(final Chat chat) {
        this.id = chat.getId();
        this.title = chat.getTitle();
        this.lastMessageDate = chat.getLastMessageDate();
        this.users = chat.getUsers().stream().map(UiUser::new).collect(Collectors.toSet());
    }
}
