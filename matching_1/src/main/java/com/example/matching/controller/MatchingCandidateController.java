package com.example.matching.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.matching.model.Vacancy;
import com.example.matching.service.MatchService;

import java.util.List;

@RestController
@RequestMapping("/matching-candidates")
public class MatchingCandidateController {

    @Autowired
    private MatchService matchService;

    @PostMapping
    public ResponseEntity<List<MatchService.CandidateMatch>> findMatchingCandidates(@RequestBody Vacancy vacancy) {
        List<MatchService.CandidateMatch> matchingCandidates = matchService.findMatchingCandidates(vacancy);
        return new ResponseEntity<>(matchingCandidates, HttpStatus.OK);
    }
}

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.matching.model.Candidate;
// import com.example.matching.model.Vacancy;
// import com.example.matching.service.MatchService;

// @RestController
// @RequestMapping("/match")
// public class MatchController {

// @Autowired
// private MatchService matchService;

// @PostMapping
// public ResponseEntity<Double> calculateMatchPercentage(@RequestBody
// MatchRequest matchRequest) {
// Candidate candidate = matchRequest.getCandidate();
// Vacancy vacancy = matchRequest.getVacancy();

// double matchPercentage = matchService.calculateMatchPercentage(candidate,
// vacancy);
// return new ResponseEntity<>(matchPercentage, HttpStatus.OK);
// }

// // Inner class for request body
// static class MatchRequest {
// private Candidate candidate;
// private Vacancy vacancy;

// // Getters and setters

// public Candidate getCandidate() {
// return candidate;
// }

// public void setCandidate(Candidate candidate) {
// this.candidate = candidate;
// }

// public Vacancy getVacancy() {
// return vacancy;
// }

// public void setVacancy(Vacancy vacancy) {
// this.vacancy = vacancy;
// }
// }
// }
