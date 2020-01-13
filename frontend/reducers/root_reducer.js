import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
// import ui from './ui_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import categoryReducer from './categories_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    categories: categoryReducer 
});

export default rootReducer;