/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import mapValues from 'lodash/object/mapValues'
import createFragment from 'react-addons-create-fragment';

import './CheckBoxColumn.css'
import CheckBox from './CheckBox'

let initialState = {
  checked: false,
  text: `checkbox`,
}

class CheckBoxColumn extends Component{

  render() {
    let items=[]
    for (let i = 0; i < 100; i++){
      items.push({...initialState, id: i})
    }
    console.log('CheckBoxColumn render')
    return(
      <div className="checkbox-legend__container-column">
        {items.map(item => {
          return (
            <CheckBox key={item.id} checked={item.checked} text={item.text} />
          )
        })
        }
      </div>
    );
  }
}

export default CheckBoxColumn;