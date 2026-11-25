import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: "Mow the lawn",
    isComplete: false,
  },
  {
    id: 2,
    title: "Cook Pasta",
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const toggleTaskDone = (taskId) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => 
      prevTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={tasks} toggleTaskDone={toggleTaskDone} deleteTask={deleteTask}></TaskList>
        </div>
      </main>
    </div>
  );
};

export default App;
