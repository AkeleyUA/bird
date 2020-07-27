import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, FormControlLabel, Select, MenuItem} from '@material-ui/core';
import StartIcon from '@material-ui/icons/StarBorder';
import RoundIcon from '@material-ui/icons/Lens';
import HeartIcon from '@material-ui/icons/Favorite';
import {
  CustomCheckbox,
  Label,
  CustomRating,
  CustomInput,
} from './customsElements';

const useStyles = makeStyles({
  checkBoxesGroup: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '24px 0 22px 22px',
    background: '#F7F7F7',
    marginTop: 19,
    marginBottom: 23,
  },
  customSelect: {
    width: '100%',
    maxWidth: 405,
    marginLeft: 15,
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
  rating: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
});

const IconGenerator = (param) => {
  if (param && param === 'start') {
    return <StartIcon />;
  }
  if (param && param === 'round') {
    return <RoundIcon />;
  }
  if (param && param === 'heart') {
    return <HeartIcon />;
  }
};

const Rating = () => {
  const [parameters, setChoiceParameters] = useState([
    {text: 'Required', checked: true},
  ]);
  const [level, setLevel] = useState(5);
  const [simbol, setSimbol] = useState('star');

  const classes = useStyles();

  const changeParametersHandler = ({target: {id}}, value) => {
    setChoiceParameters((prevState) => {
      const newArray = [...prevState];
      newArray[id].checked = value;
      return newArray;
    });
  };

  const changeLevelHandler = ({target: {value}}) => {
    setLevel(+value);
  };

  const changeSimbolHandler = ({target: {value}}) => {
    setSimbol(value);
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
      <Grid item xs={12} className={classes.rating}>
        <CustomRating
          name="rating"
          icon={IconGenerator(simbol)}
          size="large"
          max={level}
        />
      </Grid>
      <Grid item xs={2}>
        <FormControlLabel
          control={
            <Select
              value={level}
              input={<CustomInput />}
              onChange={changeLevelHandler}
              className={classes.customSelect}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          }
          label={<Label text="Levels" />}
          labelPlacement="start"
        />
      </Grid>
      <Grid item xs={2}>
        <FormControlLabel
          control={
            <Select
              value={simbol}
              input={<CustomInput />}
              onChange={changeSimbolHandler}
              className={classes.customSelect}>
              <MenuItem value="star">Star</MenuItem>
              <MenuItem value="round">Round</MenuItem>
              <MenuItem value="heart">Heart</MenuItem>
            </Select>
          }
          label={<Label text="Simbol" />}
          labelPlacement="start"
        />
      </Grid>
    </>
  );
};

export default Rating;
