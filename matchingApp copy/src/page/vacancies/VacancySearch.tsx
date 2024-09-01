// import React from 'react';
// // import { RouteComponentProps } from 'react-router-dom';// Assuming SearchForm is in the same directory as App.tsx
// import SearchForm from './SearchForm';
// import { RouteComponentProps } from 'wouter';

// const VacancySearch: React.FC<RouteComponentProps> = () => {
//   // You can optionally handle any route-specific logic here
//   return <SearchForm />;
// };

// export default VacancySearch;

// import React from 'react';

// interface SearchFormProps {
//   query: string;
//   setQuery: React.Dispatch<React.SetStateAction<string>>;
//   handleSearch: () => Promise<void>;
//   handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
// }

// const VacancySearch: React.FC<SearchFormProps> = ({ query, setQuery, handleSearch, handleKeyPress }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyPress={handleKeyPress}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default VacancySearch;


import React, { useState } from 'react';
import { Vacancy, searchVacancies } from '../../API/searchApi';
// Import the API function and types

const VacancySearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Vacancy[]>([]); // Use the Vacancy type

  const handleSearch = async () => {
    try {
      const data = await searchVacancies(query); // Call the API function
      setResults(data);
      setQuery(''); // Clear the search bar after search
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress} // Call handleKeyPress when Enter key is pressed
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <div>Title: {result.title}</div>
            <div>Position: {result.position}</div>
            <div>Skills: {result.skills}</div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VacancySearch;




// import React, { useState } from 'react';
// import { searchVacancies } from './api';

// interface Vacancy {
//   id: number;
//   title: string;
//   position: string;
//   skills: string;
// }

// const VacancySearch: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [vacancies, setVacancies] = useState<Vacancy[]>([]);

//   const handleSearch = async () => {
//     let searchMode: string;
//     let position: string = '';
//     let skills: string = '';

//     // Check if input contains a comma
//     if (searchTerm.includes(',')) {
//       searchMode = 'Skills';
//       skills = searchTerm;
//     }
//     // Check if input contains any key words that indicate position
//     else if (['engineer', 'developer', 'manager'].some((keyword) => searchTerm.toLowerCase().includes(keyword))) {
//       searchMode = 'Position';
//       position = searchTerm;
//     }
//     // Default to searching both position and skills
//     else {
//       searchMode = 'Both';
//       position = searchTerm;
//       skills = searchTerm;
//     }

//     const results = await searchVacancies(position, skills);
//     setVacancies(results);

//     // Clear search input field after search
//     setSearchTerm('');
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <h1>Vacancy Search</h1>
//       <div>
//         <label htmlFor="search">Search:</label>
//         <input
//           type="text"
//           id="search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyPress={handleKeyPress}
//         />
//       </div>
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {vacancies.map((vacancy) => (
//           <li key={vacancy.id}>
//             <strong>{vacancy.title}</strong> - {vacancy.position} - {vacancy.skills}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VacancySearch;


// import React, { useState } from 'react';
// import { searchVacancies } from './api';

// interface Vacancy {
//   id: number;
//   title: string;
//   position: string;
//   skills: string;
// }

// const VacancySearch: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [vacancies, setVacancies] = useState<Vacancy[]>([]);

//   const handleSearch = async () => {
//     let searchMode: string;
//     let position: string = '';
//     let skills: string = '';

//     // Check if input contains keywords or symbols to determine search mode
//     if (searchTerm.includes(',')) {
//       // Assume it's a skills search if the input contains a comma
//       searchMode = 'Skills';
//       skills = searchTerm;
//     } else if (searchTerm.toLowerCase().includes('engineer')) {
//       // Assume it's a position search if the input contains the word "engineer"
//       searchMode = 'Position';
//       position = searchTerm;
//     } else {
//       // Default to searching both position and skills
//       searchMode = 'Both';
//       position = searchTerm;
//       skills = searchTerm;
//     }

//     const results = await searchVacancies(position, skills);
//     setVacancies(results);

//     // Clear search input field after search
//     setSearchTerm('');
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <h1>Vacancy Search</h1>
//       <div>
//         <label htmlFor="search">Search:</label>
//         <input
//           type="text"
//           id="search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyPress={handleKeyPress}
//         />
//       </div>
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {vacancies.map((vacancy) => (
//           <li key={vacancy.id}>
//             <strong>{vacancy.title}</strong> - {vacancy.position} - {vacancy.skills}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VacancySearch;


// import React, { useState } from 'react';
// import { searchVacancies } from './api';

// interface Vacancy {
//   id: number;
//   title: string;
//   position: string;
//   skills: string;
// }

// enum SearchMode {
//   Position,
//   Skills,
//   Both,
// }

// const VacancySearch: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [searchMode, setSearchMode] = useState<SearchMode>(SearchMode.Both);
//   const [vacancies, setVacancies] = useState<Vacancy[]>([]);

//   const handleSearch = async () => {
//     let results: Vacancy[] = [];
//     if (searchMode === SearchMode.Position) {
//       results = await searchVacancies(searchTerm, '');
//     } else if (searchMode === SearchMode.Skills) {
//       results = await searchVacancies('', searchTerm);
//     } else {
//       results = await searchVacancies(searchTerm, searchTerm);
//     }
//     setVacancies(results);

//     // Clear search input field after search
//     setSearchTerm('');
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <h1>Vacancy Search</h1>
//       <div>
//         <label htmlFor="search">Search:</label>
//         <input
//           type="text"
//           id="search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyPress={handleKeyPress}
//         />
//       </div>
//       <div>
//         <label htmlFor="mode">Search Mode:</label>
//         <select id="mode" value={searchMode} onChange={(e) => setSearchMode(Number(e.target.value))}>
//           <option value={SearchMode.Both}>Both Position and Skills</option>
//           <option value={SearchMode.Position}>Position Only</option>
//           <option value={SearchMode.Skills}>Skills Only</option>
//         </select>
//       </div>
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {vacancies.map((vacancy) => (
//           <li key={vacancy.id}>
//             <strong>{vacancy.title}</strong> - {vacancy.position} - {vacancy.skills}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VacancySearch;


// import React, { useState } from 'react';
// import { searchVacancies } from './api';

// interface Vacancy {
//   id: number;
//   title: string;
//   position: string;
//   skills: string;
// }

// const VacancySearch: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [vacancies, setVacancies] = useState<Vacancy[]>([]);

//   const handleSearch = async () => {
//     const results = await searchVacancies(searchTerm, searchTerm);
//     setVacancies(results);

//     // Clear search input field after search
//     setSearchTerm('');
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <h1>Vacancy Search</h1>
//       <div>
//         <label htmlFor="search">Search:</label>
//         <input
//           type="text"
//           id="search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyPress={handleKeyPress}
//         />
//       </div>
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {vacancies.map((vacancy) => (
//           <li key={vacancy.id}>
//             <strong>{vacancy.title}</strong> - {vacancy.position} - {vacancy.skills}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VacancySearch;



// import React, { useState } from 'react';
// import { searchVacancies } from '../../API/searchApi';

// interface Vacancy {
//     id: number;
//     title: string;
//     position: string;
//     skills: string;
// }

// const VacancySearch: React.FC = () => {
//     const [searchTerm, setSearchTerm] = useState<string>('');
//     const [vacancies, setVacancies] = useState<Vacancy[]>([]);

//     const handleSearch = async () => {
//         let position = '';
//         let skills = '';

//         if (searchTerm.includes(',')) {
//             // If the search term contains a comma, split it into position and skills
//             const [positionPart, ...skillsArray] = searchTerm.split(',');
//             position = positionPart.trim();
//             skills = skillsArray.join(',').trim(); // Join the remaining parts back into a string
//         } else {
//             // If the search term does not contain a comma, assume the entire term is for skills
//             skills = searchTerm.trim();
//         }
        
//         const results = await searchVacancies(position, skills);
//         setVacancies(results);

//         // Clear search input field after search
//         setSearchTerm('');
//     };

//     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === 'Enter') {
//             handleSearch();
//         }
//     };

//     return (
//         <div>
//             <h1>Vacancy Search</h1>
//             <div>
//                 <label htmlFor="search">Search:</label>
//                 <input
//                     type="text"
//                     id="search"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                 />
//             </div>
//             <button onClick={handleSearch}>Search</button>
//             <ul>
//                 {vacancies.map((vacancy) => (
//                     <li key={vacancy.id}>
//                         <strong>{vacancy.title}</strong> - {vacancy.position} - {vacancy.skills}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default VacancySearch;




// import React, { useState } from 'react';
// import { searchVacancies } from '../../API/searchApi';

// interface Vacancy {
//     id: number;
//     title: string;
//     position: string;
//     skills: string;
// }

// const VacancySearch: React.FC = () => {
//     const [position, setPosition] = useState<string>('');
//     const [skills, setSkills] = useState<string>('');
//     const [vacancies, setVacancies] = useState<Vacancy[]>([]);

//     const handleSearch = async () => {
//         const results = await searchVacancies(position, skills);
//         setVacancies(results);
//         // Clear search input fields after search
//         setPosition('');
//         setSkills('');
//     };

//     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === 'Enter') {
//             handleSearch();
//         }
//     };

//     return (
//         <div>
//             <h1>Vacancy Search</h1>
//             <div>
//                 <label htmlFor="position">Position:</label>
//                 <input
//                     type="text"
//                     id="position"
//                     value={position}
//                     onChange={(e) => setPosition(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="skills">Skills:</label>
//                 <input
//                     type="text"
//                     id="skills"
//                     value={skills}
//                     onChange={(e) => setSkills(e.target.value)}
//                     onKeyPress={handleKeyPress}
//                 />
//             </div>
//             <button onClick={handleSearch}>Search</button>
//             <ul>
//                 {vacancies.map((vacancy) => (
//                     <li key={vacancy.id}>
//                         Position: <strong>{vacancy.title}</strong> - Position: {vacancy.position} - Skills: {vacancy.skills}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default VacancySearch;

