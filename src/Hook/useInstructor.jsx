import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
  const { data: instructors = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await axios.get('https://athlete-nexus-server.vercel.app/users/instructors');
      return res.data;
    },
  });

  return [instructors, refetch, loading];
};

export default useInstructor;
