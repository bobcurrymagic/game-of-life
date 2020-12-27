import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';

//import './App.css';
//import "./styles.css";

import 'fontsource-roboto';

import Header from './components/header';

import Universe from './pages/universe';
//import Projects from './pages/projects';
//import Skills from './pages/skills';
import HowToPlay from './pages/howToPlay';
import Contact from './pages/contact';
//import SignUp from './pages/signup';
import About from './pages/about';
//import LogIn from './pages/login';
//import LogOut from './pages/logout';
//import MyAccount from './pages/myaccount';

// const useStyles = makeStyles({});

export default function App() {
  // const classes = useStyles();
  return (
    <div>
      <Header />
      <Switch>
        {/* <Route exact from="/" render={props => <Universe {...props} />} /> */}
        {/* <Route exact path="/" component={Universe} /> */}
        <Route exact path="/" render={props => <Universe {...props} />} />
        {/* <Route exact path="/projects" render={props => <Projects {...props} />} /> */}
        {/* <Route exact path="/skills" render={props => <Skills {...props} />} /> */}
        <Route exact path="/howtoplay" render={props => <HowToPlay {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        {/* <Route exact path="/signup" render={props => <SignUp {...props} />} /> */}
        <Route exact path="/about" render={props => <About {...props} />} />
        {/* <Route exact path="/login" render={props => <LogIn {...props} />} /> */}
        {/* <Route exact path="/logout" render={props => <LogOut {...props} />} /> */}
        {/* <Route exact path="/myaccount" render={props => <MyAccount {...props} />} /> */}
      </Switch>
    </div>
  );
}
