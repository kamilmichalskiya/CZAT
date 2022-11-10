package pl.kmp.be.bm.chats.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.chats.entity.UiChat;
import pl.kmp.be.api.chats.entity.UiMessage;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bm.chats.control.ChatsRepository;
import pl.kmp.be.bm.chats.entity.Chat;
import pl.kmp.be.bm.messages.control.MessagesRepository;
import pl.kmp.be.bm.users.boundary.UsersBF;
import pl.kmp.be.bm.users.control.UsersRepository;
import pl.kmp.be.bm.users.entity.User;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChatsBF {
    private final ChatsRepository repository;
    private final UsersRepository usersRepository;
    private final MessagesRepository messagesRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Transactional
    public UiChat createChat(final UiChat chat) {
        final String username = UsersBF.getLoggedUser().orElse("");
        final List<String> usernames = chat.getUsers().stream().map(UiUser::getUsername).collect(Collectors.toList());
        usernames.add(username);
        final Set<User> users = usersRepository.findAllByUsernameIn(usernames);
        final Chat savedChat = repository.save(new Chat(chat.getTitle(), users));
        final UiChat uiChat = new UiChat(savedChat);
        setChatTitle(username, uiChat);
        users.forEach(user -> {
            user.addChat(savedChat);
            messagingTemplate.convertAndSendToUser(user.getUsername(), "/chats", uiChat);
        });
        return uiChat;
    }

    public Optional<UiChat> findChatByUsernames(final UiChat chat) {
        final List<String> usernames = chat.getUsers().stream().map(UiUser::getUsername).collect(Collectors.toList());
        final String username = UsersBF.getLoggedUser().orElse("");
        usernames.add(username);
        return repository.findByUsernames(usernames, usernames.size()).map(UiChat::new).map(uiChat -> {
            setChatTitle(username, uiChat);
            return uiChat;
        });
    }

    public Optional<UiChat> findById(final Long id) {
        return UsersBF.getLoggedUser().flatMap(username -> repository.findById(id)
                .filter(chat -> chat.getUsers().stream().anyMatch(user -> user.getUsername().equals(username)))
                .map(UiChat::new)
                .map(chat -> {
                    setChatTitle(username, chat);
                    chat.setMessages(messagesRepository.findAllByChatId(id)
                            .stream()
                            .map(UiMessage::new)
                            .collect(Collectors.toSet()));
                    return chat;
                }));
    }

    public List<UiChat> findAllChats() {
        return UsersBF.getLoggedUser().map(username -> repository.findAllByUsername(username)
                .stream()
                .map(UiChat::new)
                .peek(chat -> setChatTitle(username, chat))
                .collect(Collectors.toList())).orElse(Collections.emptyList());
    }

    private void setChatTitle(String username, UiChat uiChat) {
        uiChat.setTitle(uiChat.getUsers()
                .stream()
                .map(UiUser::getUsername)
                .filter(login -> !login.equals(username))
                .findFirst()
                .orElse(""));
    }
}
