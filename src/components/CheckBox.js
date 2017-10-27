/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './CheckBox.css';


class CheckBox extends Component{
  onClick(e) {
    this.props.click(e);
  }

  render(){
    return(
      <div className="checkbox-legend__container-column-row" onClick={() => this.onClick(this.props.id)}>
          <div className={classnames('checkbox-legend__checkbox', 'checkbox-legend__checkbox-grey', this.props.checked ? 'checked': '')}></div>
          <span>{this.props.text || 'unnamed'}</span>
      </div>
    )
  }
}

export default CheckBox;