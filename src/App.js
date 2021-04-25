import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";
import { useEffect } from "react";
import { AddTask } from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  async function deleteTask(id) {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  }

  async function toggleReminder(id) {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method:"PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(updateTask)
    })

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  }

  async function addTask(task) {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000 + 1);
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header
        isShowingAddTask={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onBookmarkClick={toggleReminder}
        />
      ) : (
        "No tasks to show. "
      )}
    </div>
  );
}

export default App;
