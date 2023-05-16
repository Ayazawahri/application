package com.example.lab1_server.controller;

import com.example.lab1_server.Repository.LogRepository;
import com.example.lab1_server.model.Dm;
import com.example.lab1_server.model.Log;
import com.example.lab1_server.service.DmService;
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

public class DmController {
    @Autowired
    private DmService dmService;

    @GetMapping("/users/{userId}/dms")
    public ResponseEntity<List<Dm>> getAllDmsByUserId(@PathVariable("userId") Integer userId){
        List<Dm> dms= dmService.getAllDmByUserId(userId);
        return new ResponseEntity<>(dms, HttpStatus.OK);

    }

    @GetMapping("/dms/{id}")
    public ResponseEntity<Dm> getDmById(@PathVariable("id") Integer id){
        Dm dm = dmService.getDmById(id);
        return new ResponseEntity<>(dm, HttpStatus.OK);
    }

    @PostMapping("/users/{userId}/dms")
    public ResponseEntity <Dm> createdm (@PathVariable ("userId") Integer userId,
                                           @RequestBody Dm dm){
        Dm d= dmService.createDm(userId,dm);
        return new ResponseEntity<>(d,HttpStatus.CREATED);
    }

}
