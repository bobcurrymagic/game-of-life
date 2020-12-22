import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import { Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const numRows = 38;
const numCols = 28;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
    flexGrow: 1,
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
  }
}));

const UniverseSM = (props: any) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLoggedIn = false;

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (buttonCaption: any) => {
    setAnchorEl(null);
    executeButtonFunctionality(buttonCaption);
  };

  const handleButtonClick = (buttonCaption: any) => {
    executeButtonFunctionality(buttonCaption);
  };

  const executeButtonFunctionality = (buttonCaption: any) => {
    switch (buttonCaption) {
      case 'Start':
        // START
        toggleUniverseTickMode();
        break;
      case 'Stop':
        // START
        toggleUniverseTickMode();
        break;
      default:
        // UNKNOWN
        break;
    }
  }

  const toggleUniverseTickMode = () => {
    setRunning(!running);
    if (!running) {
      runningRef.current = true;
      runSimulation();
    }
  }

    const [grid, setGrid] = useState(() => {
      const rows = [];
      for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0));
      }

      return rows;
    });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 20);
  }, []);

  return (
    <>
      {
        // NavBar ButtonBar
      }
      <div className={classes.root}>
        <AppBar position="static" color='inherit'>
          <Toolbar>
            <div>
              { isMobile ?
                (
                  <React.Fragment>
                    <IconButton
                      aria-label="options"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <MoreVert />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={() => setAnchorEl(null)}
                    >
                      <MenuItem onClick={() => handleMenuClick('Start')}>{running ? "Stop" : "Start"}</MenuItem>
                      { false ?
                        (
                          <React.Fragment>
                            <MenuItem onClick={() => handleMenuClick('Clear')}>Clear</MenuItem>
                          </React.Fragment>
                        ) :
                        (
                          // NOT Logged In
                          <React.Fragment>
                          </React.Fragment>
                        )
                      }
                      { isLoggedIn ?
                        (
                          <React.Fragment>
                            <MenuItem onClick={() => handleMenuClick('Save')}>Save</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('Load')}>Load</MenuItem>
                          </React.Fragment>
                        ) :
                        (
                          // NOT Logged In
                          <React.Fragment>
                          </React.Fragment>
                        )
                      }
                    </Menu>
                  </React.Fragment>
                ) :
                (
                  <React.Fragment>
                    <Button variant='contained' color='primary' onClick={() => handleButtonClick('Start')}>
                      {running ? "Stop" : "Start"} 
                    </Button>
                    {' '}
                    { false ?
                      (
                        <React.Fragment>
                          <Button variant='contained' color='primary' onClick={() => handleButtonClick('Clear')}>
                            Clear
                          </Button>
                          {' '}
                        </React.Fragment>
                      ) :
                      (
                        // NOT Logged In
                        <React.Fragment>
                        </React.Fragment>
                      )
                    }
                    { isLoggedIn ?
                      (
                        <React.Fragment>
                          <Button variant='contained' color='primary' onClick={() => handleButtonClick('Save')}>
                            Save
                          </Button>
                          {' '}
                          <Button variant='contained' color='primary' onClick={() => handleButtonClick('Load')}>
                            Load
                          </Button>
                          {' '}
                        </React.Fragment>
                      ) :
                      (
                        // NOT Logged In
                        <React.Fragment>
                        </React.Fragment>
                      )
                    }
                  </React.Fragment>
                )
              }
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {
        // Universe
      }
      <Paper className={classes.pageContent}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 10px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 10,
                height: 10,
                backgroundColor: grid[i][k] ? "black" : undefined,
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
      </Paper>
    </>
  );
};

export default UniverseSM;
