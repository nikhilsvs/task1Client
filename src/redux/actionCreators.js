import * as ActionTypes from './actionTypes';
import {baseUrl} from '../baseUrl';

export const loginRequest = (creds) => ({
    type:ActionTypes.LOGIN_REQUEST,
    payload:creds
});

export const loginSuccess = (creds)=>({
    type:ActionTypes.LOGIN_REQUEST_SUCCESS,
    payload:creds
});

export const loginFailed = (message)=>({
    type:ActionTypes.LOGIN_REQUEST_FAILED,
    payload:message
});

export const loginUser = (creds) => (dispatch)=>{

    dispatch(loginRequest(creds));

    fetch(baseUrl + 'users/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(creds)
    })
    .then((response)=>{
        if(response.ok){
            return response;
        }

        else{
            var err = new Error("Unable to Login ");
            err.response = response;
            throw err;
        }
    },(error)=>{
        throw error;
    })
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{

        let info = {
            email : creds.username
        }
        localStorage.setItem('token',response.token);
        localStorage.setItem('creds',JSON.stringify(info));

        dispatch(loginSuccess(response));
    })

    .catch((error)=>{
        dispatch(loginFailed(error.message));
    })

}