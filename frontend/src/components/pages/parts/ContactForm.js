import { Typography, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import * as typeformEmbed from '@typeform/embed'

const styles = (prop,theme) => ({
    typeform: {
        height: 500,
        paddingBottom: "5vh",
    }
})

class ContactForm extends Component {
    componentDidMount() {
        const embedElement = document.getElementById('here')
        typeformEmbed.makeWidget(
            embedElement,
            'https://m2ul1eb9fw4.typeform.com/to/qIG8spxa',
            {
              hideHeaders: false,
              hideFooter: false,
              opacity: 75,
              buttonText: "Take the survey!",
              onSubmit: function () {
                console.log('Typeform successfully submitted')
              }
          }
        )
        
    }
    render() {
        const classes = this.props.classes
        return (
            <div >
                <Typography variant="h1" style={{textAlign: "center", padding: "2vw"}}>Contact Me!</Typography>
                <Grid container>
                    <Grid item xs/>
                    <Grid item xs={12} sm={10}>
                        <div id="here" className={classes.typeform}></div>
                    </Grid>
                    <Grid item xs/>
                </Grid>
                
            </div>
        )
    }
}

export default withStyles(styles)(ContactForm)




