package pl.kmp.be.bf.chats.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.chats.entity.UiChat;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bf.chats.control.ChatsRepository;
import pl.kmp.be.bf.chats.entity.Chat;
import pl.kmp.be.bf.users.control.UsersRepository;
import pl.kmp.be.bf.users.entity.User;

import javax.transaction.Transactional;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ChatsBF {
    private final ChatsRepository repository;
    private final UsersRepository usersRepository;

    @Transactional
    public UiChat createChat(final UiChat chat) {
        final List<String> usernames = chat.getUsers().stream().map(UiUser::getLogin).collect(Collectors.toList());
        final Set<User> users = usersRepository.findAllByUsernameIn(usernames);
        final String title = chat.getTitle() == null || users.size() == 1 ? String.join("", usernames.get(0)) : chat.getTitle();
        //Niezabezpieczone
        final Chat savedChat = repository.save(new Chat(title, users, Date.valueOf(LocalDate.now())));
        users.forEach(user -> user.addChat(savedChat));
        return new UiChat(savedChat);
    }

    public Optional<UiChat> findChatByUsernames(UiChat chat) {
        final List<String> usernames = chat.getUsers().stream().map(UiUser::getLogin).collect(Collectors.toList());
        return repository.findByUsernames(usernames, usernames.size()).map(UiChat::new);
    }

    public Optional<UiChat> findById(Long id) {
        return repository.findById(id).map(UiChat::new);
    }

    public List<UiChat> findAllChats() {
        final String username = "Username";//TODO Podmienić z Spring security get username
        return repository.findAllByUsername(username).stream().map(UiChat::new).collect(Collectors.toList());
    }
}
