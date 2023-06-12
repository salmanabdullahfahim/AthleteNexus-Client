import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const usePaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const { data: paymentsHistory = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['paymentsHistory'],
    queryFn: async () => {
      const token = localStorage.getItem('access-token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(`https://athlete-nexus-server.vercel.app/payments/history?email=${user?.email}`, config);
      return res.data;
    },
  });

  return [paymentsHistory, refetch, loading];
};

export default usePaymentHistory;
