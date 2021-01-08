import React from 'react';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useDispatch } from 'react-redux';

import { notifyCurrentPage } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  giant: {
    width: theme.spacing(30),
    height: theme.spacing(30)
  },
  title: {
    flexGrow: 1
  },
  helloStickerMaxWidth: {
    maxWidth: 440,
  },
  media: {
    height: 538,
  },
  helloStickerHeader: {
    ...theme.typography.button,
    backgroundColor: "red",
    color: "white",
  },
  heading: {
    fontWeight: 'bold'
  }
}));

const About = (props: any) => {

  const classes = useStyles();
  // const preventDefault = (event) => event.preventDefault();

  const dispatch = useDispatch();
  dispatch(notifyCurrentPage('About'));

  return (
    <div>
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item>
          <Typography variant="h6" className={classes.title}>
              About:
            </Typography>
            <Typography variant="body1" className={classes.title}>
              Conway's Game of Life, also known simply as Life, is a cellular automation devised by British mathematician John Horton Conway in 1970.
							It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts
							with the game by creating an initial configuration and observing how it evolves.
              <br /><br />
            </Typography>
            <Typography variant="body2">
							Reference and background: Wikipedia <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target='_blank' rel='noopener noreferrer' color="inherit">Conway's Game of Life</a>
              <br /><br />
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Architecture:
            </Typography>
            <Typography variant="body1" className={classes.title}>
              I built the Game of Life website using React with React Material-UI. Rest API web services are provided
              using Axios to the middle tier REST API web service endpoint, which communicates with a backend
              MS-SQL Server database using ASP.NET MVC and C#.
              <br /><br />
              Taking a modern DevOps approach, I built a Microsoft Azure CI/CD pipeline to host all 3 tiers.
              <br /><br />
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Skills leveraged:
            </Typography>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="body1" className={classes.heading}>Frontend tier</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" >
                    React
                    <br />
                    HTML 5, CSS, JavaScript, TypeScript
                    <br />
                    Screen specific rendering: CSS flexbox, CSS media queries
                    <br />
                    JSX
                    <br />
                    Conditional rendering
                    <br />
                    Hooks: useState, useCallback
                    <br />
                    State management: react-redux, immer, setState, props
                    <br />
                    Component composition: function, props, event handling
                    <br /><br />
                    React Material-UI:
                    <br />
                    CSS styling: useTheme, makeStyles
                    <br />
                    Hooks: useMediaQuery
                    <br />
                    Layout: Grid container, Grid item
                    <br />
                    Presentation components and APIs: AppBar, Toolbar, Menu, MenuItem, Paper, Typography, Accordion, FormControl, TextField, InputLabel, Select, MuiPickersUtilsProvider, KeyboardDatePicker, DateFnsUtils, Button, IconButton, Snackbar, Slide
                    <br /><br />
                    REST API web services: Axios
                    <br /><br />
                    Navigation and routing: react-router-dom (BrowserRouter, Switch, Route, Link, withRouter)
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="body1" className={classes.heading}>Middle tier</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    ASP.NET MVC
                    <br /><br />
                    REST API web service endpoint, accepting requests from the frontend
                    <br /><br />
                    Communicates with a backend MS-SQL Server database using ASP.NET MVC and C#
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography variant="body1" className={classes.heading}>Backend tier</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    MS-SQL Server database
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography variant="body1" className={classes.heading}>DevOps</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Microsoft Azure Continuous Integration/Continuous Delivery (CI/CD) pipeline, hosting frontend, middle, and backend tiers  
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default About;
