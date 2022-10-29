package pl.kmp.be.api;

import org.springframework.hateoas.Link;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import pl.kmp.be.api.chats.boundary.ChatsController;
import pl.kmp.be.api.users.boundary.UsersController;

import java.util.Arrays;
import java.util.List;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.kmp.be.api.LinkRelations.GET_ALL_CHATS;
import static pl.kmp.be.api.LinkRelations.GET_MAIN_LINKS;
import static pl.kmp.be.api.LinkRelations.LOGIN;
import static pl.kmp.be.api.LinkRelations.LOGOUT;
import static pl.kmp.be.api.LinkRelations.REGISTER;
import static pl.kmp.be.api.LinkRelations.WRITE_TO_CHAT;
import static pl.kmp.be.api.LinkRelations.WS_CHATS;
import static pl.kmp.be.api.LinkRelations.WS_MESSAGES;

@RestController
@RequestMapping(value = "/api", produces = "application/hal+json")
public class LinksController {
    @GetMapping
    public ResponseEntity<List<Link>> getLinks() {
        final String wsUrl = ServletUriComponentsBuilder.fromCurrentContextPath().scheme("ws").build().toString();
        // @formatter:off
        return ResponseEntity.ok(Arrays.asList(linkTo(LinksController.class).slash("perform_login").withRel(LOGIN.toString()),
                linkTo(LinksController.class).slash("perform_logout").withRel(LOGOUT.toString()),
                linkTo(methodOn(UsersController.class).register(null)).withRel(REGISTER.toString()),
                linkTo(methodOn(ChatsController.class).getAllChats()).withRel(GET_ALL_CHATS.toString()),
                linkTo(methodOn(ChatsController.class).writeTo(null)).withRel(WRITE_TO_CHAT.toString()),
                linkTo(wsUrl).slash("/chats").withRel(WS_CHATS.toString()),
                linkTo(wsUrl).slash("/messages").withRel(WS_MESSAGES.toString()),
                linkTo(methodOn(LinksController.class).getLinks()).withRel(GET_MAIN_LINKS.toString())));
        // @formatter:on
    }
}
