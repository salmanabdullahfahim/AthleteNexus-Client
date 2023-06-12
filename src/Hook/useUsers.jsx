import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const token = localStorage.getItem('access-token');
            const res = await fetch('https://athlete-nexus-server.vercel.app/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return res.json();
        }
    });

    return [users, loading, refetch];
};

export default useUsers;
