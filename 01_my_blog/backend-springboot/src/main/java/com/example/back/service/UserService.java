package com.example.back.service;

import com.example.back.model.User;
import com.example.back.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User create(final User user) {
        if(user == null || user.getUserName() == null) {
            throw new RuntimeException("잘못된 인수");
        }
        final String userName = user.getUserName();
        if (userRepository.existsByUserName(userName)) {
            log.warn("Username already exists {}", userName);
            throw new RuntimeException("Username already exists");
        }
        return userRepository.save(user);
    }

    public User getByCredentials(final String userName, final String password) {
        return userRepository.findByUserNameAndPassword(userName, password);
    }

}
