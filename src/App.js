import React, { Component } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/containers/Header";
import Body from "./components/containers/Body";
import Footer from "./components/containers/Footer";

//custom theme color
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 12,
    h2: {
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 1.2,
      "text-transform": "uppercase"
    },
    h4: {
      fontWeight: 700,
      "text-transform": "uppercase"
    },
    body1: {
      fontSize: 18,
      margin: "10px 0"
    },
    body2: {
      fontSize: 18,
      margin: "20px 0"
    },
    caption: {
      fontSize: 16,
      color: "#FC5185",
      display: "inline",
      fontWeight: "900"
    },
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#11D3BC",
      contrastText: "#fff"
    },
    secondary: {
      main: "#FC5185"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 700,
        borderRadius: 50,
        padding: "10px 30px !important",
        marginRight: 32,
        "text-transform": "capitalize",
        fontSize: 16
      }
    }
  }
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Header />
            <Body />
            <Footer />
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
