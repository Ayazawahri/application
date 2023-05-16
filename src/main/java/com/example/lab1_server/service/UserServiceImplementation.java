package com.example.lab1_server.service;

import com.example.lab1_server.Repository.LogRepository;
import com.example.lab1_server.model.Log;
import com.example.lab1_server.model.User;
import com.example.lab1_server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LogRepository logRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public  List<User> getAllUsers() {

         return userRepository.findAll();
    }


    @Override
    public User getUserById(int id) {
        return userRepository.findUserById(id);
    }


    @Override
    public int getUserId(String name) {
        User user=  userRepository.findUserByName(name);
        return user.getId();
    }



}
