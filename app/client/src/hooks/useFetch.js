import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message)
                setLoading(false);
                setError(true);
            });
    }, []);
    return { data, loading, error };
}

export default useFetch;