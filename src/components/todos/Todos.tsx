import { Todo } from './todo/Todo';
import { ITodos } from '../../interface/interface';

interface ITodo {
  todos: ITodos[];
  setTodos: Function;
  clearList: string;
  setClearList: Function;
  value: string;
  setValue: Function;
  isLoading: boolean;
  setIsLoading: Function;
  isError: string;
  setIsError: Function;
  getTodos: () => void;
  onDelete: Function;
  isComplete: Function;
  complete: boolean;
  sortByData: () => void;
  sortData: boolean;
}

export const Todos = ({
  clearList,
  isError,
  isLoading,
  setValue,
  todos,
  value,
  onDelete,
  isComplete,
  sortByData,
  sortData,
}: ITodo) => {
  return (
    <div className="todos">
      <div className="todos__search">
        <input
          type="text"
          placeholder="Поиск задачи..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Поиск</button>
      </div>
      {isLoading && <p className="loader">Идет загрузка...</p>}
      <button className="sort-by__data" onClick={sortByData}>
        Сортировать по дате добавления
      </button>
      {!sortData
        ? todos
            .filter((val) => {
              return val.todo.toLowerCase().includes(value.toLowerCase());
            })
            .map((todo) => (
              <Todo
                key={todo.uuid}
                todo={todo.todo}
                onDelete={() => onDelete(todo)}
                isComplete={() => isComplete(todo)}
                complete={todo.completed}
              />
            ))
        : todos
            .sort((a: ITodos, b: ITodos) => {
              return new Date(a.date).getTime() - new Date(b.date).getTime();
            })
            .filter((val) => {
              return val.todo.toLowerCase().includes(value.toLowerCase());
            })
            .map((todo) => (
              <Todo
                key={todo.uuid}
                todo={todo.todo}
                onDelete={() => onDelete(todo)}
                isComplete={() => isComplete(todo)}
                complete={todo.completed}
              />
            ))}
      {clearList && <p className="tasks">Вы не добавили ни одной задачи...</p>}
      {isError && <p className="error">Ошибка при получении данных :(</p>}
    </div>
  );
};
