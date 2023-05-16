package com.example.lab1_server.Repository;

import com.example.lab1_server.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {

   // List<User> findALl();
    User findUserById(Integer id);
    User findUserByEmail(String Email);
    User findUserByName(String name);

    List<User> findAll();
}
