import React from 'react';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { notifyCurrentPage } from '../redux/actions';

import ContactForm from './contactForm';

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

const Contact = (props: any) => {

  const classes = useStyles();
  const isLogInSupported = false;

  const dispatch = useDispatch();
  dispatch(notifyCurrentPage('Contact'));

  return (
    <div>
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item>
            { isLogInSupported ?
              (
                <React.Fragment>
                  <Typography variant="body1" className={classes.title}>
                    Do you need your own portfolio website?
                    <br /><br />
                    Do you have your own portfolio website? If not, the answer to the first question is YES!
                    <br /><br />
                    You can get your own high quality portfolio website just like this one for a low $99/year licensing
                    and hosting fee. There may be extra setup and development costs depending on your specific customization needs.
                    <br /><br />
                  </Typography>
                  <Typography variant="h6" className={classes.title}>
                      Stress-free one month free trial
                  </Typography>
                  <Typography variant="body1" className={classes.title}>
                    After <Link to="/signup" color="inherit">signing up</Link>, if you refer someone else who signs up and pays for their own portfolio website, you will receive $10 on their next
                    portfolio website annual renewal date, even if they do not renew, provided that they do not request a cancellation prior to the last month of
                    their first year. This offer is good for an unlimited number of referrals! Your next portfolio website annual renewal could effectively be free,
                    and you might even make some money! Cancellations will be processed and refunded upon request, prorated in whole months, so long as the
                    cancellation request is made prior to one week into the following month. This provides for a stress-free one month free trial for you and every referral that signs up!
                    <br /><br />
                    Ready to begin making referrals and racking up $10 for each? You can also make referrals without signing yourself up, but you wont rack up $10 for each.
                    Either way, you can do so on the <Link to="/referral" color="inherit">Referral</Link> page.
                    <br /><br />
                    Questions or inquiries? You can reach me by email at <a href="mailto:bobcurrymagic@gmail.com" color="inherit">bobcurrymagic@gmail.com</a>, by phone at +1-732-306-4076,
                    or by filling out and submitting the below form.
                    <br /><br />
                  </Typography>
                </React.Fragment>
              ) :
              (
                // LogIn NOT Supported
                <React.Fragment>
                  <Typography variant="body1" className={classes.title}>
                    Questions or inquiries? You can reach me by email at <a href="mailto:bobcurrymagic@gmail.com" color="inherit">bobcurrymagic@gmail.com</a>, by phone at +1-732-306-4076,
                    or by filling out and submitting the below form.
                    <br /><br />
                  </Typography>
                </React.Fragment>
              )
            }
            <ContactForm />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Contact;
