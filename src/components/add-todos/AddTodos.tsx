import React from 'react';

interface IAddTodo {
  value: string;
  setValue: Function;
  addTodo: () => void;
}

export const SearchTodos = ({ addTodo, value, setValue }: IAddTodo) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Введите задачу..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo}>Добавить</button>
      </form>
    </div>
  );
};
