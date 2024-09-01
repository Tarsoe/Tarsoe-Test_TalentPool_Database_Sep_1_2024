package com.example.matching.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.matching.model.Candidate;
import com.example.matching.model.Vacancy;
import com.example.matching.service.CandidateService;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/candidates")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

    // @GetMapping("/search")
    // public ResponseEntity<List<Candidate>>
    // searchCandidates(@RequestParam(required = false) String name,
    // @RequestParam(required = false) String skills) {
    // List<Candidate> matchingCandidates = candidateService.searchCandidates(name,
    // skills);
    // return new ResponseEntity<>(matchingCandidates, HttpStatus.OK);
    // }
    @GetMapping("/search")
    public ResponseEntity<List<Candidate>> searchCandidates(@RequestParam String query) {
        // Split the input query string into individual search terms based on "," or
        // "and"
        List<String> searchTerms = Arrays.stream(query.split("\\s*,\\s*|\\s+and\\s+"))
                .map(String::trim)
                .collect(Collectors.toList());

        // Search for vacancies based on the search terms
        List<Candidate> matchingCandidates = candidateService.searchCandidates(searchTerms);

        return new ResponseEntity<>(matchingCandidates, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Candidate>> getAllCandidates() {
        List<Candidate> candidates = candidateService.getAllCandidates();
        return new ResponseEntity<>(candidates, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Candidate> getCandidateById(@PathVariable Long id) {
        Optional<Candidate> candidate = candidateService.getCandidateById(id);
        return candidate.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Candidate> createCandidate(@RequestBody Candidate candidate) {
        Candidate createdCandidate = candidateService.createCandidate(candidate);
        return new ResponseEntity<>(createdCandidate, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCandidate(@PathVariable Long id, @RequestBody Candidate candidate) {
        try {
            Candidate updatedCandidate = candidateService.updateCandidate(id, candidate);
            return ResponseEntity.ok(updatedCandidate);
        } catch (IllegalArgumentException e) {
            String errorMessage = e.getMessage();
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }
    // @PutMapping("/{id}")
    // public ResponseEntity<Candidate> updateCandidate(@PathVariable Long id,
    // @RequestBody Candidate candidate) {
    // Candidate updatedCandidate = candidateService.updateCandidate(id, candidate);
    // return new ResponseEntity<>(updatedCandidate, HttpStatus.OK);
    // }

    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> deleteCandidate(@PathVariable Long id) {
    // candidateService.deleteCandidate(id);
    // return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteCandidate(@PathVariable Long id) {
        try {
            candidateService.deleteCandidate(id);
            return ResponseEntity.ok("Successfully Deleted");
        } catch (IllegalArgumentException e) {
            // TODO Auto-generated catch block
            String errorMessage = e.getMessage();
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }
}
