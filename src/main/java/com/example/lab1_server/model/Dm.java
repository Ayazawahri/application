
package com.example.lab1_server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name ="dms")
public class Dm {
    @Id
    //@JsonBackReference
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String message;

    //@JsonManagedReference
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;



    public Dm() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
