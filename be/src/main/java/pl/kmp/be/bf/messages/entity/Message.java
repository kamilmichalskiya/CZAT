package pl.kmp.be.bf.messages.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.sql.Date;

@Document("messages")
public class Message {
    @Id
    private Long id;
    private String text;
    private Long author;
    private Date messageDate;
}
