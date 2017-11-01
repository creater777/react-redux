/**
 * Created by Programmist on 25.10.2017.
 */

import * as actions from '../actions/CheckBoxActions'

let initialState = {
  checked: false,
  text: `checkbox`
};

export let columnDefaultState = {};

for (let i=0; i<100; i++){
  columnDefaultState[i] = {...initialState, id: i};
}

export default function checkBoxColumn(state, action) {
  switch (action.type){
    case actions.CLICK:
      return {items: actionClick(state.items, action)};
    default:
      return !state ? {items: {initialState}} : state;
  }
}

function actionClick(state, action){
  let item = state[action.id]
  item.checked = !item.checked
  return { ...state, item}
}