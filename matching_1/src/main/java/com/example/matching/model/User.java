package com.example.matching.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users_matching")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;

    // Constructors, getters, and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

// package com.example.matching.model;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "users_matching") // Specify the table name here
// public class User {

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private Long id;

// private String username;
// private String email;
// private String password;

// // Constructors, getters, and setters
// // Omitted for brevity

// public Long getId() {
// return id;
// }

// public void setId(Long id) {
// this.id = id;
// }

// public String getUsername() {
// return username;
// }

// public void setUsername(String username) {
// this.username = username;
// }

// public String getEmail() {
// return email;
// }

// public void setEmail(String email) {
// this.email = email;
// }

// public String getPassword() {
// return password;
// }

// public void setPassword(String password) {
// this.password = password;
// }
// }

// package com.example.matching.model;

// import jakarta.persistence.*;

// // User.java

// @Entity
// public class User {

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private Long id;

// private String username;
// private String email;
// private String password;

// // Constructors, getters, and setters

// public Long getId() {
// return id;
// }

// public void setId(Long id) {
// this.id = id;
// }

// public String getUsername() {
// return username;
// }

// public void setUsername(String username) {
// this.username = username;
// }

// public String getEmail() {
// return email;
// }

// public void setEmail(String email) {
// this.email = email;
// }

// public String getPassword() {
// return password;
// }

// public void setPassword(String password) {
// this.password = password;
// }
// }
