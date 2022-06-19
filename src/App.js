import React, { useState } from 'react';
import TaskList from './TaskList.js';
import NewTask from './NewTask.js';

function App() {
  const[tasks, setTasks] = useState([]);
  const[nextID, setNextID] = useState(0);

  const createTask = description => {
    setTasks(tasks => ([...tasks, {id: nextID, description, done: false}]));
    setNextID(nextID + 1);
  };

  return (
   <div className = "container">
   <div className = "row">
   <div className = "col">
   <div className = "jumbotron">
   <h1 className = "display-4"> To do app </h1>

   <NewTask createTask = {createTask}/>
   <br />
   </div>
     <TaskList tasks = {tasks}/>
   </div>

   </div>

   </div>

  );
}

export default App;
