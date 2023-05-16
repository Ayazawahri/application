package com.example.lab1_server.controller;


import com.example.lab1_server.Repository.LogRepository;
import com.example.lab1_server.model.Log;
import com.example.lab1_server.service.LogService;
import com.example.lab1_server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LogController {

    @Autowired
    private LogService logService;

    @Autowired
    private LogRepository logRepository;

    @GetMapping("/users/{userId}/logs")
    public ResponseEntity<List<Log>> getAllLogsByUserId(@PathVariable("userId") Integer userId){
       List<Log> logs= logService.getAllLogByUserId(userId);
       return new ResponseEntity<>(logs, HttpStatus.OK);

    }

    @GetMapping("/logs/{id}")
    public ResponseEntity<Log> getLogById(@PathVariable("id") Integer id){
        Log log = logService.getLogById(id);
        return new ResponseEntity<>(log, HttpStatus.OK);
    }

    @PostMapping("/users/{userId}/logs")
    public ResponseEntity <Log> createLog (@PathVariable ("userId") Integer userId,
                                           @RequestBody Log log){
        Log l = logService.createLog(userId,log);
        return new ResponseEntity<>(l,HttpStatus.CREATED);
    }
}
