import React from 'react';
import {makeStyles, SvgIcon, IconButton, Button} from '@material-ui/core';
import clsx from 'clsx';
import CreateIcon from '@material-ui/icons/Create';
import RunHumanIcon from '@material-ui/icons/DirectionsRun';
import DoneAll from '@material-ui/icons/DoneAll';
import approve from '../hardCodeData/Approve.svg';
import ClockIcon from '@material-ui/icons/Schedule';
import ViewIcon from '@material-ui/icons/Visibility';
import RefreshIcon from '@material-ui/icons/Refresh';

///////!!!!!!!!!!!!!!
const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: 3,
};

const AdobeIcon = (props) => (
  <SvgIcon {...props}>
    <path
      d="M7.80791 6.61316C7.77596 6.6942 7.34461 9.46557 4.46895 14.2142C4.46895 14.2142 -1.12261 17.1476 0.203389 19.3518C1.27377 21.0697 3.90979 19.2869 6.16239 15.0245C6.16239 15.0245 9.07 13.9873 12.9202 13.6956C12.9202 13.6956 19.0869 16.5156 19.9176 13.5173C20.7484 10.5352 15.045 11.1835 14.0545 11.4914C14.0545 11.4914 10.7954 9.31971 10.0605 6.30523C10.0605 6.30523 11.8658 -0.0802695 9.07 0.000764792C6.27422 0.0817991 7.32863 5.0573 7.80791 6.61316ZM9.10195 8.31488C9.14988 8.31488 9.85282 10.2597 12.1214 12.2856C12.1214 12.2856 8.39902 13.0311 6.70557 13.7766C6.70557 13.7766 8.30316 10.9404 9.10195 8.31488ZM15.3645 12.7069C16.2911 12.4638 19.0709 12.9662 18.975 13.4849C18.8472 14.0197 15.3645 12.7069 15.3645 12.7069ZM4.08553 15.7214C3.23881 17.6824 1.80098 18.9304 1.43353 18.9142C1.06609 18.898 2.55184 16.3211 4.08553 15.7214ZM9.10195 4.47386C9.08598 4.39282 8.51085 0.924556 9.10195 0.989383C9.96465 1.08662 9.10195 4.39282 9.10195 4.47386Z"
      fill="#8C9DD0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.80791 6.61316C7.77596 6.6942 7.34461 9.46557 4.46895 14.2142C4.46895 14.2142 -1.12261 17.1476 0.203389 19.3518C1.27377 21.0697 3.90979 19.2869 6.16239 15.0245C6.16239 15.0245 9.07 13.9873 12.9202 13.6956C12.9202 13.6956 19.0869 16.5156 19.9176 13.5173C20.7484 10.5352 15.045 11.1835 14.0545 11.4914C14.0545 11.4914 10.7954 9.31971 10.0605 6.30523C10.0605 6.30523 11.8658 -0.0802695 9.07 0.000764792C6.27422 0.0817991 7.32863 5.0573 7.80791 6.61316ZM12.1214 12.2856C9.85282 10.2597 9.14988 8.31488 9.10195 8.31488C8.30316 10.9404 6.70557 13.7766 6.70557 13.7766C8.39902 13.0311 12.1214 12.2856 12.1214 12.2856ZM15.3645 12.7069C16.2911 12.4638 19.0709 12.9662 18.975 13.4849C18.8472 14.0197 15.3645 12.7069 15.3645 12.7069ZM4.08553 15.7214C3.23881 17.6824 1.80098 18.9304 1.43353 18.9142C1.06609 18.898 2.55184 16.3211 4.08553 15.7214ZM9.10195 4.47386C9.08598 4.39282 8.51085 0.924556 9.10195 0.989383C9.96465 1.08662 9.10195 4.39282 9.10195 4.47386Z"
      fill="#8C9DD0"
    />
  </SvgIcon>
);

const DraftIcon = () => (
  <div style={{...iconStyle, background: '#E3E7F4', color: '#3E245C'}}>
    <CreateIcon />
  </div>
);
const RunIcon = () => (
  <div style={{...iconStyle, background: '#3E245C', color: '#FFDC00'}}>
    <RunHumanIcon />
  </div>
);
const CompletedIcon = () => (
  <div style={{...iconStyle, background: '#FFDC00', color: '#3E245C'}}>
    <DoneAll />
  </div>
);

const ApproveIcon = () => (
  // !!!!!!!!!!!!!!!
  <div style={iconStyle}>
    <img src={approve} alt="approve" />
  </div>
);

const useStyles = makeStyles({
  card: {
    minHeight: 282,
    background: '#F7F7F7',
    padding: '20px 32px',
    margin: 10,
    boxSizing: 'border-box',
    transition: 'filter .2s ease-out',
    cursor: 'pointer',
    '&:hover': {
      filter: 'drop-shadow(0px 0px 26px rgba(0, 0, 0, 0.18))',
      transition: 'filter .2s ease-in',
    },
  },
  title: {
    fontFamily: 'Duster Regular',
    fontSize: 26,
    color: '#3E245C',
    minHeight: 79,
  },
  colorLine: {
    height: 8,
    display: 'flex',
    marginBottom: 21,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 13,
    color: '#3E245C',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  clock: {
    marginRight: 11,
    color: '#8C9DD0',
  },
  titleTimeLeft: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    color: '#3E245C',
  },
  report: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  reportIcons: {
    fontSize: 18,
    color: '#8C9DD0',
  },
  reportText: {
    fontFamily: 'PT Sans',
    fontSize: 13,
    color: '#8C9DD0',
    fontWeight: 'bold',
  },
  reportLinks: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'flex-start',
    padding: '0 10px',
    textTransform: 'none',
    width: 'max-content',
    borderRadius: 50,
  },
  refreshIcon: {
    position: 'absolute',
    color: '#3E245C',
    transform: 'scaleX(-1)',
    right: -12,
    bottom: -12,
  },
});

const SurveyCard = ({title, status, date, timeLeft, lineColors}) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.icon}>
          {status && status === 'drafting' && <DraftIcon />}
          {status && status === 'running' && <RunIcon />}
          {status && status === 'approving' && <ApproveIcon />}
          {status && status === 'complited' && <CompletedIcon />}
        </div>
        <h6 className={classes.date}>
          {date.toDateString().split(' ').slice(1).join(' ')}
        </h6>
      </div>
      <div className={classes.colorLine}>
        {lineColors &&
          lineColors.map((color, index) => (
            <div
              key={index}
              style={{background: color, height: '100%', width: '100%'}}
            />
          ))}
      </div>
      <h6 className={classes.title}>{title}</h6>
      {status && status === 'running' && (
        <div className={classes.action}>
          <ClockIcon className={clsx(classes.icon, classes.clock)} />
          <h6 className={classes.titleTimeLeft}>
            {timeLeft && timeLeft}h left
          </h6>
        </div>
      )}
      {status && status === 'complited' && (
        <div className={classes.report}>
          <Button
            className={clsx(classes.reportLinks, classes.reportText)}
            startIcon={
              <ViewIcon className={clsx(classes.icon, classes.reportIcons)} />
            }>
            View report
          </Button>
          <Button
            className={clsx(classes.reportLinks, classes.reportText)}
            startIcon={
              <AdobeIcon className={clsx(classes.icon, classes.reportIcons)} />
            }>
            Download report
          </Button>
          <Button
            startIcon={
              <AdobeIcon className={clsx(classes.icon, classes.reportIcons)} />
            }
            className={clsx(classes.reportLinks, classes.reportText)}>
            Download survey data
          </Button>
          <IconButton className={classes.refreshIcon}>
            <RefreshIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default SurveyCard;
