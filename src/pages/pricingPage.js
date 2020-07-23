import React from 'react';
import {makeStyles} from '@material-ui/styles';
import brokenLineBold from '../images/broken-line-bold.svg';
import {
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Icon,
  Hidden,
} from '@material-ui/core';
import PlanCard from '../components/planCard';
import coinWhiteBorder from '../images/coin-white-border.svg';
import brokenLineThinYellow from '../images/broken-line-thin-yellow.svg';
import brokenLineThinGrey from '../images/broken-line-thin-grey.svg';
import YellowCross from '../components/yellowCross';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '100%',
    background: '#FFF',
  },
  relative: {
    position: 'relative',
  },
  pageTitile: {
    display: 'block',
    marginTop: 75,
    margin: '75px auto 42px auto',
    maxWidth: 1440 - 144 * 2,
    width: '95%',
    fontFamily: 'Duster Regular',
    fontSize: 72,
    color: '#3E245C',
  },
  brokenLineBold: {
    position: 'absolute',
    left: 0,
    top: 57,
  },
  cardsWrapper: {
    width: '95%',
    margin: '0 auto 104px auto',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
  },
  tableTitile: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#3E245C',
  },
  tableCell: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#3E245C',
    background: '#F7F7F7',
    borderRight: '1px solid #FFF',
  },
  tableCellBold: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#FFDC00',
    borderBottomWidth: 4,
    background: '#F7F7F7',
    borderRight: '1px solid #FFF',
  },
  nameCell: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#3E245C',
    borderRight: '1px solid #FFF',
  },
  nameCellBold: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#FFDC00',
    borderBottomWidth: 4,
    borderRight: '1px solid #FFF',
  },
  icon: {
    color: '#3E245C',
  },
  yellowCell: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    background: '#FFDC00',
    borderRight: '1px solid #FFF',
  },
  YellowCellBold: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    borderBottomWidth: 4,
    background: '#FFDC00',
    borderRight: '1px solid #FFF',
  },
  brokenLineThinGrey: {
    position: 'absolute',
    left: '12.9%',
    bottom: -20,
  },
  brokenLineThinYellow: {
    position: 'absolute',
    left: '7.8%',
    bottom: -39,
  },
  infoGroup: {
    display: 'flex',
    marginTop: 62,
    marginBottom: 62,
  },
  coin: {
    marginRight: 12,
  },
  infoText: {
    maxWidth: 405,
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#000000',
  },
});

const plans = [
  {
    name: 'Basic',
    target: 'For individuals & startups',
    dividerColor: '#8C9DD0',
    price: 'Free',
    billed: 'Pay as you go',
  },
  {
    name: 'Business',
    target: 'For small teams & agencies​',
    dividerColor: '#3E245C',
    price: '$7,500',
    billed: 'Billed Annually',
    bonus: {
      survey: '7,875',
      month: '12',
    },
  },
  {
    name: 'Enterprise',
    target: 'For larger companies',
    dividerColor: '#FFFFFF',
    price: '$22,500',
    billed: 'Billed Annually',
    bonus: {
      survey: '24,750',
      month: '12',
    },
    highlight: true,
  },
  {
    name: 'Elite',
    target: 'For larger companies',
    dividerColor: '#FFDC00',
    price: 'Custom pricing',
  },
];

const compareItems = [
  {
    name: 'Compare 1',
    basic: true,
    business: true,
    enterprise: true,
    elite: true,
    isBest: false,
  },
  {
    name: 'Compare 1',
    basic: true,
    business: true,
    enterprise: true,
    elite: true,
    isBest: false,
  },
  {
    name: 'Compare best',
    basic: false,
    business: true,
    enterprise: true,
    elite: true,
    isBest: true,
  },
  {
    name: 'Compare 1',
    basic: false,
    business: true,
    enterprise: true,
    elite: true,
    isBest: false,
  },
  {
    name: 'Compare 1',
    basic: false,
    business: false,
    enterprise: true,
    elite: true,
    isBest: false,
  },
  {
    name: 'Compare 1',
    basic: false,
    business: false,
    enterprise: true,
    elite: true,
    isBest: false,
  },
  {
    name: 'Compare 1',
    basic: false,
    business: false,
    enterprise: false,
    elite: true,
    isBest: false,
  },
  {
    name: 'Compare 1',
    basic: false,
    business: false,
    enterprise: false,
    elite: true,
    isBest: false,
  },
  {
    name: 'Compare 1',
    basic: false,
    business: false,
    enterprise: false,
    elite: true,
    isBest: false,
  },
];

const PricingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        src={brokenLineBold}
        className={classes.brokenLineBold}
        alt="broken-line-bold"
      />
      <h6 className={classes.pageTitile}>Pricing plans</h6>
      <Grid
        container
        spacing={4}
        className={classes.cardsWrapper}
        justify="center">
        {plans.map((item) => (
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={item.name}
            className={classes.card}>
            <PlanCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center">
        <Grid item sm={10} xs={11} className={classes.relative}>
          <h6 className={classes.tableTitile}>Compare plans</h6>
          <Hidden xsDown>
            <img
              src={brokenLineThinGrey}
              alt="broken-line-thin-grey"
              className={classes.brokenLineThinGrey}
            />
            <img
              src={brokenLineThinYellow}
              alt="broken-line-thin-yellow"
              className={classes.brokenLineThinYellow}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item sm={10} xs={11}>
          <Table classes={{root: classes.table}}>
            <TableHead>
              <TableRow>
                <TableCell style={{width: '50%'}} />
                {plans.map(({name}) =>
                  name === 'Enterprise' ? (
                    <TableCell
                      key={name}
                      align="center"
                      classes={{
                        root: classes.yellowCell,
                      }}>
                      {name}
                    </TableCell>
                  ) : (
                    <Hidden xsDown key={name}>
                      <TableCell
                        align="center"
                        classes={{
                          root: classes.tableCell,
                        }}>
                        {name}
                      </TableCell>
                    </Hidden>
                  ),
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {compareItems.map(
                ({name, basic, business, enterprise, elite, isBest}, index) => (
                  <TableRow key={name + index}>
                    <TableCell
                      classes={{
                        root: isBest ? classes.nameCellBold : classes.nameCell,
                      }}>
                      {name}
                    </TableCell>
                    {basic ? (
                      <Hidden xsDown>
                        <TableCell
                          align="center"
                          classes={{
                            root: isBest
                              ? classes.tableCellBold
                              : classes.tableCell,
                          }}>
                          <Icon className={classes.icon}>done</Icon>
                        </TableCell>
                      </Hidden>
                    ) : (
                      <Hidden xsDown>
                        <TableCell
                          classes={{
                            root: isBest
                              ? classes.tableCellBold
                              : classes.tableCell,
                          }}
                        />
                      </Hidden>
                    )}
                    {business ? (
                      <Hidden xsDown>
                        <TableCell
                          align="center"
                          classes={{
                            root: isBest
                              ? classes.tableCellBold
                              : classes.tableCell,
                          }}>
                          <Icon className={classes.icon}>done</Icon>
                        </TableCell>
                      </Hidden>
                    ) : (
                      <Hidden xsDown>
                        <TableCell
                          classes={{
                            root: isBest
                              ? classes.tableCellBold
                              : classes.tableCell,
                          }}
                        />
                      </Hidden>
                    )}
                    <TableCell
                      align="center"
                      classes={{
                        root: isBest
                          ? classes.YellowCellBold
                          : classes.yellowCell,
                      }}>
                      {enterprise && <Icon className={classes.icon}>done</Icon>}
                    </TableCell>
                    {elite ? (
                      <Hidden xsDown>
                        <TableCell
                          align="center"
                          classes={{
                            root: isBest
                              ? classes.tableCellBold
                              : classes.tableCell,
                          }}>
                          <Icon className={classes.icon}>done</Icon>
                        </TableCell>
                      </Hidden>
                    ) : (
                      <Hidden xsDown>
                        <TableCell
                          classes={{
                            root: isBest
                              ? classes.tableCellBold
                              : classes.tableCell,
                          }}
                        />
                      </Hidden>
                    )}
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item sm={10} xs={11} className={classes.infoGroup}>
          <img
            src={coinWhiteBorder}
            alt="coin-white-dorder"
            className={classes.coin}
          />
          <p className={classes.infoText}>
            You can cancel your subscription at any time by downgrading to the
            <b> Basic plan</b>.​
          </p>
        </Grid>
      </Grid>
      <YellowCross />
    </div>
  );
};

export default PricingPage;
