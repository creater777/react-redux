/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { columnDefaultState } from '../reducers/CheckBoxColumn'

import './CheckBoxColumn.css'
import CheckBox from './CheckBox'

class CheckBoxColumn extends Component{
  render(){
    let arr = []
    for (let item in columnDefaultState){
        arr.push(columnDefaultState[item])
    }
    console.log('column render. length ' + arr.length)

    return(
      <div className="checkbox-legend__container-column">
        {arr && arr.map(item => {
          return(
            <CheckBox key={item.id} {...item}/>
          )
        })
        }
      </div>
    )
  }
}

function mapState(state) {
  return state.items
}

// export default connect(mapState)(CheckBoxColumn)

export default CheckBoxColumn