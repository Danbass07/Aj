import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
   
    render() {
        return (
            <div className={"Navigation "}>
                <div className="TopStrip">
                    <div className="Logo" >AJ's Taxi</div>
                    <div className="Number">contact@contact.com</div> 
                    <div className="Number">01777 709 999</div> 
                    

                </div>
                <div className="BottomStrip">
                    <button
                     value="Home" 
                     className={this.props.active === "Home" ? "MenuButton Active" : "MenuButton" }
                     onClick={(e) => this.props.click(e)}>
                     Home                     
                     </button>

                    <button
                     value="Vehicles" 
                     className={this.props.active === "Vehicles" ? "MenuButton Active" : "MenuButton" }
                     onClick={(e) => this.props.click(e)}>
                     Vehicles
                     </button>

                    <button 
                    value="Staff" 
                    className={this.props.active === "Staff" ? "MenuButton Active" : "MenuButton" }
                    onClick={(e) => this.props.click(e)}>
                    Staff
                    </button>

                    <button 
                    value="Contact" 
                    className={this.props.active === "Contact" ? "MenuButton Active" : "MenuButton" } 
                    onClick={(e) => this.props.click(e)}>
                    Contact
                    </button>

                </div>
            </div>
        );
    }
}


