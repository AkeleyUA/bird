import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  SvgIcon,
  ListItemText,
  Button,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const data1 = [
  {
    name: 'Team settings',
    path: '/my-office/settings/teams',
  },
  {
    name: 'Pricing Plans',
    path: '/my-office/settings/change-plan',
  },
  {
    name: 'Account Credits',
    path: '/my-office/settings/credits',
  },
];
const data2 = [
  {
    name: 'Billing Information',
    path: '/my-office/settings/biling',
  },
  {
    name: 'Invoices/Statements​',
    path: '/my-office/settings/invoices',
  },
  {
    name: 'My Offers',
    path: '/my-office/settings/offers',
  },
  {
    name: 'Payment Methods',
    path: '/my-office/settings/payment-method',
  },
];

const YellowCoin = (props) => (
  <SvgIcon {...props} viewBox="0 2 26 26">
    <circle
      r="11.875"
      transform="matrix(-1 0 0 1 11.875 14.125)"
      fill="#FFDC00"
    />
    <circle
      r="11.375"
      transform="matrix(-1 0 0 1 14.125 11.875)"
      stroke="#F7F7F7"
      fill="transparent"
    />
  </SvgIcon>
);

const BlueCoin = (props) => (
  <SvgIcon {...props} viewBox="0 2 26 26">
    <circle
      r="11.875"
      transform="matrix(-1 0 0 1 11.875 14.125)"
      fill="#8C9DD0"
    />
    <circle
      r="11.375"
      transform="matrix(-1 0 0 1 14.125 11.875)"
      stroke="#F7F7F7"
      fill="transparent"
    />
  </SvgIcon>
);

const QuickAccessIcon = (props) => (
  <SvgIcon {...props}>
    <rect
      x="0.5"
      y="0.5"
      width="46"
      height="20"
      rx="10"
      stroke="#FFDC00"
      fill="transparent"
    />
    <path
      d="M5.50002 11.2356C5.50002 15.2476 8.75242 18.5 12.7644 18.5C16.7765 18.5 20.0289 15.2476 20.0289 11.2356C20.0289 7.22352 16.7765 3.97113 12.7644 3.97113C8.75242 3.97113 5.50002 7.22352 5.50002 11.2356Z"
      fill="#FFDC00"
      stroke="#F7F7F7"
    />
    <path
      d="M6.97115 9.76442C6.97115 13.7765 10.2235 17.0288 14.2356 17.0288C18.2476 17.0288 21.5 13.7765 21.5 9.76442C21.5 5.75239 18.2476 2.5 14.2356 2.5C10.2235 2.5 6.97115 5.75239 6.97115 9.76442Z"
      stroke="#F7F7F7"
      fill="transparent"
    />
    <path
      d="M24.5 11.2356C24.5 15.2476 27.7524 18.5 31.7644 18.5C35.7765 18.5 39.0289 15.2476 39.0289 11.2356C39.0289 7.22352 35.7765 3.97113 31.7644 3.97113C27.7524 3.97113 24.5 7.22352 24.5 11.2356Z"
      fill="#FFDC00"
      stroke="#F7F7F7"
    />
    <path
      d="M25.9712 9.76442C25.9712 13.7765 29.2235 17.0288 33.2356 17.0288C37.2476 17.0288 40.5 13.7765 40.5 9.76442C40.5 5.75239 37.2476 2.5 33.2356 2.5C29.2235 2.5 25.9712 5.75239 25.9712 9.76442Z"
      stroke="#F7F7F7"
      fill="transparent"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.9895 6.1958C39.0516 6.25771 39.1008 6.33125 39.1344 6.41222C39.168 6.49319 39.1853 6.58 39.1853 6.66766C39.1853 6.75532 39.168 6.84213 39.1344 6.92309C39.1008 7.00406 39.0516 7.07761 38.9895 7.13952L33.6578 13.8042C33.5958 13.8663 33.5223 13.9155 33.4413 13.9491C33.3604 13.9827 33.2736 14 33.1859 14C33.0982 14 33.0114 13.9827 32.9305 13.9491C32.8495 13.9155 32.7759 13.8663 32.714 13.8042L29.1871 10.2759C29.0657 10.1502 28.9985 9.98187 29 9.80712C29.0015 9.63238 29.0716 9.46522 29.1952 9.34165C29.3188 9.21808 29.4859 9.14799 29.6607 9.14647C29.8354 9.14495 30.0038 9.21213 30.1295 9.33353L33.1859 12.39L38.0458 6.1958C38.1077 6.13373 38.1812 6.08449 38.2622 6.05089C38.3432 6.01729 38.43 6 38.5176 6C38.6053 6 38.6921 6.01729 38.7731 6.05089C38.854 6.08449 38.9276 6.13373 38.9895 6.1958Z"
      fill="#8C9DD0"
      stroke="#8C9DD0"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

const useStyles = makeStyles({
  menu: {
    padding: '106px 0 0 0',
    background: '#E5E5E5',
  },
  list: {
    marginBottom: 25,
  },
  listItem: {
    borderRadius: 50,
    margin: '10px 0',
  },
  listItemText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
  },
  purpleText: {
    color: '#3E245C',
  },
  blueText: {
    color: '#8C9DD0',
  },
  yellowColor: {
    color: '#FFDC00',
  },
  yellowDivider: {
    width: '75%',
    height: 2,
    background: '#FFDC00',
    margin: '10px 0',
  },
  listItemIcon: {
    minWidth: 36,
  },
  quickAccessMenu: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    textTransform: 'none',
    padding: '0 5px',
    marginTop: 52,
    marginBottom: 100,
  },
  buttonIcon: {
    minWidth: 47,
  },
});

const SettingsMenu = ({children}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={3} className={classes.menu} container justify="center">
        <Grid item lg={10} component={List}>
          {data1.map(({name, path}) => (
            <ListItem
              key={path}
              button
              component={NavLink}
              activeClassName={classes.blueText}
              to={path}
              className={clsx(classes.listItem, classes.purpleText)}>
              <ListItemIcon classes={{root: classes.listItemIcon}}>
                <YellowCoin />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{
                  root: clsx(classes.listItemText),
                }}>
                {name}
              </ListItemText>
            </ListItem>
          ))}
          <div className={classes.yellowDivider} />
          {data2.map(({name, path}) => (
            <ListItem
              key={path}
              button
              component={NavLink}
              to={path}
              activeClassName={classes.blueText}
              className={clsx(classes.listItem, classes.purpleText)}>
              <ListItemIcon classes={{root: classes.listItemIcon}}>
                <BlueCoin />
              </ListItemIcon>
              <ListItemText
                disableTypography
                classes={{
                  root: classes.listItemText,
                }}>
                {name}
              </ListItemText>
            </ListItem>
          ))}
          <Grid item lg={11}>
            <Button
              classes={{
                root: clsx(classes.quickAccessMenu, classes.purpleText),
                startIcon: classes.buttonIcon,
              }}
              startIcon={
                <QuickAccessIcon viewBox="12 0 24 24" style={{width: 50}} />
              }>
              Quick access menu manage
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SettingsMenu;
