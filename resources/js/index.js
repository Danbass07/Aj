import ReactDOM from "react-dom";
import React from "react";
import Body from "./components/Body";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[500]
        }
    }
});

if (document.getElementById("root")) {
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Body />
        </ThemeProvider>,

        document.getElementById("root")
    );
}
