import { INIT_LIST_ITEMS } from './actionTypes'

const defaultState = {
  list: []
};

export default function(state = defaultState, action) {
  if (action.type === INIT_LIST_ITEMS) {
    let newState = {
      list: action.data.list
    }
    return newState;
  }
  
  return state;
}