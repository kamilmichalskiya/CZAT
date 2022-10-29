package pl.kmp.be.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Getter
@RequiredArgsConstructor
public enum ErrorType {
    REGISTRATION_ERROR("Error during registration: {}", NOT_FOUND);

    private final String description;
    private final HttpStatus defaultStatus;
}
