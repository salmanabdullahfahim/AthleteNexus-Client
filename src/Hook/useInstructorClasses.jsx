import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useInstructorClasses = () => {
    const { user } = useContext(AuthContext);
    const { data: instructorClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructorClasses'],
        queryFn: async () => {
            const token = localStorage.getItem('access-token'); 
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const res = await axios.get(`http://localhost:5000/payments/enrolled/instructor?email=${user?.email}`, config);
            return res.data; 
        },
    });

    return [instructorClasses, refetch, loading];
};

export default useInstructorClasses;
