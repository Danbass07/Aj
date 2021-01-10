import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        border: "1px black solid"
    }
});

export default function PlaceOrder(props) {
    const classes = useStyles();
    const hours = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24"
    ];

    return (
        <React.Fragment>
            {hours.map((hour, index) => {
                return (
                    <ButtonGroup
                        key={index}
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                        fullWidth="true"
                    >
                        <Button
                            onClick={() => props.placeOrder(hour, "- 00")}
                            fullWidth="true"
                        >
                            {hour}
                            {"- 00"}
                        </Button>
                        <Button onClick={() => props.placeOrder(hour, "- 15")}>
                            {hour}
                            {"- 15"}
                        </Button>
                        <Button onClick={() => props.placeOrder(hour, "- 30")}>
                            {hour}
                            {"- 30"}
                        </Button>
                        <Button onClick={() => props.placeOrder(hour, "- 45")}>
                            {hour}
                            {"- 45"}
                        </Button>
                    </ButtonGroup>
                );
            })}
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
            ></ButtonGroup>
        </React.Fragment>
    );
}
