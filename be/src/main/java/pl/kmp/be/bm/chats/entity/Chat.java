package pl.kmp.be.bm.chats.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.kmp.be.bm.users.entity.User;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.sql.Date;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "chats")
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Date lastMessageDate;
    @ManyToMany(mappedBy = "chats")
    private Set<User> users = new HashSet<>();

    public Chat(final String title, final Set<User> users) {
        this.title = title;
        this.lastMessageDate = Date.valueOf(LocalDate.now());
        this.users = users;
    }
}
