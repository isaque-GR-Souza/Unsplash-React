import React,{useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  //9gdTaUmnIakDJIzxLK8_-lpR8ZCIMCaOAibjhOEvMPI
  const buscarImagens = () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=9gdTaUmnIakDJIzxLK8_-lpR8ZCIMCaOAibjhOEvMPI&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <div className='minhadiv'>
        <span>Pesquisar:</span>
        <input
        style={{width:"60%"}} 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}/>
        <button onClick={() => buscarImagens()}>Enviar</button>
      </div> 
      <div className="galeria">
        {
          results.map((item) =>{
            return <img className="item" key={item.id} src={item.urls.regular} />
          })
        }
      </div>
    </div>
  );
}

export default App;
