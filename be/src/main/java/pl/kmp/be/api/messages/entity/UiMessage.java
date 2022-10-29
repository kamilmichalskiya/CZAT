package pl.kmp.be.api.messages.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
public class UiMessage {
    private Long id;
    private String text;
    private Long author;
    private Date messageDate;
}
