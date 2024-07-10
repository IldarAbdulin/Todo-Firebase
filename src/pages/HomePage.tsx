import React from 'react';
import { SearchTodos, Todos } from '../components';
import { onValue, ref, remove, set, update } from 'firebase/database';
import { uid } from 'uid';
import { db } from '../firebase';
import { ITodos } from '../interface/interface';

export const HomePage = () => {
  const [todos, setTodos] = React.useState<ITodos[]>([]);
  const [clearList, setClearList] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [sortData, setSortData] = React.useState(false);
  const [isError, setIsError] = React.useState('');
  const [value, setValue] = React.useState('');
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

  const onSortData = () => {
    setSortData((prev) => !prev);
  };

  console.log(sortData);

  const addNewTodo = () => {
    try {
      if (value === '') {
        alert('Введите задачу');
        return;
      }
      const date = new Date().toISOString().slice(0, 10);
      const uuid = uid();
      set(ref(db, `/${uuid}`), {
        date: date,
        uuid: uuid,
        todo: value,
        completed: isCompleted,
      });
      setValue('');
    } catch (error) {
      console.error(error);
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
  console.log(todos);

  return (
    <div className="home-page">
      <SearchTodos value={value} setValue={setValue} addTodo={addNewTodo} />
      <Todos
        complete={isCompleted}
        clearList={clearList}
        getTodos={getTodos}
        isError={isError}
        isLoading={isLoading}
        onDelete={onDelete}
        isComplete={isComplete}
        setClearList={setClearList}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        setTodos={setTodos}
        setValue={setSearch}
        todos={todos}
        value={search}
        sortByData={onSortData}
        sortData={sortData}
      />
    </div>
  );
};
