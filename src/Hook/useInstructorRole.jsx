import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructorRole = () => {
  const { user } = useContext(AuthContext);
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () => {
      const token = localStorage.getItem('access-token');
      const res = await axios.get(`https://athlete-nexus-server.vercel.app/users/instructor/${user?.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return res.data.instructor;
    }
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructorRole;
