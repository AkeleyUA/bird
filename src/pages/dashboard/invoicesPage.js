import React, {useState, Fragment} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Grid, Button} from '@material-ui/core';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import {Link} from 'react-router-dom';
import SaveIcon from '@material-ui/icons/SaveAlt';

const categories = [
  {
    label: 'All',
  },
  {
    label: 'Invoices',
    color: '#E3E7F4',
  },
  {
    label: 'Statements',
    color: '#3E245C',
  },
];

const cads2020 = [
  {date: '24 Aug 2020', type: 'Invoice', coast: 300},
  {
    date: '20 Aug 2020',
    type: 'Statement',
    balance: {
      opening: 300,
      payment: 7500,
      closing: 7800,
    },
  },
  {date: '14 Aug 2020', type: 'Invoice', coast: 22500},
  {
    date: '20 Aug 2020',
    type: 'Statement',
    balance: {
      opening: 300,
      payment: 92700,
      closing: 100000,
    },
  },
  {date: '8 Aug 2020', type: 'Invoice', coast: 10},
  {date: '1 Aug 2020', type: 'Invoice', coast: 100000},
];

const cards2019 = [
  {date: '8 Aug 2019', type: 'Invoice', coast: 10},
  {date: '1 Aug 2019', type: 'Invoice', coast: 100000},
  {
    date: '20 Aug 2019',
    type: 'Statement',
    balance: {
      opening: 300,
      payment: 25000,
      closing: 25300,
    },
  },
];

const useStyles = makeStyles({
  container: {
    padding: '80px 0 60px 0',
  },
  pageTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
  },
  purpleText: {
    color: '#3E245C',
  },
  blackText: {
    color: '#000',
  },
  whiteText: {
    color: '#FFF',
  },
  yellowText: {
    color: '#FFDC00',
  },
  blueText: {
    color: '#8C9DD0',
  },
  button: {
    borderRadius: 60,
    padding: '7px 37px',
    margin: '36px 32px 36px 0',
    fontSize: 16,
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    transition: 'none',
    '&:hover': {
      transition: 'none',
    },
  },
  buttonActive: {
    borderRadius: 60,
    padding: '5px 35px',
    border: '2px solid #222222',
    margin: '36px 32px 36px 0',
    fontSize: 16,
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    transition: 'none',
    '&:hover': {
      transition: 'none',
    },
  },
  statemantCard: {
    background: '#3E245C',
    padding: 15,
    boxSizing: 'border-box',
  },
  invoiceCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#F7F7F7',
    padding: 15,
    boxSizing: 'border-box',
    height: '100%',
  },
  statemantDate: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: '0.02em',
  },
  statemantType: {
    fontFamily: 'Duster Regular',
    fontSize: 26,
    textAlign: 'right',
  },
  smallText: {
    fontSize: 13,
    fontFamily: 'PT Sans',
    textAlign: 'right',
    letterSpacing: '0.02em',
    marginBottom: 2,
    marginRight: 5,
  },
  flexEnd: {
    justifyContent: 'flex-end',
    display: 'flex',
  },
  divider: {
    flex: 1,
    borderBottom: '1px solid #8C9DD0',
    marginBottom: 5,
  },
  balance: {
    fontFamily: 'Duster Bold',
    fontSize: 26,
    marginLeft: 5,
  },
  bigBalance: {
    fontFamily: 'Duster Bold',
    fontSize: 32,
    marginLeft: 5,
  },
  openingBlock: {
    marginTop: 31,
    marginBottom: 10,
  },
  paymentBlock: {
    marginBottom: 10,
  },
  inlineBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  coast: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
  },
  download: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    textTransform: 'none',
    borderRadius: 50,
    padding: '2px 15px',
    maxHeight: 30,
    marginBottom: 5,
  },
  yearTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    marginTop: 50,
    marginBottom: 31,
  },
  yellowDivider: {
    flex: 1,
    height: 1,
    marginTop: 16,
    background: '#FFDC00',
  },
});

