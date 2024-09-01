package com.example.matching.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.matching.model.Candidate;
import com.example.matching.model.Vacancy;
import com.example.matching.service.VacancyService;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/vacancies")
public class VacancyController {
    @Autowired
    private VacancyService vacancyService;

    // @GetMapping("/search")
    // public ResponseEntity<List<Vacancy>> searchVacancies(
    // @RequestParam(required = false) String position,
    // @RequestParam(required = false) String skills) {
    // List<Vacancy> matchingVacancies = vacancyService.searchVacancies(position,
    // skills);
    // return new ResponseEntity<>(matchingVacancies, HttpStatus.OK);
    // }
    @GetMapping("/search")
    public ResponseEntity<List<Vacancy>> searchVacancies(@RequestParam String query) {
        // Split the input query string into individual search terms based on "," or
        // "and"
        List<String> searchTerms = Arrays.stream(query.split("\\s*,\\s*|\\s+and\\s+"))
                .map(String::trim)
                .collect(Collectors.toList());

        // Search for vacancies based on the search terms
        List<Vacancy> matchingVacancies = vacancyService.searchVacancies(searchTerms);

        return new ResponseEntity<>(matchingVacancies, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Vacancy>> getAllVacancies() {
        List<Vacancy> vacancies = vacancyService.getAllVacancies();
        return new ResponseEntity<>(vacancies, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vacancy> getVacancyById(@PathVariable Long id) {
        Optional<Vacancy> vacancy = vacancyService.getVacancyById(id);
        return vacancy.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Vacancy> createVacancy(@RequestBody Vacancy vacancy) {
        Vacancy createdVacancy = vacancyService.createVacancy(vacancy);
        return new ResponseEntity<>(createdVacancy, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateVacancy(@PathVariable Long id, @RequestBody Vacancy vacancy) {
        try {
            Vacancy updatedVacancy = vacancyService.updateVacancy(id, vacancy);
            return new ResponseEntity<>(updatedVacancy, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            String errorMessage = e.getMessage();
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }
    // @PutMapping("/{id}")
    // public ResponseEntity<Vacancy> updateVacancy(@PathVariable Long id,
    // @RequestBody Vacancy vacancy) {
    // Vacancy updatedVacancy = vacancyService.updateVacancy(id, vacancy);
    // return new ResponseEntity<>(updatedVacancy, HttpStatus.OK);
    // }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteVacancy(@PathVariable Long id) {
        try {
            vacancyService.deleteVacancy(id);
            // return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return ResponseEntity.ok("Successfully Deleted");
        } catch (IllegalArgumentException e) {
            // TODO Auto-generated catch block
            String errorMessage = e.getMessage();
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
    }
    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> deleteVacancy(@PathVariable Long id) {
    // vacancyService.deleteVacancy(id);
    // return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    // }
}
