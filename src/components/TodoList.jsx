import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props;

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
        ? todos.filter((val) => val.complete)
        : todos.filter((val) => !val.complete);

  if (filterTodosList.length === 0) {
    return (
      <p className="text-center text-base-content/40 py-8">
        No tasks here yet.
      </p>
    );
  }

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            {...props}
            todo={todo}
          />
        );
      })}
    </>
  );
}
