import React, {useState, Fragment} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Grid, Button, darken} from '@material-ui/core';

const useStyles = makeStyles({
  pageTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
    marginBottom: 20,
  },
  purpleText: {
    color: '#3E245C',
  },
  blueText: {
    color: '#8C9DD0',
  },
  blackText: {
    color: '#000',
  },
  container: {
    padding: '80px 0 140px 0',
  },
  subTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    marginBottom: 20,
    marginTop: 20,
  },
  inputTitle: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 14,
    marginBottom: 25,
    borderRadius: 8,
    boxSizing: 'border-box',
    fontFamily: 'PT Sans',
    fontSize: 16,
    border: '2px solid #8C9DD0',
    '&::placeholder': {
      color: '#8C9DD0',
    },
  },
  saveButton: {
    background: '#FFDC00',
    borderRadius: 8,
    width: '100%',
    textTransform: 'none',
    marginTop: 30,
    fontFamily: 'PT Sans',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    '&:hover': {
      background: darken('#FFDC00', 0.1),
    },
  },
});

const companyDetails = [
  {
    label: 'Company Name',
    key: 'name',
  },
  {
    label: 'Country',
    key: 'country',
  },
  {
    label: 'State (if needed)',
    key: 'state',
  },
  {
    label: 'Address',
    key: 'address',
  },
  {
    label: 'City',
    key: 'city',
  },
  {
    label: 'Zip Code',
    key: 'zipCode',
  },
];
const taxDetails = [{label: 'Tax Code', key: 'taxCode'}];
const contactInformation = [
  {
    label: 'Phone number',
    key: 'phoneNumber',
    size: 4,
  },
  {
    label: 'Email address',
    key: 'emailAddress',
    size: 5,
  },
  {
    label: 'Billing Email address',
    key: 'billingEmailAddres',
    size: 5,
  },
];

const BillingPage = () => {
  const classes = useStyles();
  const [billingData, setBillingData] = useState({
    name: '',
    country: '',
    state: '',
    address: '',
    citi: '',
    zipCode: '',
    taxCode: '',
    phoneNumber: '',
    emailAddress: '',
    billingEmailAddres: '',
  });

  const changeHandler = ({target: {name, value}}) => {
    setBillingData((prevState) => ({...prevState, [name]: value}));
  };

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item lg={11}>
        <h1 className={clsx(classes.pageTitle, classes.purpleText)}>
          Billing Information
        </h1>
      </Grid>
      <Grid item lg={11}>
        <h6 className={clsx(classes.subTitle, classes.blueText)}>
          Company Details
        </h6>
      </Grid>
      <Grid item container lg={11} justify="flex-start">
        {companyDetails.map(({label, key}) => (
          <Fragment key={key}>
            <Grid item lg={7}>
              <h6 className={clsx(classes.inputTitle, classes.blackText)}>
                {label}
              </h6>
            </Grid>
            <Grid item lg={7} key={label}>
              <input
                className={clsx(classes.input, classes.blackText)}
                name={key}
                value={billingData[key]}
                onChange={changeHandler}
              />
            </Grid>
          </Fragment>
        ))}
        <Grid item lg={11}>
          <h6 className={clsx(classes.subTitle, classes.blueText)}>
            Tax Details​
          </h6>
        </Grid>
        {taxDetails.map(({label, key}) => (
          <Fragment key={key}>
            <Grid item lg={7}>
              <h6 className={clsx(classes.inputTitle, classes.blackText)}>
                {label}
              </h6>
            </Grid>
            <Grid item lg={7} key={label}>
              <input
                className={clsx(classes.input, classes.blackText)}
                name={key}
                value={billingData[key]}
                onChange={changeHandler}
              />
            </Grid>
          </Fragment>
        ))}
        <Grid item lg={11}>
          <h6 className={clsx(classes.subTitle, classes.blueText)}>
            Contact Information​
          </h6>
        </Grid>
        {contactInformation.map(({label, key, size}) => (
          <Fragment key={key}>
            <Grid item lg={12}>
              <h6 className={clsx(classes.inputTitle, classes.blackText)}>
                {label}
              </h6>
            </Grid>
            <Grid item lg={size} key={label}>
              <input
                className={clsx(classes.input, classes.blackText)}
                name={key}
                value={billingData[key]}
                onChange={changeHandler}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
      <Grid item lg={11} container justify="flex-start">
        <Grid item lg={2}>
          <Button className={clsx(classes.saveButton, classes.purpleText)}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BillingPage;
