// // SecurityConfig.java
// package com.example.matching.config;

// import com.example.matching.service.CustomUserDetailsService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Autowired
//     private CustomUserDetailsService userDetailsService;

//     @Autowired
//     private JwtRequestFilter jwtRequestFilter;

//     @Autowired
//     private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

//     @Bean
//     public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
//             throws Exception {
//         return authenticationConfiguration.getAuthenticationManager();
//     }

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http.csrf(AbstractHttpConfigurer::disable)
//                 .authorizeHttpRequests(authz -> authz
//                         .requestMatchers("/register", "/authenticate").permitAll()
//                         .anyRequest().authenticated())
//                 .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                 .exceptionHandling(exception -> exception
//                         .authenticationEntryPoint(jwtAuthenticationEntryPoint))
//                 .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

//         return http.build();
//     }
// }


//! Start here is bad code
// import com.example.matching.service.CustomUserDetailsService;
// // import com.example.matching.util.JwtRequestFilter;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.authentication.AuthenticationManager;
// import
// org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import
// org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// // import
// org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import
// org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
// import
// org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import
// org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

// @Autowired
// private CustomUserDetailsService userDetailsService;

// @Autowired
// private JwtRequestFilter jwtRequestFilter;

// @Bean
// public PasswordEncoder passwordEncoder() {
// return new BCryptPasswordEncoder();
// }

// @Bean
// public AuthenticationManager
// authenticationManager(AuthenticationConfiguration
// authenticationConfiguration)
// throws Exception {
// return authenticationConfiguration.getAuthenticationManager();
// }

// @Bean
// public SecurityFilterChain securityFilterChain(HttpSecurity http) throws
// Exception {
// http.csrf(AbstractHttpConfigurer::disable)
// .authorizeHttpRequests(authz -> authz
// .requestMatchers("/register", "/authenticate").permitAll()
// .anyRequest().authenticated())
// .sessionManagement(session ->
// session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
// .addFilterBefore(jwtRequestFilter,
// UsernamePasswordAuthenticationFilter.class);

// return http.build();
// }
// }

// package com.example.matching.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;

// @Configuration
// public class SecurityConfig {

// @Bean
// public PasswordEncoder passwordEncoder() {
// return new BCryptPasswordEncoder();
// }
// }
