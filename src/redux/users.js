import * as ActionTypes from './actionTypes';

export const user = (state = {
    isLoading:false,
    token : localStorage.getItem('token'),
    isAuthenticated : localStorage.getItem('token')?true:false,
    user:localStorage.getItem('creds')?JSON.parse(localStorage.getItem('creds')):null,
    err:null
},action)=>{

    switch(action.type){
        case ActionTypes.LOGIN_REQUEST : 
            return {...state , isLoading:true,user:action.payload.creds};

        case ActionTypes.LOGIN_REQUEST_SUCCESS :
            return {...state , isLoading :false, token:action.payload.token,user:JSON.parse(localStorage.getItem('creds'))
                ,isAuthenticated:true};

        case ActionTypes.LOGIN_REQUEST_FAILED : 
            return {...state , isLoading:false,isAuthenticated:false,err:action.payload.message};

        default : 
            return state;
    }
   

}
