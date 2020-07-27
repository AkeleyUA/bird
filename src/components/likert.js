import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, FormControlLabel} from '@material-ui/core';
import {CustomCheckbox, Label} from './customsElements';
import CircleIcon from '@material-ui/icons/PanoramaFishEye';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  checkBoxesGroup: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '24px 0 22px 22px',
    background: '#F7F7F7',
    marginTop: 19,
    marginBottom: 23,
  },
  tableCell: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#F7F7F7',
    minHeight: 48,
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    textAlign: 'center',
    marginBottom: 4,
    width: '100%',
    margin: '0 auto',
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#000000',
  },
  statemant: {
    textAlign: 'center',
    marginBottom: 4,
    width: '100%',
    margin: '0 auto',
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#000000',
  },
  statemantDivider: {
    width: '75%',
    height: 2,
    background: '#8C9DD0',
    marginBottom: 8,
  },
  divider: {
    width: '65%',
    height: 2,
    background: '#8C9DD0',
    marginBottom: 8,
  },
  statemantWrapper: {
    paddingRight: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  icon: {
    color: '#3E245C',
  },
  addIcon: {
    width: 24,
    height: 24,
    background: '#3E245C',
    borderRadius: '50%',
    color: '#FFF',
    fontSize: 12,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  statemantContainer: {
    marginBottom: 2,
  },
  addStatemantButton: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
  },
  addStatemantText: {
    marginRight: 12,
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#000000',
  },
  addStatemantIcon: {
    width: 36,
    height: 36,
    display: 'flex',
    background: '#3E245C',
    color: '#FFF',
    borderRadius: '50%',
  },
});

const Likert = () => {
  const [parameters, setChoiceParameters] = useState([
    {text: 'Required', checked: true},
  ]);
  const [statemants, setStatemants] = useState(['Statemant 1', 'Statemant 2']);
  const [options, setOptions] = useState([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ]);

  const classes = useStyles();

  const changeParametersHandler = ({target: {id}}, value) => {
    setChoiceParameters((prevState) => {
      const newArray = [...prevState];
      newArray[id].checked = value;
      return newArray;
    });
  };

  const changeOptionHandler = ({currentTarget: {id, value}}) => {
    setOptions((prevState) => {
      const newArray = [...prevState];
      newArray[id] = value;
      return newArray;
    });
  };
  const changeStatemantHandler = ({currentTarget: {id, value}}) => {
    setStatemants((prevState) => {
      const newArray = [...prevState];
      newArray[id] = value;
      return newArray;
    });
  };

  const addOptionHandler = () => {
    setOptions((prevState) =>
      prevState.length < 10
        ? [...prevState, `Option ${prevState.length + 1}`]
        : prevState,
    );
  };
  const addStatemantHandler = () => {
    setStatemants((prevState) => [
      ...prevState,
      `Statemant ${prevState.length + 1}`,
    ]);
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
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={2}></Grid>
          {options.map((option, index) => (
            <Grid item xs={1} key={index} className={classes.center}>
              <input
                id={index}
                className={classes.option}
                value={option}
                onChange={changeOptionHandler}
              />
              <div className={classes.divider} />
            </Grid>
          ))}
          {options.length < 10 && (
            <Grid item xs={1} className={classes.iconContainer}>
              <AddIcon className={classes.addIcon} onClick={addOptionHandler} />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {statemants.map((statemant, index) => (
          <Grid container key={index} className={classes.statemantContainer}>
            <Grid item xs={2} className={classes.statemantWrapper}>
              <input
                id={index}
                className={classes.statemant}
                value={statemant}
                onChange={changeStatemantHandler}
              />
              <div className={classes.statemantDivider} />
            </Grid>
            {options.map((item, index) => (
              <Grid key={index} item xs={1}>
                <div className={classes.tableCell}>
                  <CircleIcon />
                </div>
              </Grid>
            ))}
            {options.length < 10 && (
              <Grid item xs={1}>
                <div className={classes.tableCell} />
              </Grid>
            )}
          </Grid>
        ))}
        <Grid container style={{marginTop: 22}}>
          <Grid item xs={2} />
          <Grid item xs={10}>
            <button
              className={classes.addStatemantButton}
              onClick={addStatemantHandler}>
              <h6 className={classes.addStatemantText}>Add statemant</h6>
              <AddIcon className={classes.addStatemantIcon} />
            </button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Likert;
