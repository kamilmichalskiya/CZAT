package pl.kmp.be.bm.users.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bm.users.control.UsersRepository;
import pl.kmp.be.bm.users.entity.User;

@RequiredArgsConstructor
@Service
public class UsersBF {
    private final UsersRepository repository;

    public void register(final UiUser user) {
        if (!repository.existsByUsername(user.getLogin())) {
            repository.save(new User(user.getLogin(), user.getPassword()));
        } else {
            throw new IllegalArgumentException();
        }
    }
}
