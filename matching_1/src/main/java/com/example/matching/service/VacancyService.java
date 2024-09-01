package com.example.matching.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.matching.model.Vacancy;
import com.example.matching.repository.VacancyRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class VacancyService {
    @Autowired
    private VacancyRepository vacancyRepository;

    // Search in Vacancy Position and Skills
    public List<Vacancy> searchVacancies(List<String> searchTerms) {
        List<Vacancy> matchingVacancies = new ArrayList<>();

        for (String term : searchTerms) {
            List<Vacancy> termVacancies = vacancyRepository
                    .findByTitleContainingIgnoreCaseOrPositionContainingIgnoreCaseOrSkillsContainingIgnoreCase(term,
                            term, term);
            matchingVacancies.addAll(termVacancies);
        }

        return matchingVacancies;
    }
    // public List<Vacancy> searchVacancies(String position, String skills) {
    // // Check if both position and skills are provided
    // if (position != null && skills != null) {
    // // return
    // vacancyRepository.findByPositionContainingIgnoreCaseAndSkillsContainingIgnoreCase(position,
    // skills);
    // String[] skillArray = skills.split(",");
    // Set<Vacancy> matchingVacanciesPositionAndSkills = new HashSet<>();
    // for (String skill : skillArray) {
    // // List<Vacancy> vacancies =
    // vacancyRepository.findBySkillsContainingIgnoreCase(skill.trim());
    // List<Vacancy> vacancies =
    // vacancyRepository.findByPositionContainingIgnoreCaseAndSkillsContainingIgnoreCase(position,
    // skill.trim());
    // matchingVacanciesPositionAndSkills.addAll(vacancies);
    // }
    // return new ArrayList<>(matchingVacanciesPositionAndSkills);
    // }
    // // Check if only position is provided
    // else if (position != null) {
    // return vacancyRepository.findByPositionContainingIgnoreCase(position);
    // }
    // // Check if only skills are provided
    // else if (skills != null) {
    // // Split the input string containing skills into individual skill values
    // String[] skillArray = skills.split(",");
    // Set<Vacancy> matchingVacancies = new HashSet<>();
    // for (String skill : skillArray) {
    // List<Vacancy> vacancies =
    // vacancyRepository.findBySkillsContainingIgnoreCase(skill.trim());
    // matchingVacancies.addAll(vacancies);
    // }
    // return new ArrayList<>(matchingVacancies);
    // }
    // // If neither position nor skills are provided, return all vacancies
    // else {
    // return vacancyRepository.findAll();
    // }
    // }

    public List<Vacancy> getAllVacancies() {
        return vacancyRepository.findAll();
    }

    public Optional<Vacancy> getVacancyById(Long id) {
        return vacancyRepository.findById(id);
    }

    public Vacancy createVacancy(Vacancy vacancy) {
        return vacancyRepository.save(vacancy);
    }

    public Vacancy updateVacancy(Long id, Vacancy vacancy) {
        Optional<Vacancy> existingVacancyOptional = vacancyRepository.findById(id);
        if (existingVacancyOptional.isPresent()) {
            vacancy.setId(id);
            return vacancyRepository.save(vacancy);
        } else {
            throw new IllegalArgumentException("Vacancy with ID " + id + " does not exist.");
        }
    }

    public void deleteVacancy(Long id) {
        Optional<Vacancy> existingVacancyOptional = vacancyRepository.findById(id);
        if (existingVacancyOptional.isPresent()) {
            vacancyRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Vacancy with ID " + id + " does not exist.");
        }
    }
}
