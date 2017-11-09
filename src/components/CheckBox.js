/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

import './CheckBox.css'

class CheckBox extends Component{
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
  }

  click(event) {
    this.props.dispatch(this.props.action(this.props.id))
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
           onClick={this.click}>
          <div className={classNames}></div>
          <span>checkbox {this.props.id || 0}</span>
      </div>
    )
  }
}

function mapState(state, iam) {
  return state[iam.name][iam.id]
}

export default connect(mapState)(CheckBox)