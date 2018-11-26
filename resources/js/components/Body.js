import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            class: ['One', 'Two']
        }
        //bind this
    }
   
   
   
   
    render() {
        return (
            <div className={"Body "+this.state.class[0]}>
            <div className={"Navigation "+this.state.class[0]} />
            <div className={"Main "+this.state.class[0]} />
            <div className={"Sidebar "+this.state.class[0]} />
            <div className={"Footer "+this.state.class[0]} />
            </div>
        );
    }
}


