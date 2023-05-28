import { createContext, useReducer } from 'react';
import taskReducer from './reducer';
import initialTasks from './data';

export const TaskContext = createContext<any>(initialTasks);

export function TaskProvider({children}: any){

    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    return (
        <TaskContext.Provider value = {{tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}
