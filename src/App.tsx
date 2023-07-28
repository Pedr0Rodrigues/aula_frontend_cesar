import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [tarefa, setTarefa] = useState("");
  return (
    <div className="App">
      <div className='header'>
        <h1>Lista de tarefas</h1>
        <div>
          <input type='text' value={tarefa} placeholder='Digite sua tarefa'/>
          <button>Adicionar</button>
        </div>
      </div>
      
  </div>
  );
}

export default App;
