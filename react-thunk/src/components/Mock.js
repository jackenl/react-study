import React, { Component } from 'react'
import store from '../store/store'
import { getListItems } from '../store/actionCreator'

class Mock extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  render() {
    return (
      <ul className="item-list">
        {this.showItems()}
      </ul>
    )
  }

  componentDidMount() {
    const action = getListItems();
    store.dispatch(action);
  }

  showItems() {
    return this.state.list.map((item, index) => {
      return (
        <li key={index}>{item.value}</li>
      );
    })
  }
}

export default Mock