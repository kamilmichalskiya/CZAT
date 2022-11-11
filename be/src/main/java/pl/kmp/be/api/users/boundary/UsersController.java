package pl.kmp.be.api.users.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.kmp.be.api.users.entity.UiUser;
import pl.kmp.be.bm.users.boundary.UsersBF;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/users", produces = "application/hal+json")
public class UsersController {
    private final UsersBF usersBF;

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody final UiUser user) {
        usersBF.register(user);
        return ResponseEntity.ok().build();
    }
}
