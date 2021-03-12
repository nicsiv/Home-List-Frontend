import { combineReducers } from 'redux'
import furnitureReducer from './furnitureReducer'



export default combineReducers({
    furnitures: furnitureReducer

})