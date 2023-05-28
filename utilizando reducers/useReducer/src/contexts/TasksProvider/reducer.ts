

function taskReducer(task: any, action: any) {
    switch(action.type){
        case 'added': {

            return [
                ...task, {
                    id: task.length + 1,
                    text: action.text,
                    done: false,
                },
            ]
        }

        case 'changed': {
            return task.map( (t: any) => {
                if(t.id === action.task.id) return action.task;
                return t;
            });
        }

        case 'delete': {
            return task.filter( (t: any) => t.id !== action.id);
        }
    }
}

export default taskReducer;