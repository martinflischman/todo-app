import { useState } from "react";

export function TodoCard(props) {
  const {
    todo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleEditTodo,
    todoIndex,
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.input);

  function handleSaveEdit() {
    if (!editValue.trim()) return;
    handleEditTodo(todoIndex, editValue);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setEditValue(todo.input);
    setIsEditing(false);
  }

  const iconBtn =
    "btn btn-outline btn-sm btn-square border-base-content/30 text-base-content/70";

  return (
    <div className="card card-border bg-base-100 flex-row items-center gap-4 p-4">
      {!isEditing && (
        <button
          onClick={() => handleCompleteTodo(todoIndex)}
          className={
            todo.complete
              ? "btn btn-success btn-sm btn-square shrink-0"
              : `${iconBtn} shrink-0 hover:border-success hover:bg-success hover:text-success-content`
          }
          aria-label={todo.complete ? "Mark not done" : "Mark done"}
        >
          <i className="fa-solid fa-check"></i>
        </button>
      )}

      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSaveEdit();
            } else if (e.key === "Escape") {
              handleCancelEdit();
            }
          }}
          className="input input-sm w-full flex-1"
          autoFocus
        />
      ) : (
        <p
          className={`flex-1 font-medium ${todo.complete ? "text-base-content/40" : ""}`}
        >
          {todo.input}
        </p>
      )}

      <div className="flex shrink-0 gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              className={`${iconBtn} hover:border-success hover:bg-success hover:text-success-content`}
              aria-label="Save"
            >
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
            <button
              onClick={handleCancelEdit}
              className={`${iconBtn} hover:border-error hover:bg-error hover:text-error-content`}
              aria-label="Cancel"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              disabled={todo.complete}
              className={`${iconBtn} hover:border-info hover:bg-info hover:text-info-content`}
              aria-label="Edit"
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              onClick={() => handleDeleteTodo(todoIndex)}
              className={`${iconBtn} hover:border-error hover:bg-error hover:text-error-content`}
              aria-label="Delete"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
