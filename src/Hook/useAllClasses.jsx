import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useAllClasses = () => {
  const { data: allClass = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['allClass'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/classes/approved');
      return res.data; 
    },
  });

  return [allClass, refetch, loading];
};

export default useAllClasses;
