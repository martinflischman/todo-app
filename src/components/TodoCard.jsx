export function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props;

  return (
    <div className="card card-border bg-base-100 flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-medium">{todo.input}</p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
          className="btn btn-success btn-sm"
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
          className="btn btn-error btn-sm"
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
