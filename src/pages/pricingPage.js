import React from 'react';
import {makeStyles} from '@material-ui/styles';
import brokenLineBold from '../images/broken-line-bold.svg';
import {Grid, Table, TableBody, TableRow, TableCell} from '@material-ui/core';
import PlanCard from '../components/planCard';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '100%',
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
  tableCell: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  tableCellBold: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#FFDC00',
    borderWidth: 4,
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
  'Compare 1',
  'Compare 1',
  'Compare 1',
  'Bold compare',
  'Compare 1',
  'Other compare',
  'Compare 1',
  'Compare 1',
  'Compare 1',
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
      <h6 className={classes.tableTitile}>Compare plans</h6>
      <Grid container>
        <Grid item lg={4}>
          <Table>
            <TableBody>
              {compareItems.map((item) => (
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        item === 'Bold compare'
                          ? classes.tableCellBold
                          : classes.tableCell,
                    }}>
                    {item}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
};

export default PricingPage;
