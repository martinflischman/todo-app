export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;

  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tabs tabs-border overflow-x-auto">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
              ? todos.filter((val) => !val.complete).length
              : todos.filter((val) => val.complete).length;

        return (
          <button
            onClick={() => {
              setSelectedTab(tab);
            }}
            key={tabIndex}
            className={"tab " + (tab === selectedTab ? "tab-active" : "")}
          >
            <h4>
              {tab}{" "}
              <span className="opacity-40 font-normal">({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
