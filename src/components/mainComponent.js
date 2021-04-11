import React , {Component} from 'react';
import {Switch,Redirect,Route,withRouter} from 'react-router-dom';
import Signup from './signupComponent';
import Header from './headerComponent'
import Login from './loginComponent';
import {connect} from 'react-redux';
import {loginUser} from '../redux/actionCreators';


const mapStateToProps = (state)=>{

    return{
        auth:state.auth
    }
}

const mapDispatchToProps = (dispatch)=>({
    loginUser : (creds)=>{dispatch(loginUser(creds))}
});
class Main extends Component{

    constructor(props){
        super(props);
    }

    
    render(){

        const renderSignupComponent = ()=>{
            return <Signup/>
        }

        const renderLoginComponent = () => {

            return <Login loginUser = {this.props.loginUser}/>
        }
        return(
            <>
            <Header/>
            <Switch>
                <Route path="/signup" component = {renderSignupComponent} />
                <Route path="/login" component = {renderLoginComponent} />
                <Redirect to = "/login"/>
            </Switch>
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));