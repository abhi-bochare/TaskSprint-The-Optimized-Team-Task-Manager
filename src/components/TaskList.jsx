import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useMemo, useState } from "react";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("All");

  const filteredTasks = useMemo(() => {
    return filter === "All"
      ? tasks
      : tasks.filter((task) => task.priority === filter);
  }, [filter, tasks]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Filter by Priority
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
