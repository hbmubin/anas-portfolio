import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../private/AuthProvider';


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your backend URL
  });

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
 
  useEffect(() => {
    // Request interceptor to add Authorization header
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token'); // Retrieve token
        console.log(token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle errors
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
