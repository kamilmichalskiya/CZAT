package pl.kmp.be.api.chats.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.kmp.be.api.chats.entity.UiChat;
import pl.kmp.be.api.messages.entity.UiMessage;
import pl.kmp.be.bm.chats.boundary.ChatsBF;
import pl.kmp.be.bm.messages.boundary.MessagesBF;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/chats")
public class ChatsController {
    private final ChatsBF chatsBF;
    private final MessagesBF messagesBF;

    ///TODO Hallinki
    @GetMapping
    public ResponseEntity<List<UiChat>> getAllChat() {
        final List<UiChat> allChats = chatsBF.findAllChats();
        return allChats.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(allChats);
    }

    @PostMapping("/write")
    public ResponseEntity<UiChat> writeTo(@RequestBody final UiChat chat) {
        return ResponseEntity.ok(chatsBF.findChatByUsernames(chat).orElseGet(() -> chatsBF.createChat(chat)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UiChat> getChat(@PathVariable Long id) {
        return chatsBF.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/{id}/message")
    public ResponseEntity<UiMessage> sendMessage(@PathVariable Long id, @RequestBody final UiMessage message) {
        return ResponseEntity.ok(messagesBF.sendMessage(id, message));
    }
}
