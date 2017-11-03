/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

import './CheckBox.css'
import {click} from '../actions/CheckBoxActions'


class CheckBox extends Component{
  click(event) {
    let { dispatch } = this.props
    let action = click(this.props.id)
    dispatch(action)
  }

  render(){
    console.log('render')
    let classNames = classnames(
      'checkbox-legend__checkbox',
      'checkbox-legend__checkbox-grey',
      this.props.checked ? 'checked': ''
    )
    return(
      <div className="checkbox-legend__container-column-row"
           onClick={this.click.bind(this)}>
          <div className={classNames}></div>
          <span>{this.props.text || 'unnamed'}</span>
      </div>
    )
  }
}

function mapState(state, iam) {
  return state.items[iam.id]
}

export default connect(mapState)(CheckBox)