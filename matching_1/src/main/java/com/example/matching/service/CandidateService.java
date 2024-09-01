package com.example.matching.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.matching.model.Candidate;
import com.example.matching.model.Vacancy;
import com.example.matching.repository.CandidateRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CandidateService {
    @Autowired
    private CandidateRepository candidateRepository;

    // Search in Candidate Position and Skills
    public List<Candidate> searchCandidates(List<String> searchTerms) {
        List<Candidate> matchingCandidates = new ArrayList<>();

        for (String term : searchTerms) {
            List<Candidate> termCandidates = candidateRepository
                    .findByNameContainingIgnoreCaseOrPositionContainingIgnoreCaseOrSkillsContainingIgnoreCase(term,
                            term, term);
            matchingCandidates.addAll(termCandidates);
        }

        return matchingCandidates;
    }
    // public List<Candidate> searchCandidates(String name, String skills) {
    // if (name != null && skills != null) {
    // String[] skillArray = skills.split(",");
    // Set<Candidate> matchingCandidatesNameAndSkills = new HashSet<>();
    // for (String skill : skillArray) {
    // List<Candidate> candidates = candidateRepository
    // .findByNameContainingIgnoreCaseAndSkillsContainingIgnoreCase(name,
    // skill.trim());
    // matchingCandidatesNameAndSkills.addAll(candidates);
    // }
    // return new ArrayList<>(matchingCandidatesNameAndSkills);
    // }
    // else if (name != null) {
    // return candidateRepository.findByNameContainingIgnoreCase(name);
    // }
    // else if (skills != null) {
    // String[] skillArray = skills.split(",");
    // Set<Candidate> matchingCandidates = new HashSet<>();
    // for (String skill : skillArray) {
    // List<Candidate> candidates =
    // candidateRepository.findBySkillsContainingIgnoreCase(skill.trim());
    // matchingCandidates.addAll(candidates);
    // }
    // return new ArrayList<>(matchingCandidates);
    // }
    // else {
    // return candidateRepository.findAll();
    // }
    // }

    public List<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
        // return candidateRepository.findAllByOrderByTimestamp();
    }

    public Optional<Candidate> getCandidateById(Long id) {
        return candidateRepository.findById(id);
    }

    public Candidate createCandidate(Candidate candidate) {
        candidate.setTimestamp(new Date());
        return candidateRepository.save(candidate);
    }

    // public Candidate updateCandidate(Long id, Candidate candidate) {
    // candidate.setId(id);
    // return candidateRepository.save(candidate);
    // }
    public Candidate updateCandidate(Long id, Candidate candidate) {
        Optional<Candidate> existingCandidateOptional = candidateRepository.findById(id);
        if (existingCandidateOptional.isPresent()) {
            candidate.setId(id);
            // Update the timestamp to indicate when the candidate was last updated
            candidate.setTimestamp(new Date());
            return candidateRepository.save(candidate);
        } else {
            throw new IllegalArgumentException("Candidate with ID " + id + " does not exist.");
        }
    }

    // public void deleteCandidate(Long id) {
    // candidateRepository.deleteById(id);
    // }
    public void deleteCandidate(Long id) {
        Optional<Candidate> existingCandidateOptional = candidateRepository.findById(id);
        if (existingCandidateOptional.isPresent()) {
            candidateRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Candidate with ID " + id + " does not exist.");
        }
    }
}
