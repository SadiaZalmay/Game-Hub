import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T>{
    count: number;
    results: T[]; //T is generic type parameter
}
const useData = <T>(endpoint:string) =>{
    const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState('');
        const [isLoading, setLoading] = useState(false);
    
        useEffect(() => {
            const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint)
            .then((res) => {
                setData(res.data.results)
                setLoading(false);
            })
            
            .catch((err) => {
                setError(err.message)
                setLoading(false);
            });

        return () => controller.abort();
        }, []);
        return{data, error, isLoading};
};

export default useData;