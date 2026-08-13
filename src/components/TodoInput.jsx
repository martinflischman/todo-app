import { useState } from "react";

export function TodoInput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState("");

  function submitTodo() {
    if (!inputValue) {
      return;
    }
    handleAddTodo(inputValue);
    setInputValue("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitTodo();
          }
        }}
        placeholder="Add task"
        className="input w-full flex-1"
      />
      <button onClick={submitTodo} className="btn btn-primary btn-square">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
