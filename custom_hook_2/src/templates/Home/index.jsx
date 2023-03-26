import { useState } from "react";

const useFetch = (url, options) => {
    const [result, setResult] = useState(0);
    const [loading, setLoading] = useState(false);
};
export const Home = () => {
    const [result, loading] = useFetch();
    console.log(result, loading)

    return (
        <h1>oi</h1>
    )
}