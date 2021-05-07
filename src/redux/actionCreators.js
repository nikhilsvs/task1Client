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

export const fetchImagesRequest =()=> ({
    type:ActionTypes.FETCH_IMAGE_REQUEST
});

export const fetchImagesSuccess = (images)=>({
    type:ActionTypes.FETCH_IMAGE_SUCCESS,
    payload:images
});

export const fetchImagesFailed = (message) => ({
    type:ActionTypes.LOGIN_REQUEST_FAILED,
    payload:message
});
export const fetchImages = ()=>(dispatch)=>{

    dispatch(fetchImagesRequest());

    fetch(baseUrl + "images")
    .then((response)=>{
        if(response.ok){
            return response;
        }

        else{
            var err = new Error("Unable to Fetch Images ");
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
        dispatch(fetchImagesSuccess(response));
    })

    .catch((error)=>{
        dispatch(fetchImagesFailed(error.message));
    })

}
export const logoutRequest = ()=>({
    type:ActionTypes.LOGOUT_REQUEST
});
export const logoutSuccess = ()=>({
    type:ActionTypes.LOGOUT_SUCCESS
});
export const logoutFailed = (mess) =>({
    type:ActionTypes.LOGOUT_FAILED,
    payload:mess
});
export const logoutUser = () =>(dispatch)=>{

    dispatch(logoutRequest());
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(logoutSuccess());
}
export const signupUser = (creds)=>(dispatch)=>{
    fetch(baseUrl+"users/signup",{
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
            var err = new Error("User to signup");
            err.response = response;
            throw err;
        }
    },(error)=>{
        throw error;
    })
    .then((response)=>response.json())
    .then((response)=>{
        alert("User : " + response.username + 
            "\n Successfully Registered , Now you can Login");
    })
    .catch((err)=>{
        alert(err.message);
    })
}