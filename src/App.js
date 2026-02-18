import React, { Component } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop.js";
import Header from "./components/containers/Header.js";
import Body from "./components/containers/Body.js";
import Footer from "./components/containers/Footer.js";

// Modern theme - clean, professional
const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Plus Jakarta Sans'", "sans-serif"].join(","),
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    body1: { fontSize: 16, lineHeight: 1.7 },
    body2: { fontSize: 15, lineHeight: 1.6 },
  },
  palette: {
    primary: { main: "#0D9488", contrastText: "#fff" },
    secondary: { main: "#1E293B", contrastText: "#fff" },
  },
  shape: { borderRadius: 12 },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
        borderRadius: 10,
        textTransform: "none",
        padding: "10px 20px",
      },
      contained: {
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        "&:hover": { boxShadow: "0 4px 12px rgba(13,148,136,0.25)" },
      },
    },
    MuiCard: {
      root: {
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      },
    },
    MuiPaper: { rounded: { borderRadius: 12 } },
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <ScrollToTop />
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
