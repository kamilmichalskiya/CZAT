package pl.kmp.be.api.chats.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.kmp.be.api.LinkUtils;
import pl.kmp.be.api.chats.entity.UiChat;
import pl.kmp.be.api.chats.entity.UiMessage;
import pl.kmp.be.bm.chats.boundary.ChatsBF;
import pl.kmp.be.bm.messages.boundary.MessagesBF;

import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.kmp.be.api.LinkRelations.GET_CHAT;
import static pl.kmp.be.api.LinkRelations.SEND_MESSAGE;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/chats", produces = "application/hal+json")
public class ChatsController {
    private final ChatsBF chatsBF;
    private final MessagesBF messagesBF;
    private final LinkUtils linkUtils;

    @GetMapping
    public ResponseEntity<CollectionModel<EntityModel<UiChat>>> getAllChats() {
        return ResponseEntity.ok(
                CollectionModel.of(chatsBF.findAllChats().stream().map(this::addLinksToChat).collect(Collectors.toList())));
    }

    @PostMapping("/write")
    public ResponseEntity<EntityModel<UiChat>> writeTo(@RequestBody final UiChat uiChat) {
        final UiChat chat = chatsBF.findChatByUsernames(uiChat).orElseGet(() -> chatsBF.createChat(uiChat));
        return ResponseEntity.ok(addLinksToChat(chat));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<UiChat>> getChat(@PathVariable final Long id) {
        return chatsBF.findById(id).map(chat -> ResponseEntity.ok(addLinksToChat(chat))).orElseGet(
                () -> ResponseEntity.notFound().build());
    }

    @PostMapping("/{id}/message")
    public ResponseEntity<UiMessage> sendMessage(@PathVariable final Long id, @RequestBody final UiMessage message) {
        return ResponseEntity.ok(messagesBF.sendMessage(id, message));
    }

    private EntityModel<UiChat> addLinksToChat(final UiChat chat) {
        return EntityModel.of(chat).add(
                linkUtils.createLink(linkTo(methodOn(ChatsController.class).getChat(chat.getId())), GET_CHAT)).add(
                linkUtils.createLink(linkTo(methodOn(ChatsController.class).sendMessage(chat.getId(), null)), SEND_MESSAGE));
    }
}
