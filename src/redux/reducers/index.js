import currentPage from './current-page';
import { combineReducers } from 'redux';

const appReducers = combineReducers({
    currentPage: currentPage
})

export default appReducers;
