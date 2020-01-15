import {
    RECEIVE_TASKS,
    REMOVE_TASK
} from '../actions/task_action'

const tasksReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TASKS:
            nextState = action.tasks
            return nextState

        case REMOVE_TASK:
            delete [action.taskId]
            return nextState
        default:
            return state
    }
}

export default tasksReducer