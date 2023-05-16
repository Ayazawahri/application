package com.example.lab1_server.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name ="logs")
public class Log {
    @Id
    //@JsonBackReference
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String post;

    //@JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;



    public Log() {
    }

    public Log(String post, User user) {
        this.post = post;
       // this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
