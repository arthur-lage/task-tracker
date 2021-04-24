import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Physics Test",
      date: "Apr 26th at 4:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Wake Up",
      date: "Apr 30th at 7:00am",
      reminder: false,
    },
    {
      id: 3,
      text: "Mom's Birthday",
      date: "May 13th at 00:00am",
      reminder: true,
    },
    {
      id: 4,
      text: "Dad's Birthday",
      date: "Dec 13th at 00:00am",
      reminder: false,
    },
  ]);

  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleReminder(id){
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onBookmarkClick={toggleReminder}/>) : 'No tasks to show. '}
    </div>
  );
}

export default App;
