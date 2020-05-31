package com.terminarzkinowy.terminarzkinowy.repositories;

import com.terminarzkinowy.terminarzkinowy.models.Kino;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KinoRepository extends MongoRepository<Kino, String> {
}
