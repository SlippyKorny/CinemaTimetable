package com.terminarzkinowy.terminarzkinowy.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Kinos")
public class Kino {

    @Id
    private String id;

    private String name;

    private String localization;

    @JsonFormat(pattern = "YYYY-MM-dd")
    private Date date;

    private List<Seans> seanses;

    public void removeSeans(String id) {
        for (int i = 0; i < seanses.size(); i++) {
            if (seanses.get(i).getId().equals(id)) {
                seanses.remove(i);
                return;
            }
        }
    }
}
