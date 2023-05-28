import { useContext, useState } from "react";
import { Form, Input, Button } from "./styles";
import { TaskContext } from "../../../contexts/TasksProvider";

function FormAddTask(){

    const [text, setText] = useState<string>('');
    const { tasks, dispatch } = useContext(TaskContext);
    console.log(tasks)
    return (
        <Form>
                <Input 
                    type="text" 
                    value = {text}
                    onChange = {(e) => setText(e.target.value)}
                />
                <Button 
                    onClick={ (e) => {
                        e.preventDefault();
                        setText('');
                        dispatch({
                            type: 'added',
                            text: text
                        })
                    }
                }>Add
                </Button>
        </Form>
    )
}

export default FormAddTask;