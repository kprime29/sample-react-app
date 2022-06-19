import React from 'react';

export default({task}) => {
return(
<li key = {task.id} class="list-group-item">{task.description}</li>
);
}
