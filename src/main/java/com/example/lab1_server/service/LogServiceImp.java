package com.example.lab1_server.service;

import com.example.lab1_server.Repository.LogRepository;
import com.example.lab1_server.Repository.UserRepository;
import com.example.lab1_server.model.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogServiceImp implements  LogService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LogRepository logRepository;


    @Override
    public List<Log> getAllLogByUserId(Integer userId) {
       List<Log> logs = logRepository.findByUserId(userId);
       return logs;
    }

    @Override
    public Log getLogById(int id) {
       Log log = logRepository.findById(id);
       return log;
    }

    @Override
    public Log createLog(Integer userId, Log log) {
       Log l = userRepository.findById(userId).map(user -> {
           log.setUser(user);
           return logRepository.save(log);
       }).orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + userId));
       return l;
    }
}
