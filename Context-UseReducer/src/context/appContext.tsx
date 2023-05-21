import { createContext, useReducer } from "react";
import { globalState } from "../data";
import { reducer } from "../reducer/reducer";

const AppContext = createContext<Object>({});

function AppContextProvider({children}: any){

    const [state, dispatch] = useReducer(reducer, globalState);
    
    return (
        <AppContext.Provider value = {{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider}