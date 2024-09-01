// import React from 'react'

// const RecommendedCandidates = () => {
//   return (
//     <div>RecommendedCandidates</div>
//   )
// }

// export default RecommendedCandidates

import React, { useEffect, useState } from 'react';
import { fetchMatchingCandidates } from '../../API/vacanciesApi';

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

const ViewRecommendCan: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const title = searchParams.get('title') || '';
  const position = searchParams.get('position') || '';
  const skills = searchParams.get('skills') || '';
  const [matchingCandidates, setMatchingCandidates] = useState<MatchingCandidate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vacancy: VacancyType = { id: 0, title, position, skills };
        const matchingCandidatesData = await fetchMatchingCandidates(vacancy);
        setMatchingCandidates(matchingCandidatesData);
      } catch (error) {
        console.error('Error fetching matching candidates:', error);
      }
    };

    fetchData();
  }, [title, position, skills]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Matching Candidates</h1>
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

export default ViewRecommendCan;
