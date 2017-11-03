/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import './CheckBoxColumn.css';
import CheckBox from './CheckBox';
import * as checkBoxActions from '../actions/CheckBoxActions';

let initialState = {
  checked: false,
  text: `checkbox`,
  id: 0
};

class CheckBoxColumn extends Component{

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const items = [];
    for (let i=0; i<100; i++){
      items.push({...initialState, id: i});
    }
    return(

      <div className="checkbox-legend__container-column">
         {items ? items.map(item => {
           return(
             <CheckBox {...item}/>
           )
        }) : null
        }
      </div>
    );
  }
}


function mapState(state, iam) {
  return
    state.default.items
  ;
}

function mapDispatch(dispatch) {
  return {
    actions: Redux.bindActionCreators(checkBoxActions, dispatch)
  };
}

// export default connect(mapState)(CheckBoxColumn);

export default CheckBoxColumn;