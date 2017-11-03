import { combineReducers } from 'redux';
import checkBoxColumn from './CheckBoxColumn';

const rootReducer = combineReducers({
  items: checkBoxColumn
});

export default rootReducer;
