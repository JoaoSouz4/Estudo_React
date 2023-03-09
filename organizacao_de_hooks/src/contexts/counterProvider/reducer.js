import * as types from './types';
//Função de reducer que irá ser inseirda no primeiro parâmetro do hook useReducer:
/*  
    const [state, dipatch] = useReducer( reducer, data);
    o Hook useReduce, recebe uma função de reducer(descrita acima) e um o valor incial para o estado;
*/

/**
 * A função reducer, recebe um estado e uma action
 */
export const reducer = (state, action) => {
    switch (action.type)  {
        case types.INCREMENT_COUNTER : {
            console.log(state);
            return { ...state, counter: state.counter + 1}
        }

        case types.DECREMENT_COUNTER : {
            return { ...state, counter: state.counter - 1}
        }
    }
    return {...state}
}