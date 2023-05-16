
package com.example.lab1_server.Repository;

import com.example.lab1_server.model.Dm;
import com.example.lab1_server.model.Log;
import com.example.lab1_server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DmRepository extends JpaRepository<Dm, Integer>{
    List<Dm> findByUser(User user);
    List<Dm> findByUserId(Integer userId );
    Dm findById(int id);
}
