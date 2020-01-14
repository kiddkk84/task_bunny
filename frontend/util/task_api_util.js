
export const createTask = (task) => {
    return $.ajax({
            method: 'POST',
            url: `/api/tasks`,
            data: { task }
        })
    };



export const fetchTasks = (userId) =>{
    return $.ajax({
        method: 'GET',
        url: `/api/tasks?user_id=${userId}`
    })
}


export const deleteTask = taskId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/tasks/${taskId}`
    })
}