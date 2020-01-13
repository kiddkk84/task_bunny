import { FETCH_ALL_CATEGORIES } from '../actions/category_actions';
import merge from 'lodash/merge'
const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case FETCH_ALL_CATEGORIES:
            return merge({}, state, action.categories)

        default:
            return state;
    }
};

export default categoryReducer;