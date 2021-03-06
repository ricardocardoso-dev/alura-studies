import React from 'react';
import { Cronometro } from '../components/cronometro';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';
import { useState } from 'react';
import { iTarefa } from '../types/iTarefa';

function App() {

  const [tarefas, setTarefas] = useState<iTarefa[]>([]);
  const [selecionado, setSelecionado] = useState<iTarefa>();

  function selecionaTarefa(tarefaSelecionada: iTarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle} >
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
