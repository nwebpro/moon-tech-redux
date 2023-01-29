import { createStore } from 'redux'
import productReducers from './reducers/productReducers'


const store = createStore(productReducers)

export default store