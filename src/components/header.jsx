import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { notifyCurrentPage } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLogInSupported = false;
  const isLoggedIn = false;
  
  const currentPage = useSelector(state => state.currentPage);
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
    updatePageLocation(pageURL);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
    updatePageLocation(pageURL);
  };

  const updatePageLocation = pageURL => {
    switch (pageURL) {
      case '/':
        dispatch(notifyCurrentPage('Universe'));
        break;
      case '/projects':
        dispatch(notifyCurrentPage('Projects'));
        break;
      case '/skills':
        dispatch(notifyCurrentPage('Skills'));
        break;
      case '/contact':
        dispatch(notifyCurrentPage('Contact'));
        break;
      case '/signup':
        dispatch(notifyCurrentPage('Sign Up'));
        break;
      case '/about':
        dispatch(notifyCurrentPage('About'));
        break;
      case '/login':
        dispatch(notifyCurrentPage('Log In'));
        break;
      case '/logout':
        dispatch(notifyCurrentPage('Log Out'));
        break;
      case '/myaccount':
        dispatch(notifyCurrentPage('My Account'));
        break;
      default:
        dispatch(notifyCurrentPage(''));
        break;
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Game of Life - {currentPage}
          </Typography>
          <div>
            { isMobile ?
            (
              <React.Fragment>
                { isLogInSupported && isLoggedIn ?
                  (
                    <React.Fragment>
                      <IconButton
                        aria-label="options"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <AccountCircle />
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
                        <MenuItem onClick={() => handleMenuClick('/myaccount')}>My Account</MenuItem>
                        <MenuItem onClick={() => handleMenuClick('/logout')}>Log Out</MenuItem>
                      </Menu>
                    </React.Fragment>
                  ) :
                  (
                    <React.Fragment>
                      { isLogInSupported ?
                        (
                          <IconButton
                            aria-label="options"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => handleMenuClick('/login')}
                            color="inherit"
                          >
                            <AccountCircle />
                          </IconButton>
                        ) :
                        (
                          // LogIn NOT Supported
                          <React.Fragment>
                          </React.Fragment>
                        )
                      }
                    </React.Fragment>
                  )
                }
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
                  <MenuItem onClick={() => handleMenuClick('/')}>Universe</MenuItem>
                  { isLogInSupported ?
                    (
                      <React.Fragment>
                        <MenuItem onClick={() => handleMenuClick('/projects')}>Projects</MenuItem>
                        <MenuItem onClick={() => handleMenuClick('/skills')}>Skills</MenuItem>
                      </React.Fragment>
                    ) :
                    (
                      // LogIn NOT Supported
                      <React.Fragment>
                      </React.Fragment>
                    )
                  }
                  <MenuItem onClick={() => handleMenuClick('/contact')}>Contact</MenuItem>
                  { isLogInSupported ?
                    (
                      <React.Fragment>
                        <MenuItem onClick={() => handleMenuClick('/signup')}>Sign Up</MenuItem>
                      </React.Fragment>
                    ) :
                    (
                      // LogIn NOT Supported
                      <React.Fragment>
                      </React.Fragment>
                    )
                  }
                  <MenuItem onClick={() => handleMenuClick('/about')}>About</MenuItem>
                </Menu>
              </React.Fragment>
            ) :
            (
              <React.Fragment>
                <Button variant='contained' color='primary' onClick={() => handleButtonClick('/')}>
                  Universe
                </Button>
                {' '}
                { isLogInSupported ?
                  (
                    <React.Fragment>
                      <Button variant='contained' color='primary' onClick={() => handleButtonClick('/projects')}>
                        Projects
                      </Button>
                      {' '}
                      <Button variant='contained' color='primary' onClick={() => handleButtonClick('/skills')}>
                        Skills
                      </Button>
                      {' '}
                    </React.Fragment>
                  ) :
                  (
                    // LogIn NOT Supported
                    <React.Fragment>
                    </React.Fragment>
                  )
                }
                <Button variant='contained' color='primary' onClick={() => handleButtonClick('/contact')}>
                  Contact
                </Button>
                {' '}
                { isLogInSupported ?
                  (
                    <React.Fragment>
                      <Button variant='contained' color='primary' onClick={() => handleButtonClick('/signup')}>
                        Sign Up
                      </Button>
                      {' '}
                    </React.Fragment>
                  ) :
                  (
                    // LogIn NOT Supported
                    <React.Fragment>
                    </React.Fragment>
                  )
                }
                <Button variant='contained' color='primary' onClick={() => handleButtonClick('/about')}>
                  About
                </Button>
                { isLogInSupported && isLoggedIn ?
                  (
                    <React.Fragment>
                      <IconButton
                        aria-label="options"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => handleMenuClick('/myaccount')}
                        color="inherit"
                      >
                        <AccountCircle />
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
                        <MenuItem onClick={() => handleMenuClick('/myaccount')}>My Account</MenuItem>
                        <MenuItem onClick={() => handleMenuClick('/logout')}>Log Out</MenuItem>
                      </Menu>
                    </React.Fragment>
                  ) :
                  (
                    <React.Fragment>
                      { isLogInSupported ?
                        (
                          <IconButton
                            aria-label="options"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => handleMenuClick('/login')}
                            color="inherit"
                          >
                            <AccountCircle />
                          </IconButton>
                        ) :
                        (
                          // LogIn NOT Supported
                          <React.Fragment>
                          </React.Fragment>
                        )
                      }
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
  );
}

export default withRouter(Header);
