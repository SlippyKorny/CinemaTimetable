package com.terminarzkinowy.terminarzkinowy.api;

import com.terminarzkinowy.terminarzkinowy.models.User;
import com.terminarzkinowy.terminarzkinowy.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private UserRepository repository;

    @PostMapping("/login")
    public boolean login(@RequestBody User user) {
        String hashedPassword = null;
        try {
            hashedPassword = encryptSha256(user.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        List<User> users = repository.findAll();
        for(User registeredUsr : users) {
            if (registeredUsr.getEmail().equals(user.getEmail())
                && registeredUsr.getPassword().equals(hashedPassword)) {
                return true;
            }
        }

        return false;
    }

    @PostMapping("/register")
    public boolean register(User user) {
        List<User> users = repository.findAll();
        for (User registeredUser : users) {
            if (registeredUser.getEmail().equals(user.getEmail()))
                return false;
        }

        user.setId(UUID.randomUUID().toString());
        try {
            user.setPassword(encryptSha256(user.getPassword()));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        repository.save(user);

        return true;
    }

    private String encryptSha256(String str) throws NoSuchAlgorithmException {
        MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
        messageDigest.update(str.getBytes());
        return new String(messageDigest.digest());
    }

}
