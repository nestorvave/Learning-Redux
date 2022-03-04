import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const redurcers = combineReducers({
    auth: authReducer
} )


export const store = createStore( 
    redurcers,
    composeEnhancers( 
        applyMiddleware ( thunk )
     )
)

