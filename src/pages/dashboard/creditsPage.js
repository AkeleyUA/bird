import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, withStyles} from '@material-ui/styles';
import {Grid, Switch, Menu, MenuItem, Button, darken} from '@material-ui/core';
import coin from '../../images/creditsPage/coin.svg';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const AntSwitch = withStyles(() => ({
  root: {
    width: 50,
    height: 26,
    padding: 0,
    display: 'flex',
    marginTop: 13,
  },
  switchBase: {
    padding: 5,
    color: '#a1a1a1',
    '&$checked': {
      transform: 'translateX(22px)',
      color: '#FFDC00',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#FFF',
        borderColor: '#3E245C',
      },
    },
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: 'none',
  },
  track: {
    width: 44,
    height: 22,
    border: `2px solid #a1a1a1`,
    borderRadius: 50,
    opacity: 1,
    backgroundColor: '#FFF',
  },
  checked: {},
}))(Switch);

const useStyles = makeStyles({
  pageTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
    marginBottom: 26,
  },
  purpleText: {
    color: '#3E245C',
  },
  blueText: {
    color: '#8C9DD0',
  },
  container: {
    padding: '80px 0',
  },
  blockTitle: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
  },
  creditsNumbers: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    marginTop: 5,
  },
  bordered: {
    borderRight: '1px solid #8C9DD0',
    maxHeight: 85,
  },
  pricing: {
    marginLeft: 22,
  },
  describeText: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
  },
  bussines: {
    marginBottom: 5,
  },
  automatic: {
    marginTop: 15,
  },
  selectEmail: {
    marginTop: 9,
    display: 'flex',
    alignItems: 'center',
  },
  selectTeam: {
    textTransform: 'none',
    padding: 0,
    marginLeft: 5,
    '&:hover': {
      backgroundColor: '#FFF',
    },
  },
  paimantInfoBlock: {
    marginBottom: 43,
  },
  subTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    padding: 14,
    borderRadius: 8,
    boxSizing: 'border-box',
    fontFamily: 'PT Sans',
    fontSize: 16,
    border: '2px solid #8C9DD0',
    '&::placeholder': {
      color: '#8C9DD0',
    },
  },
  blueButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    background: '#8C9DD0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'PT Sans',
    fontSize: 16,
    textTransform: 'none',
    color: '#FFF',
    '&:hover': {
      background: darken('#8C9DD0', 0.2),
    },
  },
});

const teams = ['Admin Team', 'Team 1', 'Team 2'];

const CreditsPage = () => {
  const classes = useStyles();
  const [currentTeam, setCurrentTeam] = useState('Admin Team');
  const [anchor, setAnchor] = useState(null);
  const [isAutomatic, setIsAutomatic] = useState(true);

  const openMenuHandler = ({target}) => {
    setAnchor(target);
  };
  const closeMenuHandler = ({currentTarget}) => {
    const value = currentTarget.getAttribute('value');
    setCurrentTeam((prevState) => (value ? value : prevState));
    setAnchor(null);
  };
  const changeHandler = ({target: {checked}}) => {
    // console.log(currentTarget);
    setIsAutomatic(checked);
  };

  return (
    <Grid container className={classes.container} justify="center">
      <Grid item lg={11}>
        <h1 className={classes.pageTitle}>Account Credits</h1>
      </Grid>
      <Grid item lg={11} container className={classes.paimantInfoBlock}>
        <Grid item lg={12} container>
          <Grid item lg={1}>
            <img src={coin} alt="coin" className={classes.coinImg} />
          </Grid>
          <Grid item lg={2} className={classes.bordered}>
            <p className={clsx(classes.blockTitle, classes.blueText)}>
              My credits
            </p>
            <h6 className={clsx(classes.creditsNumbers, classes.purpleText)}>
              $10.00
            </h6>
          </Grid>
          <Grid item lg={2}>
            <p
              className={clsx(
                classes.blockTitle,
                classes.blueText,
                classes.pricing,
              )}>
              Pricing plan:
            </p>
          </Grid>
          <Grid item lg={7}>
            <h6
              className={clsx(
                classes.describeText,
                classes.purpleText,
                classes.bussines,
              )}>
              Business
            </h6>
            <p className={clsx(classes.describeText, classes.purpleText)}>
              $7,500 annual
            </p>
            <Grid container alignItems="flex-start" item lg={12}>
              <Grid item lg={4}>
                <h6
                  className={clsx(
                    classes.describeText,
                    classes.purpleText,
                    classes.automatic,
                  )}>
                  Automatic payment
                </h6>
              </Grid>
              <Grid item lg={2}>
                <AntSwitch checked={isAutomatic} onChange={changeHandler} />
              </Grid>
              <Grid item lg={6} container>
                <Grid item lg={12}>
                  <h6
                    className={clsx(
                      classes.blockTitle,
                      classes.blueText,
                      classes.automatic,
                    )}>
                    Next payment:{' '}
                    {isAutomatic ? (
                      <b className={classes.purpleText}>Oct 10 2020 </b>
                    ) : (
                      <b className={classes.purpleText}>Disabled</b>
                    )}
                  </h6>
                </Grid>
                {isAutomatic && (
                  <>
                    <Grid item lg={12} className={classes.selectEmail}>
                      <h6
                        className={clsx(classes.blockTitle, classes.blueText)}>
                        Email notification to:
                      </h6>
                      <Button
                        onClick={openMenuHandler}
                        className={clsx(
                          classes.selectTeam,
                          classes.blockTitle,
                          classes.purpleText,
                        )}
                        endIcon={
                          <ArrowDropDown className={classes.purpleText} />
                        }>
                        {currentTeam}
                      </Button>
                      <Menu
                        anchorEl={anchor}
                        open={!!anchor}
                        onClose={closeMenuHandler}
                        keepMounted>
                        {teams.map((team, index) => (
                          <MenuItem
                            onClick={openMenuHandler}
                            value={team}
                            key={index}
                            className={clsx(
                              classes.blockTitle,
                              classes.purpleText,
                            )}>
                            {team}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={11}>
        <h6 className={clsx(classes.subTitle, classes.purpleText)}>
          Account Replenishment
        </h6>
      </Grid>
      <Grid item lg={11} container>
        <Grid item lg={3}>
          <input
            className={clsx(classes.input, classes.purpleText)}
            placeholder="Amount"
          />
        </Grid>
        <Grid item lg={2}>
          <Button className={clsx(classes.blueButton)}>Pay</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditsPage;
