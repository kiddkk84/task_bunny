import {
    CREATE_TASK,

} from '../actions/task_action'



const taskReducer = (state = {}, action) => {
    Object.freeze(state)  
    let nextState = Object.assign({}, state)  
    switch (action.type) {
        case CREATE_TASK:
            nextState = action.task
            return nextState

        default:
            return state
    }

}

export default taskReducer;