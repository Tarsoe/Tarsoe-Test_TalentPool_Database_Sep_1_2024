// AuthenticationResponse.java
package com.example.matching.model;

public class AuthenticationResponse {

    private final String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}

// package com.example.matching.model;

// public class AuthenticationResponse {

// private final String jwt;

// public AuthenticationResponse(String jwt) {
// this.jwt = jwt;
// }

// public String getJwt() {
// return jwt;
// }
// }
