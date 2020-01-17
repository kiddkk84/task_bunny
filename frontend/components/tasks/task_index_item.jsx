import React from 'react';
import { Link } from 'react-router-dom';


const TaskIndexItem = (props) => (
    
    <div>
        <li>Location:{props.task.location}</li>
        <li>Details: {props.task.detail}</li>
        <li>Duration: {props.task.duration}</li>
        <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
    </div>
);

export default TaskIndexItem;