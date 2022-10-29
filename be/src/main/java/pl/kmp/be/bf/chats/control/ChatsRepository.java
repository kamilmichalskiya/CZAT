package pl.kmp.be.bf.chats.control;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.kmp.be.api.chats.entity.UiChat;
import pl.kmp.be.bf.chats.entity.Chat;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChatsRepository extends JpaRepository<Chat, Long> {
    Optional<Chat> findByUsernames(List<String> usernames);

    List<Chat> findAllByUsername(String username);
}
