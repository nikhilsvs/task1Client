import React , {Component} from 'react';
import {Card} from 'antd';
import {Form,FormGroup,Input,Label} from 'reactstrap';
import {baseUrl} from '../baseUrl';

class Signup extends Component{

    constructor(props){
        super(props);

        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup(event){

        event.preventDefault();
        fetch(baseUrl + 'users/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:this.email.value,
                password:this.password.value,
                firstname : this.firstname.value,
                lastname : this.lastname.value,
                phone:this.phone.value
            })
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
            alert('Registration Successful !!');
        })
    
        .catch((error)=>{
            alert('Error occcured : ' + error.message);
        })

    }
    render(){

        return(
            <div className="container align-self-center signupComp">
             
                <div className="row">
                    <div className="col-10 offset-1 col-md-6 offset-md-3 signupCard text-center">
                        <Card title="Signup" hoverable style={{width:"100%"}}
                        headStyle={{backgroundColor: "#1890ff",color:"whitesmoke"}}>
                            <Form onSubmit = {this.handleSignup}>
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
                                    <Label htmlFor="firstname"><strong>firstname</strong></Label>
                                    <Input type="firstname" id="firstname" name="firstname" placeholder="firstname"
                                    innerRef = {(input)=>this.firstname = input}/>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname"><strong>lastname</strong></Label>
                                    <Input type="lastname" id="lastname" name="lastname" placeholder="lastname"
                                    innerRef = {(input)=>this.lastname = input}/>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phone"><strong>phone</strong></Label>
                                    <Input type="phone" id="phone" name="phone" placeholder="phone"
                                    innerRef = {(input)=>this.phone = input}/>
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

export default Signup;