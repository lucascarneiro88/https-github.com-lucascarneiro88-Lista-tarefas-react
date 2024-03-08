import React, { useRef } from 'react';

const TodoForm = ({ adicionarTarefa }) => {
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const erroRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const textoTarefa = inputRef.current.value.trim();
    const categoriaTarefa = selectRef.current.value;

    if (textoTarefa === '') {
      erroRef.current.classList.add('mostrar');
      // console.log('Erro: campo de texto vazio');
       return;
    }

    adicionarTarefa({
      id: Date.now(),
      text: textoTarefa,
      category: categoriaTarefa,
      isCompleted: false,
    });

    inputRef.current.value = '';
    selectRef.current.value = '';
    erroRef.current.classList.remove('mostrar');
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o título" ref={inputRef} />
        <select ref={selectRef}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
      <ul className="lista-erros" ref={erroRef}>
        <li>Preencha o campo para adicionar uma tarefa!</li>
      </ul>
    </div>
  );
};

export default TodoForm;
