// // JwtRequestFilter.java
// package com.example.matching.config;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import com.example.matching.util.JwtUtil;

// import io.jsonwebtoken.ExpiredJwtException;
// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.*;

// // import javax.servlet.FilterChain;
// // import javax.servlet.ServletException;
// // import javax.servlet.http.HttpServletRequest;
// // import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;

// @Component
// public class JwtRequestFilter extends OncePerRequestFilter {

//     @Autowired
//     private UserDetailsService userDetailsService;

//     @Autowired
//     private JwtUtil jwtUtil;

//     @Override
//     protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
//             throws ServletException, IOException {
//         final String requestTokenHeader = request.getHeader("Authorization");

//         String username = null;
//         String jwtToken = null;

//         if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
//             jwtToken = requestTokenHeader.substring(7);
//             try {
//                 username = jwtUtil.extractUsername(jwtToken);
//             } catch (ExpiredJwtException e) {
//                 // Token is expired
//                 request.setAttribute("expired", e.getMessage());
//                 // Proceed without setting the security context
//             } catch (Exception e) {
//                 logger.error("Error occurred while extracting username from token", e);
//             }
//         } else {
//             logger.warn("JWT Token does not begin with Bearer String");
//         }

//         if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//             UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

//             if (jwtUtil.validateToken(jwtToken, userDetails)) {
//                 UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
//                         userDetails, null, userDetails.getAuthorities());
//                 usernamePasswordAuthenticationToken
//                         .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                 SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//             }
//         }
//         chain.doFilter(request, response);
//     }
// }


//! Start here is bad code
// import com.example.matching.service.CustomUserDetailsService;
// import com.example.matching.util.JwtUtil;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.*;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.userdetails.UserDetails;
// import
// org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;
// // import javax.servlet.FilterChain;
// // import javax.servlet.ServletException;
// // import javax.servlet.http.HttpServletRequest;
// // import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;
// import
// org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

// @Component
// public class JwtRequestFilter extends OncePerRequestFilter {

// @Autowired
// private CustomUserDetailsService userDetailsService;

// @Autowired
// private JwtUtil jwtUtil;

// @Override
// protected void doFilterInternal(HttpServletRequest request,
// HttpServletResponse response, FilterChain chain)
// throws ServletException, IOException {

// final String authorizationHeader = request.getHeader("Authorization");

// String username = null;
// String jwt = null;

// if (authorizationHeader != null && authorizationHeader.startsWith("Bearer "))
// {
// jwt = authorizationHeader.substring(7);
// username = jwtUtil.extractUsername(jwt);
// }

// if (username != null &&
// SecurityContextHolder.getContext().getAuthentication() == null) {

// UserDetails userDetails =
// this.userDetailsService.loadUserByUsername(username);

// if (jwtUtil.validateToken(jwt, userDetails)) {

// UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new
// UsernamePasswordAuthenticationToken(
// userDetails, null, userDetails.getAuthorities());
// usernamePasswordAuthenticationToken
// .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
// SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
// }
// }
// chain.doFilter(request, response);
// }
// }

// package com.example.matching.config;

// // package com.example.matching.config;

// // import com.example.matching.service.CustomUserDetailsService;
// // import com.example.matching.util.JwtUtil;
// import org.springframework.beans.factory.annotation.Autowired;
// import
// org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.userdetails.UserDetails;
// import
// org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import com.example.matching.service.CustomUserDetailsService;
// import com.example.matching.util.JwtUtil;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// // import javax.servlet.FilterChain;
// // import javax.servlet.ServletException;
// // import javax.servlet.http.HttpServletRequest;
// // import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;

// @Component
// public class JwtRequestFilter extends OncePerRequestFilter {

// @Autowired
// private CustomUserDetailsService userDetailsService;

// @Autowired
// private JwtUtil jwtUtil;

// @Override
// protected void doFilterInternal(HttpServletRequest request,
// HttpServletResponse response, FilterChain chain)
// throws ServletException, IOException {

// final String authorizationHeader = request.getHeader("Authorization");

// String username = null;
// String jwt = null;

// if (authorizationHeader != null && authorizationHeader.startsWith("Bearer "))
// {
// jwt = authorizationHeader.substring(7);
// username = jwtUtil.extractUsername(jwt);
// }

// if (username != null &&
// SecurityContextHolder.getContext().getAuthentication() == null) {

// UserDetails userDetails =
// this.userDetailsService.loadUserByUsername(username);

// if (jwtUtil.validateToken(jwt, userDetails)) {

// UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new
// UsernamePasswordAuthenticationToken(
// userDetails, null, userDetails.getAuthorities());
// usernamePasswordAuthenticationToken
// .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
// SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
// }
// }
// chain.doFilter(request, response);
// }
// }
