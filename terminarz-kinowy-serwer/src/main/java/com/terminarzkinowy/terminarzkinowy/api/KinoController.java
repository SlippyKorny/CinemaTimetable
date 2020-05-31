package com.terminarzkinowy.terminarzkinowy.api;

import com.terminarzkinowy.terminarzkinowy.models.Kino;
import com.terminarzkinowy.terminarzkinowy.repositories.KinoRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/kinos")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class KinoController {

    private KinoRepository repository;

    @GetMapping("/all")
    public List<Kino> getAll() {
        List<Kino> kinos = repository.findAll();
        return kinos;
    }

    @GetMapping("/byId/{id}")
    public Kino getById(@PathVariable("id") String id) {
        return repository.findById(id).orElse(null);
    }

    @PutMapping("/insert")
    public void insert(@RequestBody Kino k) {
        k.setId(UUID.randomUUID().toString());
        repository.insert(k);
    }

    @PostMapping("/update")
    public void update(@RequestBody Kino k) {
        if (repository.findById(k.getId()).get() != null)
            repository.save(k);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") String id) {
        repository.deleteById(id);
    }


}
