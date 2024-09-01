package com.example.matching.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.matching.model.Candidate;
import com.example.matching.model.Vacancy;
import com.example.matching.repository.CandidateRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MatchService {

    @Autowired
    private CandidateRepository candidateRepository;

    public List<CandidateMatch> findMatchingCandidates(Vacancy vacancy) {
        List<Candidate> allCandidates = candidateRepository.findAll();
        List<CandidateMatch> matchingCandidates = new ArrayList<>();

        for (Candidate candidate : allCandidates) {
            double matchPercentage = calculateMatchPercentage(candidate, vacancy);
            if (matchPercentage > 0) {
                matchingCandidates.add(new CandidateMatch(candidate, matchPercentage));
            }
        }

        return matchingCandidates;
    }

    private double calculateMatchPercentage(Candidate candidate, Vacancy vacancy) {
        // Extract positions and skills from candidate and vacancy
        String candidatePosition = candidate.getPosition();
        String candidateSkills = candidate.getSkills();
        String vacancyPosition = vacancy.getPosition();
        String vacancySkills = vacancy.getSkills();

        // Calculate match percentage based on positions and skills
        double positionMatchPercentage = calculatePositionMatchPercentage(candidatePosition, vacancyPosition);
        double skillsMatchPercentage = calculateSkillsMatchPercentage(candidateSkills, vacancySkills);

        // Combine position and skills match percentages with a weightage
        // Adjust weights according to the importance of position and skills in your
        // matching criteria
        double totalWeight = 2.0; // Total weight for position and skills
        double positionWeight = 1.0; // Weight for position
        double skillsWeight = 1.0; // Weight for skills

        double combinedMatchPercentage = (positionMatchPercentage * positionWeight
                + skillsMatchPercentage * skillsWeight) / totalWeight;

        // return combinedMatchPercentage;
        // Format the match percentage to two decimal points
        double formattedMatchPercentage = Double.parseDouble(String.format("%.2f",
                combinedMatchPercentage));

        return formattedMatchPercentage;
    }

    private double calculatePositionMatchPercentage(String candidatePosition, String vacancyPosition) {
        return candidatePosition.equalsIgnoreCase(vacancyPosition) ? 100.0 : 0.0;
    }

    private double calculateSkillsMatchPercentage(String candidateSkills, String vacancySkills) {
        String[] candidateSkillsArray = candidateSkills.split(",");
        String[] vacancySkillsArray = vacancySkills.split(",");

        int matchingSkillsCount = 0;
        for (String candidateSkill : candidateSkillsArray) {
            for (String vacancySkill : vacancySkillsArray) {
                if (candidateSkill.trim().equalsIgnoreCase(vacancySkill.trim())) {
                    matchingSkillsCount++;
                    break;
                }
            }
        }

        double totalSkills = Math.max(candidateSkillsArray.length, vacancySkillsArray.length);
        return (matchingSkillsCount / totalSkills) * 100;
    }

    public static class CandidateMatch {
        private Candidate candidate;
        private double matchPercentage;

        public CandidateMatch(Candidate candidate, double matchPercentage) {
            this.candidate = candidate;
            this.matchPercentage = matchPercentage;
        }

        public Candidate getCandidate() {
            return candidate;
        }

        public void setCandidate(Candidate candidate) {
            this.candidate = candidate;
        }

        public double getMatchPercentage() {
            return matchPercentage;
        }

        public void setMatchPercentage(double matchPercentage) {
            this.matchPercentage = matchPercentage;
        }
    }
}

// import org.springframework.stereotype.Service;

// import com.example.matching.model.Candidate;
// import com.example.matching.model.Vacancy;

// @Service
// public class MatchService {

// public double calculateMatchPercentage(Candidate candidate, Vacancy vacancy)
// {
// // Extract positions and skills from candidate and vacancy
// String candidatePosition = candidate.getPosition();
// String candidateSkills = candidate.getSkills();
// String vacancyPosition = vacancy.getPosition();
// String vacancySkills = vacancy.getSkills();

// // Calculate match percentage based on positions and skills
// double positionMatchPercentage =
// calculatePositionMatchPercentage(candidatePosition, vacancyPosition);
// double skillsMatchPercentage =
// calculateSkillsMatchPercentage(candidateSkills, vacancySkills);

// // Combine position and skills match percentages with a weightage
// // Adjust weights according to the importance of position and skills in your
// // matching criteria
// double totalWeight = 2.0; // Total weight for position and skills
// double positionWeight = 1.0; // Weight for position
// double skillsWeight = 1.0; // Weight for skills

// double combinedMatchPercentage = (positionMatchPercentage * positionWeight
// + skillsMatchPercentage * skillsWeight) / totalWeight;

// // Format the match percentage to two decimal points
// double formattedMatchPercentage = Double.parseDouble(String.format("%.2f",
// combinedMatchPercentage));

// return formattedMatchPercentage;
// }
// // public double calculateMatchPercentage(Candidate candidate, Vacancy
// vacancy)
// // {
// // // Extract positions and skills from candidate and vacancy
// // String candidatePosition = candidate.getPosition();
// // String candidateSkills = candidate.getSkills();
// // String vacancyPosition = vacancy.getPosition();
// // String vacancySkills = vacancy.getSkills();

// // // Calculate match percentage based on positions and skills
// // double positionMatchPercentage =
// // calculatePositionMatchPercentage(candidatePosition, vacancyPosition);
// // double skillsMatchPercentage =
// // calculateSkillsMatchPercentage(candidateSkills, vacancySkills);

// // // Combine position and skills match percentages with a weightage
// // // Adjust weights according to the importance of position and skills in
// your
// // // matching criteria
// // double totalWeight = 2.0; // Total weight for position and skills
// // double positionWeight = 1.0; // Weight for position
// // double skillsWeight = 1.0; // Weight for skills

// // double combinedMatchPercentage = (positionMatchPercentage * positionWeight
// // + skillsMatchPercentage * skillsWeight) / totalWeight;
// // return combinedMatchPercentage;
// // }

// private double calculatePositionMatchPercentage(String candidatePosition,
// String vacancyPosition) {
// // If positions are exactly the same, return 100% match
// if (candidatePosition.equalsIgnoreCase(vacancyPosition)) {
// return 100.0;
// } else {
// // Otherwise, return 0% match
// return 0.0;
// }
// }

// private double calculateSkillsMatchPercentage(String candidateSkills, String
// vacancySkills) {
// // Split skills strings into arrays
// String[] candidateSkillsArray = candidateSkills.split(",");
// String[] vacancySkillsArray = vacancySkills.split(",");

// // Calculate the number of matching skills
// int matchingSkillsCount = 0;
// for (String candidateSkill : candidateSkillsArray) {
// for (String vacancySkill : vacancySkillsArray) {
// if (candidateSkill.trim().equalsIgnoreCase(vacancySkill.trim())) {
// matchingSkillsCount++;
// break; // Move to the next candidate skill
// }
// }
// }

// // Calculate the match percentage
// double totalSkills = Math.max(candidateSkillsArray.length,
// vacancySkillsArray.length); // Take the maximum
// // number of skills
// double matchPercentage = (matchingSkillsCount / totalSkills) * 100;
// // int matchPercentage = (int) ((matchingSkillsCount / totalSkills) * 100);

// return matchPercentage;
// }
// }
