import React from 'react';
import { Vacancy } from '../API/searchApi';

interface SearchFormProps {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    results: Vacancy[];
    handleSearch: () => Promise<void>;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ query, setQuery, results, handleSearch, handleKeyPress }) => {
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

export default SearchForm;


// import React from 'react';

// interface SearchFormProps {
//     query: string;
//     setQuery: React.Dispatch<React.SetStateAction<string>>;
//     handleSearch: () => Promise<void>;
//     handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
// }

// const SearchForm: React.FC<SearchFormProps> = ({ query, setQuery, handleSearch, handleKeyPress }) => {
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyPress={handleKeyPress}
//             />
//             <button onClick={handleSearch}>Search</button>
//         </div>
//     );
// };

// export default SearchForm;
