package com.example.matching.repository;

import com.example.matching.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    User findByUsername(String username);
}

// package com.example.matching.repository;

// // UserRepository.java
// import org.springframework.data.jpa.repository.JpaRepository;

// import com.example.matching.model.User;

// public interface UserRepository extends JpaRepository<User, Long> {
// // You can add custom query methods here if needed
// boolean existsByUsername(String username);

// boolean existsByEmail(String email);
// }
