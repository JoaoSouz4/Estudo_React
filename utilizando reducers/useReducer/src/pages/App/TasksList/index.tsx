import {List} from './styles.ts';
import  TaskItem from '../TaskItem';
import { useContext} from 'react';
import { TaskContext } from '../../../contexts/TasksProvider/index.tsx';

function TaskList(){

    const { tasks } = useContext(TaskContext);

    return (

        <List>
            {
                tasks?
                    tasks.map( (t: any) => (
                        <li key = {t.id}>
                            <TaskItem task = {t.text} id = {t.id}></TaskItem>
                        </li>
                    ))
                :
                <div>Loading...</div>
            }
        </List>
    )
}

export default TaskList;