import React, { Component } from 'react';
import Home from './Home';
import './Main.css';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        //bind this
    }
   
   
   
   
    render() {
        return (
            <div className={"Main "}>
            {this.props.active === "Home" ? <Home /> : null }
              
            </div>
        );
    }
}
