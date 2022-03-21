import { createStore, combineReducers, } from 'redux';
import Children  from './Reducers/Children';
import Volunteer from './Reducers/Volunteer';


const reducer = combineReducers({ });

const store = createStore(reducer);
window.store = store;
export default store;
