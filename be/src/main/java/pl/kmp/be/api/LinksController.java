package pl.kmp.be.api;

import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.Link;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.kmp.be.api.chats.boundary.ChatsController;
import pl.kmp.be.api.users.boundary.UsersController;

import java.util.Arrays;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.kmp.be.api.LinkRelations.ADVANCED_LINKS;
import static pl.kmp.be.api.LinkRelations.GET_ALL_CHATS;
import static pl.kmp.be.api.LinkRelations.LOGIN;
import static pl.kmp.be.api.LinkRelations.LOGOUT;
import static pl.kmp.be.api.LinkRelations.MAIN_LINKS;
import static pl.kmp.be.api.LinkRelations.REGISTER;
import static pl.kmp.be.api.LinkRelations.WRITE_TO_CHAT;
import static pl.kmp.be.api.LinkRelations.WS_CHATS;
import static pl.kmp.be.api.LinkRelations.WS_MESSAGES;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api", produces = "application/hal+json")
public class LinksController {

    private final LinkUtils linkUtils;

    @GetMapping
    public ResponseEntity<List<Link>> getMainLinks() {
        return ResponseEntity.ok(Arrays.asList(linkUtils.createLink(linkTo(LinksController.class).slash("login"), LOGIN),
                linkUtils.createLink(linkTo(methodOn(UsersController.class).register(null)), REGISTER),
                linkUtils.createLink(linkTo(methodOn(LinksController.class).getAdvanceLinks()), ADVANCED_LINKS)));
    }

    @GetMapping("/advanced")
    public ResponseEntity<List<Link>> getAdvanceLinks() {
        return ResponseEntity.ok(Arrays.asList(linkUtils.createLink(linkTo(LinksController.class).slash("logout"), LOGOUT),
                linkUtils.createLink(linkTo(methodOn(ChatsController.class).getAllChats()), GET_ALL_CHATS),
                linkUtils.createLink(linkTo(methodOn(ChatsController.class).writeTo(null)), WRITE_TO_CHAT),
                linkUtils.createLink(linkTo(methodOn(LinksController.class).getMainLinks()), MAIN_LINKS),
                linkUtils.createWebsocketLink(), linkUtils.createTopicLink("chats", WS_CHATS),
                linkUtils.createTopicLink("messages", WS_MESSAGES)));
    }
}
