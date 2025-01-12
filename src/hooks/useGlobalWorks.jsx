import { useEffect, useState } from "react";

const useGlobalWorks = () => {
    const [works,setWorks]= useState([])
      const [error,setError]= useState('')
      const [loading,setLoading]= useState(false)
    
      useEffect(()=>{
        const fetchData= async()=>{
          setLoading(true)
          setError('')
          const response= await fetch('http://localhost:5000/works',{
            method:'GET',
            headers:{
              'Content-Type': 'application/json'
            }
          })
          if(!response.ok){
            setError('No work found')
            return
          }
          const result= await response.json()
          setWorks(result)
          setLoading(false)
          setError('')
        }
        fetchData()
      },[])



    return {works, loading, error}
};

export default useGlobalWorks;