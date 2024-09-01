package com.example.matching.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "matchingCandidate")
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String position;
    private String skills; // Skills separated by comma (e.g., "React,Java,Python")

    // Add a timestamp field to track when the candidate was created or last updated
    private Date timestamp;

    // Constructors
    public Candidate() {
        // Default constructor
    }

    public Candidate(String name, String position, String skills) {
        this.name = name;
        this.position = position;
        this.skills = skills;
        this.timestamp = new Date(); // Set timestamp to current date and time
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}

// import jakarta.persistence.*;
// import java.util.Date;

// @Entity
// @Table(name = "matchingCandidate")
// public class Candidate {
// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private Long id;
// private String name;
// private String position;
// private String skills; // Skills separated by comma (e.g.,
// "React,Java,Python")

// // Add a timestamp field to track when the candidate was created or last
// updated
// private Date timestamp;

// // Getters and setters
// // Constructors
// // Other methods if needed

// public Long getId() {
// return id;
// }

// public void setId(Long id) {
// this.id = id;
// }

// public String getName() {
// return name;
// }

// public void setName(String name) {
// this.name = name;
// }

// public String getPosition() {
// return position;
// }

// public void setPosition(String position) {
// this.position = position;
// }

// public String getSkills() {
// return skills;
// }

// public void setSkills(String skills) {
// this.skills = skills;
// }
// }
