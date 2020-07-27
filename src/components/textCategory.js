import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {FormControlLabel, Grid} from '@material-ui/core';
import {CustomCheckbox, Label, CustomInput3} from './customsElements';

const useStyles = makeStyles({
  checkBoxesGroup: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '24px 0 22px 22px',
    background: '#F7F7F7',
    marginTop: 19,
    marginBottom: 23,
  },
  rootTextAria: {
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
});

const TextCategory = () => {
  const [parameters, setChoiceParameters] = useState([
    {text: 'Long answer', checked: false},
    {text: 'Required', checked: true},
  ]);
  const [options, setOptions] = useState({text: 'Enter your answer'});
  const classes = useStyles();

  const changeParametersHandler = ({target: {id}}, value) => {
    setChoiceParameters((prevState) => {
      const newArray = [...prevState];
      newArray[id].checked = value;
      return newArray;
    });
  };

  const changeOptionHandler = ({currentTarget: {id, value}}) => {
    setOptions((prevState) => ({...prevState, [id]: value}));
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
      <Grid item lg={8} xs={12}>
        <CustomInput3
          className={classes.rootTextAria}
          id="text"
          value={options.text}
          onChange={changeOptionHandler}
        />
      </Grid>
    </>
  );
};

export default TextCategory;
