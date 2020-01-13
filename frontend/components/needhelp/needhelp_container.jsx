import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCategories } from '../../actions/category_actions';
import NeedHelpForm from './needhelp_form'

const mSTP = (state) => ({
        categories: Object.values(state.categories)
});

const mDTP = dispatch => ({
        fetchAll: () => dispatch(fetchAllCategories()),
});

export default connect(mSTP, mDTP)(NeedHelpForm);
