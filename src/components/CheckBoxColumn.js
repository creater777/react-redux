/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react'

import './CheckBoxColumn.css'
import CheckBox from './CheckBox'

export class CheckBoxColumn extends Component{
  render(){
    let self = this
    console.log('column render. props: ', this.props)
    return(
      <div className="checkbox-legend__container-column">
        {this.props.items && Object.values(this.props.items).map(item => {
          return(
            <CheckBox
              key={self.props.name + item.id}
              name={self.props.name}
              action={self.props.action}
              {...item}
            />
          )
        })
        }
      </div>
    )
  }
}