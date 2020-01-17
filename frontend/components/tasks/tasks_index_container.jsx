import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks, deleteTask } from '../../actions/task_action'
import TasksIndex from './tasks_index';

const mSTP = (state) => {
    return {
        userId: state.session.id,
        tasks: Object.values(state.tasks),
    };
};

const mDTP= dispatch => {
    return {
        fetchTasks: (userId) => dispatch(fetchTasks(userId)),
        deleteTask: id => dispatch(deleteTask(id))
    };
};

export default connect(mSTP, mDTP)(TasksIndex);