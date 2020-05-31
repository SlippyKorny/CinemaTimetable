package com.terminarzkinowy.terminarzkinowy.repositories;

import com.terminarzkinowy.terminarzkinowy.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
}
