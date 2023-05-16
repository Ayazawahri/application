package com.example.lab1_server.service;

import com.example.lab1_server.model.Log;
import com.example.lab1_server.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;


public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public User getUserById(int Id);

    public int getUserId(String name);




}
