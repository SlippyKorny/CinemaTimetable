package com.terminarzkinowy.terminarzkinowy.repositories;

import com.terminarzkinowy.terminarzkinowy.models.Seans;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SeansRepository extends MongoRepository<Seans, String> {
}
