import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useSelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const { data: selectedClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['selectedClasses'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(`https://athlete-nexus-server.vercel.app/classes/selected?email=${user?.email}`, config);
      return res.data;
    },
  });

  return [selectedClasses, refetch, loading];
};

export default useSelectedClasses;
