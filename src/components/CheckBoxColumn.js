/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import './CheckBoxColumn.css';
import CheckBox from './CheckBox';
import * as checkBoxActions from '../actions/CheckBoxActions';

class CheckBoxColumn extends Component{

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const { items, actions } = this.props;
    return(

      <div className="checkbox-legend__container-column">
         {items ? items.map(item => {
           return(
             <CheckBox id={item.id} checked={item.checked} text={item.text} {...actions}/>
           )
        }) : null
        }
      </div>
    );
  }
}


function mapState(state) {
  return {
    items: state.default.checkBoxColumn
  };
}

function mapDispatch(dispatch) {
  return {
    actions: Redux.bindActionCreators(checkBoxActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(CheckBoxColumn);

// export default CheckBoxColumn;