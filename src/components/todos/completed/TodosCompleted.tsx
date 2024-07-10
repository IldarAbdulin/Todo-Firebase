import { Todo } from '../todo/Todo';
import { ITodos } from '../../../interface/interface';

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
}

export const TodosCompleted = ({
  clearList,
  isError,
  isLoading,
  setValue,
  todos,
  value,
  onDelete,
  isComplete,
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
      {todos
        .filter((val) => {
          return val.todo.toLowerCase().includes(value.toLowerCase());
        })
        .filter((val) => {
          return val.completed;
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
