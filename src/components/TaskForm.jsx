import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export default function TaskForm() {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const priorityCounter = useRef(0);
  const [task, setTask] = useState({
    title: "",
    assignedTo: "",
    priority: "Low",
    status: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({ title: "", assignedTo: "", priority: "Low", status: "Pending" });
    titleRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Task Title:
        </label>
        <input
          ref={titleRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1"></label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={task.assignedTo}
          onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
          placeholder="Assigned To"
          required
        />
      </div>

      <select
        className="input"
        value={task.priority}
        onChange={(e) => {
          setTask({ ...task, priority: e.target.value });
          priorityCounter.current += 1;
        }}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select
        className="input"
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit" className="btn">
        Add Task
      </button>
      <div>Priority changed {priorityCounter.current} times</div>
    </form>
  );
}
