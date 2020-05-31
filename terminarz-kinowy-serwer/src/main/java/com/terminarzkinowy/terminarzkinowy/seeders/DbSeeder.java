package com.terminarzkinowy.terminarzkinowy.seeders;

import com.terminarzkinowy.terminarzkinowy.models.Kino;
import com.terminarzkinowy.terminarzkinowy.models.Seans;
import com.terminarzkinowy.terminarzkinowy.models.User;
import com.terminarzkinowy.terminarzkinowy.repositories.KinoRepository;
import com.terminarzkinowy.terminarzkinowy.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class DbSeeder implements CommandLineRunner {

    private KinoRepository repository;

    private UserRepository usrRepo;

    public DbSeeder(KinoRepository kinoRepository, UserRepository usrRepo) {
        this.repository = kinoRepository;
        this.usrRepo = usrRepo;
    }

    private String encryptSha256(String str) throws NoSuchAlgorithmException {
        MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
        messageDigest.update(str.getBytes());
        return new String(messageDigest.digest());
    }

    @Override
    public void run(String... args) throws Exception {
        String hashedPasswd = encryptSha256("admin");
        User usr = new User("c78bfd9b-32b1-47a2-a5a8-3d345c920c43", "admin@admin.com", hashedPasswd);
        usrRepo.deleteAll();
        usrRepo.save(usr);

        List<Seans> seanses1 = new ArrayList<>() {{
            add(new Seans("76606425-67f5-4d93-9609-6ef6b7dd784e",
                    "fca856ad-aa63-4a1c-9ac4-339cb0be75af", "Seans 1", 7200));
            add(new Seans("a6264fdd-7fca-478f-a885-e06dffd43e71",
                    "fca856ad-aa63-4a1c-9ac4-339cb0be75af", "Seans 2", 7200));
            add(new Seans("8eb95b25-042f-4708-9660-d8cc8ca7f9f3",
                    "fca856ad-aa63-4a1c-9ac4-339cb0be75af", "Seans 3", 7200));
        }}, seanses2 = new ArrayList<>() {{
            add(new Seans("852c6f5b-38ff-4d66-9c93-e3e543e3b746",
                    "caceaa48-97fc-4b0c-8682-4e4a2436b5ee", "Seans 4", 7200));
            add(new Seans("5f158e14-6f6b-4b42-a93c-15377a273d3b",
                    "caceaa48-97fc-4b0c-8682-4e4a2436b5ee", "Seans 5", 7200));
            add(new Seans("8a3fa5fb-5384-453d-9d41-a63ead66a0ff",
                    "caceaa48-97fc-4b0c-8682-4e4a2436b5ee", "Seans 6", 7200));
        }}, seanses3 = new ArrayList<>() {{
            add(new Seans("00da41dd-a104-4cfd-8ab6-515605872f42",
                    "97f5ba17-cf87-41ec-bc5d-5e263ae986d7", "Seans 7", 7200));
            add(new Seans("0ba296c4-7960-412d-b3f3-c89b8e12f93c",
                    "97f5ba17-cf87-41ec-bc5d-5e263ae986d7", "Seans 8", 7200));
            add(new Seans("c6c04169-4922-46e3-adb6-508bc7daf47e",
                    "97f5ba17-cf87-41ec-bc5d-5e263ae986d7", "Seans 9", 7200));
        }};


        Kino k1 = new Kino("fca856ad-aa63-4a1c-9ac4-339cb0be75af", "Kino Króla", "Mińsk Mazowiecki",
                new Date(), seanses1), k2 = new Kino("caceaa48-97fc-4b0c-8682-4e4a2436b5ee", "Kino Barona", "Warszawa",
                new Date(), seanses2), k3 = new Kino("97f5ba17-cf87-41ec-bc5d-5e263ae986d7", "Kino Ottona", "Siedlce",
                new Date(), seanses3);

        repository.deleteAll();
        repository.save(k1);
        repository.save(k2);
        repository.save(k3);
    }
}
