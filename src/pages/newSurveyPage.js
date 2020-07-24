import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/styles';
import Stepper from '../components/stepper';
import {
  Grid,
  MenuItem,
  Select,
  InputBase,
  Slider,
  FormControlLabel,
  List,
  ListItem,
} from '@material-ui/core';
import Categories from '../components/categories';
import {productsArray} from '../hadrCodeData/products';
import ProductCard from '../components/productCard';
import thumb from '../images/thumb.svg';
import CustomCheckbox from '../components/customCheckbox';
import manIcon from '../images/icon-man-purple.svg';
import womanIcon from '../images/icon-woman-purple.svg';

const marks = [
  {
    value: 16,
    label: '16',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 35,
    label: '35',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 45,
    label: '45',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 55,
    label: '55',
  },
  {
    value: 60,
    label: '60+',
  },
];

const CustomInput = withStyles(() => ({
  root: {},
  input: {
    borderRadius: 4,
    position: 'relative',
    fontFamily: 'PT Sans',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    color: '#8C9DD0',
  },
}))(InputBase);

const CustomSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
    marginTop: 10,
  },
  thumb: {
    height: 31,
    width: 24,
    backgroundColor: 'transparent',
    backgroundImage: `url(${thumb})`,
    backgroundPosition: '50% 50%',
    marginTop: -14,
    marginLeft: -14,
    transform: 'scale(0.8)',
    transilion: 'transform, 0.3s',
    '&:hover': {
      boxShadow: 'none',
      transform: 'scale(1)',
      transilion: 'transform, 0.3s',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 8px)',
    top: -15,
    '& *': {
      background: 'transparent',
      fontFamily: 'PT Sans',
      fontWeight: 'bold',
      fontSize: 20,
      alignItems: 'center',
      letterSpacing: '0.02em',
      color: '#3E245C',
    },
  },
  track: {
    height: 6,
    backgroundColor: '#3E245C',
  },
  rail: {
    height: 6,
    backgroundColor: '#FFDC00',
    opacity: 1,
  },
  mark: {
    width: 0,
  },
  markLabel: {
    fontFamily: 'PT Sans',
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#000000',
    top: 35,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

const useStyles = makeStyles({
  mb: {
    marginBottom: 100,
  },
  root: {
    width: '100%',
    maxWidth: 405,
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
  select: {
    padding: 14,
  },
  title: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    color: '#3E245C',
    marginBottom: 17,
  },
  countryContainer: {
    marginBottom: 56,
  },
  ageContainer: {
    marginBottom: 56,
  },
  rangeSlider: {
    maxWidth: 389,
  },
  icon: {
    color: '#FFDC00',
  },
  genderContainer: {},
});

const Label = ({icon, text}) => (
  <div style={{display: 'flex', alignItems: 'center'}}>
    {icon && <img src={icon} alt={text} />}
    <span
      style={{
        fontFamily: 'PT Sans',
        fontSize: 16,
        color: '#000',
        letterSpacing: '0.02em',
      }}>
      {text}
    </span>
  </div>
);

const NewSurveyPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [age, setAge] = useState([18, 50]);
  const [gender, setGender] = useState({female: true, male: true});
  const [demographic, setDemographic] = useState([
    {
      name: 'No additional criteria',
      checked: false,
    },
    {
      name: 'Marital status',
      checked: true,
    },
    {
      name: 'Number of children',
      checked: true,
    },
  ]);
  const classes = useStyles();

  const ageChangeHandler = (event, newAge) => {
    setAge(newAge);
  };
  const changeGenderHandler = ({target: {id}}, value) => {
    setGender((prevState) => ({...prevState, [id]: value}));
  };

  const changeDemographicHandler = ({target: {id}}, value) => {
    setDemographic((prevState) => [
      ...prevState.finter((_, index) => index !== id),
      {...prevState[id], checked: value},
    ]);
  };

  return (
    <Grid container justify="center">
      <Grid item lg={12} className={classes.mb}>
        <Stepper
          currentStep={currentStep}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Grid>
      {currentStep === 1 && (
        <>
          <Grid item sm={5}>
            <div className={classes.countryContainer}>
              <h6 className={classes.title}>Country</h6>
              <Select
                defaultValue="USA"
                input={<CustomInput />}
                className={classes.root}>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
              </Select>
            </div>
            <div className={classes.ageContainer}>
              <h6 className={classes.title}>Age</h6>
              <CustomSlider
                min={16}
                max={60}
                value={age}
                onChange={ageChangeHandler}
                valueLabelDisplay="on"
                className={classes.rangeSlider}
                marks={marks}
              />
            </div>
            <div className={classes.genderContainer}>
              <h6 className={classes.title}>Gender</h6>
              <FormControlLabel
                value="end"
                control={
                  <CustomCheckbox
                    checked={gender.female}
                    id="female"
                    onChange={changeGenderHandler}
                  />
                }
                label={<Label icon={womanIcon} text="Female" />}
                labelPlacement="end"
              />
              <div style={{display: 'inline-block', marginLeft: 40}} />
              <FormControlLabel
                value="end"
                control={
                  <CustomCheckbox
                    checked={gender.male}
                    id="male"
                    onChange={changeGenderHandler}
                  />
                }
                label={<Label icon={manIcon} text="Male" />}
                labelPlacement="end"
              />
            </div>
          </Grid>
          <Grid item sm={5}>
            <h6 className={classes.title}>Demographic Criteria​</h6>
            <List>
              {demographic.map(({name, checked}, index) => (
                <ListItem key={name}>
                  <FormControlLabel
                    value="end"
                    control={
                      <CustomCheckbox
                        checked={checked}
                        id={`${index}`}
                        onChange={changeDemographicHandler}
                      />
                    }
                    label={<Label text={name} />}
                    labelPlacement="end"
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </>
      )}
      {currentStep === 2 && (
        <>
          <Grid item lg={3} md={4} xs={12}>
            <Categories />
          </Grid>
          <Grid item lg={9} md={8} xs={12}>
            <Grid container spacing={3}>
              {productsArray.map(
                ({title, description, text, lineColors}, index) => (
                  <Grid
                    item
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    key={title + index}
                    className={classes.productWrapper}>
                    <ProductCard
                      title={title}
                      description={description}
                      btn
                      colors={lineColors}>
                      {text}
                    </ProductCard>
                  </Grid>
                ),
              )}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default NewSurveyPage;
