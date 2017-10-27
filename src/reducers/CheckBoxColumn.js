/**
 * Created by Programmist on 25.10.2017.
 */
import mapValues from 'lodash/object/mapValues';

import * as actions from '../actions/CheckBoxActions';

let initialState = {
  checked: false,
  text: `checkbox`
};

export let columnDefaultState = [];

for (let i=0; i<100; i++){
  columnDefaultState.push({...initialState, id: i});
}

export default function checkBoxColumn(state, action) {
  switch (action.type){
    case actions.CLICK:
      return state.map(item =>
        item.id === action.id ?
          { ...item, checked: !item.checked } :
          item
      );
    default:
      return !state ? columnDefaultState: state;
  }
}