// package com.example.matching.service;

// import com.example.matching.model.User;
// import com.example.matching.model.UserDto;
// import com.example.matching.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// @Service
// public class UserServiceImpl implements UserService {

//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     @Override
//     public void registerUser(UserDto userDto) {
//         if (userRepository.existsByUsername(userDto.getUsername())) {
//             throw new IllegalArgumentException("Username already exists");
//         }
//         if (userRepository.existsByEmail(userDto.getEmail())) {
//             throw new IllegalArgumentException("Email already exists");
//         }

//         User user = new User();
//         user.setUsername(userDto.getUsername());
//         user.setEmail(userDto.getEmail());
//         user.setPassword(passwordEncoder.encode(userDto.getPassword()));

//         userRepository.save(user);
//     }
// }

//! Start here is bad code
// package com.example.matching.service;

// import com.example.matching.model.User;
// import com.example.matching.model.UserDto;
// import com.example.matching.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// @Service
// public class UserServiceImpl implements UserService {

// @Autowired
// private UserRepository userRepository;

// @Autowired
// private PasswordEncoder passwordEncoder;

// @Override
// public void registerUser(UserDto userDto) {
// // Check if username already exists
// if (userRepository.existsByUsername(userDto.getUsername())) {
// throw new IllegalArgumentException("Username already exists");
// }

// // Check if email already exists
// if (userRepository.existsByEmail(userDto.getEmail())) {
// throw new IllegalArgumentException("Email already exists");
// }

// // If username and email don't exist, proceed with registration
// User user = new User();
// user.setUsername(userDto.getUsername());
// user.setEmail(userDto.getEmail());
// // Encode the password before saving it to the database
// user.setPassword(passwordEncoder.encode(userDto.getPassword()));
// // You can set additional user properties here

// userRepository.save(user);
// }
// }

// // UserServiceImpl.java
// package com.example.matching.service;

// import com.example.matching.model.User;
// import com.example.matching.model.UserDto;
// import com.example.matching.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// @Service
// public class UserServiceImpl implements UserService {

// @Autowired
// private UserRepository userRepository;

// @Autowired
// private PasswordEncoder passwordEncoder;

// @Override
// public void registerUser(UserDto userDto) {
// // Check if username already exists
// if (userRepository.existsByUsername(userDto.getUsername())) {
// throw new IllegalArgumentException("Username already exists");
// }

// // Check if email already exists
// if (userRepository.existsByEmail(userDto.getEmail())) {
// throw new IllegalArgumentException("Email already exists");
// }

// // If username and email don't exist, proceed with registration
// User user = new User();
// user.setUsername(userDto.getUsername());
// user.setEmail(userDto.getEmail());
// // Encode the password before saving it to the database
// user.setPassword(passwordEncoder.encode(userDto.getPassword()));
// // You can set additional user properties here

// userRepository.save(user);
// }
// }
