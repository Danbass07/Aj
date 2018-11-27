import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Body.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'Home',
        }
        //bind this
    }
   
    buttonHandler(e){
          
        this.setState({
            active: e.target.value,
        })
    }
   
   
    render() {
        return (
            <div className={"Body "}>
            <Navigation active={this.state.active} click={(e) => this.buttonHandler(e)}/>
            <Main active={this.state.active} />
            <Sidebar props={"Sidebar "} />
            <Footer props={"Footer "} />
            </div>
        );
    }
}


