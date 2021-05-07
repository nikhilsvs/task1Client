import * as ActionTypes from './actionTypes';

export const Images = (state={
    images : [],
    isLoading:false,
    err:null
},action)=>{

    switch(action.type){

        case ActionTypes.FETCH_IMAGE_REQUEST : 
            return {...state,isLoading:true};

        case ActionTypes.FETCH_IMAGE_SUCCESS : 
            return {...state,isLoading:false,images:action.payload};

        case ActionTypes.LOGIN_REQUEST_FAILED : 
            return {...state,isLoading : false,err:action.payload};

        default:
            return state;
    }
}