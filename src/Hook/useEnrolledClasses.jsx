import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const useEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const { data: enrolledClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['enrolledClasses'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(`https://athlete-nexus-server.vercel.app/payments/enrolled/student?email=${user?.email}`, config);
      return res.data;
    },
  });

  return [enrolledClasses, refetch, loading];
};

export default useEnrolledClasses;
