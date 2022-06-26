import React from 'react';
import { Cronometro } from '../components/cronometro';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';
import { useState } from 'react';

function App() {
  
  const [tarefas, setTarefas] = useState([{
    tarefa: 'React',
    tempo: '02:00:00'
}, {
    tarefa: 'JavaScript',
    tempo: '01:00:00'
}, {
    tarefa: 'TypeScript',
    tempo: '03:00:00'

}]);

  return (
    <div className={style.AppStyle} >
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
