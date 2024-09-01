// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { fetchMatchingCandidates } from '../../API/vacanciesApi';
// // import axios from 'axios';
// // import { fetchMatchingCandidates } from './API/vacanciesApi';

// interface Vacancy {
//     id: number;
//     title: string;
//     position: string;
//     skills: string;
// }

// interface MatchingCandidate {
//     candidate: {
//         name: string;
//         position: string;
//         skills: string;
//     };
//     matchPercentage: number;
// }

// const AddNewVacancy: React.FC = () => {
//     const [vacancy, setVacancy] = useState<Vacancy>({
//         id: 0,
//         title: '',
//         position: '',
//         skills: ''
//     });
//     const [matchingCandidates, setMatchingCandidates] = useState<MatchingCandidate[]>([]);

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setVacancy(prevVacancy => ({
//             ...prevVacancy,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const matchingCandidatesData = await fetchMatchingCandidates(vacancy);
//             console.log("matchingCandidatesData = ", matchingCandidatesData);
//             setMatchingCandidates(matchingCandidatesData);
//         } catch (error) {
//             console.error('Error fetching matching candidates:', error);
//         }
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Matching Candidates</h1>
//             <form onSubmit={handleSubmit} className="mb-4">
//                 <div className="mb-4">
//                     <label htmlFor="title" className="block mb-1">Title</label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={vacancy.title}
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded px-4 py-2 w-full"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="position" className="block mb-1">Position</label>
//                     <input
//                         type="text"
//                         id="position"
//                         name="position"
//                         value={vacancy.position}
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded px-4 py-2 w-full"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="skills" className="block mb-1">Skills</label>
//                     <input
//                         type="text"
//                         id="skills"
//                         name="skills"
//                         value={vacancy.skills}
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded px-4 py-2 w-full"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Find Matching Candidates</button>
//             </form>
//             <div>
//                 <h2 className="text-xl font-bold mb-2">Matching Candidates:</h2>
//                 <ul>
//                     {matchingCandidates.map((candidate, index) => (
//                         <li key={index} className="mb-2">
//                             <p>{candidate.candidate.name}</p>
//                             <p>{candidate.candidate.position}</p>
//                             <p>{candidate.candidate.skills}</p>
//                             <p>Match Percentage: {candidate.matchPercentage}%</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default AddNewVacancy;

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVacancy } from '../../API/vacanciesApi';
// import { useNavigate } from 'wouter';

interface Vacancy {
    id: number;
    title: string;
    position: string;
    skills: string;
}

const AddNewVacancy: React.FC = () => {
    const [vacancy, setVacancy] = useState<Vacancy>({
        id: 0,
        title: '',
        position: '',
        skills: ''
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVacancy(prevVacancy => ({
            ...prevVacancy,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log("handleAddVacancy in AddNewVacancy.tsx");
            await addVacancy(vacancy);
            // const matchingCandidatesData = await fetchMatchingCandidates(vacancy);
            // console.log("matchingCandidatesData = ", matchingCandidatesData);
            // setMatchingCandidates(matchingCandidatesData);
            // Navigate to MatchingCandidates page with vacancy data as query parameters
            navigate(`/matching-candidates?title=${vacancy.title}&position=${vacancy.position}&skills=${vacancy.skills}`);
        } catch (error) {
            console.error('Error fetching matching candidates:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Enter Vacancy Details</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-1">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={vacancy.title}
                        onChange={handleChange}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="position" className="block mb-1">Position</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={vacancy.position}
                        onChange={handleChange}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="skills" className="block mb-1">Skills</label>
                    <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={vacancy.skills}
                        onChange={handleChange}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Vacancy and Find Matching Candidates</button>
            </form>
        </div>
    );
};

export default AddNewVacancy;


// import { Link } from 'wouter';
// import React, { useState } from 'react';
// import { navigate } from 'wouter/use-browser-location';
// import { addVacancy } from '../../API/vacanciesApi';

// function AddNewVacancy() {
//     const [vacancyData, setVacancyData] = useState({
//         id: 0,
//         title: '',
//         position: '',
//         skills: ''
//     });

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setVacancyData({
//             ...vacancyData,
//             [name]: value
//         });
//     };


//     const handleAddEmployee = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             console.log("handleAddVacancy in AddNewVacancy.tsx");
//             await addVacancy(vacancyData);
//             navigate('/vacancies');
//         } catch (error) {
//             console.error('Error adding employee:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Add Employee</h1>
//             <form onSubmit={handleAddEmployee}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={vacancyData.title}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="position">Position:</label>
//                     <input
//                         type="text"
//                         id="position"
//                         name="position"
//                         value={vacancyData.position}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="skills">Skills:</label>
//                     <input
//                         type="text"
//                         id="skills"
//                         name="skills"
//                         value={vacancyData.skills}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Add Vacancy</button>
//             </form>
//             <Link href="/vacancies">Go back</Link>
//         </div>
//     );
// }

// export default AddNewVacancy;
