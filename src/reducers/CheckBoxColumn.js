/**
 * Created by Programmist on 25.10.2017.
 */
import mapValues from 'lodash/object/mapValues';

import * as actions from '../actions/CheckBoxActions';

let initialState = {
  checked: false,
  text: `checkbox`,
  id: 0
};

export let columnDefaultState = {};

for (let i=0; i<100; i++){
  columnDefaultState[i] = {...initialState, id: i};
}

export default function checkBoxColumn(state, action) {
  switch (action.type){
    case actions.CLICK:
      return {...state, [action.id]: checkBox(state[action.id], action)};
    default:
      return !state ? columnDefaultState: state;
  }
}

export function checkBox(state, action) {
  switch (action.type){
    case actions.CLICK:
      let item = JSON.parse(JSON.stringify(state))
      item.checked = !item.checked
      return item
    default:
      return initialState;
  }
}

