package pl.kmp.be.bm.users.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bm.users.control.UsersRepository;
import pl.kmp.be.bm.users.entity.User;
import pl.kmp.be.error.ErrorType;
import pl.kmp.be.error.ProcessException;

@RequiredArgsConstructor
@Service
public class UsersBF {
    private final UsersRepository repository;

    public void register(final UiUser user) {
        if (!repository.existsByUsername(user.getLogin())) {
            repository.save(new User(user));
        } else {
            throw new ProcessException(ErrorType.REGISTRATION_ERROR, user.getLogin());
        }
    }
}
