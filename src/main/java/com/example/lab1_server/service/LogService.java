package com.example.lab1_server.service;

import com.example.lab1_server.model.Log;

import java.util.List;

public interface LogService {
    public List<Log> getAllLogByUserId(Integer userId);
    public Log getLogById(int id);
    public Log createLog(Integer userId, Log log);

}
