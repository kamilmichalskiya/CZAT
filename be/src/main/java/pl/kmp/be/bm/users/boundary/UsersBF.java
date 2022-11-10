package pl.kmp.be.bm.users.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bm.users.control.UsersRepository;
import pl.kmp.be.bm.users.entity.User;
import pl.kmp.be.error.ErrorType;
import pl.kmp.be.error.ProcessException;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UsersBF {
    private final UsersRepository repository;
    private final PasswordEncoder passwordEncoder;

    public void register(final UiUser user) {
        if (!repository.existsByUsername(user.getUsername())) {
            repository.save(new User(user.getUsername(), passwordEncoder.encode(user.getPassword())));
        } else {
            throw new ProcessException(ErrorType.REGISTRATION_ERROR, user.getUsername());
        }
    }

    public static Optional<String> getLoggedUser() {
        final Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        final String username = principal instanceof UserDetails ? ((UserDetails) principal).getUsername() : null;
        return Optional.ofNullable(username);
    }
}
