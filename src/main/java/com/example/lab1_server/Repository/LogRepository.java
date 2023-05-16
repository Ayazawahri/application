package com.example.lab1_server.Repository;

import com.example.lab1_server.model.Log;
import com.example.lab1_server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LogRepository extends JpaRepository<Log,Integer> {
    List<Log> findByUser(User user);
    List<Log> findByUserId(Integer userId );
    Log findById(int id);



    // List<Log> findAll();

}
