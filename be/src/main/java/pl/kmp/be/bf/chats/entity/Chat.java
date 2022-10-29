package pl.kmp.be.bf.chats.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.kmp.be.bf.users.entity.User;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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

    public Chat(final String title, final Set<User> users, final Date lastMessageDate) {
        this.title = title;
        this.users = users;
        this.lastMessageDate = lastMessageDate;
    }
}
