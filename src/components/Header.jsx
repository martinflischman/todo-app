export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const isTasksPlural = todos.length != 1;
  const taskOrTasks = isTasksPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="w-fit text-3xl font-bold text-base-content/80 sm:text-4xl">
        You have {todosLength} {taskOrTasks}.
      </h1>
    </header>
  );
}
