import { combineReducers } from 'redux';

import posts from './posts';
import recipes from './recipes';

export default combineReducers({
    posts, recipes,
});