import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
    const token = localStorage.getItem('access-token');
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users' , {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
            return res.json();
        }
    });
   
    return [users, refetch, loading];
};

export default useAllUsers;



