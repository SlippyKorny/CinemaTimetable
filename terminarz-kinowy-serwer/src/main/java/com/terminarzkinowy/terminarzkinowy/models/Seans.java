package com.terminarzkinowy.terminarzkinowy.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Seanses")
public class Seans {

    @Id
    private String id;

    private String kinoId;

    private String name;

    private int length;
}
