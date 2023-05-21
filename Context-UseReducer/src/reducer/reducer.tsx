import { actions } from "./actions"

export const reducer = (state: any, action: any) => {
    switch(action.types){
        case actions.INCREMENT : {
            return { ...state, count: state.count++}
        }
        case actions.DECREMENT : {
            if( state.count <=0 ) return {...state}
            return { ...state, count: state.count--}
        }
    }
    return {...state}
}