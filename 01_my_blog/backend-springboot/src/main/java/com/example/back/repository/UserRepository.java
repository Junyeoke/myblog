package com.example.back.repository;

import com.example.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    User findByUserName(String userName);
    Boolean existsByUserName(String userName);
    User findByUserNameAndPassword(String userName, String password);
}