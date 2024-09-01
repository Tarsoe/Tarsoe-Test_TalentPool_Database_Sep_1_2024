package com.example.matching.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:5173"); // Add the origin from where requests are coming
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}

// import java.util.List;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.web.filter.CorsFilter;

// // import io.getarrays.contactapi.constant.Constant;

// import static org.springframework.http.HttpHeaders.ACCEPT;
// import static
// org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS;
// import static
// org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN;
// import static
// org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS;
// import static
// org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD;
// import static org.springframework.http.HttpHeaders.AUTHORIZATION;
// import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
// import static org.springframework.http.HttpHeaders.ORIGIN;
// import static org.springframework.http.HttpMethod.DELETE;
// import static org.springframework.http.HttpMethod.GET;
// import static org.springframework.http.HttpMethod.OPTIONS;
// import static org.springframework.http.HttpMethod.PATCH;
// import static org.springframework.http.HttpMethod.POST;
// import static org.springframework.http.HttpMethod.PUT;

// @Configuration
// public class CorsConfig {
// @Bean
// public CorsFilter corsFilter() {
// var urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
// var corsConfiguration = new CorsConfiguration();
// corsConfiguration.setAllowCredentials(true);
// corsConfiguration
// .setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:4200",
// "http://localhost:5173"));

// // corsConfiguration.setAllowedHeaders(List.of(ORIGIN,
// ACCESS_CONTROL_ALLOW_ORIGIN, CONTENT_TYPE, ACCEPT,
// // AUTHORIZATION, Constant.X_REQUESTED_WITH, ACCESS_CONTROL_REQUEST_METHOD,
// ACCESS_CONTROL_REQUEST_HEADERS,
// // ACCESS_CONTROL_ALLOW_CREDENTIALS));
// // corsConfiguration.setExposedHeaders(List.of(ORIGIN,
// ACCESS_CONTROL_ALLOW_ORIGIN, CONTENT_TYPE, ACCEPT,
// // AUTHORIZATION, Constant.X_REQUESTED_WITH, ACCESS_CONTROL_REQUEST_METHOD,
// ACCESS_CONTROL_REQUEST_HEADERS,
// // ACCESS_CONTROL_ALLOW_CREDENTIALS));
// corsConfiguration.setAllowedMethods(
// List.of(GET.name(), POST.name(), PUT.name(), PATCH.name(), DELETE.name(),
// OPTIONS.name()));

// urlBasedCorsConfigurationSource.registerCorsConfiguration("/**",
// corsConfiguration);
// return new CorsFilter(urlBasedCorsConfigurationSource);
// }
// }
