import { useEffect, useRef, useState } from "react";


const isObjectEqual = (objA, objB) => {
    return JSON.stringify(objA) === JSON.stringify(objB);
};

export const useFetch = (url, options) => {

    const [result, setResult] = useState(null);
    const [loadStatus, setLoadStatus]  = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    const urlRef = useRef(url);
    const optionsRef = useRef(options);

    useEffect(() => {
        if(!isObjectEqual(url, urlRef.current)) {
            urlRef.current = url;
            setShouldLoad(s => !s); 
        }
    }, [url, options])

    useEffect(() => {

        setLoadStatus(true);

        const fetchData = async() => {
            await new Promise (r => setTimeout(r, 1500));

            try{
                const response = await fetch(urlRef.current, optionsRef.current);
                const respToJson = await response.json();
                setResult(respToJson);
                setLoadStatus(false);

            } catch(e) {setLoadStatus(false);}
        }
        fetchData();
    }, [shouldLoad]);

    return [result, loadStatus];
}