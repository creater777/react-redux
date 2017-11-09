/**
 * Created by Programmist on 25.10.2017.
 */
import Axios from 'axios'

export const CLICK_ITEM = 'CLICK_ITEM';
export function clickItem(id){
  return {
    type: CLICK_ITEM,
    id
  }
}

export const REQUEST = 'REQUEST'
export function requestItems(){
  return {
    type: REQUEST
  }
}

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export function receiveItems(json){
  return {
    type: RECEIVE_ITEMS,
    items: json.data
  }
}

export const RECEIVE_SUBITEMS = 'RECEIVE_SUBITEMS'
export function receiveSubItems(json) {
  return {
    type: RECEIVE_SUBITEMS,
    items: json.data
  }
}

export function fetchSubitems(dispatch, id){
  return Axios.get('http://localhost:3000/items/' + id)
    .then(response => {
      return dispatch(receiveSubItems(response))
    })
}

export function fetchItems(dispatch) {
  dispatch(requestItems())
  return Axios.get('http://localhost:3000/ids/')
    .then(response => {
      return dispatch(receiveItems(response))
    })
}