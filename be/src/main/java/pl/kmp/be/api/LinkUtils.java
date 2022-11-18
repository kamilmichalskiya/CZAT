package pl.kmp.be.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import pl.kmp.be.bm.users.boundary.UsersBF;

import static pl.kmp.be.api.LinkRelations.WS_QUEUE;

@Service
public class LinkUtils {
    @Value("${app.host}")
    private String host;

    public Link createTopicLink(final String topic, final LinkRelations relation) {
        final String username = UsersBF.getLoggedUser().orElse("");
        return Link.of(String.format("/user/%s/%s", username, topic), relation.toString());
    }

    public Link createWebsocketLink() {
        final String url = ServletUriComponentsBuilder.fromCurrentContextPath()
                .scheme("ws")
                .host(host)
                .path("queue")
                .toUriString();
        return Link.of(url, WS_QUEUE.toString());
    }

    public Link createLink(final WebMvcLinkBuilder linkBuilder, final LinkRelations relation) {
        final String url = linkBuilder.toUriComponentsBuilder().host(host).toUriString();
        return Link.of(url, relation.toString());
    }
}
