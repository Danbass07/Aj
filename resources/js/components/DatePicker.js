import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Card, Button } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const { DateTime, Interval } = require("luxon");

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        minWidth: "450px"
    },
    days: {
        flex: "1 0 14%"
    },
    workingDays: {
        flex: "1 0 14%",
        backgroundColor: blue[200]
    }
}));
export default function DatePicker(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [monthModificator, setMonthModificator] = React.useState(0);
    const [monthMatrix, setMonthMatrix] = React.useState([]);
    const [selectedDates, setSelectedDates] = React.useState([]);

    const MonthModificatorHandler = value => {
        setMonthModificator(monthModificator + value);
    };

    let now = DateTime.local().plus({ months: monthModificator });

    let firstDayOfFirstWeek = now.startOf("month").startOf("week");

    let lastDayOfLasttWeek = now.endOf("month").endOf("week");

    let monthToDisplay = Interval.fromDateTimes(
        firstDayOfFirstWeek,
        lastDayOfLasttWeek
    );

    useEffect(() => {
        var matrix = [];

        for (let v = 0; v < monthToDisplay.length("day"); v++) {
            matrix.push(firstDayOfFirstWeek.plus({ day: v }));
        }

        setMonthMatrix(matrix);
    }, [selectedDates, monthModificator]);

    function dayClick(day) {
        let data = selectedDates;
        if (!data.length === 0) {
            selectedDates.map(date => {
                if (!date.equals(day)) {
                    console.log(data);
                    data.push(day);
                }
            });
        } else {
            data.push(day);
            console.log(data);
            setSelectedDates(day);
        }
        setSelectedDates(data);
    }
    function saveChanges() {
        let arrayOfDataObjects = selectedDates;

        let arrayOfDataStrings = arrayOfDataObjects.map(singleDataObject => {
            return (
                "," +
                JSON.stringify(singleDataObject.toISODate()).replaceAll('"', "") // extra quotes removed
            );
        });

        axios.post(`/timeline`, {
            timeline: arrayOfDataStrings
        });
    }

    function updateChanges() {
        axios.get(`/timeline`).then(response => {
            let selectedDays = [];

            response.data.map(date => {
                selectedDays.push(DateTime.fromISO(date));
            });

            setSelectedDates(selectedDays);
        });
    }

    return (
        <Grid container justify="space-around">
            <Button onClick={() => MonthModificatorHandler(1)}>+</Button>
            <Button onClick={() => MonthModificatorHandler(-1)}>-</Button>
            <Card className={classes.root}>
                {monthMatrix.map((day, index) => {
                    let color = "secondary";
                    selectedDates.map(workingDay => {
                        if (workingDay.equals(day)) {
                            color = "primary";
                        }
                    });

                    return (
                        <Button
                            color={color}
                            variant="contained"
                            onClick={() => dayClick(day)}
                            className={classes.days}
                            key={index}
                        >
                            {day.day}
                        </Button>
                    );
                })}
            </Card>
            <Button onClick={() => saveChanges()}>Save Changes</Button>
            <Button onClick={() => updateChanges()}>Update Changes</Button>
        </Grid>
    );
}
