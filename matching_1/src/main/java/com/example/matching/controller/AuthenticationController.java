// // AuthenticationController.java
// package com.example.matching.controller;

// import com.example.matching.model.AuthenticationRequest;
// import com.example.matching.model.AuthenticationResponse;
// import com.example.matching.util.JwtUtil;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.BadCredentialsException;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.web.bind.annotation.*;

// @RestController
// public class AuthenticationController {

//     @Autowired
//     private AuthenticationManager authenticationManager;

//     @Autowired
//     private JwtUtil jwtUtil;

//     @Autowired
//     private UserDetailsService userDetailsService;

//     @PostMapping("/authenticate")
//     public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
//             throws Exception {
//         try {
//             authenticationManager.authenticate(
//                     new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
//                             authenticationRequest.getPassword()));
//         } catch (BadCredentialsException e) {
//             throw new Exception("Incorrect username or password", e);
//         }

//         final UserDetails userDetails = userDetailsService
//                 .loadUserByUsername(authenticationRequest.getUsername());

//         final String jwt = jwtUtil.generateToken(userDetails);

//         return ResponseEntity.ok(new AuthenticationResponse(jwt));
//     }
// }



//! Start here is bad code
// package com.example.matching.controller;

// import com.example.matching.model.AuthenticationRequest;
// import com.example.matching.model.AuthenticationResponse;
// import com.example.matching.util.JwtUtil;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.BadCredentialsException;
// import
// org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.web.bind.annotation.*;

// @RestController
// public class AuthenticationController {

// @Autowired
// private AuthenticationManager authenticationManager;

// @Autowired
// private JwtUtil jwtUtil;

// @Autowired
// private UserDetailsService userDetailsService;

// @PostMapping("/authenticate")
// public ResponseEntity<?> createAuthenticationToken(@RequestBody
// AuthenticationRequest authenticationRequest)
// throws Exception {
// try {
// authenticationManager.authenticate(
// new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
// authenticationRequest.getPassword()));
// } catch (BadCredentialsException e) {
// throw new Exception("Incorrect username or password", e);
// }

// final UserDetails userDetails = userDetailsService
// .loadUserByUsername(authenticationRequest.getUsername());

// final String jwt = jwtUtil.generateToken(userDetails);

// return ResponseEntity.ok(new AuthenticationResponse(jwt));
// }
// }
