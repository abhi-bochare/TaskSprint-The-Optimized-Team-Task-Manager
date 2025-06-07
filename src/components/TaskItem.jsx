export default function TaskItem({ task }) {
  const priorityColors = {
    Low: "bg-green-100",
    Medium: "bg-yellow-100",
    High: "bg-red-100",
  };

  return (
    <li className={`p-2 mb-2 rounded ${priorityColors[task.priority]}`}>
      <p className="font-bold">{task.title}</p>
      <p>Assigned to: {task.assignedTo}</p>
      <p>Status: {task.status}</p>
    </li>
  );
}
