// import React from 'react'

// const RecommendedCandidates = () => {
//   return (
//     <div>RecommendedCandidates</div>
//   )
// }

// export default RecommendedCandidates

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMatchingCandidates } from '../../API/vacanciesApi';
import { navigate } from 'wouter/use-browser-location';
// import { navigate } from 'wouter/use-browser-location';
// import axios from 'axios';
// import { fetchMatchingCandidates, MatchingCandidate, VacancyType } from './yourApiFile'; // Replace './yourApiFile' with the correct path to your API file
interface VacancyType {
  id: number;
  title: string;
  position: string;
  skills: string;
}

interface CandidateType {
  id: number;
  name: string;
  position: string;
  skills: string;
}

interface MatchingCandidate {
  candidate: CandidateType;
  matchPercentage: number;
}

const MatchingCandidates: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title') || '';
  const position = queryParams.get('position') || '';
  const skills = queryParams.get('skills') || '';
  const [matchingCandidates, setMatchingCandidates] = useState<MatchingCandidate[]>([]);

  useEffect(() => {
    const fetchMatchingCandidatesData = async () => {
      try {
        const vacancy: VacancyType = { id: 0, title, position, skills };
        const matchingCandidatesData = await fetchMatchingCandidates(vacancy);
        setMatchingCandidates(matchingCandidatesData);
      } catch (error) {
        console.error('Error fetching matching candidates:', error);
      }
    };

    fetchMatchingCandidatesData();
  }, [title, position, skills]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Matching Candidates</h1>
      <h1 onClick={() => navigate('/vacancies', {replace: true})} className="text-2xl font-bold mb-4 cursor-pointer hover:text-cyan-500">Vacancy</h1>
      <div>
        <h2 className="text-xl font-bold mb-2">Vacancy Details:</h2>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Position:</strong> {position}</p>
        <p><strong>Skills:</strong> {skills}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Matching Candidates:</h2>
        <ul>
          {matchingCandidates.map((matchingCandidate, index) => (
            <li key={index}>
              <p><strong>Name:</strong> {matchingCandidate.candidate.name}</p>
              <p><strong>Position:</strong> {matchingCandidate.candidate.position}</p>
              <p><strong>Skills:</strong> {matchingCandidate.candidate.skills}</p>
              <p><strong>Match Percentage:</strong> {matchingCandidate.matchPercentage}%</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchingCandidates;
