import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { newTask } from '../../actions/task_action'
import { fetchAllCategories } from '../../actions/category_actions';
import taskCreate from './create_task_form'

const mSTP = (state) => ({
    categories: Object.values(state.categories), 
    
});

const mDTP = dispatch => ({    
    fetchAll: () => dispatch(fetchAllCategories()),
    newTask: task => dispatch(newTask(task))
});

export default connect(mSTP, mDTP)(taskCreate);