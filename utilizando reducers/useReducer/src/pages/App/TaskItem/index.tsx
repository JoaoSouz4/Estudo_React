import { Item, CheckBox, Delete, Task } from './styles';
import { TaskContext } from '../../../contexts/TasksProvider';
import { useContext } from 'react';

function TaskItem(props: any){
    const  { dispatch } = useContext(TaskContext);

    const {task, id} = props;
    return (
        <Item>
            <CheckBox type="checkbox"/>
                <Task>{task}</Task>
            <Delete onClick = {() => dispatch({type: 'delete', id: id})}>Drop</Delete>
        </Item>
    )
}

export default TaskItem;