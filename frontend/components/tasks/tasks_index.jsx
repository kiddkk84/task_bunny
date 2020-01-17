
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../footer/footer";

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
        const tasks = this.props.tasks

        return (
            tasks.map(task=>{
                return(
                    
                        <div key={task.id} className='tasklist'>
                            <br/>
                            <li>Location:{task.location}</li>
                            <li>Details: {task.detail}</li>
                            <li>Duration: {task.duration}</li>
                            <br/>
                        </div>
                
                    )
            })
            )
    }

}


export default TasksIndex;