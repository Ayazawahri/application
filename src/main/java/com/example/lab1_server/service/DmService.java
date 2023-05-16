package com.example.lab1_server.service;

import com.example.lab1_server.model.Dm;
import com.example.lab1_server.model.Log;

import java.util.List;

public interface DmService {
    public List<Dm> getAllDmByUserId(Integer userId);
    public Dm getDmById(int id);
    public Dm createDm(Integer userId, Dm dm);
}
