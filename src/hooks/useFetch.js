import { useEffect, useState } from 'react';
import { fetchDataFromAPI } from '../API';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ApiCall = async () => {
            try {
                const result = await fetchDataFromAPI(url);
                setData(result);
            } catch (error) {
                setError(`SomeThing was Wrong: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
        ApiCall();
    }, [url]);

    return { data, loading, error };
};
export default useFetch;
