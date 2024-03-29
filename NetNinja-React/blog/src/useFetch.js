import {useState, useEffect} from 'react';

//Custom hooks in react needs to have a USE--- var
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if(!res.ok)
                        throw Error("Unable to Fetch the Data. Please reload.");
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    if(err.name === "AbortError"){
                        console.log("Fetch Aborted");
                    } else {
                        setIsLoading(false);
                        setError(err.message);
                    }
                })

        return () => abortCont.abort();    
    }, [url]);
    //Add it to the dependency so this will re-run when the endpoint changes

    return {data, isLoading, error}
}

export default useFetch;