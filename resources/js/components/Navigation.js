import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            props: this.props.props,
        }
        //bind this
    }
   
   
   
   
    render() {
        return (
            <div className={"Navigation "}>
                <div className="TopStrip">
                    <div className="Logo" >AJ's Taxi</div>
                    <div className="Number">contact@contact.com</div> 
                    <div className="Number">01777 709 999</div> 
                    

                </div>
                <div className="BottomStrip">
                    <nav className="MenuButton">Home</nav>
                    <nav className="MenuButton">Vehicles</nav>
                    <nav className="MenuButton">Staff</nav>
                    <nav className="MenuButton">Contact</nav>
                </div>
            </div>
        );
    }
}


