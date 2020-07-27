import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, FormControlLabel} from '@material-ui/core';
import {CustomCheckbox, Label} from './customsElements';

const useStyles = makeStyles({
  checkBoxesGroup: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '24px 0 22px 22px',
    background: '#F7F7F7',
    marginTop: 19,
    marginBottom: 23,
  },
  rating: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 46,
    height: 46,
    borderRadius: '50%',
    background: '#8C9DD0',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
  },
  option: {
    marginTop: 25,
    marginBottom: 4,
    width: '100%',
    margin: '0 auto',
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#000000',
    background: '#FFF',
  },
  divider: {
    width: '100%',
    height: 2,
    background: '#8C9DD0',
    marginBottom: 8,
  },
});

const PromoterScore = () => {
  const [parameters, setChoiceParameters] = useState([
    {text: 'Required', checked: true},
  ]);

  const classes = useStyles();

  const changeParametersHandler = ({target: {id}}, value) => {
    setChoiceParameters((prevState) => {
      const newArray = [...prevState];
      newArray[id].checked = value;
      return newArray;
    });
  };

  return (
    <>
      <Grid item lg={5}>
        <div className={classes.checkBoxesGroup}>
          {parameters.map(({checked, text}, index) => (
            <FormControlLabel
              key={text}
              value="end"
              control={
                <CustomCheckbox
                  checked={checked}
                  id={`${index}`}
                  onChange={changeParametersHandler}
                />
              }
              label={<Label text={text} />}
              labelPlacement="end"
            />
          ))}
        </div>
      </Grid>
      <Grid item lg={7} />
      <Grid item xs={7}>
        <Grid container>
          {[...Array(10).keys()].map((_, index) => (
            <Grid item xs={1} key={index}>
              <div className={classes.icon}>{index + 1}</div>
            </Grid>
          ))}
          <Grid item xs={2} />
          <Grid item xs={2}>
            <input
              className={classes.option}
              defaultValue="Not at all likely"
              disabled
            />
            <div className={classes.divider} />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={2}>
            <input
              className={classes.option}
              defaultValue="Extremly likely"
              disabled
            />
            <div className={classes.divider} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PromoterScore;
