import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const usePopularClasses = () => {
  const { data: popularClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['popularClasses'],
    queryFn: async () => {
      const res = await axios.get('https://athlete-nexus-server.vercel.app/classes/popular');
      return res.data;
    },
  });

  return [popularClasses, refetch, loading];
};

export default usePopularClasses;
