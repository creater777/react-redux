/**
 * Created by Programmist on 25.10.2017.
 */
import React, { Component } from 'react'
import { CheckBoxColumn } from '../components/CheckBoxColumn'
import { clickItem, remove, fetchItems } from '../actions/CheckBoxActions'
import { connect } from 'react-redux'
import { columnDefaultState } from '../reducers/CheckBoxColumn'

class CheckBoxColumns extends Component{

  constructor (props){
    super(props)
    props.dispatch(fetchItems);
  }

  render(){
    return(
      <div>
        <CheckBoxColumn name="items" items={this.props.items} action={clickItem} />
        {/*<CheckBoxColumn name="selected" items={this.props.selected} action={remove} />*/}
      </div>
    )
  }
}

function mapState(state, own) {
  const { items } = state
  return {
    items,
    selected: items && Object.keys(items).length ? items[own.selectedId] : {}
  }
}

export default connect(mapState)(CheckBoxColumns)