export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const isTasksPlural = todos.length != 1;
  const taskOrTasks = isTasksPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="w-fit bg-gradient-to-br from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
        You have {todosLength} {taskOrTasks}.
      </h1>
    </header>
  );
}
