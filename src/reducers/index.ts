import { combineReducers } from 'redux'
import globalReducer from './globalReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
   global: globalReducer,
   product: productReducer,
})

export default rootReducer
