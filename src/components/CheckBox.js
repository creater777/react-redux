/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import classnames from 'classnames'
import { connect } from 'react-redux'

import './CheckBox.css'
import {click} from '../actions/CheckBoxActions'


class CheckBox extends Component{
  render(){
    console.log('render')
    let classNames = classnames(
      'checkbox-legend__checkbox',
      'checkbox-legend__checkbox-grey',
      this.props.checked ? 'checked': ''
    )
    return(
      <div className="checkbox-legend__container-column-row"
           onClick={() => this.props.actions.click(this.props.id)}>
          <div className={classNames}></div>
          <span>{this.props.text || 'unnamed'}</span>
      </div>
    )
  }
}

function mapState(state, iam) {
  return state.items[iam.id]
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({click}, dispatch)
  }
}

export default connect(mapState, mapDispatch)(CheckBox)