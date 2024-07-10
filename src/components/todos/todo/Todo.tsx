interface ITodo {
  todo: string;
  complete: boolean;
  onDelete: () => void;
  isComplete: () => void;
}

export const Todo = ({ todo, onDelete, isComplete, complete }: ITodo) => {
  return (
    <div className="todos__todo">
      <div>
        <p>{todo}</p>
      </div>
      <div>
        <button className="delete" onClick={onDelete}>
          Удалить
        </button>
        <button
          className="complete"
          disabled={complete ? true : false}
          onClick={isComplete}
        >
          {complete ? 'Выполнено' : 'Выполнил'}
        </button>
      </div>
    </div>
  );
};
