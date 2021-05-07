import React , {Component} from 'react';
import { Card,Image} from 'antd';
import {baseUrl} from '../baseUrl';
import 'antd/dist/antd.css';



class Images extends Component{


    constructor(props){

        super(props);

        this.handleLogout = this.handleLogout.bind(this);

    }

    componentDidMount(){
        this.props.fetchImages();
    }
   
    handleLogout(){
        this.props.logoutUser();
    }
  
    render(){

        let x = this.props.images.images.map((item)=>{
            return(
                
                    <div className = "col-md-3 m-10 align-self-center text-center"  >
                        <div className="imgCard">
                        <Image src={`${baseUrl}images/${item.name}`}
                        width="100%"
                        height="200px"
                        />
                        </div>
                          
                    </div>
               
            )
        })

        return(
            <>
            <div className="header">
                <div className="overlay">
                    <div className="container headerCon" >
                        <div className="row">
                            <div className="col-md-12">
                                <button className="logOut btn btn-outline-primary" onClick={this.handleLogout}>Logout</button>
                            </div>
                        </div>
                        <div className="row headerRow">
                            <div className="col-md-6 text-center">
                                <img src = "/images/pic1.png" width="100%"/>
                            </div>
                            <div className="col-md-6 rightCol text-center align-self-center">
                                <h1><cite>Welcome to the App</cite></h1>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
            
            </div>
            <div className = "container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Card
                        hoverable
                        style={{ width: "100%",backgroundColor:"rgb(24, 144, 255)",color:"white"}}
                        >
                            <div className="text-center align-self-center">
                                <h1 style={{ color:"white"}}><cite>Images</cite></h1>
                            </div>
                        </Card>
                           
                  
                        
                    </div>
                </div>
                
                <div className="row align-self-center ">
                   
                        {
                            this.props.images.length != 0
                            ?
                            <>
                                {x}
                            </> 
                                
                            :
                            <div className="col-md-12 text-center">
                                <h2><cite> Please Select an artist</cite></h2>
                            </div>

                            
                        }
                   
                    
                </div>
            </div>
            </>
        );
    }
}

export default Images;