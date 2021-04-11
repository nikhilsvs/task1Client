import React , {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            current: 'login',
          };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event){

        this.setState({
            current:event.key
        })
    }
    render(){

        
        return(
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
                <Menu.Item key="login">
                   <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link to="/signup">Signup</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Header;