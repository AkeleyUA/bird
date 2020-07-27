import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import MarkerIcon from '@material-ui/icons/RoomOutlined';
import map from '../images/map.png';
import Invitation from '../components/invitation';
import {useLocation} from 'react-router-dom';

const data = [
  {
    city: 'Los Angeles',
    street: '449 Canis Heights Drive',
  },
  {
    city: 'San Francisco',
    street: '2787  Harrison Street',
  },
  {
    city: 'Toronto',
    street: '318 University Avenue',
  },
];

const useStyles = makeStyles({
  pageTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
    marginTop: 125,
    marginBottom: 59,
  },
  purpleText: {color: '#3E245C'},
  blueText: {color: '#8C9DD0'},
  yellowText: {color: '#FFDC00'},
  blackText: {color: '#000000'},

  contactGroupTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    marginBottom: 25,
  },
  schedule: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    marginBottom: 11,
  },
  number: {
    fontFamily: 'Duster Bold',
    fontSize: 36,
    marginBottom: 25,
    textDecorationLine: 'none',
  },
  emalTitle: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  email: {
    fontFamily: 'Duster Bold',
    fontSize: 26,
    marginBottom: 36,
    display: 'block',
    textDecorationColor: '#8C9DD0',
    fontWeight: 'normal',
  },
  input: {
    padding: 14,
    borderRadius: 8,
    width: '100%',
    border: '2px solid #8C9DD0',
    boxSizing: 'border-box',
    fontFamily: 'PT Sans',
    marginBottom: 35,
    '&::placeholder': {
      color: '#8C9DD0',
    },
  },
  textArea: {
    padding: 14,
    borderRadius: 8,
    width: '100%',
    minHeight: 142,
    fontFamily: 'PT Sans',
    border: '2px solid #8C9DD0',
    boxSizing: 'border-box',
    marginBottom: 35,
    '&::placeholder': {
      color: '#8C9DD0',
    },
  },
  sendButton: {
    maxWidth: 122,
    height: 36,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFDC00',
    borderRadius: 8,
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 13,
    cursor: 'pointer',
  },
  contactFormContainer: {
    marginBottom: 128,
  },
  streetTitle: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    fontWeight: 'normal',
    letterSpacing: '0.02em',
    marginBottom: 12,
  },
  showMapLink: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: '0.02em',
    marginBottom: 5,
  },
  addressContainer: {
    marginBottom: 40,
  },
});

const Button = (props) => {
  const classes = useStyles();
  return (
    <button {...props} className={clsx(classes.sendButton, classes.purpleText)}>
      {props.children}
    </button>
  );
};

const Input = ({textArea, ...props}) => {
  const classes = useStyles();
  return textArea ? (
    <textarea
      className={clsx(classes.textArea, classes.purpleText)}
      cols="40"
      rows="5"
      {...props}></textarea>
  ) : (
    <input className={clsx(classes.input, classes.purpleText)} {...props} />
  );
};

const ContactsPage = () => {
  const classes = useStyles();
  const [currentMarker, setCurrentMarker] = useState(1);
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const changeMarkerHandler = (id) => {
    setCurrentMarker(id);
  };

  return (
    <Grid container justify="center">
      <Grid item lg={10}>
        <h1 className={clsx(classes.pageTitle, classes.purpleText)}>Contact</h1>
      </Grid>
      <Grid container item lg={10}>
        <Grid item lg={4}>
          <h6 className={clsx(classes.contactGroupTitle, classes.yellowText)}>
            Call us
          </h6>
          <p className={clsx(classes.schedule, classes.blackText)}>
            Contact our support team 24/7
          </p>
          <a
            className={clsx(classes.number, classes.purpleText)}
            href="telto:+000">
            1(877) 432-XXXX
          </a>
        </Grid>
        <Grid item lg={4}>
          <h6 className={clsx(classes.contactGroupTitle, classes.blueText)}>
            Email us
          </h6>
          <h6 className={clsx(classes.emalTitle)}>Sales</h6>
          <a
            className={clsx(classes.email, classes.purpleText)}
            href="mailto: sales@yellowbird.com">
            sales@yellowbird.com
          </a>
          <h6 className={clsx(classes.emalTitle)}>Support</h6>
          <a
            className={clsx(classes.email, classes.purpleText)}
            href="mailto: support@yellowbird.com">
            support@yellowbird.com
          </a>
          <h6 className={clsx(classes.emalTitle)}>Billing</h6>
          <a
            className={clsx(classes.email, classes.purpleText)}
            href="mailto: billing@yellowbird.com">
            billing@yellowbird.com
          </a>
        </Grid>
        <Grid item container lg={4} className={classes.contactFormContainer}>
          <h6 className={clsx(classes.contactGroupTitle, classes.purpleText)}>
            Contact form
          </h6>
          <Grid item lg={10}>
            <Input placeholder="Your name" />
            <Input placeholder="Your emal" />
          </Grid>
          <Grid item lg={12}>
            <Input placeholder="Your message" textArea />
          </Grid>
          <Grid item lg={4}>
            <Button>Send</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container lg={10} className={classes.addressContainer}>
        {data.map(({city, street}, index) => (
          <Grid item lg={4} container key={street}>
            <Grid item lg={12}>
              <h6 className={clsx(classes.number, classes.purpleText)}>
                {city}
              </h6>
            </Grid>
            <Grid item lg={12}>
              <p className={clsx(classes.streetTitle, classes.blackText)}>
                {street}
              </p>
            </Grid>
            <Grid
              item
              lg={4}
              container
              alignItems="center"
              style={{cursor: 'pointer'}}
              onClick={() => changeMarkerHandler(index + 1)}>
              <Grid item lg={3}>
                <MarkerIcon
                  className={
                    index + 1 === currentMarker
                      ? classes.yellowText
                      : classes.blueText
                  }
                />
              </Grid>
              <Grid item lg={9}>
                <p
                  className={clsx(
                    classes.showMapLink,
                    index + 1 === currentMarker
                      ? classes.yellowText
                      : classes.blueText,
                  )}>
                  Show map
                </p>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item lg={12}>
        <img src={map} alt="map" />
      </Grid>
      <Grid item lg={12}>
        <Invitation />
      </Grid>
    </Grid>
  );
};

export default ContactsPage;
