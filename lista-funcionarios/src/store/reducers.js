import { funcionariosReducer } from './funcionariosReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  funcionarios: funcionariosReducer
})
  
export default rootReducer