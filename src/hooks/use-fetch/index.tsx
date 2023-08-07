import { useEffect, useState } from "react";

interface IUseFetchProps {
    loading: boolean,
    data: object[],
    error: unknown
}

const useFetch = (url: string): IUseFetchProps => {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<object[]>([]);
    const [error, setError] = useState<unknown>(null);

    const fetchData = async (url: string) => {
        try {
            setLoading(true);
            const res = await fetch(url);
            const json = await res.json();

            setData(json);
            setLoading(false);

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }; 

    useEffect(() => {
        fetchData(url);
    }, [url])

    return { loading, data, error };
};

export default useFetch;
