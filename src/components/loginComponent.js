import React , {Component} from 'react';
import {Card} from 'antd';
import {Form,FormGroup,Input,Label} from 'reactstrap';


class Login extends Component{

    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event){

        event.preventDefault();
        alert("HandleLogin Triggered");
        this.props.loginUser({username:this.email.value,password:this.password.value});
        event.preventDefault();
    }

    render(){

        return(
            <div className="container align-self-center signupComp">
                <div className="row">
                    <div className="col-10 offset-1 col-md-6 offset-md-3 loginCard text-center">
                        <Card title="Login" hoverable style={{width:"100%"}}
                            headStyle={{backgroundColor:"#1890ff",color:"whitesmoke"}}>
                            <Form onSubmit = {this.handleLogin}>
                                <FormGroup row>
                                    <Label htmlFor="email"><strong>Email</strong></Label>
                                    <Input type="email" id="email" name="email" placeholder="Email"
                                    innerRef = {(input)=>this.email = input}/>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="password"><strong>password</strong></Label>
                                    <Input type="password" id="password" name="password" placeholder="password"
                                    innerRef = {(input)=>this.password = input}/>
                                </FormGroup>
                                <FormGroup row>
                                    
                                    <Input type="submit" className="btn btn-outline-primary"/>
                                </FormGroup>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;