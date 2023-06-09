import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useSelectedClasses = () => {
  const { data: selectedClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['selectedClasses'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/classes/selected');
      return res.data; 
    },
  });

  return [selectedClasses, refetch, loading];
};

export default useSelectedClasses;