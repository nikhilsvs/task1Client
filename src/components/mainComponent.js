import React , {Component} from 'react';
import {Switch,Redirect,Route,withRouter} from 'react-router-dom';
import Signup from './signupComponent';
import Header from './headerComponent'
import Login from './loginComponent';
import Images from './imagesComponent';
import {connect} from 'react-redux';
import {loginUser,fetchImages,logoutUser} from '../redux/actionCreators';


const mapStateToProps = (state)=>{

    return{
        auth:state.auth,
        images:state.images
    }
}

const mapDispatchToProps = (dispatch)=>({
    loginUser : (creds)=>{dispatch(loginUser(creds))},
    logoutUser : ()=>{dispatch(logoutUser())},
    fetchImages : ()=>{dispatch(fetchImages())}

});
class Main extends Component{

    constructor(props){
        super(props);
    }

    componentWillUp
    render(){

        const renderSignupComponent = ()=>{
            return <Signup/>
        }

        const renderLoginComponent = () => {

            return <Login loginUser = {this.props.loginUser}/>
        }
        
        return(
            <>
            {
                !this.props.auth.isAuthenticated
                ?
                <>
                <Header/>
                <Switch>
                    <Route path="/signup" component = {renderSignupComponent} />
                    <Route path="/login" component = {renderLoginComponent} />
                    <Redirect to = "/login"/>
                </Switch>
                </>
                :
                 <Images images = {this.props.images}  auth = {this.props.auth} 
                 fetchImages = {this.props.fetchImages} logoutUser={this.props.logoutUser}/>
                

            }
            
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));