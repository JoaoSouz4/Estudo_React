
import Title from '../../components/Title'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';
import ContextProvider from '../../context/context';
import Container from '../../components/Container';

export function Home() {

  const navigate = useNavigate();
  return (
    <Container>
      <Title>Página Home</Title>
      <Button onClick= {() => navigate('/posts')}>Ir para Post</Button>
    </Container>
  )
}

