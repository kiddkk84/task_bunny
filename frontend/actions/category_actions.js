import * as APIUtil from '../util/category_api'


export const FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES'; 

const receiveAllCategories = (categories) => ({
    type: FETCH_ALL_CATEGORIES,
    categories 
})

export const fetchAllCategories = () => dispatch => {
    return APIUtil.fetchAllCategories()
        .then(categories => dispatch(receiveAllCategories(categories)))
};