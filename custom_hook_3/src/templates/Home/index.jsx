import './styles.css'
import { useEffect, useState, useCallback } from 'react';
import { Loading } from '../../components/Loading';


//Criação do hook
const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null, 
    error: null,
    status: 'idle'
  });

  const run = useCallback( () => {
    setState({
      result: null,
      error: null,
      status : 'pending'
    })

    return asyncFunction()
      .then(resp => {
        setState({
          result : resp,
          error: null,
          status: 'settled'
        })
      })
      .catch((e) => {
        setState({
          result : null,
          error: e,
          status: 'error'
        })
      })
  }, [asyncFunction]);

  useEffect(()=>{
    if(shouldRun){
      run();
    }
  }, [run, shouldRun])


  return [run, state.result, state.error, state.status]
};

const fetchData = async () => {
  await new Promise ( r => setTimeout(r, 2000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const resp = await data.json();
  return resp;
}

export const Home = () => {

  const [reFetchData, result, error, status] = useAsync(fetchData, true);

 
  switch (status) {

    case 'idle' :
      return <pre>Nada em execução</pre>

    case 'pending' :
      return <pre><Loading/></pre>
    
    case 'error' :
      return <pre>{JSON.stringify(error, null, 2)}</pre>

    case 'settled' :
      return <pre>{JSON.stringify(result, null, 2)}</pre>
  }
}


