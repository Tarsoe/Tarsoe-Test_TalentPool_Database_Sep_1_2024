import axios from 'axios';

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

const API_URL = 'http://localhost:8080';

export const fetchVacancy = async () => {
    try {
        const response = await axios.get<VacancyType[]>(`${API_URL}/vacancies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching vacancies:', error);
        throw error;
    }
};

export const fetchVacancyById = async (id: number) => {
    try {
        const response = await axios.get(`${API_URL}/vacancies/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        throw error;
    }
};

export const fetchMatchingCandidates = async (vacancy: VacancyType) => {
    try {
        const response = await axios.post<MatchingCandidate[]>(`${API_URL}/matching-candidates`, vacancy);
        return response.data;
    } catch (error) {
        console.error('Error fetching matching candidates:', error);
        throw error;
    }
};

export const addVacancy = async (vacancy: VacancyType) => {
    try {
        const response = await axios.post<VacancyType>(`${API_URL}/vacancies`, vacancy);
        return response.data;
    } catch (error) {
        console.error('Error adding vacancy:', error);
        throw error;
    }
};

export const updateVacancy = async (id: number, vacancy: VacancyType) => {
    try {
        const response = await axios.put<VacancyType>(`${API_URL}/vacancies/${id}`, vacancy);
        return response.data;
    } catch (error) {
        console.error('Error updating vacancy:', error);
        throw error;
    }
};

export const deleteVacancy = async (id: number) => {
    try {
        const response = await axios.delete<void>(`${API_URL}/vacancies/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting vacancy:', error);
        throw error;
    }
};

export default {
    fetchVacancy,
    fetchMatchingCandidates,
    addVacancy,
    updateVacancy,
    deleteVacancy,
};


// import axios from "axios";

// interface VacancyType {
//     id: number;
//     title: string;
//     position: string;
//     skills: string;
// }

// const API_URL = 'http://localhost:8080';

// export const fetchVacancy = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/vacancies`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching vacancies:', error);
//         throw error;
//     }
// };

// export const fetchVacancyById = async (id: number) => {
//     try {
//         const response = await axios.get(`${API_URL}/vacancies/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching employee by ID:', error);
//         throw error;
//     }
// };

// export const addVacancy = async (vacancy: VacancyType) => {
//     try {
//         const response = await axios.post(`${API_URL}/vacancies`, vacancy);
//         return response.data;
//     } catch (error) {
//         console.error('Error adding employee:', error);
//         throw error;
//     }
// };

// export const updateVacancy = async (id: number, vacancy: VacancyType) => {
//     try {
//         const response = await axios.put(`${API_URL}/vacancies/${id}`, vacancy);
//         return response.data;
//     } catch (error) {
//         console.error('Error updating employee:', error);
//         throw error;
//     }
// };

// export const deleteVacancy = async (id: number) => {
//     try {
//         const response = await axios.delete(`${API_URL}/vacancies/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting employee:', error);
//         throw error;
//     }
// };