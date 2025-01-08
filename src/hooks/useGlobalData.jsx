import { useState, useEffect } from "react";

const useGlobalData = () => {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); 

            try {
                const response = await fetch('https://anas-portfolio-server.vercel.app/data', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error }; 
};

export default useGlobalData;
