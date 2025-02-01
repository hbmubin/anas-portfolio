import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../private/AuthProvider';


export const axiosSecure = axios.create({
    baseURL: 'https://anas-portfolio-server.vercel.app', // Replace with your backend URL
  });

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
 
  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token'); 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 403) {
          localStorage.removeItem('token'); 
          setUser(null); 
        }
        return Promise.reject(error);
      }
    );
  }, [navigate,setUser]);
 

  return axiosSecure;
};

export default useAxiosSecure;
