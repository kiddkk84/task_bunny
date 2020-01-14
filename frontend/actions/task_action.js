import * as taskAPIUtil from '../util/task_api_util';


export const CREATE_TASK = 'CREATE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';


export const createTask = task => ({
    type: CREATE_TASK,
    task 
});


export const receiveTask = task => ({
    type: RECEIVE_TASKS,
    task
});


export const removeTask = taskId => ({
    type: REMOVE_TASK,
    taskId 
});


export const newTask = (task) => dispatch => {
    return  taskAPIUtil.createTask(task)
        .then(task > dispatch(receiveTask(task)))
}


export const fetchTasks = (userId) => dispatch => {
    return taskAPIUtil.fetchTasks(userId)
        .then(tasks => dispatch(receiveTask(tasks)))
    
};

export const deleteTask = (taskId) => dispatch => {
    return taskAPIUtil.deleteTask(taskId)
        .then(task => dispatch(removeTask(taskId)))
}

