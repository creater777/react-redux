/**
 * Created by Programmist on 25.10.2017.
 */

import {CLICK} from '../actions/CheckBoxActions'

let initialState = {
  checked: false,
  text: `checkbox`,
  id: 0
}

export let columnDefaultState = {}

for (let i=0; i<1000; i++){
  columnDefaultState[i] = {...initialState, id: i}
}

export default function checkBoxColumnReducer(state, action) {
  switch (action.type){
    case CLICK:
      return {
        items: {
          ...state.items,
          [action.id]: checkBox(state.items[action.id], action)
        }
      }
    default:
      return !state ? {items: columnDefaultState}: state
  }
}

export function checkBox(state, action) {
  switch (action.type){
    case CLICK:
      let item = JSON.parse(JSON.stringify(state))
      item.checked = !item.checked
      return item
    default:
      return initialState
  }
}

