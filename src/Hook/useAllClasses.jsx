import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useAllClasses = () => {
  const { data: allClass = [], isLoading: loading, refetch: approvedClassRefetch } = useQuery({
    queryKey: ['allClass'],
    queryFn: async () => {
      const res = await axios.get('https://athlete-nexus-server.vercel.app/classes/approved');
      return res.data; 
    },
  });

  return [allClass, approvedClassRefetch, loading];
};

export default useAllClasses;
