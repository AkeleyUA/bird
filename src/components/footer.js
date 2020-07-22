import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import {Hidden, Grid} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    maxWidth: 1440,
    width: '100%',
    background: '#3E245C',
    paddingTop: 62,
    minHeight: 474 - 62,
    paddingBottom: 40,
  },
  root: {
    maxWidth: 1190,
    margin: '0 auto',
    width: '95%',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  productsList: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 150,
  },
  title: {
    display: 'block',
    fontFamily: 'Duster Regular',
    fontSize: 26,
    color: '#FFDC00',
    marginBottom: 5,
    minHeight: 26,
  },
  titleListItem: {
    display: 'block',
    fontFamily: 'Duster Regular',
    fontSize: 26,
    color: '#FFDC00',
    minHeight: 26,
    fontWeight: 'bold',
    textDecoration: 'none',
    marginBottom: 20,
  },
  link: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    color: '#F7F7F7',
    letterSpacing: '0.02em',
    textDecoration: 'none',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    background: '#8C9DD0',
    margin: '31px auto 43px auto',
    maxWidth: 1190,
    width: '95%',
  },
  copyright: {
    display: 'block',
    maxWidth: 1190,
    width: '95%',
    margin: '0 auto',
    fontFamily: ' PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#F7F7F7',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <Grid container justify="center" className={classes.root}>
        <Hidden only="xs">
          <Grid item lg={2} sm={4} className={classes.list}>
            <h6 className={classes.title}>Company</h6>
            <Link to="/" className={classes.link}>
              Contact
            </Link>
            <Link to="/" className={classes.link}>
              Resources​
            </Link>
            <Link to="/" className={classes.link}>
              Help
            </Link>
            <Link to="/" className={classes.link}>
              Center​
            </Link>
            <Link to="/" className={classes.link}>
              About​
            </Link>
            <Link to="/" className={classes.link}>
              Careers​
            </Link>
            <Link to="/" className={classes.link}>
              Blog​
            </Link>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item lg={2} md={4} className={classes.list}>
            <h6 className={classes.title}>How it Works​</h6>
            <Link to="/" className={classes.link}>
              Audience​​
            </Link>
            <Link to="/" className={classes.link}>
              Business
            </Link>
            <Link to="/" className={classes.link}>
              Questions​​
            </Link>
            <Link to="/" className={classes.link}>
              Questionnaire​
            </Link>
            <Link to="/" className={classes.link}>
              Results​
            </Link>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item lg={4}>
            <Grid container justify="space-around">
              <Grid item lg={6} className={classes.productsList}>
                <h6 className={classes.title}>Products</h6>
                <Link to="/" className={classes.link}>
                  Product 1
                </Link>
                <Link to="/" className={classes.link}>
                  Product name long
                </Link>
                <Link to="/" className={classes.link}>
                  Product 3​​
                </Link>
                <Link to="/" className={classes.link}>
                  Product name
                </Link>
                <Link to="/" className={classes.link}>
                  Product 5​​
                </Link>
                <Link to="/" className={classes.link}>
                  Name of the product in two lines
                </Link>
                <Link to="/" className={classes.link}>
                  Product 7​​
                </Link>
              </Grid>
              <Grid item lg={6} className={classes.productsList}>
                <h6 className={classes.title}> </h6>
                <Link to="/" className={classes.link}>
                  Product 1
                </Link>
                <Link to="/" className={classes.link}>
                  Another product name
                </Link>
                <Link to="/" className={classes.link}>
                  Product 3​​
                </Link>
                <Link to="/" className={classes.link}>
                  Named product
                </Link>
                <Link to="/" className={classes.link}>
                  Product 5​​
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Grid item lg={2} md={4} sm={6} xs={8} className={classes.list}>
          <Link to="/" className={classes.titleListItem}>
            Clients
          </Link>
          <Link to="/" className={classes.titleListItem}>
            Pricing
          </Link>
          <Link to="/" className={classes.titleListItem}>
            Case Studies
          </Link>
          <Link to="/" className={classes.titleListItem}>
            FAQ
          </Link>
          <Link to="/" className={classes.titleListItem}>
            Margin of error calculator
          </Link>
          <Link to="/" className={classes.titleListItem}>
            Sample Size calculator
          </Link>
        </Grid>
      </Grid>
      <div className={classes.divider} />
      <p className={classes.copyright}>Copyrights line</p>
    </footer>
  );
};

export default Footer;