const RoundIcon = ({color}) => (
  <div
    style={{background: color, width: 28, height: 28, borderRadius: '50%'}}
  />
);

const InvoicesPage = () => {
  const classes = useStyles();
  const [currentCategory, setCurrentCategory] = useState('All');

  const clickHandler = ({currentTarget: {value}}) => {
    // console.log(currentTarget);
    setCurrentCategory(value);
  };
  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item lg={11}>
        <h1 className={clsx(classes.pageTitle, classes.purpleText)}>
          Invoices & Statements​
        </h1>
      </Grid>
      <Grid item lg={11}>
        {categories.map(({label, color}) => (
          <Button
            key={label}
            value={label}
            onClick={clickHandler}
            startIcon={color && <RoundIcon color={color} />}
            className={clsx(
              currentCategory === label ? classes.buttonActive : classes.button,
              classes.blackText,
            )}>
            {label}
          </Button>
        ))}
      </Grid>
      <Grid item lg={11} container spacing={2}>
        {cads2020.map(({date, type, balance, coast}, index) => (
          <Fragment key={`${date} ${index}`}>
            {type === 'Statement' && (
              <Grid item lg={4} container>
                <Grid item container lg={12} className={classes.statemantCard}>
                  <Grid item lg={12} container justify="space-between">
                    <Grid item>
                      <h6
                        className={clsx(
                          classes.statemantDate,
                          classes.whiteText,
                        )}>
                        {date}
                      </h6>
                    </Grid>
                    <Grid item>
                      <h6
                        className={clsx(
                          classes.statemantType,
                          classes.whiteText,
                        )}>
                        {type}
                      </h6>
                    </Grid>
                  </Grid>
                  <Grid
                    className={classes.openingBlock}
                    item
                    lg={12}
                    container
                    alignItems="flex-end">
                    <Grid item lg={5} className={classes.flexEnd}>
                      <p className={clsx(classes.smallText, classes.blueText)}>
                        opening balance
                      </p>
                    </Grid>
                    <Grid item className={classes.divider} />
                    <Grid
                      item
                      className={clsx(classes.balance, classes.whiteText)}>
                      ${balance.opening}
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    container
                    alignItems="flex-end"
                    className={classes.paymentBlock}>
                    <Grid item lg={5} container>
                      <Grid item lg={12} className={classes.flexEnd}>
                        <ArrowDownIcon
                          className={classes.blueText}
                          style={{fontSize: 13}}
                        />
                      </Grid>
                      <Grid item lg={12}>
                        <p
                          className={clsx(classes.smallText, classes.blueText)}>
                          payment
                        </p>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.divider} />
                    <Grid
                      item
                      className={clsx(classes.balance, classes.whiteText)}>
                      ${balance.payment}
                    </Grid>
                  </Grid>
                  <Grid item lg={12} container alignItems="flex-end">
                    <Grid item lg={5} container>
                      <Grid item lg={12} className={classes.flexEnd}>
                        <ArrowDownIcon
                          className={classes.blueText}
                          style={{fontSize: 13}}
                        />
                      </Grid>
                      <Grid item lg={12}>
                        <p
                          className={clsx(classes.smallText, classes.blueText)}>
                          closing balance
                        </p>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.divider} />
                    <Grid
                      item
                      className={clsx(classes.bigBalance, classes.yellowText)}>
                      ${balance.closing}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {type === 'Invoice' && (
              <Grid item lg={4}>
                <div className={classes.invoiceCard}>
                  <div className={classes.inlineBlock}>
                    <h6
                      className={clsx(
                        classes.statemantDate,
                        classes.purpleText,
                      )}>
                      {date}
                    </h6>
                    <h6
                      className={clsx(
                        classes.statemantType,
                        classes.purpleText,
                      )}>
                      {type}
                    </h6>
                  </div>
                  <div className={classes.inlineBlock}>
                    <h6 className={clsx(classes.coast, classes.purpleText)}>
                      ${coast}
                    </h6>
                    <Button
                      to="/"
                      className={clsx(classes.download, classes.purpleText)}
                      component={Link}
                      startIcon={<SaveIcon />}>
                      Download
                    </Button>
                  </div>
                </div>
              </Grid>
            )}
          </Fragment>
        ))}
      </Grid>
      <Grid item lg={11} container alignItems="center">
        <Grid item lg={1}>
          <h6 className={clsx(classes.yearTitle, classes.yellowText)}>2019</h6>
        </Grid>
        <Grid item lg={11}>
          <div className={classes.yellowDivider} />
        </Grid>
      </Grid>
      <Grid item lg={11} container spacing={2}>
        {cards2019.map(({date, type, balance, coast}, index) => (
          <Fragment key={`${date} ${index}`}>
            {type === 'Statement' && (
              <Grid item lg={4} container>
                <Grid item container lg={12} className={classes.statemantCard}>
                  <Grid item lg={12} container justify="space-between">
                    <Grid item>
                      <h6
                        className={clsx(
                          classes.statemantDate,
                          classes.whiteText,
                        )}>
                        {date}
                      </h6>
                    </Grid>
                    <Grid item>
                      <h6
                        className={clsx(
                          classes.statemantType,
                          classes.whiteText,
                        )}>
                        {type}
                      </h6>
                    </Grid>
                  </Grid>
                  <Grid
                    className={classes.openingBlock}
                    item
                    lg={12}
                    container
                    alignItems="flex-end">
                    <Grid item lg={5} className={classes.flexEnd}>
                      <p className={clsx(classes.smallText, classes.blueText)}>
                        opening balance
                      </p>
                    </Grid>
                    <Grid item className={classes.divider} />
                    <Grid
                      item
                      className={clsx(classes.balance, classes.whiteText)}>
                      ${balance.opening}
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    container
                    alignItems="flex-end"
                    className={classes.paymentBlock}>
                    <Grid item lg={5} container>
                      <Grid item lg={12} className={classes.flexEnd}>
                        <ArrowDownIcon
                          className={classes.blueText}
                          style={{fontSize: 13}}
                        />
                      </Grid>
                      <Grid item lg={12}>
                        <p
                          className={clsx(classes.smallText, classes.blueText)}>
                          payment
                        </p>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.divider} />
                    <Grid
                      item
                      className={clsx(classes.balance, classes.whiteText)}>
                      ${balance.payment}
                    </Grid>
                  </Grid>
                  <Grid item lg={12} container alignItems="flex-end">
                    <Grid item lg={5} container>
                      <Grid item lg={12} className={classes.flexEnd}>
                        <ArrowDownIcon
                          className={classes.blueText}
                          style={{fontSize: 13}}
                        />
                      </Grid>
                      <Grid item lg={12}>
                        <p
                          className={clsx(classes.smallText, classes.blueText)}>
                          closing balance
                        </p>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.divider} />
                    <Grid
                      item
                      className={clsx(classes.bigBalance, classes.yellowText)}>
                      ${balance.closing}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {type === 'Invoice' && (
              <Grid item lg={4}>
                <div className={classes.invoiceCard}>
                  <div className={classes.inlineBlock}>
                    <h6
                      className={clsx(
                        classes.statemantDate,
                        classes.purpleText,
                      )}>
                      {date}
                    </h6>
                    <h6
                      className={clsx(
                        classes.statemantType,
                        classes.purpleText,
                      )}>
                      {type}
                    </h6>
                  </div>
                  <div className={classes.inlineBlock}>
                    <h6 className={clsx(classes.coast, classes.purpleText)}>
                      ${coast}
                    </h6>
                    <Button
                      to="/"
                      className={clsx(classes.download, classes.purpleText)}
                      component={Link}
                      startIcon={<SaveIcon />}>
                      Download
                    </Button>
                  </div>
                </div>
              </Grid>
            )}
          </Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default InvoicesPage;
