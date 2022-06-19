import React from 'react';

import Task from './Task.js';

export default({tasks}) => {
return(

  <ul className="list-group">
  {tasks.map(task =>(
    <Task task = {task} />
  ))}

  </ul>
);
}
