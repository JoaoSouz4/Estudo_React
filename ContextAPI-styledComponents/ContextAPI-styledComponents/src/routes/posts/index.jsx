import Title from '../../components/Title';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context';
function Post(){

    const navigate = useNavigate();
    const { data } = useContext(Context);
    const [ state, setState ] = useState();

    useEffect( () => {
        setState(data);
    }, []);

    return (
        <>
        <Container>
            <Title> Página Posts</Title>
            <Button 
                onClick = {() => {
                navigate('/home')
            }}>Ir para Home</Button>
        </Container> 

        <Container>
            {state ? 
                state.map( item => {
                    return (
                        <div>
                            <h3 key={item.id}>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    )
                } )
            : <div>pera ai</div>
            }
        </Container>
        </>
    )

}

export default Post;