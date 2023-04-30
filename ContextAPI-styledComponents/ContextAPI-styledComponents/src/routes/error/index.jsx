import Button from "../../components/Button";
import Title from "../../components/Title";
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
function Error() {

    const navigate = useNavigate()
    return( 
        <Container>
            <Title>Página não encontrada</Title>
            <p>Está página não existe no sistema</p>
            <Button width = {'200px'} onClick={() => navigate("/Home")}>Voltar para Home</Button>
        </Container>
    )
}
export default Error;