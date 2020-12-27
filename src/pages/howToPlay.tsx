import React from 'react';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import StarterPatternExample1 from '../static/images/starter-pattern-example-1.png';
import StarterPatternExample2 from '../static/images/starter-pattern-example-2.png';

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

const HowToPlay = (props: any) => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  dispatch(notifyCurrentPage('How To Play'));

  return (
    <div>
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.title}>
              Conway's Game of Life:
            </Typography>
            <Typography variant="body1" className={classes.title}>
							The Game of Life, also known simply as Life, is a cellular automation devised by British mathematician John Horton Conway in 1970.
							It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts
							with the game by creating an initial configuration and observing how it evolves.
              <br /><br />
            </Typography>
            <Typography variant="body2">
							Reference and background: Wikipedia <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life" target='_blank' rel='noopener noreferrer' color="inherit">Conway's Game of Life</a>
              <br /><br />
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Game Preparation:
            </Typography>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="body1" className={classes.heading}>Background</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" >
                    If you are not familiar with Conway's Game of Life, it is suggested that you first review
                    the above Wikipedia reference and background link to gain a greater appreciation.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="body1" className={classes.heading}>Rules</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    In this implementation of the Game of Life, the universe is a two-dimentional
                    grid of square cells, each of which is in one of two possible states, live or dead.
                    Every cell interacts with its neighboring cells (horizontally, vertically, or diagonally adjacent).
                    At each step in time, the following transitions occur:
                    <ol>
                      <li>
                        Any live cell with fewer than two live neighbors dies, as if by underpopulation.
                      </li>
                      <li>
                        Any live cell with two or three live neighbors lives on to the next generation.
                      </li>
                      <li>
                        Any live cell with more than three live neighbors dies, as if by overpopulation.
                      </li>
                      <li>
                        Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                      </li>
                    </ol>
                    These rules, which compare the behavior of the automaton to real life, can be condensed
                    into the following:
                    <ol>
                      <li>
                        Any live cell with two or three live neighbors survives.
                      </li>
                      <li>
                        Any dead cell with three live neighbors becomes a live cell.
                      </li>
                      <li>
                        All other live cells die in the next generation. Similarly, all other dead cells stay dead.
                      </li>
                    </ol>
                    The initial pattern constitutes the seed of the system. The first generation is created by
                    applying the above rules simultaneously to every cell in the seed; births and deaths occur
                    simultaneously, and the discrete moment at which this happens is sometimes called a tick.
                    Each generation is a pure function of the preceding one. The rules continue to be applied
                    repeatedly to create further generations.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography variant="body1" className={classes.heading}>Game Play</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Click the grid cells on the Universe page to establish live and dead cells.
                    <br /><br />
                    Click the Start/Stop button on the Universe page toolbar to start/stop the cellular automation.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography variant="body1" className={classes.heading}>Starter pattern examples</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item xs={12}>
                      { !isMobile &&
                      <img src={StarterPatternExample1} alt="Starter Pattern Example 1" style={{width:"400px", border: "1px solid #555"}}></img>
                      }
                      { isMobile &&
                      <img src={StarterPatternExample1} alt="Starter Pattern Example 1" style={{width:"200px", border: "1px solid #555"}}></img>
                      }
                      <br /><br />
                    </Grid>
                    <Grid item xs={12}>
                      { !isMobile &&
                      <img src={StarterPatternExample2} alt="Starter Pattern Example 2" style={{width:"400px", border: "1px solid #555"}}></img>
                      }
                      { isMobile &&
                      <img src={StarterPatternExample2} alt="Starter Pattern Example 2" style={{width:"200px", border: "1px solid #555"}}></img>
                      }
                      <br /><br />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Other starter patterns can be viewed on the above Wikipedia background page
                        <br /><br />
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default HowToPlay;
