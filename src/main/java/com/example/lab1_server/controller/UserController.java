package com.example.lab1_server.controller;

import com.example.lab1_server.Repository.LogRepository;
import com.example.lab1_server.model.Log;
import com.example.lab1_server.model.User;
import com.example.lab1_server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;



    @PostMapping("/users")
    public ResponseEntity<User> addUser(@RequestBody User user){
        User u = userService.saveUser(user);
        return new ResponseEntity<>(u,HttpStatus.CREATED);
    }



    @GetMapping("/users")
    public  ResponseEntity <List<User>> getAllUsers(){
        List<User> users = new ArrayList<User>();
        users = userService.getAllUsers();
        return  new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getOneUser(@PathVariable("id") Integer id){
        try{
            User user = userService.getUserById(id);
            return new ResponseEntity<User>(user,HttpStatus.OK);

        }catch(NoSuchElementException e){

            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }

    }


    @GetMapping("/get/{name}")
    public int getUserId( @PathVariable("name")String name){
        return userService.getUserId(name);
    }



}
