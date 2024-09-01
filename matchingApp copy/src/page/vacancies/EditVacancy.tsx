// import { useParams, Link } from 'wouter';
import { useParams } from 'wouter';
import React, { useState, useEffect } from 'react';
import { navigate } from 'wouter/use-browser-location';
import { fetchVacancyById, updateVacancy } from '../../API/vacanciesApi';

interface VacancyType {
    id: number;
    title: string;
    position: string;
    skills: string;
}

const EditVacancy: React.FC = () => {
    const [vacancyData, setVacancyData] = useState<VacancyType>({
        id: 0,
        title: '',
        position: '',
        skills: ''
    });
    const { id } = useParams<{ id: string }>();
    // const [, navigate] = useRoute('/:id');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchVacancyById(parseInt(id, 10));
                setVacancyData(data);
            } catch (error) {
                console.error('p0: number, vacancy: VacancyTypeVacancyTypeVacancyTypee:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVacancyData({
            ...vacancyData,
            [name]: value
        });
    };

    const handleUpdateEmployee = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateVacancy(parseInt(id, 10), vacancyData);
            navigate('/vacancies', { replace: true });
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    return (
        <div>
            <h1>Update Vacancy</h1>
            <form onSubmit={handleUpdateEmployee}>
                <div>
                    <label htmlFor="name">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={vacancyData.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={vacancyData.position}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="skills">Skills:</label>
                    <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={vacancyData.skills}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Update Vacancy</button>
            </form>
            <button onClick={() => navigate('/vacancies', { replace: true })} className=' text-white bg-blue-600'>Go Back</button>
            {/* <Link href="/vacancy">Go back</Link> */}
        </div>
    );
};

export default EditVacancy;

