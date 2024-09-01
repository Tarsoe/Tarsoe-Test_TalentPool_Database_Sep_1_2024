import React, { useState, useEffect } from 'react';
import { navigate } from 'wouter/use-browser-location';
import { deleteVacancy, fetchVacancy } from '../../API/vacanciesApi';
import { searchVacancies, Vacancy as SearchVacancy } from '../../API/searchApi';

interface VacancyType {
    id: number;
    title: string;
    position: string;
    skills: string;
}

const Vacancies: React.FC = () => {
    const [vacancies, setVacancies] = useState<VacancyType[]>([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchVacancy[]>([]);
    const [searching, setSearching] = useState(false);
    const [noData, setNoData] = useState(false);

    const handleDelete = async (id: number) => {
        try {
            await deleteVacancy(id);
            setVacancies(vacancies.filter(vacancy => vacancy.id !== id));
        } catch (error) {
            console.error('Error deleting vacancy:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const data = await searchVacancies(query);
            setResults(data);
            setSearching(true);
            setQuery(''); // Clear the search bar after search
            setNoData(data.length === 0);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const GoToAddVacancy = () => {
        navigate("/addVacancies");
    }

    const goToEditVacancy = (id: number) => {
        navigate(`/editVacancy/${id}`);
    };

    const goToViewRecommendCan = (vacancy: VacancyType) => {
        console.log("goToViewRecommendCan");
        navigate(`/viewRecommendCan?title=${vacancy.title}&position=${vacancy.position}&skills=${vacancy.skills}`);
    };

    const getVacancies = async () => {
        const data = await fetchVacancy();
        setVacancies(data);
    };

    useEffect(() => {
        getVacancies();
    }, []);

    return (
        <div>
            <h1>Vacancies List</h1>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {searching ? (
                <div>
                    {noData ? (
                        <p>NO DATA! There is no data matching your search.</p>
                    ) : (
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
                    )}
                </div>
            ) : (
                <div>
                    <button onClick={() => navigate('/vacancies')} className=' bg-blue-600 rounded text-white px-4 py-2 mr-2'>Vacancies</button>
                    <button onClick={GoToAddVacancy} className=' bg-blue-600 rounded text-white px-4 py-2'>Add new vacancy</button>
                    <ul>
                        {vacancies.map((vacancy) => (
                            <li key={vacancy.id}>
                                <div>Title: {vacancy.title}</div>
                                <div>Position: {vacancy.position}</div>
                                <div>Skill: {vacancy.skills}</div>
                                <button onClick={() => goToEditVacancy(vacancy.id)} className='bg-yellow-500 text-white mr-2'>Edit</button>
                                <button onClick={() => goToViewRecommendCan(vacancy)} className='bg-green-500 text-white mb-4 mr-2'>ViewRecommendCan</button>
                                <button onClick={() => handleDelete(vacancy.id)} className='bg-red-500 text-white mb-4'>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Vacancies;



// import React, { useState, useEffect } from 'react';
// import { navigate } from 'wouter/use-browser-location';
// import { deleteVacancy, fetchVacancy } from '../../API/vacanciesApi';
// import { searchVacancies, Vacancy as SearchVacancy } from '../../API/searchApi'; // Import searchVacancies and Vacancy types
// import SearchForm from '../../components/SearchForm';
// // import SearchForm from '../components/SearchForm'; // Import the SearchForm component

// interface VacancyType {
//     id: number;
//     title: string;
//     position: string;
//     skills: string;
// }

// const Vacancies: React.FC = () => {
//     const [vacancies, setVacancies] = useState<VacancyType[]>([]);
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState<SearchVacancy[]>([]);

//     const handleDelete = async (id: number) => {
//         try {
//             await deleteVacancy(id);
//             setVacancies(vacancies.filter(vacancy => vacancy.id !== id));
//         } catch (error) {
//             console.error('Error deleting vacancy:', error);
//         }
//     };

//     const GoToAddVacancy = () => {
//         navigate("/addVacancies");
//     }

//     const goToEditVacancy = (id: number) => {
//         navigate(`/editVacancy/${id}`);
//     };

//     const goToViewRecommendCan = (vacancy: VacancyType) => {
//         navigate(`/viewRecommendCan?title=${vacancy.title}&position=${vacancy.position}&skills=${vacancy.skills}`);
//     };

//     const handleSearch = async () => {
//         try {
//             const data = await searchVacancies(query); // Call the API function for searching
//             setResults(data);
//             console.log("results: ", results);
//             navigate('/search'); // Navigate to the search page
//             setQuery(''); // Clear the search bar after search
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//         }
//     };

//     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === 'Enter') {
//             handleSearch();
//         }
//     };

//     const sortedVacancies = [...vacancies].sort((a, b) => a.id - b.id);

//     useEffect(() => {
//         const getVacancies = async () => {
//             const data = await fetchVacancy();
//             setVacancies(data);
//         };
//         getVacancies();
//     }, []);

//     return (
//         <div>
//             <h1>Vacancies List</h1>
//             <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} handleKeyPress={handleKeyPress} />
//             <button onClick={GoToAddVacancy} className=' bg-blue-600 rounded text-white px-4 py-2'>Add new vacancy</button>
//             <ul>
//                 {sortedVacancies.map((vacancy) => (
//                     <li key={vacancy.id}>
//                         <div>Title: {vacancy.title}</div>
//                         <div>Position: {vacancy.position}</div>
//                         <div>Skill: {vacancy.skills}</div>
//                         <button onClick={() => goToEditVacancy(vacancy.id)} className='bg-yellow-500 text-white mr-2'>Edit</button>
//                         <button onClick={() => goToViewRecommendCan(vacancy)} className='bg-green-500 text-white mb-4 mr-2'>ViewRecommendCan</button>
//                         <button onClick={() => handleDelete(vacancy.id)} className='bg-red-500 text-white mb-4'>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Vacancies;


// import React, { useState, useEffect } from 'react';
// // import AddEmployeeCard from '../components/AddEmployeeCard';
// import { navigate } from 'wouter/use-browser-location';
// import { deleteVacancy, fetchVacancy } from '../../API/vacanciesApi';

// interface VacancyType {
//     id: number;
//     title: string;
//     position: string;
//     skills: string;
// }

// const Vacancies: React.FC = () => {
//     const [vacancies, setVacancies] = useState<VacancyType[]>([]);

//     const handleDelete = async (id: number) => {
//         try {
//             await deleteVacancy(id);
//             setVacancies(vacancies.filter(vacancy => vacancy.id !== id));
//         } catch (error) {
//             console.error('Error deleting vacancy:', error);
//         }
//     };

//     const GoToAddVacancy = () => {
//         navigate("/addVacancies");
//     }

//     const goToEditVacancy = (id: number) => {
//         navigate(`/editVacancy/${id}`);
//     };

//     // const goToMatchCandidate = (id: number) => {
//     //     navigate(`/match-candidate/${id}`); // Assuming you have a route for matching candidates with vacancy ID
//     // };
//     const goToViewRecommendCan = (vacancy: VacancyType) => {
//         console.log("goToViewRecommendCan");
//         // Assuming you have a route for matching candidates with vacancy ID
//         navigate(`/viewRecommendCan?title=${vacancy.title}&position=${vacancy.position}&skills=${vacancy.skills}`);
//     };

//     // Sort employees by ID in ascending order
//     const sortedVacancies = [...vacancies].sort((a, b) => a.id - b.id);

//     useEffect(() => {
//         const getVacancies = async () => {
//             const data = await fetchVacancy();
//             setVacancies(data);
//         };
//         getVacancies();
//     }, []);

//     return (
//         <div>
//             <h1>Vacancies List</h1>
//             <button onClick={() => navigate('/vacancies')} className=' bg-blue-600 rounded text-white px-4 py-2 mr-2'>Vacancies</button>
//             <button onClick={GoToAddVacancy} className=' bg-blue-600 rounded text-white px-4 py-2'>Add new vacancy</button>
//             <ul>
//                 {sortedVacancies.map((vacancy) => (
//                     <li key={vacancy.id}>
//                         <div>Title: {vacancy.title}</div>
//                         <div>Position: {vacancy.position}</div>
//                         <div>Skill: {vacancy.skills}</div>
//                         <button onClick={() => goToEditVacancy(vacancy.id)} className='bg-yellow-500 text-white mr-2'>Edit</button>
//                         <button onClick={() => goToViewRecommendCan(vacancy)} className='bg-green-500 text-white mb-4 mr-2'>ViewRecommendCan</button>
//                         <button onClick={() => handleDelete(vacancy.id)} className='bg-red-500 text-white mb-4'>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Vacancies;