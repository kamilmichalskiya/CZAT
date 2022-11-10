package pl.kmp.be.bm.messages.control;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.kmp.be.bm.messages.entity.Message;

import java.util.List;

@Repository
public interface MessagesRepository extends MongoRepository<Message, Long> {
    List<Message> findAllByChatId(Long id);
}
