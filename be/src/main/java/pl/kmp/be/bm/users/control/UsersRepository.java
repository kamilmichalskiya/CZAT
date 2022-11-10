package pl.kmp.be.bm.users.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.kmp.be.bm.users.entity.User;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface UsersRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);

    Set<User> findAllByUsernameIn(List<String> usernames);

    Optional<User> findByUsername(String username);
}
