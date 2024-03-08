import React from 'react';

const Todo = ({ todo, completarTarefa, desfazerTarefa, excluirTarefa, isCompleted }) => {
  const { id, text, category } = todo;

  const handleToggleCompletarTarefa = () => {
    if (isCompleted) {
      desfazerTarefa(id);
    } else {
      completarTarefa(id);
    }
  };

  const handleExcluirTarefa = () => {
    excluirTarefa(id);
  };

  return (
    <div className={`todo ${isCompleted ? 'completed' : ''}`}>
      <div className="content">
        <p className={isCompleted ? 'completed-text' : ''}>{text}</p>
        <p className="category">({category})</p>
      </div>
      <div>
        <button onClick={handleToggleCompletarTarefa}>
          {isCompleted ? 'Desfazer' : 'Completar'}
        </button>
        <button onClick={handleExcluirTarefa}>X</button>
      </div>
    </div>
  );
};

export default Todo;
