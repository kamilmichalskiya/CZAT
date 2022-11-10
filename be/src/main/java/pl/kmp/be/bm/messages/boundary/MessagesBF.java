package pl.kmp.be.bm.messages.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.chats.entity.UiMessage;
import pl.kmp.be.bm.chats.control.ChatsRepository;
import pl.kmp.be.bm.messages.control.MessagesRepository;
import pl.kmp.be.bm.messages.entity.Message;
import pl.kmp.be.bm.users.boundary.UsersBF;
import pl.kmp.be.bm.users.entity.User;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class MessagesBF {
    private final MessagesRepository repository;
    private final ChatsRepository chatsRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Transactional
    public UiMessage sendMessage(final Long chatId, final UiMessage uiMessage) {
        final String author = UsersBF.getLoggedUser().orElse("");
        final UiMessage message = new UiMessage(repository.save(new Message(uiMessage, author, chatId)));
        chatsRepository.findById(chatId).ifPresent(chat -> {
            chat.setLastMessageDate(message.getMessageDate());
            chat.getUsers().stream().map(User::getUsername).forEach(
                    username -> messagingTemplate.convertAndSendToUser(username, "/messages", message));
        });
        return message;
    }
}
