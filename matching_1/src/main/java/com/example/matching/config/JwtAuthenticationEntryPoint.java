// package com.example.matching.config;

// import org.springframework.security.core.AuthenticationException;
// import org.springframework.security.web.AuthenticationEntryPoint;
// import org.springframework.stereotype.Component;

// import jakarta.servlet.http.*;

// // import javax.servlet.http.HttpServletRequest;
// // import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;

// @Component
// public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

//     @Override
//     public void commence(HttpServletRequest request, HttpServletResponse response,
//                          AuthenticationException authException) throws IOException {
//         // Set the response status to 401 (Unauthorized)
//         response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//         // Write the custom error message to the response
//         response.getWriter().write("Token is expired, can't access to this url");
//     }
// }



//! Start here is bad code
// import org.springframework.security.core.AuthenticationException;
// import org.springframework.security.web.AuthenticationEntryPoint;
// import org.springframework.stereotype.Component;

// import jakarta.servlet.http.*;

// // import javax.servlet.http.HttpServletRequest;
// // import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;

// @Component
// public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

//     @Override
//     public void commence(HttpServletRequest request, HttpServletResponse response,
//             AuthenticationException authException) throws IOException {
//         // Set the response status to 401 (Unauthorized)
//         response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//         // Write the custom error message to the response
//         response.getWriter().write("Token is expired, can't access to this url");
//     }
// }
