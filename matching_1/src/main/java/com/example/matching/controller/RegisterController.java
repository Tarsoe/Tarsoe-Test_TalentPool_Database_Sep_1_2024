// package com.example.matching.controller;

// // RegisterController.java
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.matching.model.UserDto;
// import com.example.matching.service.UserService;

// @RestController
// @RequestMapping("/register")
// public class RegisterController {

//     @Autowired
//     private UserService userService;

//     @PostMapping
//     public ResponseEntity<?> registerUser(@RequestBody UserDto userDto) {
//         userService.registerUser(userDto);
//         return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully from backend");
//     }
// }
