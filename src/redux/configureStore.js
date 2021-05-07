import {combineReducers,createStore,applyMiddleware} from 'redux';
import {user} from './users';
import {Images} from './images';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = ()=>{

    const store = createStore(
        combineReducers({
            auth:user,
            images:Images
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}