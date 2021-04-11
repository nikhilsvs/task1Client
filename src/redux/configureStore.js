import {combineReducers,createStore,applyMiddleware} from 'redux';
import {user} from './users';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = ()=>{

    const store = createStore(
        combineReducers({
            auth:user
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}