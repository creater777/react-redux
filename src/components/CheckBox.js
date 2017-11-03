/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react';
import * as Redux from 'redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './CheckBox.css';
import * as checkBoxActions from '../actions/CheckBoxActions';
import { connect } from 'react-redux';


class CheckBox extends Component{
  onClick(e) {
    this.props.click(e);
  }

  render(){
    console.log('render');
    return(
      <div className="checkbox-legend__container-column-row" onClick={() => this.props.actions.click(this.props.id)}>
          <div className={classnames('checkbox-legend__checkbox', 'checkbox-legend__checkbox-grey', this.props.checked ? 'checked': '')}></div>
          <span>{this.props.text || 'unnamed'}</span>
      </div>
    )
  }
}

function mapState(state, iam) {
  return state.default.items[iam.id]
}

function mapDispatch(dispatch) {
  return {
    actions: Redux.bindActionCreators(checkBoxActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(CheckBox);
// export default CheckBox;