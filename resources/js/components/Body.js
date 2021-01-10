import React, { Component } from "react";
import Dashboard from "./Dashboard";
import { Button } from "@material-ui/core";

import PlaceOrder from "./PlaceOrder";
import DatePicker from "./DatePicker";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    placeOrder(hour, minutes) {
        console.log(hour, minutes);
    }
    componentDidMount() {
        axios.get(`/users`).then(response => {
            this.setState({
                user: response.data[0],
                users: response.data[1]
            });
        });

        axios.get(`/timeline`).then(response => {
            this.setState({
                timeline: response.data
            });
        });
        // check type of user
        //load revelant data
        //if taxi
        //my working days and places
        //my bookings
        //if customer
        //avaiable taxi for me
        //my bookings
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                {this.state.user.type === "taxi" ? (
                    <DatePicker user={this.state.user} />
                ) : null}
                {this.state.user.type === "customer" ? (
                    <PlaceOrder
                        placeOrder={(hour, minutes) =>
                            this.placeOrder(hour, minutes)
                        }
                    />
                ) : null}
                {/* <Dashboard /> */}
                {/* <div className="Body">
                    Position {this.state.position}
                   
                </div>

                <div
                    className={animation}
                    onClick={() => this.animationTrigger()}
                >
                    Position {this.state.position}
                </div> */}
            </div>
        );
    }
}
