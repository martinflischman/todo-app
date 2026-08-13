import { useState } from "react";

export function TodoInput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex items-center gap-4">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add task"
        className="input w-full flex-1"
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue("");
        }}
        className="btn btn-primary btn-square"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
