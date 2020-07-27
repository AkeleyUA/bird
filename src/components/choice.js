import React, {useState, Fragment} from 'react';
import {makeStyles} from '@material-ui/styles';
import {CustomCheckbox, Label, CustomInput3} from './customsElements';
import {Grid, FormControlLabel, Icon} from '@material-ui/core';

const useStyles = makeStyles({
  checkBoxesGroup: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '24px 0 22px 22px',
    background: '#F7F7F7',
    marginTop: 19,
    marginBottom: 23,
  },
  customInput: {
    width: '100%',
    border: '2px solid #8C9DD0',
    outline: 'none',
    boxSizing: 'border-box',
    borderRadius: 8,
    '&:focuse': {
      outline: 'none',
    },
    '&:hover': {
      outline: 'none',
    },
  },
  icon: {
    color: '#3E245C',
    fontSize: 14,
    marginRight: 11,
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    cursor: 'pointer',
  },
  buttonText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#000000',
    marginRight: 8,
  },
  buttonIcon: {
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3E245C',
    borderRadius: '50%',
    color: '#FFF',
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  closeIcon: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: '#FFDC00',
    color: '#3E245C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    fontWeight: 'bold',
    right: -40,
    fontSize: 16,
    cursor: 'pointer',
  },
});

const Chioce = () => {
  const [parameters, setChoiceParameters] = useState([
    {text: 'Multiple answers', checked: true},
    {text: 'Required', checked: true},
  ]);
  const [options, setOptions] = useState(['', '']);
  const classes = useStyles();

  const changeParametersHandler = ({target: {id}}, value) => {
    setChoiceParameters((prevState) => {
      const newArray = [...prevState];
      newArray[id].checked = value;
      return newArray;
    });
  };

  const changeOptionsHandler = ({currentTarget: {id, value}}) => {
    setOptions((prevState) => {
      const newArray = [...prevState];
      newArray[id] = value;
      return newArray;
    });
  };

  const addOption = () => {
    setOptions((prevState) => [...prevState, '']);
  };

  const delOptionHandler = ({currentTarget: {id}}) => {
    console.log(id);
    setOptions((prevState) => prevState.filter((item, index) => index !== +id));
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
      {options.map((option, index) => (
        <Fragment key={index}>
          <Grid key={index} item lg={5} className={classes.inline}>
            <Icon className={classes.icon}>fiber_manual_record</Icon>
            <CustomInput3
              className={classes.customInput}
              placeholder={`Option ${index + 1}`}
              value={option}
              id={`${index}`}
              onChange={changeOptionsHandler}
            />
            {index > 1 && (
              <Icon
                id={`${index}`}
                className={classes.closeIcon}
                onClick={delOptionHandler}>
                close
              </Icon>
            )}
          </Grid>
          <Grid item lg={6} />
        </Fragment>
      ))}
      <Grid item lg={3} />
      <Grid item lg={2} className={classes.flexEnd}>
        <button className={classes.btn} onClick={addOption}>
          <p className={classes.buttonText}>Add option</p>
          <Icon className={classes.buttonIcon}>add</Icon>
        </button>
      </Grid>
    </>
  );
};

export default Chioce;
