import React, { useState, useEffect } from 'react';
import Todo from "./components/todo";
import TodoForm from "./components/todoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: "Criar funcionalidade X no sistema",
    //   category: "Trabalho",
    //   isCompleted: false,
    // },
    // {
    //   id: 2,
    //   text: "Ir para a Academia",
    //   category: "Pessoal",
    //   isCompleted: false,
    // },
    // {
    //   id: 3,
    //   text: "Estudar React",
    //   category: "Estudos",
    //   isCompleted: false,
    // },
  ]);

  const [totalTarefas, setTotalTarefas] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    document.title = `Total de Tarefas: ${totalTarefas}`;
  }, [totalTarefas]);

  const adicionarTarefa = (tarefa) => {
    setTodos([...todos, tarefa]);
    setTotalTarefas(totalTarefas + 1);
  };

  const completarTarefa = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setCompletedTasks([...completedTasks, id]);
  };

  const desfazerTarefa = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
  };

  const excluirTarefa = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setTotalTarefas(totalTarefas - 1);
    setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
  };

  useEffect(() => {
    return () => {
      document.title = "Lista de Tarefas";
    };
  }, []);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            completarTarefa={completarTarefa}
            desfazerTarefa={desfazerTarefa}
            excluirTarefa={excluirTarefa}
            isCompleted={completedTasks.includes(todo.id)}
          />
        ))}
      </div>
      <TodoForm adicionarTarefa={adicionarTarefa} />
    </div>
  );
}

export default App;
