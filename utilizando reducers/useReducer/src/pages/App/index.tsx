import FormAddTask from './FormAddTask';
import TaskList from './TasksList';
import { TaskProvider } from '../../contexts/TasksProvider';
import Layout from '../../components/layout';
import { Title, Container } from './styles.ts'
function App() {

    return (
        <TaskProvider>
            <Layout>
                <Container>
                    <Title>Lista de <strong>Tarefas</strong></Title>
                    <FormAddTask/>
                    <TaskList/>
                </Container>
            </Layout>  
        </TaskProvider>
    )
  }
  
  export default App