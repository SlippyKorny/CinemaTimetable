package com.terminarzkinowy.terminarzkinowy.api;

import com.terminarzkinowy.terminarzkinowy.models.Kino;
import com.terminarzkinowy.terminarzkinowy.models.Seans;
import com.terminarzkinowy.terminarzkinowy.repositories.KinoRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/api/seans")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class SeansController {

    private KinoRepository repository;

    @GetMapping("/all")
    public List<Seans> getAll() {
        List<Kino> kinos = repository.findAll();
        List<Seans> seanses = new ArrayList<>();
        for (Kino k : kinos)
            seanses.addAll(k.getSeanses());
        return seanses;
    }

    @GetMapping("/byId/{id}")
    public Seans getById(@PathVariable("id") String id) {
        return getSeansById(id);
    }

    @PutMapping("/insert/{kinoId}")
    public void insert(@PathVariable("kinoId") String kinoId, @RequestBody Seans s) {
        Optional<Kino> k = repository.findById(kinoId);
        Kino kino = k.get();
        if (kino != null) {
            s.setId(UUID.randomUUID().toString());
            kino.getSeanses().add(s);
            repository.save(kino);
        }
    }

    @PostMapping("/update")
    public void update(@RequestBody Seans s) {
        Seans sOld = getSeansById(s.getId());
        if (sOld == null)
            return;
        Kino k = getKinoById(sOld.getKinoId());
        if (k == null)
            return;
        k.removeSeans(sOld.getId());
        k.getSeanses().add(s);
        repository.save(k);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") String id) {
        Seans sOld = getSeansById(id);
        if (sOld == null)
            return;
        Kino k = getKinoById(sOld.getKinoId());
        if (k == null)
            return;
        k.removeSeans(sOld.getId());
        repository.save(k);
    }

    private Seans getSeansById(String id) {
        List<Kino> kinos = repository.findAll();
        AtomicReference<Seans> s = new AtomicReference<>();
        for (Kino k : kinos) {
            k.getSeanses().forEach(seans -> {
                if (seans.getId().equals(id))
                    s.set(seans);
            });
        }
        return s.get();
    }

    private Kino getKinoById(String id) {
        return repository.findById(id).orElse(null);
    }
}
