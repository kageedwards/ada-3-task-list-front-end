import TaskList from './components/TaskList.jsx';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];


const App = () => {
  const toggleTaskDone = (taskId) => {
    const tasks = TASKS.map(task => {
      if (TASKS.id === taskId) {
        return {...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={TASKS} toggleTaskDone={toggleTaskDone}></TaskList></div>
      </main>
    </div>
  );
};

export default App;
