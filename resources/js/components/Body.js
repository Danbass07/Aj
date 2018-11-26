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
        }
        //bind this
    }
   
   
   
   
    render() {
        return (
            <div className={"Body "}>
            <Navigation props="Navigation " />
            <Main props={"Main "} />
            <Sidebar props={"Sidebar "} />
            <Footer props={"Footer "} />
            </div>
        );
    }
}


