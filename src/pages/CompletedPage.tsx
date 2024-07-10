import React from 'react';
import { onValue, ref, remove, update } from 'firebase/database';
import { db } from '../firebase';
import { ITodos } from '../interface/interface';
import { TodosCompleted } from '../components/todos/completed/TodosCompleted';

export const CompletedPage = () => {
  const [todos, setTodos] = React.useState<ITodos[]>([]);
  const [clearList, setClearList] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [isError, setIsError] = React.useState('');
  const getTodos = () => {
    try {
      onValue(ref(db), (snapshot) => {
        setTodos([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((todo: any) => {
            setTodos((oldArr) => [...oldArr, todo]);
            setIsLoading(false);
            setClearList('');
          });
        } else {
          setClearList('Вы не добавили ни одной задачи...');
          setIsLoading(false);
        }
      });
    } catch (error) {
      setIsError('Ошибка при получении данных!');
    }
  };

  const onDelete = (todo: any) => {
    remove(ref(db, `/${todo.uuid}`));
  };
  const isComplete = (todo: any) => {
    update(ref(db, `/${todo.uuid}`), {
      completed: !todo.completed,
    });
    setIsCompleted((prev) => !prev);
  };

  React.useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <TodosCompleted
        complete={isCompleted}
        clearList={clearList}
        getTodos={getTodos}
        isError={isError}
        isLoading={isLoading}
        setClearList={setClearList}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        setTodos={setTodos}
        setValue={setSearch}
        todos={todos}
        value={search}
        onDelete={onDelete}
        isComplete={isComplete}
      />
    </>
  );
};
