package com.example.lab1_server.service;

import com.example.lab1_server.Repository.DmRepository;
import com.example.lab1_server.Repository.UserRepository;
import com.example.lab1_server.model.Dm;
import com.example.lab1_server.model.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DmServiceImp implements DmService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DmRepository dmRepository;

    @Override
    public List<Dm> getAllDmByUserId(Integer userId) {
        List<Dm> dms = dmRepository.findByUserId(userId);
        return dms;
    }

    @Override
    public Dm getDmById(int id) {
        Dm dm = dmRepository.findById(id);
        return dm;
    }

    @Override
    public Dm createDm(Integer userId, Dm dm) {
        Dm d = userRepository.findById(userId).map(user -> {
            dm.setUser(user);
            return dmRepository.save(dm);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + userId));
        return d;
    }
}
