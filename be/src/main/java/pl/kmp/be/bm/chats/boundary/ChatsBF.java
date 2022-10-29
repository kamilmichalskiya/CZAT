package pl.kmp.be.bm.chats.boundary;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.chats.entity.UiChat;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bm.chats.control.ChatsRepository;
import pl.kmp.be.bm.chats.entity.Chat;
import pl.kmp.be.bm.users.control.UsersRepository;
import pl.kmp.be.bm.users.entity.User;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChatsBF {
    private final ChatsRepository repository;
    private final UsersRepository usersRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Transactional
    public UiChat createChat(final UiChat chat) {
        final List<String> usernames = chat.getUsers().stream().map(UiUser::getLogin).collect(Collectors.toList());
        final Set<User> users = usersRepository.findAllByUsernameIn(usernames);
        final String title = StringUtils.isBlank(chat.getTitle()) ? usernames.get(0) : chat.getTitle();
        final Chat savedChat = repository.save(new Chat(title, users));
        final UiChat uiChat = new UiChat(savedChat);
        users.forEach(user -> {
            user.addChat(savedChat);
            messagingTemplate.convertAndSendToUser(user.getUsername(), "/chats", uiChat);
        });
        return uiChat;
    }

    public Optional<UiChat> findChatByUsernames(final UiChat chat) {
        final List<String> usernames = chat.getUsers().stream().map(UiUser::getLogin).collect(Collectors.toList());
        return repository.findByUsernames(usernames, usernames.size()).map(UiChat::new);
    }

    public Optional<UiChat> findById(final Long id) {
        return repository.findById(id).map(UiChat::new);
    }

    public List<UiChat> findAllChats() {
        return repository.findAllByUsername("Login (Security context)").stream().map(UiChat::new).collect(Collectors.toList());
    }
}
