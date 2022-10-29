package pl.kmp.be.bm.chats.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.kmp.be.bm.chats.entity.Chat;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChatsRepository extends JpaRepository<Chat, Long> {
    @Query("SELECT c FROM Chat c LEFT JOIN c.users u WHERE u.username IN :usernames GROUP BY c HAVING COUNT (u) = :usernamesSize")
    Optional<Chat> findByUsernames(List<String> usernames, long usernamesSize);

    @Query("SELECT c FROM Chat c LEFT JOIN c.users u WHERE u.username = :username")
    List<Chat> findAllByUsername(String username);
}
