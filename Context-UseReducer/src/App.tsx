import { useContext } from "react"
import { actions } from "./reducer/actions";
import { AppContext } from "./context/appContext"
import Button from "./components/Button";
import Title from "./components/Title";
import Text from "./components/Text";
import Wrapper from "./components/Wrapper";
import MainContainer from "./components/MainContainer";
import Form from "./components/Form/form";
function App() {

  const {state, dispatch}: any = useContext(AppContext);
  
  return (
    <MainContainer>

      {!state ? 
        <div>Loading...</div>
      :
      <>
        <Title>{state.title}</Title>
        <Text>{state.body}</Text>
        <div>{state.count}</div>

        <Wrapper gap = '1rem'>
          <Button name = 'Increment' onClick = { () => dispatch({types: actions.INCREMENT})}></Button>
          <Button name = ' Decrement' onClick = { () => dispatch({types: actions.DECREMENT})}></Button>
        </Wrapper>
      </>
      }

      <Form/>
  
    </MainContainer>
  )
}

export default App
