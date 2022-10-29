package pl.kmp.be.bm.messages.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.kmp.be.api.messages.entity.UiMessage;
import pl.kmp.be.bm.messages.control.MessagesRepository;
import pl.kmp.be.bm.messages.entity.Message;

@RequiredArgsConstructor
@Service
public class MessagesBF {
    private final MessagesRepository repository;

    public UiMessage sendMessage(Long chatId, UiMessage uiMessage) {
        final Message message = new Message(uiMessage);
        message.setChatId(chatId);
        final Message save = repository.save(message);
        return new UiMessage(save);
    }
}
