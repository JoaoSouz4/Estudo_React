import React from "react";
import { createContext, useState, useEffect } from "react";
import Container from "../components/Container";
export const Context = createContext();

function ContextProvider ({children}){

    const [ data, setData ] = useState();
    const [ load, setLoad  ] = useState(true);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then( res => res.json())
            .then((res) => {
                setData(res)
                setLoad(false);
            });
    }, []);

    if(load) return <Container><div>Carregando...</div></Container>
    
    return(
        <Context.Provider value = {{data, load}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;