package pl.kmp.be.bm.messages.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.messages.entity.UiMessage;
import pl.kmp.be.bm.messages.control.MessagesRepository;
import pl.kmp.be.bm.messages.entity.Message;

@RequiredArgsConstructor
@Service
public class MessagesBF {
    private final MessagesRepository repository;
    private final SimpMessagingTemplate messagingTemplate;

    public UiMessage sendMessage(Long chatId, UiMessage uiMessage) {
        final Message message = new Message(uiMessage);
        message.setChatId(chatId);
        final UiMessage save = new UiMessage(repository.save(message));
        messagingTemplate.convertAndSend("/chat/" + chatId, save);
        return save;
    }
}
