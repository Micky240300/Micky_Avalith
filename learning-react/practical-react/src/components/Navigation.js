import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return (
            
            <nav className="navbar navbar-dark bg-dark"> 
                <a href="http://localhost:3000" className="text-white">
                {this.props.title}
                </a>
            </nav>


        )
    }
}
export default Navigation;