/**
 * Created by Programmist on 25.10.2017.
 */

import {CLICK_ITEM, RECEIVE_ITEMS} from '../actions/CheckBoxActions'

let initialState = {
  checked: false,
  text: `checkbox`,
  id: 0
}

export default function checkBoxColumnReducer(state = {}, action) {
  console.log('reduser: action: ', action)
  switch (action.type){
    case CLICK_ITEM:
      return {
        items: {
          ...state.items,
          [action.id]: checkBox(state.items[action.id], action)
        }
      }
    case RECEIVE_ITEMS:
      return {items: action.items}
    default:
      return state;
  }
}

function checkBox(state, action) {
  state = Object.assign(initialState, state)
  switch (action.type){
    case CLICK_ITEM:
      return {...state, checked: !state.checked}
    default:
      return initialState
  }
}

