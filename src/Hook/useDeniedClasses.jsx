import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useDeniedClasses = () => {
  const { data: deniedClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['deniedClasses'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get('https://athlete-nexus-server.vercel.app/classes/denied', config);
      return res.data;
    },
  });

  return [deniedClasses, refetch, loading];
};

export default useDeniedClasses;
