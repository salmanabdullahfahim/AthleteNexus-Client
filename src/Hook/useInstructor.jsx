import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
  const { data: instructors = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/users/instructors');
      return res.data;
    },
  });

  return [instructors, refetch, loading];
};

export default useInstructor;
