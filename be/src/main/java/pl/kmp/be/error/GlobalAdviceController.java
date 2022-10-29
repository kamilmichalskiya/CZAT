package pl.kmp.be.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalAdviceController {
    @ExceptionHandler(ProcessException.class)
    public ResponseEntity<String> processException(final ProcessException exception) {
        final HttpStatus status =
                exception.getHttpStatus() != null ? exception.getHttpStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        return ResponseEntity.status(status).body(exception.toString());
    }
}
