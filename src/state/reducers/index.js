import { combineReducers }  from 'redux';
import accountReducer from './accountReducer'
import loginReducer from './loginReducer'

const reducers = combineReducers({
    account: accountReducer,
    login: loginReducer
})

export default reducers
