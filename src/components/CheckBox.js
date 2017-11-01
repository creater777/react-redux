/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import './CheckBox.css'
import { click } from '../actions/CheckBoxActions'

class CheckBox extends Component {
  onClick(props){
    // props.props.checked = !props.props.checked;
     props.setState({checked: !props.props.checked})
  }

  render() {
    let classNames = classnames(
      'checkbox-legend__checkbox',
      'checkbox-legend__checkbox-grey',
      this.props.checked ? 'checked': ''
    )
    console.log('CheckBox render')
    return(
      <div className="checkbox-legend__container-column-row" key={this.props.id}
           onClick={click}>
        <div className={classNames}></div>
        <span>{this.props.text || 'unnamed'}</span>
      </div>
    )
  }
}

function mapStateToProps(state, iam) {
  return iam
}

export default connect(mapStateToProps)(CheckBox)
// export default CheckBox;