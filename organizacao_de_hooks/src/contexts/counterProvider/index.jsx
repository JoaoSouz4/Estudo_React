import P from 'prop-types'
import { useReducer } from 'react'
import { CounterContext } from "./context"
import { dataCounter } from './dataCounter'
import { reducer } from './reducer'

export const CounterProvider = ({children}) => {
    const [counterState, counterDispatch] = useReducer(reducer, dataCounter);
    return(
        <CounterContext.Provider value = {{counterState, counterDispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

CounterProvider.propTypes = {
    children: P.node.isRequired
}