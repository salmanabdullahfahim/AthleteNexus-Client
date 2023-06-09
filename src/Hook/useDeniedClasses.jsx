import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useDeniedClasses = () => {
  const { data: deniedClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['deniedClasses'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/classes/denied');
      return res.data; 
    },
  });

  return [deniedClasses, refetch, loading];
};

export default useDeniedClasses;