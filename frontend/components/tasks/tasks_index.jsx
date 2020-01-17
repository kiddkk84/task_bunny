
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../footer/footer";
import TaskIndexItem from './task_index_item'

class TasksIndex extends React.Component {
    constructor(props) {
        super(props);   
        // this.remove = this.remove.bind(this)
    }

    componentDidMount() {
        this.props.fetchTasks(this.props.userId);
    }

    // remove(id){

    //     this.props.deleteTask(id)
    // }

    render() {
        const { tasks, deleteTask } = this.props

        return (
            <div>
            {
                    tasks.map(task => <TaskIndexItem key={task.id} task={task} deleteTask={deleteTask}/>)
            }
            </div>
            //     {
            //     return(
                    
            //             <div key={task.id} className='tasklist'>
            //                 <br/>
            //                 <li>Location:{task.location}</li>
            //                 <li>Details: {task.detail}</li>
            //                 <li>Duration: {task.duration}</li>
            //                 <br/>
            //             </div>
                
            //         )
            // }
        )
        }

}


export default TasksIndex;