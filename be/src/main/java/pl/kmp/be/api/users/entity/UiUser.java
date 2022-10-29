package pl.kmp.be.api.users.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.kmp.be.bm.users.entity.User;

@Getter
@Setter
@NoArgsConstructor
public class UiUser {
    private String login;
    private String password;

    public UiUser(final User user) {
        this.login = user.getUsername();
    }
}
