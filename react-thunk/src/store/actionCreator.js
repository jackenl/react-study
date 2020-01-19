import store from './store'
import axios from 'axios'
import { INIT_LIST_ITEMS } from './actionTypes'

export const initListItems = (data) => ({
  type: INIT_LIST_ITEMS,
  data
})

export const getListItems = () => {
  return () => {
    axios.post('/list').then((res) => {
      const data = res.data;
      const action = initListItems(data);
      store.dispatch(action);
    })
  }
}