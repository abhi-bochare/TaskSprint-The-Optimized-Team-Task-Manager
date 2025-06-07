import { useSelector } from "react-redux";
import { useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    console.log("Dashboard Mounted");
    return () => console.log("Dashboard Unmounted");
  }, []);

  useEffect(() => {
    const highTasks = tasks.filter((t) => t.priority === "high");
    if (highTasks.length > 5) {
      alert("You have more than 5 high-priority tasks!");
    }
  }, [tasks]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Team Dashboard
      </h1>
      <div className="bg-gray-100 p-4 rounded-xl shadow-sm mb-6">
        <TaskForm />
      </div>
      <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
        <TaskList />
      </div>
    </div>
  );
}
