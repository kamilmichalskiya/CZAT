package pl.kmp.be.bf.messages.control;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.kmp.be.bf.messages.entity.Message;

@Repository
public interface MessagesRepository extends MongoRepository<Message, Long> {}
