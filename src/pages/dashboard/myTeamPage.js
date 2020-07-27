import React, {useEffect} from 'react';
// import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
// import {Grid} from '@material-ui/core';
import {useLocation} from 'react-router-dom';

const useStyles = makeStyles();

const MyTeamPage = () => {
  const classes = useStyles();
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div> MyTeamPage</div>;
};

export default MyTeamPage;
