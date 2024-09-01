import axios from 'axios';

// Define type for the response data
export interface Vacancy {
    id: number;
    title: string;
    position: string;
    skills: string;
}

const API_URL = 'http://localhost:8080/vacancies/search?query=';

export const searchVacancies = async (query: string): Promise<Vacancy[]> => {
    try {
        // const response = await axios.get<Vacancy[]>(`http://localhost:8080/vacancies/search?query=${query}`);
        const response = await axios.get<Vacancy[]>(`${API_URL}${query}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching search results');
    }
};


// import axios from 'axios';

// interface Vacancy {
//     id: number;
//     title: string;
//     position: string;
//     skills: string;
// }

// export const searchVacancies = async (position: string, skills: string): Promise<Vacancy[]> => {
//     try {
//         const response = await axios.get<Vacancy[]>('http://localhost:8080/vacancies/search', {
//             params: {
//                 position,
//                 skills,
//             },
//         });
//         // console.log("response = ", response);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching vacancies:', error);
//         return [];
//     }
// };
