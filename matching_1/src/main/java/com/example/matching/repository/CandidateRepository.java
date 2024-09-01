package com.example.matching.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.matching.model.Candidate;
import com.example.matching.model.Vacancy;


@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    // List<Candidate> findAllByOrderByTimestamp();
    // List<Candidate> findByPositionContainingIgnoreCaseAndSkillsContainingAllIgnoreCase(String position,
    //         String... skills);

    List<Candidate> findByNameContainingIgnoreCaseAndSkillsContainingAllIgnoreCase(String name, String... skills);

    // List<Candidate> findByPositionContainingIgnoreCaseAndSkillsContainingIgnoreCase(String position, String skills);

    List<Candidate> findByNameContainingIgnoreCaseAndSkillsContainingIgnoreCase(String name, String skills);

    // List<Candidate> findByPositionContainingIgnoreCase(String position);

    List<Candidate> findByNameContainingIgnoreCase(String name);

    List<Candidate> findBySkillsContainingIgnoreCase(String skills);

    List<Candidate> findByNameContainingIgnoreCaseOrPositionContainingIgnoreCaseOrSkillsContainingIgnoreCase(
        String name, String position, String skills);
}
