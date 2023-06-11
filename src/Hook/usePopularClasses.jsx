import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const usePopularClasses = () => {
  const { data: topClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['topClasses'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/classes/popular');
      return res.data;
    },
  });

  return [topClasses, refetch, loading];
};

export default usePopularClasses;
