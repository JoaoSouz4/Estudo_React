import { useState } from 'react';

function App() {

  const [list, setList] = useState(['João', 'Vitor', 'Souza']);
  const [item, setItem] = useState('');

  function addToList(item: any) {
    setTimeout(() => {
      setList( list => [...list, item]);
    }, 500)
  }
    return (
      <>
        <input placeholder = 'novo item' type="text" onChange = {(e) => setItem(e.target.value)}/>
        <button onClick = { () => addToList(item)}>Adicionar</button>

        <ul>
          {list.map( item => <li key = {item.length}>{item}</li>)}
        </ul>
      </>
    
  )
}

export default App
