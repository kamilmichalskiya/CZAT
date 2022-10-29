package pl.kmp.be.error;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.util.Arrays;

@Getter
public class ProcessException extends RuntimeException {
    private final HttpStatus httpStatus;
    private final Object[] params;

    public ProcessException(final ErrorType errorType, final Object... params) {
        super(errorType.getDescription());
        this.httpStatus = errorType.getDefaultStatus();
        this.params = params;
    }

    @Override
    public String toString() {
        return "ProcessException: " + "httpStatus=" + httpStatus + ", description=" + getMessage() + ", params=" +
               Arrays.toString(params);
    }
}
